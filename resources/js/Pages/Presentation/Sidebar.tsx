import { Categories, CategoriesProps } from '@/types/Data/categories';
import { TopContainerProps } from '@/types/TopContainerProps'
import React from 'react'


export default function Sidebar({ categories }: CategoriesProps , { fetchCategoryQuizzes }: any) {
    return (
        <div>
            {categories.map((category) => (
                <>
                    <p onClick={ fetchCategoryQuizzes }>{category.category}</p>
                </>
            ))}
        </div>
    )
}
