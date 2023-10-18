type Patient = {
    readonly id?: string
    username: string
    password: string
    email?: string
    first_name?: string
    last_name?: string
    dob?: string
    height?: string
    weight?: string
    history?: string
}

type Doctor = {
    readonly id?: string
    first_name?: string
    last_name?: string
    username?: string
    password: string
    email: string
    specialty?: string  
}

export type { Patient, Doctor }