import React from 'react'
import httpService from '../../services/httpService'
import 'fontsource-roboto';
import MaterialTable from 'material-table'


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
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                    columns={[
                        { title: 'ID', field: 'id' },
                        { title: 'Name', field: 'name' },
                        { title: 'Classe', field: 'classe' }
                    ]}
                    data={alunos}
                    title="Alunos"
                />
            </div>
        )
    }
}

export default Aluno    