import { useEffect, useState } from "react"
import { RepoMinData, getRepoPage } from "../../../services/profile.service"
import CardListMobile from "./CardListMobile"
import CardListDesktop from "./CardListDesktop"
import PageChangerMobile from "./PageChangerMobile"
import PageChangerDesktop from "./PageChangerDesktop"

interface RepoSectionProps {
  username: string
  repoAmount: number
}

const RepoSection = ({ username, repoAmount }: RepoSectionProps) => {
  const [ repos, setRepos ] = useState<RepoMinData[]>([])
  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(0)

  useEffect(() => {
    setLoading(true)
    getRepoPage(username, 1).then((data) => {
      setRepos(data[1])
      setLoading(false)
      setPage(1)
    })
  }, [ username ])

  const handleOnLoadMoreMobile = () => {
    setLoading(true)
    getRepoPage(username, page + 1).then((data) => {
      setRepos((prev) => [ ...prev!, ...data[1] ])
      setPage((prevPage) => prevPage + 1)
      setLoading(false)
    })
  }

  const handleOnLoadMoreDesktop = () => {
    setLoading(true)
    if (repos!.length > page * 3) {
      setPage((prevPage) => prevPage + 1)
      setLoading(false)
      
      return
    }
    getRepoPage(username, page + 1).then((data) => {
      setRepos((prev) => [ ...prev!, ...data[1] ])
      setPage((prevPage) => prevPage + 1)
      setLoading(false)
    })
  }

  return (
    <section className="p-5 lg:p-8 xl:px-[5%]">
      <h2 className="font-extrabold text-xl mb-4 md:text-2xl md:mb-8 lg:mb-2 xl:text-3xl">Repositories</h2>

      <div className="w-full flex flex-col lg:flex-col-reverse">

        <CardListMobile repos={repos} loading={loading} />

        <CardListDesktop repos={repos} loading={loading} page={page} repoAmount={repoAmount}/>

        <PageChangerMobile reposLenght={repos.length} repoAmount={repoAmount} handleOnLoadMoreMobile={handleOnLoadMoreMobile} />

        <PageChangerDesktop page={page} setPage={setPage} repoAmount={repoAmount} handleOnLoadMoreDesktop={handleOnLoadMoreDesktop} />

      </div>
    </section>
  )
}

export default RepoSection
