import { ReactNode } from 'react'
import { MdOutlineScience } from 'react-icons/md'
import { PiStudentLight, PiSuitcaseLight } from 'react-icons/pi'
import { Chart } from '../../components/chart'

const logicUtilities: Array<{ icon: ReactNode; title: string }> = [
  { icon: <MdOutlineScience size={100} />, title: 'Cientistas' },
  { icon: <PiStudentLight size={100} />, title: 'Estudantes' },
  { icon: <PiSuitcaseLight size={100} />, title: 'Trabalhadores' },
]

const LogicImportance = () => {
  return (
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
      <h4 className="text-center my-8 p-2">
        Uma{' '}
        <a href="#" target="_blank">
          pesquisa de mercado
        </a>{' '}
        foi feita pelo grupo, e a seguinte pergunta foi feita:
        <br /> <br />
        <span className="underline underline-offset-4">
          "Você considera Lógica importante para a vida profissional ou
          acadêmica?"
        </span>
      </h4>
      <Chart />
    </div>
  )
}

export default LogicImportance
