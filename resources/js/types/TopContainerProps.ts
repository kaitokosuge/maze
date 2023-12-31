import { User } from '@/types';
import { Categories } from './Data/categories';
import { Quiz } from './Data/quiz';


export interface TopContainerProps {
    user:User;
    quizzes:Array<Quiz>;
    categories:Array<Categories>;
}