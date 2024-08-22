import Carossel from "./Carrossel";
import PetsAdocaoTable from "./PetsAdocaoTable";
import Servicos from "./ServicosCards";
import servicos from "../dataset/servicos";
import animais from "../dataset/animais";
import dependenciasCarrossel from "../dataset/dependenciasCarrossel";

const Main = () => {
  return (
    <>
        <Carossel carroselItens={dependenciasCarrossel}/>
        <Servicos servicos={servicos}/>
        <PetsAdocaoTable animais={animais}/>
    </>
  )
}

export default Main;