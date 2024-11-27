import { z } from "zod";

export const createChatSchema = z
  .object({
    title: z
      .string()
      .min(4, { message: "Chat title must be 4 Characters long" }),
    passcode: z
      .string()
      .min(4, { message: "Chat passcode must be 4 Characters long" })
      .max(25, { message: "Chat passcode must be less than 25 characters" }),
  })
  .required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
