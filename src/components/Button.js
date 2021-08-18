import React from "react";
import LangaugeContext from "../contexts/LangaugeContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  // This adds a property to the class itself.
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LangaugeContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LangaugeContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
