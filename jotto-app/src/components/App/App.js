import React from "react";
import { connect } from "react-redux";

import GuessedWords from "../GuessedWords/GuessedWords";
import Congrats from "../Congrats/Congrats";
import Input from "../Input/Input";
import { getSecretWord } from "../../actions";

export class UnConnectedApp extends React.Component {
  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("State", state);
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, {
  getSecretWord,
})(UnConnectedApp);
