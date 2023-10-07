import { client } from "../Model/Clients.js";

export const register_user = (req, res) => {
  const cl = {
    kid: 6969,
    name: "Wada",
    dob: "11/11/1999",
    contact: 987465123,
    email: "wada69@gmail.com",
    gender: "Male",
    address: {
      addline1: "Somewhere",
      addline2: "Over",
      state: "Punjab",
      city: "Phagwara",
      pincode: 1444107,
    },
    aad: 123476512354,
  };
  client
    .create(cl)
    .then((success) => {
      res.send(cl);
    })
    .catch((err) => console.log(err));
};
