import Image from "next/image"

export default function Img(props) {
    return (
      <div style={{maxWidth: "100%", position: 'relative', background: "red"}}>
        <Image {...props} layout="responsive" unsized />
      </div>
    )
  }