'use client'
import { useEffect, useState } from "react"
import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    useTheme
} from "@mui/material"
import { Subject } from "@/types/Subject"
import { Course } from "@/types/Course"
import { SubjectService } from "@/services/SubjectService"
import { AssignmentPeriod, AssignmentType } from "@/types/Asignment"
import { GetFilteredAssignments } from "./GetFilteredAssignments"
import { GradeService } from "@/services/GradeService"
import { Grade } from "@/types/Grade"

const Assignment = () => {
    const theme = useTheme();
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [grades, setGrades] = useState<Grade[]>([])
    const [getAssignment, setGetAssignment] = useState<GetFilteredAssignments>({
        subjectId: 0,
        gradeId: 0,
        type: AssignmentType.Normal,
        period: AssignmentPeriod.First,
    })

    const getSubjects = async () => {
        setSubjects(await SubjectService.fetchSubjects())
    }

    const getGrades = async () => {
        setGrades(await GradeService.fetchGrades())
    }

    useEffect(() => {
        getSubjects()
        getGrades()
    }, [])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.table(getAssignment)
    }

    return (
        <section>
            <Container maxWidth='lg'>
                <Stack spacing={2} direction='row' useFlexGap flexWrap="wrap" component='form' onSubmit={handleSubmit}>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id='noteSubject'>Materia</InputLabel>
                        <Select
                            labelId='noteSubject'
                            id='noteSubjectInput'
                            label='Materia'
                            onChange={e => setGetAssignment({ ...getAssignment, subjectId: Number(e.target.value) })}
                            value={getAssignment.subjectId}
                        >
                            <MenuItem value={0}>-- Seleccione --</MenuItem>
                            {subjects && subjects.map(subject => (
                                <MenuItem key={subject.id} value={subject.id}>
                                    {subject.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id='noteCourse'>Curso</InputLabel>
                        <Select
                            labelId='noteCourse'
                            id='noteCourseInput'
                            label='Curso'
                            onChange={e => setGetAssignment({ ...getAssignment, gradeId: Number(e.target.value) })}
                            value={getAssignment.gradeId}
                        >
                            <MenuItem value={0}>-- Seleccione --</MenuItem>
                            {grades && grades.map(course => (
                                <MenuItem key={course.id} value={course.id}>
                                    {course.descripcion}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id='noteType'>Tipo</InputLabel>
                        <Select
                            labelId='noteType'
                            id='noteTypeInput'
                            label='Tipo'
                            onChange={e => setGetAssignment({ ...getAssignment, type: e.target.value as AssignmentType })}
                            value={getAssignment.type}
                        >
                            <MenuItem value={AssignmentType.Normal}>Normal</MenuItem>
                            <MenuItem value={AssignmentType.Acumulativa}>Acumulativa</MenuItem>
                            <MenuItem value={AssignmentType.Recuperación}>Recuperación</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id='notePeriod'>Periodo</InputLabel>
                        <Select
                            labelId='notePeriod'
                            id='notePeriodInput'
                            label='Periodo'
                            onChange={e => setGetAssignment({ ...getAssignment, period: e.target.value as AssignmentPeriod })}
                            value={getAssignment.period}
                        >
                            <MenuItem value={AssignmentPeriod.First}>Primer periodo</MenuItem>
                            <MenuItem value={AssignmentPeriod.Second}>Segundo periodo</MenuItem>
                            <MenuItem value={AssignmentPeriod.Third}>Tercer periodo</MenuItem>
                            <MenuItem value={AssignmentPeriod.Fourth}>Cuarto periodo</MenuItem>
                            <MenuItem value={AssignmentPeriod.Fifth}>Quinto periodo</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' type='submit'>
                        Consultar notas
                    </Button>
                </Stack>
            </Container>
            <TableContainer component={Paper} sx={{ marginTop: 8 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>Descripción</TableCell>
                            <TableCell style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} align="right">Porcentaje</TableCell>
                            <TableCell style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} align="right">Periodo</TableCell>
                            <TableCell style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} align="right">Tipo</TableCell>
                            <TableCell style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} align="right">Calificación</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={5}>
                                No se encontraron notas registradas
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

export default Assignment