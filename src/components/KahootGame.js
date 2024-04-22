// src/components/KahootGame.js

import React, { useState } from 'react';
import './HomePage.css';

const KahootGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showContinueButton, setShowContinueButton] = useState(false);

  const questions = [
    {
      question: 'Какая столица Франции?',
      answers: ['Рим', 'Париж', 'Лондон', 'Берлин'],
      correctAnswer: 'Париж'
    },
    {
      question: 'Какая самая высокая гора в мире?',
      answers: ['Эверест', 'Аконкагуа', 'Килиманджаро', 'Макинли'],
      correctAnswer: 'Эверест'
    },
    {
      question: 'Как называется наибольшее озеро в Африке?',
      answers: ['Виктория', 'Байкал', 'Титикака', 'Гурон'],
      correctAnswer: 'Виктория'
    },
    {
      question: 'Какой элемент химического периодического является самым легким?',
      answers: ['Водород', 'Гелий', 'Кислород', 'Углерод'],
      correctAnswer: 'Водород'
    }
  ];

  const handleAnswerClick = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
      setSelectedAnswer('correct');
    } else {
      setSelectedAnswer(answer);
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
      <h1>Кахут!</h1>
      <p>{questions[questionIndex].question}</p>
      <ul>
        {questions[questionIndex].answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer, questions[questionIndex].correctAnswer)}
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

export default KahootGame;
