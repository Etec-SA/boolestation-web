import lucaPicture from '../../../public/lucapoe.webp'
import giovannaPicture from '../../../public/giovanna.webp'
import pedroPicture from '../../../public/pedro.webp'
import gamonPicture from '../../../public/gamon.webp'
import eduardoPicture from '../../../public/eduardo.webp'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import ExtLink from '../../components/ext-link'

interface TeamMemberProps {
  name: string
  role: 'Scrum Master' | 'Product Owner' | 'Developer'
  phrase: string
  socialMedia: string[]
  photoUrl: StaticImageData
}

const TeamMembers: TeamMemberProps[] = [
  {
    name: 'Eduardo Yasui',
    role: 'Developer',
    phrase: 'Moderação na defesa da verdade é serviço prestado à mentira.',
    socialMedia: [
      'https://github.com/eduuuNk',
      'https://instagram.com/eduuu_kkj',
    ],
    photoUrl: eduardoPicture,
  },
  {
    name: 'Luca Poe',
    role: 'Scrum Master',
    phrase:
      'Sapere Aude! Tenha coragem de fazer uso do teu próprio entendimento.',
    socialMedia: [
      'https://github.com/iamthepoe',
      'https://instagram.com/lvcapoe',
    ],
    photoUrl: lucaPicture,
  },
  {
    name: 'Giovanna Nunes',
    role: 'Product Owner',
    phrase:
      'O risco do fracasso foi o preço que escolhi, pois o preço de nunca ir não podia suportar.',
    socialMedia: [
      'https://github.com/GiovannaNO',
      'https://instagram.com/giovanna10nunes',
    ],
    photoUrl: giovannaPicture,
  },
  {
    name: 'Gabriel Gamon',
    role: 'Developer',
    phrase:
      'Eu me utilizo de todos os meios da Sociedade de consumo, penetro no Sistema, mas como um veneno.',
    socialMedia: [
      'https://github.com/devgamon',
      'https://www.instagram.com/yongemici',
    ],
    photoUrl: gamonPicture,
  },
  {
    name: 'Pedro Vitor',
    role: 'Developer',
    phrase:
      'Sê humilde para evitar o orgulho, mas voa alto para alcançar a sabedoria.',
    socialMedia: [
      'https://github.com/PedroLeGarcia',
      'https://instagram.com/pedro_le_garcia',
    ],
    photoUrl: pedroPicture,
  },
]

const TeamMember = (props: TeamMemberProps) => {
  return (
    <>
      <div className="bg-black/30 w-[300px] h-[450px] flex flex-col items-center border-[1px] border-lime-500">
        <div
          id="header"
          className="w-full h-[225px] flex justify-center items-center"
        >
          <div
            className="w-[165px] h-[165px] bg-white rounded-full bg-center bg-cover"
            id="memberPhoto"
            style={{ backgroundImage: `url(${props.photoUrl.src})` }}
          ></div>
        </div>

        <div
          id="footer"
          className="w-full h-[225px] flex flex-col items-center text-center gap-3"
        >
          <span id="name">{props.name}</span>
          <small id="role" className="text-lime-300">
            {props.role}
          </small>
          <div className="w-full h-11 p-3 flex items-center">
            <p className="text-xs">{props.phrase}</p>
          </div>
          <div
            id="social-media"
            className="flex w-full h-full justify-center gap-3"
          >
            <ExtLink
              href={props.socialMedia[0]}
              aria-label={`Acesse o Github de ${props.name}`}
            >
              <AiFillGithub size={40} aria-label="Ícone do Github" />
            </ExtLink>
            <ExtLink
              href={props.socialMedia[1]}
              aria-label={`Acesse o Instagram de ${props.name}`}
            >
              <AiOutlineInstagram size={40} aria-label="Ícone do Instagram" />
            </ExtLink>
          </div>
        </div>
      </div>
    </>
  )
}

const Members = () => {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center flex-wrap gap-8">
        {TeamMembers.map((item, idx) => {
          return <TeamMember {...item} key={idx} />
        })}
      </div>
    </>
  )
}

export default Members
