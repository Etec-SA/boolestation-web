import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import ExtLink from '../../components/ext-link'

interface TeamMemberProps {
  name: string
  role: 'Scrum Master' | 'Product Owner' | 'Developer'
  phrase: string
  socialMedia: string[]
  photoUrl: string
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
    photoUrl:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-514975318.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
  },
  {
    name: 'Luca Poe',
    role: 'Scrum Master',
    phrase: 'Se a verdade os mata, deixe-os morrer.',
    socialMedia: [
      'https://github.com/iamthepoe',
      'https://instagram.com/lvcapoe',
    ],
    photoUrl:
      'https://br.web.img3.acsta.net/c_310_420/pictures/15/07/20/18/14/582462.jpg',
  },
  {
    name: 'Giovanna Nunes',
    role: 'Product Owner',
    phrase: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    socialMedia: [
      'https://github.com/GiovannaNO',
      'https://instagram.com/giovanna10nunes',
    ],
    photoUrl:
      'https://i.em.com.br/0KnhIQUwMdjoWt1F38YBBP9-9xw=/1200x900/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/12/15/1433846/monark-foi-integrante-do-flow-podcast_1_67873.jpg',
  },
  {
    name: 'Gabriel Gamon',
    role: 'Developer',
    phrase: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    socialMedia: [
      'https://github.com/devgamon',
      'https://www.instagram.com/yongemici',
    ],
    photoUrl:
      'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/45/01/20200286.jpg',
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
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BZTJhNjc2YWItNTIwMC00ZjlmLWFjOTAtMWUzODAwZjIyOTdkXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
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
            style={{ backgroundImage: `url(${props.photoUrl})` }}
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
          <p className="text-xs">{props.phrase}</p>
          <div
            id="social-media"
            className="flex w-full h-full justify-center gap-3"
          >
            <ExtLink href={props.socialMedia[0]}>
              <AiFillGithub size={40} />
            </ExtLink>
            <ExtLink href={props.socialMedia[1]}>
              <AiOutlineInstagram size={40} />
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
