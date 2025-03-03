import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import { Theme } from "@radix-ui/themes";
import { useState } from "react"

export default function App() {
  const [isDark, setIsDark] = useState(false);

    function ChangeTheme(){
        setIsDark(!isDark);
    }

  return (
    <Theme className={isDark ? "dark" : "light"}>
      <Header changeTheme={ChangeTheme}/>
      <Slider />
      <Footer />
    </Theme>
  )
}

