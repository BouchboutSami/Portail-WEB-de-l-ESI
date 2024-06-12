import React from 'react'
import "../styles/postgradcard.css"
import Image from 'next/image'
import ButtonIcon from './Buttons/ButtonIcon';

const CardPostGrad = ({ imageSrc, title, buttonLink }) => {
  return (
    <div className="PGcard">
      <div className="PGcard-top">
        <img src={imageSrc} alt="LogoLabo" className="LogoLabo"/>
        <h2 className="TitleLabo">{title}</h2>
      </div>
      <div className="PGCardBottom">
        <ButtonIcon 
        title={"Discover"}
        link={buttonLink}/>
      </div>
    </div>
  )
}

export default CardPostGrad