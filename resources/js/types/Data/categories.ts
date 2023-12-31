import { Quiz } from "./quiz";

export interface CategoriesProps {
    categories:Array<Categories>;
}

export interface Categories {
    id:number;
    category:string;
    category_desc:string;
    category_img:string;
    quizzes: Array<Quiz>;
}