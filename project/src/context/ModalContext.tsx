import { createContext } from "react"

const ModalContext = createContext<{
  onShowModal: (name: string) => void
    }>({
      onShowModal: () => {},
    })

export default ModalContext
