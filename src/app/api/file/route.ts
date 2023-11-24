import { S3 } from "aws-sdk";
import OpenAI from "openai";

export async function GET(request: Request) {
  const s3 = new S3({
    accessKeyId: "key-id-goes-here",
    secretAccessKey: "secret-access-key-goes-here",
    region: "eu-west-1",
  });

  return Response.json({ message: "ok" });
}
