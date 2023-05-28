import { rest } from "msw";

const baseURL = "https://weekend-warrior-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 7,
        username: "Jim123",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 7,
        profile_image:
          "https://res.cloudinary.com/nickdevc/image/upload/v1/media/../avatardefault_xjafxo",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200))
  })
];
