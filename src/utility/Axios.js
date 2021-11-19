import axios from "axios";

const getAllDogs = async () => {
  try {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (res) {
      return res.data.message;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getAllDogs;
