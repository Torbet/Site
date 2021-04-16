import Image from 'next/image'

export default function Img(props) {
    return <img {...props} style={{width: '100%', height: 'auto'}} />
  }