import ThemeSwitcher from "./ThemeSwitcher"
import styled from 'styled-components';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const HeaderTitle = styled.h1`
        font-size: 2rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.extra};
        padding-left: 20px;
    `;

export default function Header({changeTheme}) {

    return (
        <Wrapper>
            <HeaderTitle>IT Blog</HeaderTitle>
            <ThemeSwitcher onClick={changeTheme}/>
        </Wrapper>
    )
}