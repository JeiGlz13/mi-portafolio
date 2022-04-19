import { KnowledgeInterface } from "../../interfaces/interfaces";
import { TechCardItem } from './TechCardItem';

interface TechCardInterface {
    name: string;
    icono: string;
    knowledge: KnowledgeInterface[],
    className?: string;
}

export const TechCard = ({
    name,
    icono,
    knowledge,
    className = 'TechCard'
}: TechCardInterface) => {
  return (
    <div className={className}>
        <img src={icono} alt="Ability" />

        <div className="TechCardItems">
            <h1>{name}</h1>
            <div className="ItemsContainer">
                {
                    knowledge?.map((know:KnowledgeInterface) => (
                        <TechCardItem key={know.id} {...know} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
