import ThemeSwitcher from "./ThemeSwitcher"

export default function Header({theme}){

    return(
        <header className='header'>
            <h2 className='header__title'>IT Blog</h2>
            <ThemeSwitcher onClick={theme} />
        </header>
    )
}