import { S3 } from "aws-sdk";

export const s3 = () => {
  const newS3 = new S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });
  return newS3;
};
