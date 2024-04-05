import Head from "next/head"
import { metadata } from "../layout"

metadata.title = "Gestión de tareas"

const Assignment = () => {
    return (
        <>
            <section className="bg-slate-500 p-4 rounded text-white mb-4">
                <form className="flex gap-4">
                    <div>
                        <label htmlFor="subject" className="block">Materia</label>
                        <select name="subject" id="subject" className="input-primary">
                            <option value="">--Seleccione--</option>
                            <option value="">Matemáticas</option>
                            <option value="">Español</option>
                            <option value="">Sociales</option>
                            <option value="">Artística</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year" className="block">Grado</label>
                        <select name="year" id="year" className="input-primary">
                            <option value="">--Seleccione--</option>
                            <option value="">3A</option>
                            <option value="">8B</option>
                            <option value="">10C</option>
                            <option value="">6C</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type" className="block">Tipo</label>
                        <select name="type" id="type" className="input-primary">
                            <option value="">--Seleccione--</option>
                            <option value="">Tipo 1</option>
                            <option value="">Tipo 2</option>
                            <option value="">Tipo 3</option>
                            <option value="">Tipo 4</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="quarter" className="block">Periodo</label>
                        <select name="quarter" id="quarter" className="input-primary">
                            <option value="">--Seleccione--</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </form>
            </section>
            <table className='border-separate w-full rounded'>
                <thead className="bg-slate-800 text-white">
                    <tr>
                        <th className="p-4">Nombre del trabajo</th>
                        <th className="p-4">Porcentaje</th>
                        <th className="p-4">Periodo</th>
                        <th className="p-4">Tipo</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-500">
                    <tr>
                        <td className="p-4">Trabajo 1</td>
                        <td className="p-4">20%</td>
                        <td className="p-4">1</td>
                        <td className="p-4">Prueba</td>
                    </tr>
                    <tr>
                        <td className="p-4">Trabajo 2</td>
                        <td className="p-4">30%</td>
                        <td className="p-4">1</td>
                        <td className="p-4">Prueba</td>
                    </tr>
                    <tr>
                        <td className="p-4">Trabajo 3</td>
                        <td className="p-4">50%</td>
                        <td className="p-4">1</td>
                        <td className="p-4">Prueba</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Assignment