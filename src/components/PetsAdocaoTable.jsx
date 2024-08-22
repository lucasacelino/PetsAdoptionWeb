import { Table } from "react-bootstrap"

const PetsAdocaoTable = ({animais = []}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>nome</th>
        </tr>
      </thead>
      <tbody>
        {animais.map((animal, i) => {
          return (
          <tr key={i}>
            <td>{animal.id}</td>
            <td>{animal.nome}</td>
          </tr>
          )
        }

        )}
        {/* <tr> */}
          {/* <td>1</td>
          <td>Mark</td> */}
          {/* <td>Otto</td>
          <td>@mdo</td> */}
        {/* </tr> */}
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  )
}

export default PetsAdocaoTable