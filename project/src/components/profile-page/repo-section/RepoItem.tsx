
interface RepoItemProps {
  name: string
  value: string
  link?: boolean
}

const RepoItem = ({ name, value, link }: RepoItemProps) => {
  return (
    <div className="w-full bg-gray/[.3] dark:bg-white/[.9] p-2 rounded-lg lg:rounded-xl lg:p-3">
      <p className="text-black/[.6] text-xs sm:text-sm">{name}</p>
      {link ? (
        <a href={value}>
          <p className="overflow-hidden break-all underline">{value}</p>
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  )
}

export default RepoItem
