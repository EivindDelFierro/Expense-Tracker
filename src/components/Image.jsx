export default function Image(props) {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        height={props?.height ?? props.size}
        width={props?.width ?? props.size}
      />
    </>
  );
}
