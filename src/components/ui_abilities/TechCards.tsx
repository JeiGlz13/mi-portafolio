import { useSelector } from 'react-redux';
import { TechCard } from './TechCard';
export const TechCards = () => {
    const {languages, databases, frameworks, ui, tools} = useSelector((state:any) => state.abilities);
    console.log(languages)
  return (
    <>
        <h1>Mis conocimientos</h1>
        <div className="TechCards">
            <TechCard {...languages} knowledge = {languages.language} />
            <TechCard {...databases} knowledge = {databases.database} />
            <TechCard {...frameworks} knowledge = {frameworks.framework} className ='TechCard-full' />
            <TechCard {...ui} knowledge = {ui.ui} className ='TechCard-full' />
            <TechCard {...tools} knowledge = {tools.tool} className ='TechCard-full' />
        </div>
    </>
  )
}
