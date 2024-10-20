import classes from './header.module.css'
function Header(){
    return(
        <header className={classes.header}>
            <ul className={classes.ul}>
                <li className={classes.li}>Basic Counter</li>
            </ul>
        </header>
    )
}

export default Header