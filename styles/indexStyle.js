import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 4s steps(60, end); 
  font-size: 40px;
  font-weight: 500;

  span:nth-child(2){
  animation: type2 8s steps(60, end);
}

span{
  text-decoration: none;
}

span{
  animation: blink 1s infinite;
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}

::selection{
  background: black;
}
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  padding: 10px;
  justify-content: space-around;
  margin-top: 30px !important;
  font-weight: bold;
  border: none;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #121214;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);

 span {
  position: relative; 
  z-index: 1;
}


&:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: gray;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
  color: #121214 !important;
  
}

&:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
`;



export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20rem;
    height: 25rem;
    border-radius: 10%;
  }

  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Img = styled.img`

  transform: translateY(-10%);
  animation: floater 20s infinite;
  transition: ease 0.5s;
  width: 80px;
  height: 80px;

@keyframes floater {
  0% {
    transform: translateY(-10%);
    transition: ease 0.5s;
  }
  50% {
    transform: translateY(10%);
    transition: ease 0.5s;
  }
}
`