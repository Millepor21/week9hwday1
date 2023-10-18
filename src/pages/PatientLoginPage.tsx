import Body from "../components/Body";
import PatientLoginForm from "../components/PatientLoginForm";

export default function LoginPage() {
  return (
    <Body dashboard={false}>
        <PatientLoginForm />
    </Body>
  )
}
