import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

const questions = [
  {
    id: "1",
    question: "What is the capital of the Philippines?",
    answers: [
      {
        id: "1.1",
        option: "Baguio",
        isCorrect: false
      },
      {
        id: "1.2",
        option: "Manila",
        isCorrect: true
      }
    ]
  },
  {
    id: "2",
    question: "What is the capital of Canada?",
    answers: [
      {
        id: "2.1",
        option: "Ottawa",
        isCorrect: true
      },
      {
        id: "2.2",
        option: "Toronto",
        isCorrect: false
      }
    ]
  }
]

function App() {
  const [score, setScore] = useState<number>(0)
  const [showScore, setShowScore] = useState<boolean>(false)
  const [currentQues, setCurrentQues] = useState<number>(0)

  const btnHandler = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
    }
    const nextQues = currentQues + 1
    if (nextQues < questions.length) {
      setCurrentQues(nextQues)
    } else {
      setShowScore(true)
    }
  }

  console.log(questions.length)
  return (
    <div className="App">
      {showScore ? (
        <>
          <h1>
            Your score is {score} out of {questions.length}
          </h1>
        </>
      ) : (
        <>
          <h1>{questions[currentQues].question}</h1>
          {questions[currentQues].answers.map((ans) => (
            <button key={ans.id} onClick={() => btnHandler(ans.isCorrect)}>
              {ans.option}
            </button>
          ))}
        </>
      )}
    </div>
  )
}

export default App
