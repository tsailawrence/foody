'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { CardProps, CardPriceProps } from '@/lib/types/db';
// type CardProps = {
//     uri: string;
//     name: string;
//     starNumber: number;
//     likes?: boolean;
// };
// type CardPriceProps = {
//     uri: string;
//     name: string;
//     price: number;
// };
export const CardPriceComponent: React.FC<CardPriceProps> = ({ uri, name, price }) => {
    const [number, setNumber] = useState(1);
    return (
        <Dialog>
            <DialogTrigger
                className="flex flex-col items-center w-full max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg "
            >
                <div
                    className="flex flex-col items-center w-full max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg max-md:w-full"
                >
                    <div className="w-full">
                        <div className="relative w-full h-0" style={{ paddingBottom: '84%' }}>
                            <Image
                                src={uri}
                                alt={name}
                                layout="fill"
                                objectFit="contain"
                                objectPosition="center"
                                className="absolute w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="px-4 py-5 w-full">
                        <h2 className="text-neutral-700 text-xl font-bold truncate">
                            {name}
                        </h2>
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-red-600 text-xl">
                                NT ${price}
                            </span>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className='overflow-auto max-h-[90vh]'>
                <div className="relative w-full h-0 " style={{ paddingBottom: '84%' }}>
                    <Image
                        src={uri}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="absolute w-full h-full"
                    />
                </div>
                <DialogHeader>
                    <DialogTitle>
                        <div className="text-neutral-400 text-base leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                            美式餐酒館
                        </div>
                        <div className="justify-center text-neutral-950 text-2xl font-semibold leading-8 tracking-normal self-stretch mt-5 max-md:max-w-full">
                            Cheese Burger
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>

                    <div className="text-neutral-950 text-xl tracking-wide w-56 max-w-full items-center justify-between gap-5 self-start">
                        <div className="bg-red-600 bg-opacity-20 flex grow basis-[0%] flex-col items-stretch px-3 py-2 rounded-3xl max-sm:ml-7 max-sm:mr-4 max-sm:mt-4 max-sm:px-2.5">
                            <div className="w-30 justify-center text-red-600 text-center text-xs tracking-wide uppercase opacity-[0.84]">
                                Required
                            </div>
                        </div>
                        Choose flavor
                    </div>
                    <RadioGroup defaultValue="option-one" className='gap-5'>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-3" id="option-3" />
                            <Label htmlFor="option-3">Option 3</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-4" id="option-4" />
                            <Label htmlFor="option-4">Option 4</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-5" id="option-5" />
                            <Label htmlFor="option-5">Option 5</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-6" id="option-6" />
                            <Label htmlFor="option-6">Option 6</Label>
                        </div>
                    </RadioGroup>
                    <span className='pt-5'>note：</span>
                    <Textarea />
                    <div className="self-stretch flex w-full items-center justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                        <div className="text-black text-5xl font-semibold leading-[50.4px] my-auto">
                            NT${price*number}
                        </div>
                        <div className="self-stretch flex items-center justify-between gap-5 max-md:justify-center">
                            <Button
                                className="items-stretch border self-stretch flex aspect-square flex-col p-3 rounded-lg border-opacity-10"
                                onClick={() => setNumber(number - 1)}
                                aria-label="Product Image"
                            >
                                -
                            </Button>
                            <div className="text-black text-center text-xl leading-6 tracking-tight opacity-[0.64] my-auto">
                                {number}
                            </div>
                            <Button
                                className="items-stretch border self-stretch flex aspect-square flex-col p-3.5 rounded-lg border-solid"
                                onClick={() => setNumber(number + 1)}
                                aria-label="Product Image"
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="destructive">Add to Cart</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
const CardComponent: React.FC<CardProps> = ({ uri, name, starNumber, likes = false }) => {
    return (
        // <Link href={`/customer/restaurant/${name}`} >
        <Link href="/customer/restaurant/123" >
            <div className="flex flex-col items-center w-full max-w-xs mx-auto bg-white rounded-2xl overflow-hidden shadow-lg max-md:w-full">
                <div className="w-full">
                    <div className="relative w-full h-0" style={{ paddingBottom: '84%' }}>
                        <Image
                            src={uri}
                            alt={name}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="absolute w-full h-full"
                        />
                    </div>
                </div>
                <div className="px-4 py-5 w-full">
                    <h2 className="text-neutral-700 text-xl font-bold truncate">
                        {name}
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
