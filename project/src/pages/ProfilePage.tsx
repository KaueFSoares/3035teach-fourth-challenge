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
    <main className="w-full h-screen bg-gray/[.5]">
      {(profile && repos) ? (
        <Header />
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default ProfilePage
