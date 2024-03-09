// Vendors
import * as z from "zod";
// Schemas
import { SettingsSchema } from "../schemas/settings.schema";

export type SettingsFormValuesType = z.infer<typeof SettingsSchema>;
