import axios from "axios";

export const getAllDogs = async () => {
  try {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (res) {
      return res.data.message;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRandomDogPhoto = async (dogName) => {
  try {
    const res = await axios.get(
      `https://dog.ceo/api/breed/${dogName}/images/random`
    );
    if (res) {
      return res.data.message;
    }
  } catch (err) {
    console.log(err);
  }
};
