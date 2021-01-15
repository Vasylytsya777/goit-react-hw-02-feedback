import Proptypes from "prop-types";
import Sect from "./SectionStyled";

function Section({ title, children }) {
  return (
    <Sect>
      <h2 className="title">{title}</h2>
      {children}
    </Sect>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Section;
