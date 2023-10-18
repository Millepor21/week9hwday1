import Body from "../components/Body";

export default function DashboardPage(): JSX.Element {

  console.log(localStorage.getItem('token'), "from landing page");
  let html: JSX.Element = (<Body dashboard>
  </Body>)
  
  { localStorage.length === 1 ?
    html = (
      <Body dashboard={false}>
      </Body> 
    ) 
    : html = (
      <Body dashboard={true}>
      </Body>
    )
  }
  return html
}
