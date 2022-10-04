import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import QuestionsComponent from "./components/QuestionsComponent"
import ScoreComponent from "./components/ScoreComponent"

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

export type IQuestion = typeof questions

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
          <ScoreComponent score={score} total={questions.length} />
        </>
      ) : (
        <>
          <QuestionsComponent
            questions={questions}
            currentQues={currentQues}
            btnHandler={btnHandler}
          />
        </>
      )}
    </div>
  )
}

export default App
