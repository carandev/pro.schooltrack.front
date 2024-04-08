import { Grade } from "@/types/Grade"

const GRADE_URL = `${process.env.NEXT_PUBLIC_API_URL}/grados`

export const GradeService = {
    async fetchGrades() {
        const response = await fetch(GRADE_URL)
        return response.json()
    },
    async fetchGrade(id: string) {
        const response = await fetch(`${GRADE_URL}/${id}`)
        return response.json()
    },
    async createGrade(data: Grade) {
        const response = await fetch(GRADE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async updateGrade(id: string, data: Grade) {
        const response = await fetch(`${GRADE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async deleteGrade(id: string) {
        const response = await fetch(`${GRADE_URL}/${id}`, {
            method: 'DELETE',
        })
        return response.json()
    },
}