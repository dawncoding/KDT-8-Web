import PropTypes from "prop-types";

function Food(props) {
  const redStyle = {
    color: "red",
  };

  return (
    <>
      <div>
        제가 좋아하는 음식은 <span style={redStyle}>{props.food}</span>입니다.
      </div>
    </>
  );
}

Food.propTypes = {
  food: PropTypes.string.isRequired, // food props의 타입을 문자열로 지정하고 필수로 설정합니다.
};

Food.defaultProps = {
  food: "치킨",
};

export default Food;
