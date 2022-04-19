import BannerAbility from '../../assets/myAbilitiesBanner.png';

export const BannerAbilities = () => {
  return (
    <div className='BannerAbilities'>
        <div className='AbilitiesTitles' >
            <h1>Mis habilidades</h1>
            <h2>Descubre mis competencias como Ingeniero de Software, asi como mis caracteristicas sociales e interpersonales.</h2> 
        </div>
        <img src={BannerAbility} alt='abilities' />
    </div>
  )
}
