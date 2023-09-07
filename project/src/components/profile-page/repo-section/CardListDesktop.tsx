import { RepoMinData } from "../../../services/profile.service"
import Loading from "../../Loading"
import RepoCard from "./RepoCard"

interface CardListDesktopProps {
  repos: RepoMinData[]
  loading: boolean
  page: number
  repoAmount: number
}

const CardListDesktop = ({ repos, loading, page, repoAmount }: CardListDesktopProps) => {
  return (
    <div className={`hidden lg:flex flex-row flex-wrap w-full gap-4 xl:gap-8 mb-4 lg:mb-0 mt-4 ${loading && "h-[260px]"}`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {repos.length > 0 ? (
            <>
              {repos
                .slice((page - 1) * 3, ((page - 1) * 3 + 3) > repoAmount ? repoAmount : ((page - 1) * 3 + 3))
                .map((repo) => (
                  <RepoCard key={repo.id} data={repo} />
                ))}
            </>
          ) : (
            <p className="text-center">No repositories</p>
          )}
        </>
      )}
    </div>
  )
}

export default CardListDesktop
