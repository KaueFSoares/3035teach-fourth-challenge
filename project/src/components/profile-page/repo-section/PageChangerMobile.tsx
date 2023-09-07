import { BiPlus } from "react-icons/bi"

interface PageChangerMobileProps {
  reposLenght: number
  repoAmount: number
  handleOnLoadMoreMobile: () => void
}

const PageChangerMobile = ({ reposLenght, repoAmount, handleOnLoadMoreMobile }: PageChangerMobileProps) => {
  return (
    <div className="w-full flex justify-center gap-8 lg:hidden">
      <p className="w-1/2 flex justify-end">{reposLenght} of {repoAmount}</p>

      <div className="flex gap-2 w-1/2 justify-start">
        <button
          onClick={handleOnLoadMoreMobile}
          disabled={reposLenght === repoAmount}
          className="flex lg:hidden
                      justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
          <BiPlus />
        </button>
      </div>
    </div>
  )
}

export default PageChangerMobile
