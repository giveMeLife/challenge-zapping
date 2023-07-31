import ClientBase from "./ClientBase";

const UserClient = {
  userLogin: async (body) => {
    const { data } = await ClientBase.post("/login", body);
    return data;
  },

  createAccount: async (body) => {
    const { data } = await ClientBase.post("/users", body);
    return data;
  },
};

export default UserClient;
