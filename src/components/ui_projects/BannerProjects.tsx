import BannerProject from '../../assets/MyProjectsBanner.webp';

export const BannerProjects = () => {
  return (
    <div className='BannerRouter'>
        <div className='BannerTitles' >
            <h1>Mis Proyectos</h1>
            <h2>
                Descubre los sitios web que he desarrollado; al igual quw otros proyectos en los que he participado como programador. 
                <br/>
                <strong>¡Pruebalos tú mismo!</strong>
            </h2> 
        </div>
        <img src={BannerProject} alt='abilities' />
    </div>
  )
}
