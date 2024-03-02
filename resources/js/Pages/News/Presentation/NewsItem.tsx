import React from "react";
import { Image, News } from "../NewsContainer";

interface NewsItemProps {
    loading: boolean;
    title: string;
    date: string;
    author: string;
    body: string;
    image: Image;
}
export default function NewsItem(props: NewsItemProps) {
    const { title, date, author, body, image, loading } = props;
    console.log("loading", loading);
    return (
        <>
            <div className="flex justify-between text-gray-300 mt-10 flex-wrap">
                <img
                    className="rounded-[10px] lg:w-[25%] lg:h-[170px] w-full h-[200px]"
                    src={image.url}
                />
                <div className="lg:w-[68%] w-full lg:mt-0 mt-5">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className="maze--title mt-1">{date.slice(0, 10)}</p>
                    <p className="text-[11px] font-bold maze--title">
                        {author}
                    </p>
                    <p className="text-[13px] mt-5">{body}</p>
                </div>
            </div>
        </>
    );
}
