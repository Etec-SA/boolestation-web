import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import VerticalLogicTimeLine from '../components/VerticalTimeline'
import Icon from '../components/icon'
import { MdOutlineScience } from 'react-icons/md'
import { PiBicycleBold, PiStudentLight, PiSuitcaseLight } from 'react-icons/pi'
import { ReactNode } from 'react'
import { IconContext } from 'react-icons'
import { Chart } from '../components/chart'

const logicUtilities: Array<{ icon: ReactNode; title: string }> = [
  { icon: <MdOutlineScience size={100} />, title: 'Cientistas' },
  { icon: <PiStudentLight size={100} />, title: 'Estudantes' },
  { icon: <PiSuitcaseLight size={100} />, title: 'Trabalhadores' },
]

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
        <div className="flex justify-around items-center h-screen w-full max-sm:h-[50vh]">
          <div className="p-6 w-7/12 h-64 max-sm:w-full max-sm:h-32">
            <h4 className="text-4xl max-sm:text-2xl text-white max-sm:hidden">
              O que é Boolestation?
            </h4>
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
        <div>
          <div
            className="w-full h-5 flex justify-center items-center my-12"
            id="timelineTitle"
          >
            <h3 className="text-white max-sm:text-xl text-2xl">
              Uma breve história da Lógica
            </h3>
          </div>
          <VerticalLogicTimeLine />
        </div>
        <div className="w-full  h-screen my-24 flex items-center flex-col max-sm:my-12">
          <h3 className="text-xl">A quem a Lógica importa?</h3>
          <div className="w-full">
            <ul className="flex justify-around my-12 max-sm:flex-col max-sm:my-6">
              {logicUtilities.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="flex flex-col justify-center items-center max-sm:my-2"
                  >
                    {item.icon}
                    <small>{item.title}</small>
                  </li>
                )
              })}
            </ul>
          </div>
          <h4 className="text-center my-8">
            Uma{' '}
            <a href="#" target="_blank">
              pesquisa de mercado
            </a>{' '}
            foi feita pelo grupo, e a seguinte pergunta foi feita:
            <br /> "Você considera Lógica importante para a vida profissional ou
            acadêmica?"
          </h4>
          <Chart />
        </div>
      </div>
    </>
  )
}
