import classNames from "classnames"
import { IoIosArrowRoundForward } from "react-icons/io";


type Props = {
  children: React.ReactNode;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  arrow?: boolean | number;
}

export default function OutlineButton({ children, link, className, style, target, arrow }: Props) {
  const classname = classNames(
    `mt-3 flex items-center gap-1 py-1 px-2
      rounded-md w-max cursor-pointer transition-colors duration-200 ease-out bg-primary text-white`,
    className
  )

  if (link) return (
    <a
      className={classname}
      href={link}
      target={target}
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
