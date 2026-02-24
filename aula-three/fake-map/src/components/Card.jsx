
function Card({title,price,category,src,alt,description}) {
  return (
    <>
    <div>
    <img src={src} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{price}</p>
    </div>
    </>
  );
}

export default Card;
