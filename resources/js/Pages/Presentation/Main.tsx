import { Quizzes } from '@/types/Data/quiz'
import React from 'react'

export default function Main({ quizzes }: Quizzes) {
  return (
      <div>
            {quizzes.map((quiz) => (
              <>
                  <p>{quiz.quiz}</p>
                  <div>
                      {quiz.choices.map((choice,index) => (
                      <div key={choice.id}>
                        <p>{index + 1}{ choice.choice }</p>
                      </div>
                      ))}
                  </div>
              </>
            ))}
      </div>
  )
}
