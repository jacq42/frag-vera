import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    href: string,
    title: string;
}

export default function Button({ href, title } : ButtonProps) {

    return (
        <div className="pb-8">
            <Link
                href={href}
                className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded"
              >
              {title}
            </Link>
        </div>
    );
};