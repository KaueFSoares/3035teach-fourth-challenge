import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProfileData, RepoData, getData } from "../services/profile.service"
import Loading from "../components/Loading"
import Header from "../components/Header"

const ProfilePage = () => {
  const navigate = useNavigate()

  const { userName } = useParams<{userName: string}>()

  const [ profile, setProfile ] = useState<ProfileData>()
  const [ repos, setRepos ] = useState<RepoData[]>()


  useEffect(() => {
    if (userName) {
      getData(userName).then((data) => {
        if (data[0] === "notfound" || data[0] === "error") {
          navigate("/notfound")
        }

        setProfile(data[1])
        setRepos(data[2])
      })
    }
  }, [ navigate, userName ])

  return (
    <main className="w-full min-h-screen bg-gray/[.5] flex flex-col items-center justify-start ">
      {(profile && repos) ? (
        <>
          <Header />
          <div className="w-[95%] h-[100%] bg-white box-border shadow-sm rounded-xl mt-4 md:mt-6">
            <section className="p-5 lg:p-8 mb">
              <h2 className="font-extrabold text-xl mb-4 md:text-2xl md:mb-8 xl:text-3xl">Profile info</h2>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:gap-y-0 xl:grid-cols-4 xl:gap-x-8
                              w-full border border-gray border-solid rounded-xl p-2 sm:p-6 md:w-3/4 md:p-4 lg:p-8 lg:w-3/5 xl:w-1/2">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="col-span-1 sm:row-span-2
                            w-full my-auto rounded-xl" 
                />

                <div className="col-span-2 sm:col-span-2 sm:row-span-1 xl:col-span-3
                                flex flex-col justify-center">
                  <p className="font-extralight text-sm mb-1">Name</p>
                  <p className="font-semibold mb-2 text-base">{profile.name}</p>
                </div>

                <div className="col-span-3 sm:col-span-2 sm:row-span-1 xl:col-span-3">
                  <p className="font-extralight text-sm mb-1">Bio</p>
                  <p className="text-sm mb-1 text-justify pr-2">{profile.bio}</p>
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
