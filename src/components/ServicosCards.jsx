import { Button, Card, Col, Row} from "react-bootstrap";


const Servicos = ({servicos = []}) => {
  return (
    <Row>
      {servicos.map((servico, i) => {
        return (
        <Col key={i}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={servico.imagem} />
          <Card.Body>
            <Card.Title>{servico.titulo}</Card.Title>
            <Card.Text>{servico.descricao}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      )})};
    </Row>
    
  )
}

export default Servicos;