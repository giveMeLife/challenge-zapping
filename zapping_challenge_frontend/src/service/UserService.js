import UserClient from "./client/UserClient";

const UserService = {
  userLogin: async (body) => {
    const data = await UserClient.userLogin(body);
    return data;
  },

  createAccount: async (body) => {
    const data = await UserClient.createAccount(body);
    return data;
  },
};

export default UserService;
