import Image from "./image";
import mainImage from "../assets/SavvyLogo.png";

export default function Logo(props) {
  const logo = <Image src={mainImage} alt={props.alt} size={props.size} />;

  switch (props.type) {
    case "full":
      return (
        <div className="full-logo">
          {logo}
          <p>Savvy</p>
        </div>
      );
    default:
      return <>{logo}</>;
  }
}
