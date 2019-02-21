import { either } from "fp-ts/lib/Either";
import { Thing } from "./thing";

export const makeEither = () => either.of<string, boolean>(true);
export const isThing = (x: unknown) => Thing.is(x);
