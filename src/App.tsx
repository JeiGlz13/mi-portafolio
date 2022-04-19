import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactoScreen } from './components/screens/ContactoScreen';
import { BannerWelcome } from './components/ui/BannerWelcome';
import { startReadingAbilities, startReadingKnowledge } from './redux/actions/abilitiesActions';
import { Navigations } from './routes/Navigations';

function App() {
  const dispatch:(dispatch: any) => Promise<void> = useDispatch()
  
  useEffect(() => {
    dispatch(startReadingKnowledge());
    dispatch(startReadingAbilities());
  }, [dispatch])
  return (
    <div className='PortafolioApp' >
      <BannerWelcome/>
      <Navigations/>
      <ContactoScreen/>
    </div>
  );
}

export default App;
