import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {CONFIG} from '@/config';
export const google = createGoogleGenerativeAI({
  apiKey: CONFIG.GOOGLE_API as string,
});
