import { Categories, CategoriesProps } from '@/types/Data/categories';
import { TopContainerProps } from '@/types/TopContainerProps'
import React from 'react'
import { Link } from '@inertiajs/react'


export default function Sidebar({ categories }: CategoriesProps ) {
    return (
        <div>
            {categories.map((category) => (
                <>
                    <Link href={`/quiz/${category.id}`}>{ category.category }</Link>
                </>
            ))}
        </div>
    )
}
