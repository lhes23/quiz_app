import React from "react"
import { IQuestion } from "../App"

const QuestionsComponent = ({
  questions,
  currentQues,
  btnHandler
}: {
  questions: IQuestion
  currentQues: number
  btnHandler: (ans: boolean) => void
}) => {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {questions[currentQues].question}
          </h5>
          <div className="inline-flex">
            {questions[currentQues].answers.map((ans) => (
              <button
                key={ans.id}
                onClick={() => btnHandler(ans.isCorrect)}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                {ans.option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionsComponent
