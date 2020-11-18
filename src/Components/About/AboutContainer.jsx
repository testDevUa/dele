import aboutReducer from "../../redux/aboutReducer";

const { connect } = require("react-redux");
const { default: About } = require("./About");

let mapStateToProps = (state) => {
    return state.aboutReducer
}

let mapDispatchToProps = () => {
    return {}
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;