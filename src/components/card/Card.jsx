import classes from './Card.module.scss';

function Card() {
  return (
    <div className={classes.container}>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </div>
  ) 
}
export default Card;