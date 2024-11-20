export default function Card(props) {
  return (
    <div className={`card ${props.loaded ? "animation" : ""}`}>
      <img
        width={props.detail.images["236x"].width}
        height={props.detail.images["236x"].height}
        src={props.detail.images["236x"].url}
        alt={"이미지"}
      />
    </div>
  );
}
