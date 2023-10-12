import { IconContext } from 'react-icons'

interface IconProps {
  size?: number
  children: any
  className?: string
  url?: string
}

const Icon = (props: IconProps) => {
  const { size, url, children, className } = props

  const linkStyle = {
    transition: '0.3s',
  }
  const iconSize = '100px' || `${size}px`
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        style={linkStyle}
        className={className}
      >
        {children}
      </a>
    </IconContext.Provider>
  )
}

export default Icon
