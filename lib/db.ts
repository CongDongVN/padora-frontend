const mssql = require('mssql');

const sqlConfig = {
    user: 'sa',
    password: '25641851',
    database: 'PADORA',
    server: 'localhost', // Sử dụng localhost hoặc 127.0.0.1
    // Lưu ý: Khi dùng instanceName, port thường sẽ tự động điều hướng, 
    // nhưng khai báo cả hai sẽ chắc chắn hơn.
    port: 1433, 
    options: {
        instanceName: 'CONGDONG', // ĐÂY LÀ PHẦN QUAN TRỌNG
        encrypt: false,
        trustServerCertificate: true,
        connectTimeout: 30000 // Tăng thời gian chờ kết nối
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

export const getConnection = async () => {
    try {
        // Kiểm tra xem đã có pool nào đang kết nối chưa để tránh lỗi "Global pool already connected"
        if (mssql.globalPool) {
            return mssql.globalPool;
        }
        
        const pool = await mssql.connect(sqlConfig);
        console.log('--- KẾT NỐI THÀNH CÔNG ---');
        console.log(`Server: ${sqlConfig.server}`);
        console.log(`Database: ${sqlConfig.database}`);
        return pool;
    } catch (err) {
        console.error('--- LỖI KẾT NỐI ---');
        console.error('Thông báo:', err.message);
        if (err.code === 'ELOGIN') {
            console.error('=> Sai mật khẩu sa hoặc chưa bật Mixed Mode.');
        } else if (err.code === 'ETIMEOUT') {
            console.error('=> Không tìm thấy Server. Hãy kiểm tra TCP/IP và Port 1433.');
        }
        throw err;
    }
};