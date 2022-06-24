import React from "react";

async function QuizApi(totalQuestions: number, level: string) {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
}

export default QuizApi;