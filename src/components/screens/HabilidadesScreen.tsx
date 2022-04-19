import { AbilitiesCards } from "../ui_abilities/AbilitiesCards";
import { BannerAbilities } from '../ui_abilities/BannerAbilities';
import { TechCards } from "../ui_abilities/TechCards";

export const HabilidadesScreen = () => {
  
  return (
    <div className="HabilidadesScreen">
      <BannerAbilities/>
      <AbilitiesCards/>
      <TechCards/>
    </div>
  )
}
