import React, { useState } from "react";
import { Categories, CategoriesProps } from "@/types/Data/categories";
import Sidebar from "../Presentation/Sidebar";
import { Quizzes } from "@/types/Data/quiz";
import Header from "../Presentation/Header";
import CategoryQuizCard from "./Presentation/CategoryQuizCard";
import parse from "html-react-parser";
import { Link } from "@inertiajs/react";

export default function CategoryContainer(props: any) {
    const { category, quizzes, categories, user, allRate } = props;
    const [isHumShow, setIsHumShow] = useState<boolean>();
    const handleHumClick = () => {
        setIsHumShow(!isHumShow);
    };
    return (
        <>
            <div className="flex">
                <div
                    className={
                        isHumShow === true
                            ? "md:w-[15%] w-0 md:block md:left-0 left-0 relative duration-300 z-20"
                            : "md:w-[15%] w-0 md:block md:left-0 left-[-280px] duration-300 relative"
                    }
                >
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>
                <div
                    className={`bg-[#00142C] bg-${category.category_color} md:w-[85%] w-full min-h-screen`}
                >
                    <div className="pl-[5%] min-h-screen md:pt-[60px] pt-[20px] pb-[100px] xl:pl-[40px] lg:pl-[100px] md:pl-[20%] pr-[5%]">
                        <div
                            onClick={handleHumClick}
                            className="w-[40px] h-[40px] m-0 ml-auto block md:hidden relative z-20"
                        >
                            {isHumShow === true ? (
                                <>
                                    <img src="../eye--logo.png" />
                                </>
                            ) : (
                                <>
                                    <img src="../eyeclose--logo.png" />
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
                        <div className="flex justify-between">
                            <div className="w-[100px] h-[100px]">
                                {parse(category.category_img)}
                            </div>
                            <div className="ml-5 w-[87%]">
                                <h2 className="font-bold text-4xl">
                                    {category.category}
                                </h2>
                                <p className="text-gray-500 md:text-[12px] text-[7px] mt-5">
                                    {category.category_desc}
                                </p>
                            </div>
                        </div>
                        <ul className="pagination flex items-center mt-10 absolute right-[5%]">
                            {quizzes.links.map((link: any) => (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={
                                        link.active === true
                                            ? "mr-1 py-1 px-[10px] border border-black bg-black block w-content-fit min-w-[30px] text-center rounded-[10px] duration-300 font-bold"
                                            : "mr-1 py-1 px-[10px] border border-gray-700 block w-content-fit min-w-[30px] text-center rounded-[10px] hover:bg-[#4e0e92] hover:border-[#4e0e92] duration-300 font-bold"
                                    }
                                >
                                    <p className="md:text-[16px] text-[11px]">
                                        {link.label === "&laquo; Previous" ? (
                                            <>◀︎</>
                                        ) : link.label === "Next &raquo;" ? (
                                            <>▶︎</>
                                        ) : (
                                            <>{link.label}</>
                                        )}
                                    </p>
                                </Link>
                            ))}
                        </ul>
                        <CategoryQuizCard
                            quizzes={quizzes}
                            user={user}
                            categoryID={category.id}
                        />
                        {/* <ul className="pagination flex items-center mt-5 absolute right-[5%]">
                            {quizzes.links.map((link: any) => (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={
                                        link.active === true
                                            ? "mr-1 py-1 px-5 border bg-[#4e0e92] border-[#4e0e92] block w-content-fit min-w-[40px] text-center rounded-[10px] duration-300"
                                            : "mr-1 py-1 px-5 border border-gray-700 block w-content-fit min-w-[40px] text-center rounded-[10px] hover:bg-[#4e0e92] hover:border-[#4e0e92] duration-300"
                                    }
                                >
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                </Link>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="bg-footer w-full h-[60px] fixed bottom-0"></div>
        </>
    );
}
