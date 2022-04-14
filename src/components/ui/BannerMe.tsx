import { useTypewriter} from 'react-simple-typewriter';

export const BannerMe = () => {
    const {text} = useTypewriter({
        words: ['Desarrollador Web', 'Desarrollador Movil', 'Administrador de BD' ,'Ingeniero de Software'],
        loop: 0, // Infinit
      })

  return (
    <>
        <img src = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-5806b.appspot.com/o/20220120_121140.jpg?alt=media&token=15560dcf-6d39-4b57-a616-b3389e4b574a'
         className='MyPhoto' alt='Me' />

        <h1>¡Hola! soy <strong>Jeisson Gonzalez</strong></h1>
        <h2>Un apasionado <strong>{text}</strong></h2>
    </>
  )
}
