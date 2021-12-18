import React from 'react'
import { useHistory } from "react-router";

const GobackButton = () => {
    const history = useHistory();
    return (
           <div className=" w-32 bg-primary text-white p-1  m-3 flex items-center rounded-md gap-2 cursor-pointer" onClick={() => history.goBack()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <p>go back</p>
        </div>
    )
}

export default GobackButton
