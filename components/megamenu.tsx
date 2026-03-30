"use client";

export default function MegaMenu({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="fixed left-0 w-screen bg-white border-t border-gray-100 shadow-2xl z-[999]"
      style={{ 
        width: '100vw', 
        left: '0',
        right: '0'
      }}
    >
      <div className="w-full py-12">
        {children}
      </div>
    </div>
  );
}