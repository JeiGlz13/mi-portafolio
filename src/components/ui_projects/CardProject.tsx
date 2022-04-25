import { Link } from "react-router-dom"
import { ProjectsInterface } from "../../interfaces/interfaces"

export const CardProject = ({
    id,
    name,
    descripcion,
    image,
    github,
    url
}: ProjectsInterface) => {
  return (
    <div className="CardProject">
        <div className="CardImage">
            <img src={image} alt={name} />
        </div>
        <div className="CardInfo">
            <h3>{name}</h3>
            <p>{descripcion}</p>
            <div className="InfoButtons">
                <Link to={`/project/${id}`}
                className = "VerMas"
                title = "Más info" >
                    <i className="fa-solid fa-info"></i>
                </Link>

                <a href={url}
                target = '_blank'
                rel="noreferrer noopener"
                className="url"
                title="WebSite" >
                    <i className="fa-solid fa-globe"></i>
                </a>

                {
                    github && <a href={github}
                    target = '_blank'
                    rel="noreferrer noopener"
                    className="github"
                    title="GitHub" >
                        <i className="fa-brands fa-github"></i>
                    </a>
                }
            </div>
        </div>
    </div>
  )
}
