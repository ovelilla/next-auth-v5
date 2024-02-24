// Vendors
import * as z from "zod";
// Schemas
import { NewPasswordSchema } from "../schemas/new-password.schema";

export type NewPasswordFormValuesType = z.infer<typeof NewPasswordSchema>;
