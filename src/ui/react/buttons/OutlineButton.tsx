import classNames from "classnames"

type Props = {
  children: React.ReactNode;
  link?: string;
  className?: string;
  outlineColor?: string;
  style?: React.CSSProperties;
}

export default function OutlineButton({ children, link, className, outlineColor, style }: Props) {
  const classname = classNames(
    `mt-3 flex items-center gap-1 py-1 px-2
      rounded-md w-max cursor-pointer transition-colors duration-200 ease-out`,
    outlineColor ? (
      `border-1 border-${outlineColor} text-[${outlineColor}] hover:bg-${outlineColor} hover:text-white`
    ) : "border-1 border-primary text-primary hover:bg-primary hover:text-white",
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
