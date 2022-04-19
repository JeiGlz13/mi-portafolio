import { KnowledgeInterface } from "../../interfaces/interfaces";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const TechCardItem = ({
    name, percent, image
}: KnowledgeInterface) => {
  return (
    <div className="TechCardItem">
        <div className="TechImage">
            <img src={image} alt="Ability" />
        </div>

        <div className="TechInfo">
            <div className="TechName" >
                <h1>{name}</h1>
            </div>
            <div className="TechPercent">
                <CircularProgressbar value={percent} text={`${percent}%`} />
            </div>
        </div>
    </div>
  )
}
