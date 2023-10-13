import ExtLink from '../../components/ext-link'

const BoolestationIntroduction = () => {
  return (
    <div className="flex justify-around items-center h-screen w-full max-sm:h-[50vh]">
      <div className="p-6 w-7/12 h-64 max-sm:w-full max-sm:h-32">
        <h4 className="text-4xl max-sm:text-2xl text-white max-sm:hidden">
          O que é Boolestation?
        </h4>
        <br />
        <p className="max-sm:text-xs text-sm">
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
