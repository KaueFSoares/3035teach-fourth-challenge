import { RepoMinData } from "../../../services/profile.service"
import Loading from "../../Loading"
import RepoCard from "./RepoCard"

interface CardListMobileProps {
  repos: RepoMinData[]
  loading: boolean
}

const CardListMobile = ({ repos, loading }: CardListMobileProps) => {
  return (
    <div className="flex flex-row flex-wrap w-full gap-4 mb-4 lg:mb-0 lg:mt-4 lg:hidden">
      {repos.length > 0 ? (
        repos!.map((repo) => (
          <RepoCard
            key={repo.id}
            data={repo}
          />
        ))) : (
        <p className="text-center">No repositories</p>
      )}
      {loading && <Loading />}
    </div>
  )
}

export default CardListMobile
