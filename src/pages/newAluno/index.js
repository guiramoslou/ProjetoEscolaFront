import React from 'react'
import httpService from '../../services/httpService'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AlunoForm from '../../components/alunoForm/index'



class NewBook extends React.Component {
    constructor() {
        super()
    }

    handleSubmit = (aluno) => {
        httpService.post('/aluno', aluno)
            .then(response => {
                alert('Success')
            }).catch(error => {
                console.error(error)
            })
    }

    render() {
        const aluno = this.state

        const classes = makeStyles((theme) => ({
            root: {
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            },
        }));

        return (
            <React.Fragment>
                <h1>Novo Aluno</h1>
                <AlunoForm
                    handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
        )
    }
}

export default NewBook