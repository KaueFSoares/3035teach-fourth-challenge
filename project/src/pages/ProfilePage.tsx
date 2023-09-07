import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"
import { ProfileData, RepoData, getData, getRepos } from "../services/profile.service"
import Loading from "../components/Loading"
import Header from "../components/Header"
import RepoCard from "../components/RepoCard"

const ProfilePage = () => {
  const navigate = useNavigate()

  const { userName } = useParams<{ userName: string }>()

  const [ profile, setProfile ] = useState<ProfileData | undefined>()
  const [ repos, setRepos ] = useState<RepoData[] | undefined>()
  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(0) // Changed from useRef

  useEffect(() => {
    if (userName) {
      getData(userName).then((data) => {
        if (data[0] === "notfound" || data[0] === "error") {
          navigate("/notfound")
        }

        setProfile(data[1])
        setRepos(data[2])

        setPage(1) // Changed from page.current = 1;
      })
    }
  }, [ navigate, userName ])

  const handleOnLoadMoreMobile = () => {
    setLoading(true)
    getRepos(userName!, page + 1).then((data) => {
      setRepos((prev) => [ ...prev!, ...data[1] ])
      setPage((prevPage) => prevPage + 1) // Changed from page.current += 1;
      setLoading(false)
    })
  }

  const handleOnLoadMoreDesktop = () => {
    setLoading(true)
    getRepos(userName!, page + 1).then((data) => {
      setRepos((prev) => [ ...prev!, ...data[1] ])
      setPage((prevPage) => prevPage + 1) // Changed from page.current += 1;
      setLoading(false)
    })
  }

  return (
    <main className="w-full min-h-screen bg-gray/[.5] flex flex-col items-center justify-start ">
      {profile && repos ? (
        <>
          <Header />
          <div className="w-[95%] h-[100%] bg-white box-border shadow-md rounded-xl my-4 md:my-6">
            <section className="p-5 lg:p-8">
              <h2 className="font-extrabold text-xl mb-4 md:text-2xl md:mb-8 xl:text-3xl">Profile info</h2>

              <div className="grid grid-cols-3 lg:gap-y-0 xl:grid-cols-4 gap-4 xl:gap-x-8
                              w-full border border-gray border-solid rounded-xl p-2 sm:p-6 md:w-3/4 md:p-4 lg:p-8 lg:w-3/5 xl:w-1/2">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="col-span-1 sm:row-span-2
                            w-full my-auto rounded-xl"
                />

                <div className="col-span-2 sm:row-span-1 xl:col-span-3
                                flex flex-col justify-center">
                  <p className="font-extralight text-sm mb-1">Name</p>
                  <p className="font-semibold mb-2 text-base">{profile.name ? profile.name : "No name"}</p>
                </div>

                <div className="col-span-3 sm:col-span-2 sm:row-span-1 xl:col-span-3">
                  <p className="font-extralight text-sm mb-1">Bio</p>
                  <p className="text-sm mb-1 text-justify pr-2">{profile.bio ? profile.bio : "No bio"}</p>
                </div>
              </div>

            </section>

            <section className="p-5 lg:p-8">
              <h2 className="font-extrabold text-xl mb-4 md:text-2xl md:mb-8 xl:text-3xl">Repositories</h2>

              <div className="w-full flex flex-col lg:flex-col-reverse">

                <div className="flex flex-row flex-wrap w-full gap-4 mb-4 lg:mb-0 lg:mt-4 lg:hidden">
                  {repos.length > 0 ? (
                    repos.map((repo) => (
                      <RepoCard
                        key={repo.id}
                        data={repo}
                      />
                    ))) : (
                    <p className="text-center">No repositories</p>
                  )}
                  {loading && <Loading />}
                </div>

                <div className="hidden lg:flex flex-row flex-wrap w-full gap-4 mb-4 lg:mb-0 lg:mt-4">
                  {repos.length > 0 ? (
                    <>
                      {repos.slice((page - 1) * 3, (page - 1) * 3 + 3).map((repo, index) => (
                        <RepoCard key={index} data={repo} />
                      ))}
                    </>) : (
                    <p className="text-center">No repositories</p>
                  )}
                  {loading && <Loading />}
                </div>

                <div className="w-full flex justify-center gap-8 lg:hidden">
                  <p className="w-1/2 flex justify-end">{repos.length} of {profile.repoAmount}</p>

                  <div className="flex gap-2 w-1/2 justify-start">
                    <button
                      onClick={handleOnLoadMoreMobile}
                      disabled={repos.length === profile.repoAmount}
                      className="flex lg:hidden
                                  justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
                      <BiPlus />
                    </button>
                  </div>
                </div>

                <div className="w-full  justify-end gap-8 hidden lg:flex">
                  <p className="flex justify-end">{page * 3 - 2} - {page * 3 < profile.repoAmount ? page * 3 : profile.repoAmount} of {profile.repoAmount}</p>

                  <div className="flex gap-2 justify-start">
                    <button
                      disabled={page === 1}
                      onClick={() => setPage((prevPage) => prevPage - 1)}
                      className="hidden lg:flex
                                 justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
                      <AiOutlineArrowLeft />
                    </button>

                    <button
                      disabled={repos.length === profile.repoAmount}
                      onClick={handleOnLoadMoreDesktop}
                      className="hidden lg:flex
                                  justify-center items-center p-1 border border-black border-solid rounded-md disabled:grayscale disabled:opacity-30">
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>

              </div>
            </section>
          </div>

        </>
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default ProfilePage
