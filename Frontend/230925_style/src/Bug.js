import "./Bug.scss";
import grass from "./grass.png";

export default function BugComponent() {
  return (
    <div className="container">
      <div className="black-eye"></div>
      <div className="white-eye"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <img src={grass} alt="grass"></img>
    </div>
  );
}
