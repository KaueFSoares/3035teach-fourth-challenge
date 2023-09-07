import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProfileData, getProfile } from "../services/profile.service"
import Loading from "../components/Loading"
import Header from "../components/profile-page/Header"
import RepoSection from "../components/profile-page/repo-section"

const ProfilePage = () => {
  const navigate = useNavigate()

  const { userName } = useParams<{ userName: string }>()

  const [ profile, setProfile ] = useState<ProfileData | undefined>()

  useEffect(() => {
    if (userName) {
      getProfile(userName).then((data) => {
        if (data[0] === "notfound" || data[0] === "error") {
          navigate("/notfound")
        }

        setProfile(data[1])
      })
    }
  }, [ navigate, userName ])

  return (
    <main className="w-full min-h-screen bg-gray/[.5] flex flex-col items-center justify-start ">
      {profile  ? (
        <>
          <Header />
          <div className="w-[95%] h-[100%] bg-white box-border shadow-md rounded-xl my-4 md:my-6 xl:w-[85%]">
            <section className="p-5 lg:p-8 xl:p-[5%] lg:pb-0">
              <h2 className="font-extrabold text-xl mb-4 md:text-2xl md:mb-8 xl:text-3xl">Profile info</h2>

              <div className="grid grid-cols-3 lg:gap-y-0 xl:grid-cols-4 gap-4 xl:gap-x-8
                              w-full border border-gray border-solid rounded-xl p-2 sm:p-6 md:w-3/4 md:p-4 lg:p-8 lg:w-3/5">
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

            <RepoSection username={userName!} repoAmount={profile.repoAmount} />
          </div>

        </>
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default ProfilePage
