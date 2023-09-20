import * as User from "../model/MUser.js";

export const index = (req, res) => {
  res.render("index");
};

export const signup = (req, res) => {
  res.render("signup");
};

export const post_signup = async (req, res) => {
  try {
    await User.post_signup(req.body);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
    res.send({ result: false });
  }
};
