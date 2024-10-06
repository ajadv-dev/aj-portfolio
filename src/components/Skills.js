import ActiveSection from "../activeSection";

const Skills = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("skills", animationIn, animationOut)}
      id="skills"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Skills;
