import React, { useEffect } from "react"
import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const AlunoForm = ({ initialValues, handleSubmit }) => {

    const [aluno, setAluno] = useState({
        name: "",
        classe: "",
        programa: null,
        active: true
    })

    useEffect(() => {
        if (initialValues) {
            setAluno({ ...aluno, ...initialValues })
        }
    }, [initialValues])

    const handleChange = (event) => {
        const { name, value } = event.target
        setAluno({
            ...aluno,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(aluno)
    }

    const classes = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    return (
        <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    label="Nome"
                    id="aluno[nome]"
                    name="name"
                    onChange={handleChange}
                    value={aluno.name}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    label="Classe"
                    id="aluno[classe]"
                    name="classe"
                    onChange={handleChange}
                    value={aluno.classe}
                    variant="outlined"
                />
            </div>

            <input type="submit" value="Submit" />
        </form>
    )
}

export default AlunoForm