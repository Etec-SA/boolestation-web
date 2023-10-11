import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="https://raw.githubusercontent.com/Etec-SA/diagrams/main/logos/DarkLogo.png"
          height="485"
          width="650"
          alt="BooleStation Logo"
        />
        <h2 className="text-white">
          Para pensar melhor, domine as leis do pensamento.
        </h2>
        <div className="flex justify-around items-center h-screen w-full">
          <div className="p-6 w-7/12 h-64">
            <h4 className="text-4xl text-white">O que é Boolestation?</h4>
            <br />
            <p className="max-sm:text-xs text-sm">
              Boolestation se trata de uma{' '}
              <strong>plataforma para o aprendizado de lógica.</strong>{' '}
              Idealizado em 2023 por cinco estudantes da <b>Etec de Peruíbe</b>,
              o projeto visa viabilizar o aprendizado da lógica formal,
              tornando-o mais prático, divertido e fácil. Para conhecer mais
              acerca do projeto, considere visitar nosso{' '}
              <ExtLink href="https://instagram.com/boolestation">
                Instagram
              </ExtLink>{' '}
              e <ExtLink href="https://github.com/etec-sa/">Github</ExtLink>.
            </p>
          </div>

          <div className="boole max-sm:hidden">
            <img
              src="./boole.png"
              height="450"
              width="450"
              alt="George Boole"
            />
          </div>
        </div>
      </div>
    </>
  )
}
