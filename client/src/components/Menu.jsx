import DividerRed from "./DividerRed";
// this divider has absolute positioning and therfore used inside relative parent
function Menu() {
  return (
    <div className=" relative h-screen ">
      <DividerRed />
      <div className="pt-28">hello</div>
    </div>
  );
}

export default Menu;
