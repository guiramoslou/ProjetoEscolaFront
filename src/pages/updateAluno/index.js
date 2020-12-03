import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'
import AlunoForm from '../../components/alunoForm/'


const UpdateAluno = () => {

    const [aluno, setAluno] = useState({})

    const { alunoId } = useParams()

    useEffect(() => {
        httpService(`/aluno/${alunoId}`)
            .then(({ data }) => {
                setAluno(data)
            })

    }, [])

    const handleUpdate = (aluno) => {

        httpService.put(`aluno/${aluno.id}`, aluno)
            .then(({ data }) => {
                alert('Success')
                console.log(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return <div>
        <h1>Update Aluno {aluno.name}</h1>
        <AlunoForm
            handleSubmit={handleUpdate}
            initialValues={aluno}
        />
    </div>
}

export default UpdateAluno