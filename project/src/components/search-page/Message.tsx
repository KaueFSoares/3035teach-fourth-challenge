import { IoClose } from "react-icons/io5"

interface MessageProps {
  text: string
  handleOnClose: () => void
}

const Message = ({ text, handleOnClose }: MessageProps) => {
  return (
    <div className="relative w-full bg-orange text-white flex rounded-2xl mb-4 pl-3 py-2 overflow-visible scale-110 lg:py-3">
      <img src="/message-texture.png" alt="Boubles" className="w-1/6 absolute -top-5 xsm:w-[11%] sm:w-[13%] md:w-1/6 md:scale-95 lg:scale-100 xl:w-[13%]" />
      <button 
        type="button" 
        onClick={handleOnClose}
        className="absolute top-2 right-3 flex items-center justify-center"
      >
        <IoClose className="text-2xl" />
      </button>
      <div className="ml-[18%]">
        <h3 className="font-bold text-xl sm:text-lg">Ops!</h3>
        <p className="font-light text-sm sm:scale-95">{text}</p>
      </div>
    </div>
  )
}

export default Message
