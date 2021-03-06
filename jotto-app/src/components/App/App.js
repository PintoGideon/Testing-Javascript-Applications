import React from "react";
import hookActions from "../../actions/hookActions";
import Input from "../Input/Input";
import languageContext from "../contexts/languageContext";
import successContext from "../contexts/successContext";
import Congrats from "../Congrats/Congrats";
import GuessedWords from "../GuessedWords/GuessedWords";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import guessWordsContext from "../contexts/guessWordsContext";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return {
        ...state,
        language: action.payload,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: null,
  });

  const setSecretWord = (secretWord) =>
    dispatch({
      type: "setSecretWord",
      payload: secretWord,
    });

  const setLanguage = (language) =>
    dispatch({
      type: "setLanguage",
      payload: language,
    });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading.....</span>
        </div>
        <p>Loading Secret Word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <guessWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <GuessedWords />
        </guessWordsContext.GuessedWordsProvider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
