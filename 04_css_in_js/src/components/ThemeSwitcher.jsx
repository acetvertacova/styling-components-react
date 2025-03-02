import styled from 'styled-components';

const Button = styled.button`
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
        border-color: 1px solid ${(props) => props.theme.colors.border};
        padding: 10px;
        margin-top: 19px;
        margin-right: 15px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors.border};
        }  
    `

export default function ThemeSwitcher({onClick}) {

    return(
        <div>
            <Button onClick={onClick}>Switch theme</Button>
        </div>
    )
}