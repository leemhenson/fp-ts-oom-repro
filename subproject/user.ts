import { either } from "fp-ts/lib/Either";
import { URI2HKT2 } from "fp-ts/lib/HKTv14_1";
import { Thing } from "./thing";

export const makeEither = () => either.of<string, boolean>(true);
export const isThing = (x: unknown) => Thing.is(x);
