// src/components/MillionaireGame.js

import React, { useState } from 'react';
import './HomePage.css';

const MillionaireGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showContinueButton, setShowContinueButton] = useState(false);

  const questions = [
    {
      question: 'Какой газ обычно используется для заполнения воздушных шаров?',
      answers: ['Гелий', 'Водород', 'Кислород', 'Азот'],
      correctAnswer: 'Гелий'
    },
    {
      question: 'Какая самая большая планета в Солнечной системе?',
      answers: ['Марс', 'Земля', 'Юпитер', 'Венера'],
      correctAnswer: 'Юпитер'
    },
    {
      question: 'Какой химический элемент обозначается как "Fe"?',
      answers: ['Железо', 'Свинец', 'Золото', 'Магний'],
      correctAnswer: 'Железо'
    },
    {
      question: 'Сколько звезд находится на флаге США?',
      answers: ['50', '51', '52', '53'],
      correctAnswer: '50'
    }
  ];

  const handleAnswerClick = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
      setSelectedAnswer('correct');
    } else {
      setSelectedAnswer('wrong');
    }
    setShowContinueButton(true);
  };

  const handleContinueClick = () => {
    setSelectedAnswer(null);
    setShowContinueButton(false);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert('Игра окончена! Ваш счет: ' + score);
    }
  };

  return (
    <div className="home-page">
      <h1>Кто хочет стать миллионером?</h1>
      <p>{questions[questionIndex].question}</p>
      <ul>
        {questions[questionIndex].answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={
              selectedAnswer === answer
                ? answer === questions[questionIndex].correctAnswer
                  ? 'answer-correct'
                  : 'answer-wrong'
                : ''
            }
          >
            {answer}
          </li>
        ))}
      </ul>
      {showContinueButton && (
        <button className="continue-button" onClick={handleContinueClick}>
          Продолжить
        </button>
      )}
    </div>
  );
};

export default MillionaireGame;
