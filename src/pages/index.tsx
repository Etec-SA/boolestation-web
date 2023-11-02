import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import LogicHistory from './atoms/LogicHistory'
import LogicImportance from './atoms/LogicImportance'
import BoolestationIntroduction from './atoms/BoolestationIntroduction'
import Banner from './atoms/Banner'
import LogicArguments from './atoms/LogicArguments'
import Frege from './atoms/Frege'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <Banner />
        <BoolestationIntroduction />
        <LogicHistory />
        <LogicImportance />
        <LogicArguments />
        <Frege />
      </div>
    </>
  )
}
