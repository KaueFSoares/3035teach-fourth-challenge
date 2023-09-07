import { useEffect, useState, useContext } from "react"
import { IoClose } from "react-icons/io5"
import { RepoFullData, getSingleRepo } from "../../../services/profile.service"
import Loading from "../../Loading"
import ModalContext from "../../../context/ModalContext"

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

          <div className="w-full shadow-repo rounded-md p-4 sm:w-4/5 md:w-3/5 lg:p-8 xl:w-1/2">
            <header className="flex justify-between gap-2 px-2 py-4">
              <h2 className="text-base font-semibold sm:text-lg">{data.name}</h2>
              <button onClick={() => onShowModal(repoName)} type="button" className="flex items-center justify-center">
                <IoClose className="text-2xl text-gray sm:text-3xl" />
              </button>
            </header>
            <hr className="text-gray" />
            <section className="pt-4 text-sm flex flex-col gap-4 sm:text-base">
              <div className="w-full bg-gray/[.3] p-2 rounded-lg lg:rounded-xl lg:p-3">
                <p className="text-black/[.6] text-xs sm:text-sm">Link</p>
                <a href={data.link ? data.link : ""}>
                  <p className="overflow-hidden break-all underline">{data.link ? data.link : "No Link"}</p>
                </a>
              </div>

              <div className="w-full bg-gray/[.3] p-2 rounded-lg lg:rounded-xl lg:p-3">
                <p className="text-black/[.6] text-xs sm:text-sm">Privacy</p>
                <p>{data.private ? "Private" : "Public"}</p>
              </div>

              <div className="w-full bg-gray/[.3] p-2 rounded-lg lg:rounded-xl lg:p-3">
                <p className="text-black/[.6] text-xs sm:text-sm">Language</p>
                <p>{data.language}</p>
              </div>

              <div className="w-full bg-gray/[.3] p-2 rounded-lg lg:rounded-xl lg:p-3">
                <p className="text-black/[.6] text-xs sm:text-sm">Description</p>
                <p>{data.description ? data.description : "No description"}</p>
              </div>
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
