import { useContext } from "react"
import { RepoMinData } from "../../../services/profile.service"
import ModalContext from "../../../context/ModalContext"

interface RepoCardProps {
  data: RepoMinData
}

const RepoCard = ({ data: repo }: RepoCardProps) => {
  const { onShowModal } = useContext(ModalContext)
  
  return (
    <div className="w-full sm:w-[calc(50%-.5rem)] md:w-[calc(33.333%-.67rem)] xl:w-[calc(33.333%-1.335rem)]
                   shadow-repo rounded-lg overflow-hidden dark:bg-light-gray">
      <h3 
        className="p-5 text-base font-semibold cursor-pointer hover:bg-gray/[.5] transition-all dark:text-black"
        onClick={() => onShowModal(repo.name)}
      >
        {repo.name}
      </h3>

      <hr className="w-full text-dark-blue dark:text-light-blue"/>

      <div className="p-2 lg:p-6 text-sm overflow-hidden flex flex-col gap-2 lg:gap-4 xl:px-10 dark:text-black">
        <div className="overflow-hidden bg-gray/[.3] dark:bg-white/[.8] p-3 rounded-xl">
          <p className="font-semibold">Link</p>
          <a href={repo.link ? repo.link : ""}>
            <p className="underline text-xs overflow-hidden text-ellipsis whitespace-nowrap">
              {repo.link ? repo.link : "No Link"}
            </p>
          </a>
        </div>

        <div className="overflow-hidden bg-gray/[.3] p-3 rounded-xl dark:bg-white/[.8]">
          <p className="font-semibold">Description</p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">{repo.description ? repo.description : "No description"}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
