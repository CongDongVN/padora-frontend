export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;         // Dấu ? nghĩa là có thể có hoặc không
  isExclusive?: boolean;
  oldPrice?: number;    // Thêm nếu bạn muốn hiển thị giá cũ
  discount?: number;    // Thêm nếu muốn hiển thị % giảm giá
  group?: "related" | "suggested";
}

export const  allProducts: Product[] = [
  {
    id: 1,
    name: "Charm Trái Tim Đính Đá",
    price: 2190000,
    image: "/img/hoatai/test01.png",
    group: "related"
  },
  {
    id: 2,
    name: "Charm Ổ Khóa Tình Yêu",
    price: 2990000,
    image: "/img/hoatai/test02.png",
    group: "related"
  },
  {
    id: 3,
    name: "Charm Trái Tim Khắc Chữ",
    price: 1790000,
    image: "/img/hoatai/test03.png",
    group: "related"
  },
  {
    id: 4,
    name: "Charm Pandora Classic",
    price: 2590000,
    image: "/img/hoatai/test02.png",
    group: "related"
  },
  {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
    {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
    {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
    {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
    {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
    {
    id: 5,
    name: "Bộ Trang Sức Dây Chuyền, Hoa Tai và Nhẫn Pandora Trăng Khuyết",
    price: 36000000,
    oldPrice: 72000000,
    discount: 50,
    tag: "Limited",
    isExclusive: true,
    image: "/img/hoatai/test05.png",
    group: "suggested"
  },
];