import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import { useState } from "react"

export default function App() {
  const [isDark, setIsDark] = useState(false);

    function ChangeTheme(){
        setIsDark(!isDark);
    }

  return (
  <div className={isDark ? "bg-black" : "bg-white"}>
      <Header changeTheme={ChangeTheme} />
      <Slider />
      <Footer />
    </div>
  )
}

