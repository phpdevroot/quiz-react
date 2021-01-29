/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Loading...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question,
  questionIndex,
  totalQuestions,
}) {
  return (

    <Widget>
      <Widget.Header>
        {/* BackLinkArrow href="/" /> */}
        <h3>
          Pergunta
          1
          de
          {` ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <Button>Confirmar</Button>
      </Widget.Content>
    </Widget>

  );
}

export default function QuizPage() {
  console.log('perguntas criadas', db.questions);
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        
        <QuestionWidget
        question={question} 
        questionIndex={questionIndex}
        totalQuestions={totalQuestions}
        />

      </QuizContainer>
    </QuizBackground>
  );
}
