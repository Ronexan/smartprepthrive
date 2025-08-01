import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  link?: string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
};

export default function OutlineButton({
  children,
  link,
  className,
  primaryColor,
  secondaryColor = "white",
  style,
}: Props) {
  const classname = classNames(
    `mt-3 flex items-center gap-1 py-1 px-2
      rounded-md w-max cursor-pointer transition-colors duration-200 ease-out`,
    primaryColor
      ? `border-1 border-${primaryColor} bg-${secondaryColor} text-[${primaryColor}] hover:bg-${primaryColor} hover:text-${secondaryColor}`
      : `border-1 border-primary text-primary hover:bg-primary hover:text-white`,
    className
  );

  if (link)
    return (
      <a className={classname} href={link} style={style}>
        {children}
      </a>
    );

  return (
    <button className={classname} style={style}>
      {children}
    </button>
  );
}
