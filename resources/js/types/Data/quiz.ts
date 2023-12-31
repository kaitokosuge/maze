import { Choices } from "./choices";

export interface Quiz {
    id: number;
    quiz: string;
    answer: string;
    image: string;
    user_id: number;
    choices: Array<Choices>
}