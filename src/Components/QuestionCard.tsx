import React from 'react';

const QuestionCard: React.FC<any> = ({ option, question }) => {
    return (
        <div className="question-container">
            <div className="question">
                <h2>{question}</h2>
            </div>
        </div>
    )
}

export default QuestionCard;