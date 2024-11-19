export default function List({ image, title, description }) {
  return (
    <div className="list">
      <a href="/">
        <img src={image} alt={title} />
        <h2 className="sub-title">{title}</h2>
        <p className="desc">{description}</p>
      </a>
    </div>
  );
}
