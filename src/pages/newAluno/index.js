import React from 'react'
import httpService from '../../services/httpService'
import Input from '../../components/input'

class NewBook extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            classe: "",
            programa: null,
            active: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const aluno = this.state

        httpService.post('/aluno', aluno)
            .then(response => {
                alert('Success')
            }).catch(error => {
                console.error(error)
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const aluno = this.state
        return (
            <>
                <h1>Novo Aluno</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="Nome"
                        id="aluno[nome]"
                        name="name"
                        onChange={this.handleChange}
                        value={aluno.name}
                    />
                    <Input
                        label="Classe"
                        id="aluno[classe]"
                        name="classe"
                        onChange={this.handleChange}
                        value={aluno.classe}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default NewBook