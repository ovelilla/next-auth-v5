// Vendors
import * as z from "zod";
// Schemas
import { RegisterSchema } from "../schemas/register.schema";

export type RegisterFormValuesType = z.infer<typeof RegisterSchema>;
