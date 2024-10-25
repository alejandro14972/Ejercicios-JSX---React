export default function Vehiculo({datos}) {

const {Matricula, Marca, Modelo, Tipo} = datos;

  return (
    <div className="StyledTextComponent">
      <p>Matricula: {Matricula} - {Marca} {Modelo} ({Tipo})</p>
    </div>
  )
}


