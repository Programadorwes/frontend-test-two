import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Line = styled.hr `
	display:block;
	position: absolute;
	z-index:-1;
    margin-top: 100px;
	left: 0px;
	width:100%;
	-webkit-animation: thread2 10s infinite;
  	-moz-animation:    thread2 10s infinite;
  	-o-animation:      thread2 10s infinite;
  	animation:         thread2 10s infinite;

 .right{
	left:auto;
	right:0px;
}


@keyframes thread2 {
	  0%   { width: 100%; }
	  50% { width: 100%; }
	  80% { width: 0px;}
	  100%{ width:100%;}
	}

`



export const Title = styled.div`
  font-size: 30px;
`;

export const NavLinks = styled.nav`
  z-index: 99 !important;
  display: flex;
  gap: 20px;
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 50px;
  
  &.active {
    background-color: transparent;
    color: white;
    border-bottom: 1px solid  white;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  } 
  &:hover{
    border-bottom: 1px solid white;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;
