import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ProfilePage, SearchPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/profile/:userName",
    element: <ProfilePage />,
  },
])

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes
