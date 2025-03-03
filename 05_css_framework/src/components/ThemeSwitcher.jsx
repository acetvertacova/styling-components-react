export default function ThemeSwitcher({onClick}) {

    return(
        <div>
            <button className="text-font px-4 py-2 border border-font rounded-lg cursor-pointer hover:bg-border shadow-md" onClick={onClick}>Switch theme</button>
        </div>
    )
}