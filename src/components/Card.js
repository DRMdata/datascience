const Card = ({ title, content, link }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
    {link && <a href={link}>Ver más</a>}
  </div>
);

export default Card;
