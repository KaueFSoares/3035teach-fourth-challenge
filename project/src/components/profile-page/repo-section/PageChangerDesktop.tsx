import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import React from "react"

interface PageChangerDesktopProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  repoAmount: number
  handleOnLoadMoreDesktop: () => void
}
const PageChangerDesktop = ({ page, setPage, repoAmount, handleOnLoadMoreDesktop }: PageChangerDesktopProps) => {
  return (
    <div className="w-full  justify-end gap-8 hidden lg:flex">
      <p className="flex justify-end">{page * 3 - 2} - {page * 3 < repoAmount ? page * 3 : repoAmount} of {repoAmount}</p>

      <div className="flex gap-2 justify-start">
        <button
          disabled={page === 1}
          onClick={() => setPage((prevPage) => prevPage - 1)}
          className="hidden lg:flex
                      justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
          <AiOutlineArrowLeft />
        </button>

        <button
          disabled={page * 3 >= repoAmount}
          onClick={handleOnLoadMoreDesktop}
          className="hidden lg:flex
                      justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default PageChangerDesktop
