import axios from "axios";
import { getSecretWord } from "../actions/hookActions";

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get("http://localhost:3030/");
  setSecretWord(response.data);
};

export default {
  getSecretWord,
};