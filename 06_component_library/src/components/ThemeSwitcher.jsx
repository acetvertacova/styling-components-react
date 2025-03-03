import {Button, Switch} from '@radix-ui/themes';

export default function ThemeSwitcher({onClick}) {

    return(
            <Switch color="iris" defaultChecked onClick={onClick}/>
    )
}