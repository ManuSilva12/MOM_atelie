import Image from "next/image";
import Link from "next/link";

export function CategoryCard({ title, image }) {
    return (
        <div className='text-center'>
            <Image src={image} alt={title} className='w-full h-[380px] object-cover mb-[20px]' width={400} height={380} />
            <h3 className='text-[0.9rem] tracking-[2px] text-[#213131] mb-[10px]'>{title}</h3>
            <Link href="/produtos" className='text-[#d6988e] text-[0.75rem] font-bold'>Explorar →</Link>
        </div>
    )
}