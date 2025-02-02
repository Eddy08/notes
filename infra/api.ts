import { bucket } from "./storage";
import { table } from "./storage";
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table,bucket],
      },
    },
  },
});
api.route("POST /notes", "packages/functions/src/create.main");
api.route("GET /s3/name", {
  link: [bucket],
  handler: "packages/functions/src/api.handler",
});
