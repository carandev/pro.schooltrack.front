'use client'

import { useState } from "react"
import { UserForm } from "./UserForm"
import { useRouter } from "next/navigation"

const NewUser = () => {
    const [userForm, setUserForm] = useState<UserForm>({
        tipo_documento: null,
        numero_documento: null,
        primer_nombre: null,
        segundo_nombre: null,
        primer_apellido: null,
        segundo_apellido: null,
        telefono_contacto: null,
        correo: null,
        fecha_nacimiento: null,
        promedio: null,
        tipo_usuario: null,
        estado: true,
        fecha_ingreso: null
    })
    const router = useRouter()

    let errorMessage = ''

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/school/api/V1/usuarios/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userForm)
            })

            var data = await response.json()

            console.log('data', data)

            if (response.ok) {
                router.push('/users')
            } else {
                throw new Error(data)
            }

        } catch (error: any) {
            errorMessage = error.message
        }
    }

    if (errorMessage) {
        return <div className="py-2 px-4 m-2 rounded bg-red-400 border-red-600">
            Ocurrió un error al registrar el usuario {errorMessage}
        </div>
    }

    return (
        <main className="container mx-auto">
            <h1 className="text-2xl uppercase text-center mb-4">Registrar usuario</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-wrap gap-4 mb-4 items-end"
                id="createUserForm">
                <div>
                    <label className="block mb-2" htmlFor="tipo_documento">Tipo de documento</label>
                    <input className="input-primary" type="text" name="tipo_documento" id="tipo_documento" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="numero_documento">Número de documento</label>
                    <input className="input-primary" type="text" name="numero_documento" id="numero_documento" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="primer_nombre">Primer nombre</label>
                    <input className="input-primary" type="text" name="primer_nombre" id="primer_nombre" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="segundo_nombre">Segundo nombre</label>
                    <input className="input-primary" type="text" name="segundo_nombre" id="segundo_nombre" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="primer_apellido">Primer apellido</label>
                    <input className="input-primary" type="text" name="primer_apellido" id="primer_apellido" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="segundo_apellido">Segundo apellido</label>
                    <input className="input-primary" type="text" name="segundo_apellido" id="segundo_apellido" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="telefono_contacto">Teléfono de contacto</label>
                    <input className="input-primary" type="tel" name="telefono_contacto" id="telefono_contacto" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="correo">Correo</label>
                    <input className="input-primary" type="email" name="correo" id="correo" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                    <input className="input-primary" type="date" name="fecha_nacimiento" id="fecha_nacimiento" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="promedio">Promedio</label>
                    <input className="input-primary" type="text" name="promedio" id="promedio" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="tipo_usuario">Tipo de usuario</label>
                    <input className="input-primary" type="text" name="tipo_usuario" id="tipo_usuario" onChange={handleInputChange} />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="fecha_ingreso">Fecha de ingreso</label>
                    <input className="input-primary" type="date" name="fecha_ingreso" id="fecha_ingreso" onChange={handleInputChange} />
                </div>
                <button className="btn-primary" type="submit" form="createUserForm">Registrar</button>
            </form>
        </main>
    )
}

export default NewUser