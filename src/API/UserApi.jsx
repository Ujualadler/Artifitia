import axios from "axios";
import { useSelector } from "react-redux";

const createUserInstance = () => {
  const token = useSelector((state) => state.User.Token);

  const userInstance = axios.create({
    baseURL: "http://localhost:3000/",
  });

  userInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return userInstance;
};

export default createUserInstance;
