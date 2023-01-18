import { FaArrowRight } from "react-icons/fa";
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      
      <Infos>
        <Name>Hi, i am Wesley Rodrigues<span>|</span></Name>
        <Function>FullStack Developer</Function>
        <Intro> Welcome to my Portfolio! <br/>
         I'm 27 years old, I'm married and dad of a little man.
         Passionate about technology and quite creative, I found in web development a way to express all this in one place :)<br/>
         I have knowledge in PHP, LARAVEL, JAVASCRIPT, REACT, CSS, HTML and I can learn about the technology you work <br/> 
         Want to know more about me and my work?  Just click contacts or hit the button with my projects down here
        </Intro>
        <Link href="projects">
          <LinkProjects><span> my projects <FaArrowRight /></span></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="./img/download.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}