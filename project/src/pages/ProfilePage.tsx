import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProfileData, getProfile } from "../services/profile.service"
import Loading from "../components/Loading"
import Header from "../components/profile-page/Header"
import RepoSection from "../components/profile-page/repo-section"
import ModalContext from "../context/ModalContext"
import RepoModal from "../components/profile-page/repo-section/RepoModal"
import ProfileSection from "../components/profile-page/profile-section"

const ProfilePage = () => {
  const navigate = useNavigate()

  const { userName } = useParams<{ userName: string }>()

  const [ profile, setProfile ] = useState<ProfileData>()

  const [ showModal, setShowModal ] = useState(false)

  const modalName = useRef("")

  const onShowModal = (name: string) => {
    modalName.current = name
    setShowModal((prev) => !prev)
  }

  useEffect(() => {
    if (userName) {
      getProfile(userName).then((data) => {
        if (data[0] === "notfound" || data[0] === "error") {
          navigate("/notfound")
        }

        setProfile(data[1])
      })
      
      return
    }
    navigate("/notfound")
  }, [ navigate, userName ])

  return (
    <ModalContext.Provider value={{ onShowModal }}>
      <main className={`w-full min-h-screen bg-gray/[.5] dark:bg-dark-gray flex flex-col items-center justify-start ${showModal && "max-md:h-screen"} ${!profile && "h-screen"} dark:text-white`}>
        {profile ? (
          <>
            <Header />
            <div className="w-[95%] h-full bg-white dark:bg-medium-gray box-border shadow-md rounded-xl my-4 md:my-6 xl:w-[85%]">

              <div className={`${showModal ? "hidden" : "flex"} flex-col`}>

                <ProfileSection profile={profile} />
                <RepoSection username={userName!} repoAmount={profile.repoAmount} />

              </div>

              {showModal && <RepoModal userName={userName!} repoName={modalName.current} />}

            </div>

          </>
        ) : (
          <Loading />
        )}
      </main>
    </ModalContext.Provider>
  )
}

export default ProfilePage
