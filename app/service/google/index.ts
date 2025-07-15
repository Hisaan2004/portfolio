import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {CONFIG} from '@/config';
export const google = createGoogleGenerativeAI({
  apiKey: CONFIG.GOOGLE_API_KEY as string,
});
{/*import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { CONFIG } from "@/config";

export const getGoogleModel = () =>
  createGoogleGenerativeAI({
    apiKey: CONFIG.GOOGLE_API_KEY,
  });*/}