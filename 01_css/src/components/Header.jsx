import Toggle from "./Toggle"

export default function Header({theme}){

    return(
        <header className='header'>
            <h2 className='title'>IT Blog</h2>
            <Toggle onClick={theme} />
        </header>
    )
}