import { TypeAnimation } from 'react-type-animation'
import ExtLink from '../../components/ext-link'

const BoolestationIntroduction = () => {
  return (
    <div className="flex justify-around items-center h-[80vh] w-full max-sm:h-[40vh] max-sm:justify-center max-sm:text-center bg-[rgba(0,0,0,0.2)] max-sm:bg-inherit my-10">
      <div className="p-6 w-7/12 h-64 max-sm:w-full max-sm:h-32">
        <TypeAnimation
          sequence={[
            'Boolestation: o que é?',
            1500,
            'Boolestation: onde encontrar?',
            1500,
            'Boolestation: como participar?',
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl text-lime-400 max-sm:text-sm max-md:text-lg max-xl:text-3xl max-2xl:text-4xl"
          repeat={Infinity}
        />
        <br />
        <p className="max-sm:text-xs max-md:text-sm text-md my-8">
          Boolestation se trata de uma{' '}
          <strong>plataforma para o aprendizado de lógica.</strong> Idealizado
          em 2023 por cinco estudantes da <b>Etec de Peruíbe</b>, o projeto visa
          viabilizar o aprendizado da lógica formal, tornando-o mais prático,
          divertido e fácil. Para conhecer mais acerca do projeto, considere
          visitar nosso{' '}
          <ExtLink href="https://instagram.com/boolestation">Instagram</ExtLink>{' '}
          e <ExtLink href="https://github.com/etec-sa/">Github</ExtLink>.
        </p>
      </div>

      <div className="boole max-sm:hidden">
        <img src="./boole.png" height="450" width="450" alt="George Boole" />
      </div>
    </div>
  )
}

export default BoolestationIntroduction
