import { AbilitiesInterface } from '../../interfaces/interfaces';
export const AbilityCard = ({
  habilidad,
  descripción, 
  icono
}: AbilitiesInterface) => {
  return (
    <div className='AbilityCard' >
      <i className={icono} ></i>
      <h2>{habilidad}</h2>
      <h3>{descripción}</h3>
    </div>
  )
}
