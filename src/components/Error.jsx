import React from 'react'

function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 rounded-lg bg-red-500 text-white">
          Error: {error}
        </p>
        <div className="mt-4">
          <img
            className="h-[50vh] w-[50vh] min-w-min"
            src="/assets/error_img.png"
            alt="Error Image"
          />
        </div>
      </div>
  )
}

export default Error
