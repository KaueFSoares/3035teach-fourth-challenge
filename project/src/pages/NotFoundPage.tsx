import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">
      <div className="bg-dark-blue w-full h-2/5 flex items-center justify-center lg:h-full lg:w-3/5">
        <img src="/logo.png" alt="W Tech Logo's" className="w-[85%] md:w-2/5 lg:w-2/5" />
      </div>

      <div className="w-full h-1/2 flex flex-col items-center justify-center lg:h-full lg:w-2/5">

        {/* Image from: https://iconduck.com/illustrations/106158/404-page-not-found */}
        <img src="/not-found.png" alt="Page not found" className="w-4/5 mt-12 sm:w-3/5" />

        <h1 className="mt-8 text-xl font-extrabold text-dark-blue">PAGE NOT FOUND</h1>

        <p className="mt-4 w-4/5 text-center text-base">The page or user you are looking for was {<Strong>moved</Strong>}, {<Strong>removed</Strong>}, {<Strong>renamed</Strong>} or might {<Strong>never existed</Strong>}</p>

        <Link role="button" to="/" className="mt-5 text-white bg-dark-blue px-5 py-2 rounded-md font-bold">Go back to home</Link>
      </div>
    </main>
  )
}

const Strong = ({ children }: { children: string }) => {
  return (
    <strong className="text-dark-blue font-semibold">{children}</strong>
  )
}

export default NotFoundPage
