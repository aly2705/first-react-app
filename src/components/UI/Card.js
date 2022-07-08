import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //any value set on the className proprty will apply to the wrapper (Don't forget whitespace after the main class)
  return <div className={classes}>{props.children}</div>;

  //return <div className="card">{props.children}</div>; ==========> doesn't work, will ignore the classes set from outside
};

//Props.children (react built-in property) allows us to create wrapper elements

export default Card;
