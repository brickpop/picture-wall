import Link from "next/link"

type Props = {
  children: any,
  title: string
}

export default function ({ children, title, ...props }: Props) {
  return <div id="layout" {...props}>
    <div className="top-bar">
        <span className="title">{title}</span>
    </div>

    <div className="content">
      {children}
    </div>
  </div>
}
