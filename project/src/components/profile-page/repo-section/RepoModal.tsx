import { useEffect, useState, useContext } from "react"
import { IoClose } from "react-icons/io5"
import { RepoFullData, getSingleRepo } from "../../../services/profile.service"
import Loading from "../../Loading"
import ModalContext from "../../../context/ModalContext"
import RepoItem from "./RepoItem"

interface Props {
  userName: string
  repoName: string
}

const RepoModal = ({ userName, repoName }: Props) => {
  const { onShowModal } = useContext(ModalContext)
  const [ data, setData ] = useState<RepoFullData>()

  useEffect(() => {
    getSingleRepo(userName, repoName).then((data) => {
      setData(data[1])
    })
  }, [ userName, repoName ])

  return (
    <section className="w-full h-full flex flex-col items-center p-5 md:p-10">
      {data ? (
        <>
          <h3 className="w-full text-xl font-bold mb-8 sm:text-2xl sm:mb-12">Especification</h3>

          <div className="w-full shadow-repo rounded-md p-4 sm:w-4/5 md:w-3/5 lg:p-8 xl:w-1/2 dark:bg-light-gray dark:text-black">
            <header className="flex justify-between gap-2 px-2 py-4">
              <h2 className="text-base font-semibold sm:text-lg">{data.name}</h2>
              <button onClick={() => onShowModal(repoName)} type="button" className="flex items-center justify-center">
                <IoClose className="text-2xl text-gray sm:text-3xl dark:text-black" />
              </button>
            </header>
            <hr className="text-gray dark:text-white" />
            <section className="pt-4 text-sm flex flex-col gap-4 sm:text-base">

              <RepoItem name="Link" value={data.link ? data.link : "No Link"} link/>
              <RepoItem name="Privacy" value={data.private ? "Private" : "Public"} />
              <RepoItem name="Language" value={data.language ? data.language : "No language"} />
              <RepoItem name="Description" value={data.description ? data.description : "No description"} />

            </section>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default RepoModal
