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

    handleDeleteAluno = (id) => {
        console.log(id)
        httpService.delete(`/aluno/${id}`)
            .then(() => {
                const { alunos } = this.state

                const updatedAlunos = alunos.filter(aluno => aluno.id !== id)

                this.setState({
                    alunos: updatedAlunos
                })
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
                    options={{
                        selection: true
                    }}
                    actions={[
                        {
                            tooltip: 'Remove All Selected Users',
                            icon: 'delete',
                            // onClick: this.handleDeleteAluno()
                            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
                        }
                    ]}
                />
            </div>
        )
    }
}

export default Aluno    