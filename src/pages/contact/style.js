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
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }

  li{
    display: flex;
  }
`;

export const Form = styled.form`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 60%;
    margin: 20px auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 2px solid white;
    background: none;
    color: var(--text-color);
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-block-end-color: unset;
    margin-bottom: 10px;
    margin-right: 20px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: 2px solid white;
    background: none;
    color: var(--text-color);
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-block-end-color: unset;
    margin-bottom: 10px;
    margin-right: 20px;
`;


export const LinkEmail = styled.button`
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
  padding: 25px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  flex-direction: column;

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
`