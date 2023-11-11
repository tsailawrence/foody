// components/CardComponent.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type CardProps = {
    uri: string;
    word: string;
    starNumber: number;
    likes?: boolean;
};
const CardComponent: React.FC<CardProps> = ({ uri, word, starNumber, likes = false }) => {
    return (
        // <Link href={`/customer/restaurant/${word}`} >
        <Link href="/customer/restaurant/123" >
        <div className="flex flex-col items-center w-full max-w-xs mx-auto bg-white rounded-2xl overflow-hidden shadow-lg max-md:w-full">
            <div className="w-full">
                <div className="relative w-full h-0" style={{ paddingBottom: '84%' }}>
                    <Image
                        src={uri}
                        alt={word}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="absolute w-full h-full"
                    />
                </div>
            </div>
            <div className="px-4 py-5 w-full">
                <h2 className="text-neutral-700 text-xl font-bold truncate">
                    {word}
                </h2>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-red-600 text-2xl font-black">
                        {likes ? '⭐' : '✫'}
                    </span>
                    <span className="text-red-600 text-xl">
                        {starNumber}
                    </span>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default CardComponent;