import Image from "next/image"

interface obj {
  containerStyles:string;
  imgSrc:string;
}
const DevImg = ({containerStyles, imgSrc}:obj) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt=""/>
    </div>
  )
}

export default DevImg
