import ThemeSwitcher from "./ThemeSwitcher";

export default function Header({ changeTheme }) {
  return (
    <header className={"py-4 px-10 flex justify-between bg-secondary items-center w-full"}>
      <h1 className="text-4xl text-font font-bold px-4 py-2 hover:text-border">IT Blog</h1>
      <ThemeSwitcher onClick={changeTheme} />
    </header>
  );
}
