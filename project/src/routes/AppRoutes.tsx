import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { NotFoundPage, ProfilePage, SearchPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/profile/:userName",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes
