import { Quizzes } from '@/types/Data/quiz'
import React from 'react'

export default function Main({ quizzes }: Quizzes) {
    return (
      <div>
          {quizzes.map((quiz) => (
            <>
                <p>{quiz.quiz}</p>
                <p>{quiz.choices.map((choice) => (
                  <>
                    <p>{ choice.choice }</p>
                  </>
                ))}</p>
            </>
          ))}
      </div>
  )
}
