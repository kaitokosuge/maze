import React, { useEffect, useState } from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import NewsList from "./Presentation/NewsList";

export interface News {
    title: string;
    date: string;
    author: string;
    body: string;
    image: Image;
}
export interface Image {
    url: string;
    height: number;
    width: number;
}
export default function NewsContainer(props: any) {
    const { categories, user, allRate, envnews } = props;
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getNews = async () => {
        setLoading(true);
        const res = await fetch("https://maze.microcms.io/api/v1/maze-news", {
            method: "GET",
            headers: {
                "X-MICROCMS-API-KEY": envnews,
            },
        });
        if (res.ok) {
            const data = await res.json();
            setNews(data.contents);
            setLoading(false);
        }
    };
    useEffect(() => {
        getNews();
    }, []);

    const [isHumShow, setIsHumShow] = useState<boolean>();
    const handleHumClick = () => {
        setIsHumShow(!isHumShow);
    };
    return (
        <div className="flex">
            <div
                className={
                    isHumShow === true
                        ? "md:w-[15%] w-0 md:block md:left-0 left-0 relative duration-300 z-20"
                        : "md:w-[15%] w-0 md:block md:left-0 left-[-280px] duration-300 relative"
                }
            >
                {user === undefined ? (
                    <>
                        <Sidebar categories={categories} />
                    </>
                ) : (
                    <>
                        <Sidebar
                            categories={categories}
                            user={user}
                            allRate={allRate}
                        />
                    </>
                )}
            </div>
            <div className={`bg-[#00142C] md:w-[85%] w-full min-h-screen`}>
                <div className="pl-[5%] min-h-screen pt-[20px] md:pt-[60px] pb-[100px] xl:pl-[40px] lg:pl-[100px] md:pl-[20%] pr-[5%]">
                    <div
                        onClick={handleHumClick}
                        className="w-[40px] h-[40px] m-0 ml-auto block md:hidden relative z-20"
                    >
                        {isHumShow === true ? (
                            <>
                                <img src="eye--logo.png" />
                            </>
                        ) : (
                            <>
                                <img src="eyeclose--logo.png" />
                            </>
                        )}
                    </div>
                    <div
                        onClick={handleHumClick}
                        className={
                            isHumShow === true
                                ? "bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-10"
                                : "bg-black opacity-0 w-screen h-screen fixed top-0 left-0 -z-10"
                        }
                    ></div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-[30px]">NEWS</p>
                        <div>
                            {user ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        className="md:text-[30px] text-[17px] maze--title"
                                        href="/login"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        className="md:text-[30px] text-[17px] maze--title md:ml-10 ml-5"
                                        href="/register"
                                    >
                                        REGISTER
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <NewsList news={news} loading={loading} />
                    <div className="bg-footer w-full h-[60px] fixed bottom-0 z-10"></div>
                </div>
            </div>
        </div>
    );
}
