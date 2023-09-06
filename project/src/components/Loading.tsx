const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-1/6 lg:w-[6%]">
        <img src="/out-circle.png" alt="" className="w-full"/>
        <div className="w-2/3 h-2/3 m-auto animate-spin-slow absolute inset-0">
          <img src="/in-circle.png" alt="" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Loading
