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
          alt="BooleStation"
        />
        <h2 className="text-white">
          Para pensar melhor, domine as leis do pensamento.
        </h2>
      </div>
    </>
  )
}
