// Vendors
import * as z from "zod";
// Schemas
import { ResetSchema } from "../schemas/reset.schema";

export type ResetFormValuesType = z.infer<typeof ResetSchema>;
