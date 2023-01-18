import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'
import { Form, Input, TextArea, LinkEmail } from './style'


export default function Contact() {
  return (
    <Container>  
      <Content>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Telphone" />
          <TextArea placeholder="Send me a message"></TextArea>
          <LinkEmail><span> Send <FaArrowRight /></span></LinkEmail>
        </Form>
        <li>
          <a href="https://www.linkedin.com/in/programadorwes" >
            <ItemContact 
            IconFa={FaLinkedin}/>
          </a>
          
          <a href="https://www.instagram.com/programadorwes">
            <ItemContact 
              IconFa={FaInstagram} 
            />
          </a>

          <a href="wesrodriguez@outlook.com.br">
            <ItemContact 
              IconFa={FaEnvelope} 
            /> 
          </a>
        </li>
      </Content>     
    </Container>
  )
}