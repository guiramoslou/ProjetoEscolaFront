import React from 'react'
import httpService from '../../services/httpService'
import { Link } from 'react-router-dom'
import 'fontsource-roboto';

class Aluno extends React.Component {
    constructor() {
        super()

        this.state = {
            alunos: []
        }
    }

    componentDidMount() {
        httpService.get('/aluno')
            .then(({ data }) => {
                console.log(data)

                this.setState({ alunos: data })
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { alunos } = this.state

        return (
            <div>
                <h1>Alunos</h1>
                <ul>
                    {
                        alunos.map(aluno =>
                            <li key={aluno.id}>{aluno.name}</li>)
                    }
                </ul>
                <Link to="/novo-aluno">Novo Aluno</Link>
            </div>
        )
    }
}

export default Aluno    