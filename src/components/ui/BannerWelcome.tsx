import Banner from '../../assets/Banner/BannerCoffeeComputer.jpg';
import { BannerButtons } from './BannerButtons';
import { BannerMe } from './BannerMe';
import { MyInfoCard } from './MyInfoCard';

export const BannerWelcome = () => {
  return (
    <div className="BannerWelcome">
        <img src={Banner} alt="Banner"
        className='BannerImage' />

        <div className='BannerMe' >
          <BannerMe/>
          <BannerButtons/>
          <MyInfoCard/>
        </div>

        
    </div>
  )
}
