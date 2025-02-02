import { bucket } from "./storage";
import { table } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table, bucket],
      },
    },
  },
});
api.route("GET /notes", "packages/functions/src/list.main");
api.route("POST /notes", "packages/functions/src/create.main");
api.route("GET /s3/name", {
  link: [bucket],
  handler: "packages/functions/src/api.handler",
});
api.route("GET /notes/{id}", "packages/functions/src/get.main");
api.route("PUT /notes/{id}", "packages/functions/src/update.main");
