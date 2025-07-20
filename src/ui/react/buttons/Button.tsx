import classNames from "classnames"

type Props = {
  children: React.ReactNode;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function OutlineButton({ children, link, className, style }: Props) {
  const classname = classNames(
    `mt-3 flex items-center gap-1 py-1 px-2
      rounded-md w-max cursor-pointer transition-colors duration-200 ease-out bg-primary text-white`,
    className
  )

  if (link) return (
    <a
      className={classname}
      href={link}
      style={style}
    >
      {children}
    </a>
  )

  return (
    <button
      className={classname}
      style={style}
    >
      {children}
    </button>
  )
}
