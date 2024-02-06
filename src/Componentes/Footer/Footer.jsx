import React from 'react'
import { ContainerFooterStyles, IconStyles} from './FooterStyles'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <ContainerFooterStyles>
        <address>Copyright © 2024 BecaShop | Designed by ClericeDev</address>
        <IconStyles>
            
            <a href="https://wa.me/1162183918" target='blank'>
                <FaWhatsapp className='wsp' />
            </a>
            <a href="https://instagram.com" target='blank'>
                <FaInstagram className='wsp' />
            </a>
            <a href="https://facebook.com" target='blank'>
                <FaFacebook className='wsp' />
            </a>
        </IconStyles>
    </ContainerFooterStyles>
  )
}

export default Footer