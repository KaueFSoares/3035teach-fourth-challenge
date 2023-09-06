import React, { useState } from "react"
import { search } from "../services/search.service"
import Loading from "../components/Loading"

const SearchPage = () => {
  const [ username, setUsername ] = useState<string>("")

  const [ loading, setLoading ] = useState<boolean>(false)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    search(username)
      .then(() => {
        setLoading(false)
      })
  }

  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">
      <div className="bg-dark-blue w-full h-2/5 flex items-center justify-center lg:h-full lg:w-3/5">
        <img src="/logo.png" alt="W Tech Logo's" className="w-[85%] md:w-2/5 lg:w-2/5" />
      </div>

      <div className="w-full h-1/2 flex flex-col items-center justify-center lg:h-full lg:w-2/5">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1 className="font-extrabold text-3xl mb-8 lg:text-3xl">Welcome!</h1>
            <form 
              action="" 
              className="flex flex-col w-3/4 sm:w-1/2 md:w-1/3 lg:w-3/5"
              onSubmit={handleOnSubmit}
            >
              <div className="flex flex-col w-full">
                <label htmlFor="user-input" className="text-xl mb-2 font-semibold lg:text-lg">User</label>
                <input 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text" 
                  id="user-input"
                  placeholder="Enter your Github username"
                  className="w-full border-2 border-gray rounded-md p-2 mb-4 text-md outline-none focus:border-dark-blue focus:bg-dark-blue/[.03] lg:text-sm lg:mb-8"
                />
              </div>

              <button 
                type="submit"
                className="bg-dark-blue text-white font-bold text-2xl rounded-md p-2 lg:text-lg"
              >
            Search
              </button>
            </form></>
        )}
      </div>
    </main>
  )
}

export default SearchPage
