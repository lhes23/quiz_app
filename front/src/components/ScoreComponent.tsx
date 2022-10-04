import React from "react"

const ScoreComponent = ({ score, total }: { score: number; total: number }) => {
  return (
    <>
      <div className="flex justify-center my-10">
        <div
          id="alert-additional-content-3"
          className="p-4 mb-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-200 w-1/2"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 text-green-700 dark:text-green-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
              Your score is {score} out of {total}
            </h3>
          </div>
          <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            Keep it up!
          </div>
          <div className="flex">
            <button
              type="button"
              className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
              data-dismiss-target="#alert-additional-content-3"
              aria-label="Close"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScoreComponent
