"use client";

type Props = {
  children: React.ReactNode;
};

export default function MegaMenu({ children }: Props) {
  return (
    <div className="absolute left-0 top-full w-screen border border-gray-200 bg-white border-t z-50">
      <div className="px-16 py-8"> 
       
        {children}
      </div>
    </div>
  );
}