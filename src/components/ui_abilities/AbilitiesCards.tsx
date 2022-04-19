import { useSelector } from "react-redux"
import { AbilitiesInterface } from "../../interfaces/interfaces";
import { AbilityCard } from "./AbilityCard";

export const AbilitiesCards = () => {
  const {abilities} = useSelector((state: any) => state.abilities);

  return (
    <>
      <h1>Habilidades blandas</h1>
      <div className="AbilitiesCards">
        {
          abilities.map((ability: AbilitiesInterface) => (
            <AbilityCard key={ability.id} {...ability} />
          ))
        }
      </div>
    </>
  )
}
