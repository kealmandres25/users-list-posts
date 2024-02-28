import axios from "axios";

export default client = () => {
  const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 2000,
  });
  const getUsers = async () => {
    try {
      const res = await apiClient.get("/users");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getPosts = async () => {
    try {
      const res = await apiClient.get("/posts");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getUsers, getPosts };
};
