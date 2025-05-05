import { User } from "./types";

declare global {
  interface customJwtSessionClaims extends User {}
}
