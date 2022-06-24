import { QuizType } from '../Types/QuizTypes';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const QuizApi = async (totalQuestions: number, level: string): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();

    const quiz = results.map((questionObj: QuizType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })

    return quiz;
}