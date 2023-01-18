import React, { useState } from 'react'
import { Container, Line, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Wesley Rodrigues
          </Title>
          <SubTitle>
            Porfólio
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            Home
          </Link>
          <Link href="projects">
            Projects
          </Link>
          <Link href="contact">
            Contacts
          </Link>
        </NavLinks>
      </Content>
      <Line></Line>
    </Container>
  )
}