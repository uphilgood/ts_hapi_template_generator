import * as Joi from "@hapi/joi";

const resultHTTPStatus: any = {
  "200": {
    description: "Success",
    schema: Joi.object({
      status: Joi.string().example("SUCCESS"),
      data: Joi.string(),
      errors: Joi.object().example({}),
    }),
  },
  "400": {
    description: "Bad Request",
  },
  "404": {
    description: "Result not found",
  },
  "405": {
    description: "Method not allowed",
  },
  "500": {
    description: "Internal Server Error",
  },
};

export const Routes = [
  {
    method: "GET",
    path: "/",
    options: {
      handler: () => ({ data: "hello World!", status: "SUCCESS", errors: {} }),
      description: "Hello World",
      notes: `Returns Hello World`,
      plugins: {
        "hapi-swagger": {
          responses: resultHTTPStatus,
        },
      },
      tags: ["api"],
      validate: {},
    },
  },
];

export default Routes;
