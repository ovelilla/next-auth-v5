// Vendors
import * as z from "zod";
// Schemas
import { LoginSchema } from "../schemas/login.schema";

export type LoginFormValuesType = z.infer<typeof LoginSchema>;
