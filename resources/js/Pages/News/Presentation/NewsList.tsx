import React from "react";
import { News } from "../NewsContainer";
import NewsItem from "./NewsItem";

interface NewsListProps {
    news: News[];
    loading: boolean;
}

export default function NewsList(props: NewsListProps) {
    const { news, loading } = props;

    return (
        <div className="bg-black px-10 pb-20 pt-5 rounded-[20px] mt-5 min-h-screen">
            {loading ? (
                <>
                    <p className="mt-10 font-bold maze--title text-4xl maze--title--gra">
                        loading
                    </p>
                </>
            ) : (
                <>
                    {news.map((item: News) => (
                        <>
                            <NewsItem
                                title={item.title}
                                date={item.date}
                                author={item.author}
                                body={item.body}
                                image={item.image}
                                loading={loading}
                            />
                        </>
                    ))}
                </>
            )}
        </div>
    );
}
