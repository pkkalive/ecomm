import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.heading}>
      <p className={classes.title}> PayPal Ecomm </p>
    </header>
  )
}

export default Header