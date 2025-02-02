import { Resource } from "sst";
import { Handler } from "aws-lambda";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `Hi, Linked S3 Bucket ${Resource.Uploads.name}.`,
  };
};
