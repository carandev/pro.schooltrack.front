import { Course } from "@/types/Course"

const COURSE_URL = `${process.env.NEXT_PUBLIC_API_URL}/cursos`

export const CourseService = {
    async fetchCourses() {
        const response = await fetch(COURSE_URL)
        return response.json()
    },
    async fetchCourse(id: string) {
        const response = await fetch(`${COURSE_URL}/${id}`)
        return response.json()
    },
    async createCourse(data: Course) {
        const response = await fetch(COURSE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async updateCourse(id: string, data: Course) {
        const response = await fetch(`${COURSE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    },
    async deleteCourse(id: string) {
        const response = await fetch(`${COURSE_URL}/${id}`, {
            method: 'DELETE',
        })
        return response.json()
    },
}