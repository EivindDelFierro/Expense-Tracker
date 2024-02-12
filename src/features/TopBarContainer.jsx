import Logo from "../components/logo";

export default function TopBarContainer(props) {
  return (
    <div id="top-bar-container">
      <Logo type="full" size={7} />
      <Logo type="named" size={20} />
      <Logo type="icon" size={7} />
      this is the topBarContainer1
    </div>
  );
}
