import Body from "../components/Body";
import PatientRegisterForm from "../components/PatientRegisterForm";

export default function RegisterPage() {
  return (
    <Body dashboard={false}>
        <PatientRegisterForm />
    </Body>
  )
}
