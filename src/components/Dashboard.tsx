interface IData {
    data: string
}

interface IAppointment {
    id: number
    doctorName: string
    patientName: string
    patientDOB: string
    patientMedHistory: IData
}

export default function Dashboard(): JSX.Element {
    const appointments: IAppointment[] = [
        {
            id: 1,
            doctorName: "Dr. One",
            patientName: "Patient One",
            patientDOB: "DD/MM/YYYY",
            patientMedHistory: {data: "Hospital One's Data"}
        },
        {
            id: 2,
            doctorName: "Dr. Two",
            patientName: "Patient Two",
            patientDOB: "DD/MM/YYYY",
            patientMedHistory: {data: "Hospital Two's Data"}
        }
    ]

  return (
    <div className="dashboard-background">
      <h1 className="appointments-title">Your Appointments: </h1><br/>
        <div className="appointments-container">
            <div className="appointment">
                <h3>Appointment {appointments[0].id}:</h3><br/>
                <p>{appointments[0].doctorName} meeting with <br />{appointments[0].patientName}</p><br/>
                <p>Patient Date of Birth:<br />{appointments[0].patientDOB}</p>
                <p>Patient Medical History: <br />{appointments[0].patientMedHistory.data}</p><br/>
            </div>
            <div className="appointment">
                <h3>Appointment {appointments[1].id}:</h3><br/>
                <p>{appointments[1].doctorName} meeting with <br />{appointments[1].patientName}</p>
                <p>Patient Date of Birth: <br />{appointments[1].patientDOB}</p>
                <p>Patient Medical History: <br />{appointments[1].patientMedHistory.data}</p><br/>
            </div>
        </div> 
    </div>
  )
}
