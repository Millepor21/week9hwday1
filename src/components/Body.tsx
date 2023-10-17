import Dashboard from "./Dashboard"

interface BodyProps {
    dashboard: boolean
    children: JSX.Element[] | JSX.Element 
}

export default function Body({ dashboard, children }: BodyProps) {
  return (
    <>
        {dashboard && <Dashboard />}
        <div className="child-container">{children}</div>
    </>
  )
}
