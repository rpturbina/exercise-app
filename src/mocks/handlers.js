// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // https://api.giphy.com/v1/gifs/search?api_key=5D2oLt5dgRndj2dUV2Ccnth6tJmc2v67&q=cat&limit=20

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
