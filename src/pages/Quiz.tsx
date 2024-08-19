import React, { useState } from 'react';
import { quizQuestions } from '../services/questions'; 
import { QuizQuestion } from '../services/types';
import QuestionCard from '../components/QuestionCard';
import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #3a3a3a;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Score = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // 사용자가 선택한 답변
  const [gameOver, setGameOver] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false); // Next 버튼 표시 상태

  const questions: QuizQuestion[] = quizQuestions;

  const startQuiz = () => {
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setShowNextButton(false);
  };

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowNextButton(true); // 답변 선택 후 Next 버튼 표시
  };

  const checkAnswer = () => {
    if (selectedAnswer) {
      const correct = questions[currentQuestionIndex].correct_answer === selectedAnswer;
      if (correct) setScore((prev) => prev + 1);
      setUserAnswers((prev) => [...prev, selectedAnswer]);
      
      if (currentQuestionIndex + 1 === questions.length) {
        setGameOver(true);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowNextButton(false); // 다음 질문으로 넘어가면서 Next 버튼 숨기기
      }
    }
  };

  return (
    <QuizContainer>
      <Title>About Soyeon</Title>
      {gameOver ? (
        <div>
          <Score>Your final score is: {score}</Score>
          <Button onClick={startQuiz}>Restart Quiz</Button>
        </div>
      ) : (
        <div>
          <Score>Score: {score}</Score>
          <QuestionCard
            questionNr={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            userAnswer={selectedAnswer}
            callback={selectAnswer} // 선택된 답변 설정
          />
          {showNextButton && (
            <Button onClick={checkAnswer}>Next</Button> // Next 버튼 추가
          )}
        </div>
      )}
    </QuizContainer>
  );
};

export default Quiz;
