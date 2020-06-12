import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions/index";

export class UnConnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: "",
    };
  }
  render() {
    const contents =
      this.props.success === true ? (
        <div className="correct-guess">Congratulations !</div>
      ) : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={(event) => {
              this.setState({
                currentGuess: event.target.value,
              });
            }}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              const guessedWord = this.state.currentGuess;

              if (guessedWord && guessedWord.length > 0) {
                this.props.guessWord(guessedWord);
                this.setState({
                  currentGuess: "",
                });
              }
            }}
          >
            Submit
          </button>
        </form>
      );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, {
  guessWord,
})(UnConnectedInput);
