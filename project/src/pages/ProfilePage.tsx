import { useParams } from "react-router-dom"

const ProfilePage = () => {
  const { userName } = useParams<{userName: string}>()
  
  return (
    <div>This the {userName} profile page!</div>
  )
}

export default ProfilePage
