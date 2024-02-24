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

    return (
        <div className="flex">
            <div className="w-[15%]">
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
            <div className={`bg-[#00142C]  w-[85%] min-h-screen`}>
                <Header />
                <div className="pt-[60px] pb-[100px] pl-[40px] pr-[50px]">
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-[30px]">NEWS</p>
                        <div>
                            {user ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        className=" text-[30px] maze--title"
                                        href="/login"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        className=" text-[30px] maze--title ml-10"
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
