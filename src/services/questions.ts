// services/questions.ts
import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "easy",
    question: "소연이의 생일은?",
    correct_answer: "10/08",
    incorrect_answers: ["8/12", "10/06", "7/13", "9/29"],
    answers: ["10/08", "8/12", "10/06", "9/29", "7/13"],
  },
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "middle",
    question: "소연이의 키는?",
    correct_answer: "161",
    incorrect_answers: ["160", "162", "163"],
    answers: ["160", "161", "162", "163"],
  },
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "middle",
    question: "소연이의 신발사이즈는?",
    correct_answer: "235",
    incorrect_answers: ["230", "240", "245"],
    answers: ["245", "240", "235", "230"],
  },
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "middle",
    question: "소연이의 휴대폰 기종은?",
    correct_answer: "iPhone 15 Pro",
    incorrect_answers: ["iPhone 12 Pro", "iPhone 14 Pro", "iPhone 15"],
    answers: ["iPhone 15", "iPhone 15 Pro", "iPhone 14 Pro", "iPhone 12 Pro"],
  },
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "hard",
    question: "다음 중 소연이가 좋아하지 않는 캐릭터는?",
    correct_answer: "너굴",
    incorrect_answers: ["망곰", "알린", "마쿠로쿠로스케", "펭수"],
    answers: ["망곰", "너굴", "알린", "마쿠로쿠로스케", "펭수"],
  },
  {
    category: "About Soyeon",
    type: "multiple",
    difficulty: "middle",
    question: "소연이가 한 번도 보지 않은 애니메이션은?",
    correct_answer: "카구야님은 고백받고 싶어",
    incorrect_answers: ["하이큐", "카케구루이", "짱구"],
    answers: ["짱구", "하이큐", "카케구루이", "카구야님은 고백받고 싶어"],
  },
  // 추가 퀴즈 질문들...
];
