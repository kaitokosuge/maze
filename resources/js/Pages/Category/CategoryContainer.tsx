import React, { useState } from "react";
import { Categories, CategoriesProps } from "@/types/Data/categories";
import Sidebar from "../Presentation/Sidebar";
import { Quizzes } from "@/types/Data/quiz";
import Header from "../Presentation/Header";
import CategoryQuizCard from "./Presentation/CategoryQuizCard";
import parse from "html-react-parser";

export default function CategoryContainer(props: any) {
    const { category, quizzes, categories, user, allRate } = props;
    console.log(quizzes);
    return (
        <>
            <div className="flex">
                <div className="w-[15%]">
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>
                <div
                    className={`bg-[#00142C] bg-${category.category_color} w-[85%] min-h-screen`}
                >
                    <Header />
                    <div className="pt-[100px] pb-[100px] pl-[40px] pr-[50px]">
                        <div className="flex justify-between">
                            <div className="w-[100px] h-[100px]">
                                {parse(category.category_img)}
                            </div>
                            <div className="ml-5 w-[87%]">
                                <h2 className="font-bold text-4xl">
                                    {category.category}
                                </h2>
                                <p className="text-gray-500 text-[12px] mt-5">
                                    {category.category_desc}
                                </p>
                            </div>
                        </div>
                        <CategoryQuizCard
                            quizzes={quizzes}
                            user={user}
                            categoryID={category.id}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-footer w-full h-[60px] fixed bottom-0"></div>
        </>
    );
}
