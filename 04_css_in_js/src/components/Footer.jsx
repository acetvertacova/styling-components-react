import styled from 'styled-components';

export default function Footer() {

  const Footer = styled.div`
    text-align: center;
    width: 1880px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.colors.border};
    color: #333;
    font-size: 14px;
    margin-top: 320px;
  `
  
    return (
      <Footer>
        © {new Date().getFullYear()}
      </Footer>
    )
    
   }