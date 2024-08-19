import React from 'react';
import styled from 'styled-components';

interface Props {
  question: string;
  answers: string[];
  callback: (answer: string) => void;
  userAnswer: string | null;
  questionNr: number;
  totalQuestions: number;
}

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
`;

const Question = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 20px;
`;

const AnswerButton = styled.button<{ selected: boolean }>`
  background: ${({ selected }) =>
    selected
      ? 'linear-gradient(90deg, #56ccff, #6eafb4)'
      : 'linear-gradient(90deg, #f4f4f4, #dcdcdc)'};
  border: 2px solid white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 40px;
  margin: 10px 0;
  padding: 0 40px;
  font-size: 1rem;
  color: ${({ selected }) => (selected ? 'white' : '#333')};
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Card>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <Question dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <AnswerButton
          key={answer}
          selected={userAnswer === answer}
          value={answer}
          onClick={() => callback(answer)}
          disabled={!!userAnswer}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </AnswerButton>
      ))}
    </div>
  </Card>
);

export default QuestionCard;
