import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import styled from 'styled-components';
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

    function ChangeTheme(){
        setIsDark(!isDark);
    }

    const Theme = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${({isDark}) => (isDark ? '#242424' : '#f2eee9')};
    `

  return (
    <Theme isDark={isDark}>
      <Header changeTheme={ChangeTheme} />
      <Slider />
      <Footer />
    </Theme>
  )
}

