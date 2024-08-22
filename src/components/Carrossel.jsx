import Carousel from 'react-bootstrap/Carousel';

const Carossel = ({carroselItens = []}) => {
  return (
    <Carousel>
      {carroselItens.map((item, i) => {
        return (
        <Carousel.Item key={i}>
          <img src={item.imagem}/>
          <Carousel.Caption>
            <p>{item.descricao}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      }

      )}
      {/* <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Carossel;