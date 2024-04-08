import { Subject } from "@/types/Subject"

const SUBJECT_URL = `${process.env.NEXT_PUBLIC_API_URL}/materias`

export const SubjectService = {
    async fetchSubjects() {
        const response = await fetch(SUBJECT_URL)
        return response.json()
    },
    async fetchSubject(id: string) {
        const response = await fetch(`${SUBJECT_URL}/${id}`)
        return response.json()
    },
    async createSubject(data: Subject) {
        const response = await fetch(SUBJECT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async updateSubject(id: string, data: Subject) {
        const response = await fetch(`${SUBJECT_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async deleteSubject(id: string) {
        const response = await fetch(`${SUBJECT_URL}/${id}`, {
            method: 'DELETE',
        })
        return response.json()
    },
}