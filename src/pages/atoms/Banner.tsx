import Image from 'next/image'
import logo from '../../../public/DarkLogo.png'

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={logo}
          width={1080}
          height={323}
          alt="BooleStation Logo"
          priority
        />
        <h2 className="text-white">
          Para pensar melhor, domine as leis do pensamento.
        </h2>
      </div>
    </>
  )
}

export default Banner
