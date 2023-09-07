import { RepoData } from "../services/profile.service"

interface RepoCardProps {
  data: RepoData
}

const RepoCard = ({ data: repo }: RepoCardProps) => {
  return (
    <div className="w-full shadow-md rounded-lg">
      <h3 className="p-5 text-base font-semibold">{repo.name}</h3>

      <hr className="w-full text-dark-blue"/>

      <div className="p-2 text-sm overflow-hidden flex flex-col gap-2">
        <div className="overflow-hidden bg-gray/[.3] p-3 rounded-xl">
          <p className="font-semibold">Link</p>
          <p className="underline text-xs mr-2">{repo.link ? repo.link : "No Link"}</p>
        </div>

        <div className="overflow-hidden bg-gray/[.3] p-3 rounded-xl">
          <p className="font-semibold">Description</p>
          <p>{repo.description ? repo.description : "No description"}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard