import React, { useState } from "react";
import { Categories, CategoriesProps } from "@/types/Data/categories";
import Sidebar from "../Presentation/Sidebar";
import { Quizzes } from "@/types/Data/quiz";
import Header from "../Presentation/Header";
import CategoryQuizCard from "./Presentation/CategoryQuizCard";

export default function CategoryContainer(props: any) {
    const { category, quizzes, categories, user } = props;
    console.log(quizzes);
    return (
        <div className="flex">
            <div className="w-[15%]">
                <Sidebar categories={categories} />
            </div>
            <div
                className={`bg-[#00142C] bg-${category.category_color} w-[85%] min-h-screen`}
            >
                <Header />
                <div className="pt-[100px] pb-[100px] pl-[40px] pr-[50px]">
                    <div className="flex">
                        <img
                            src={category.category_img}
                            className="w-[100px] h-[100px]"
                        />
                        <div className="ml-5">
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
    );
}
