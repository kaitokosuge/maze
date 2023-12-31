import { Categories, CategoriesProps } from '@/types/Data/categories';
import { TopContainerProps } from '@/types/TopContainerProps'
import React from 'react'


export default function Sidebar({ categories }: CategoriesProps) {
    console.log(categories)
    return (
        <div>
            {categories.map((category) => (
                <>
                    <p>{category.category}</p>
                </>
            ))}
        </div>
    )
}
