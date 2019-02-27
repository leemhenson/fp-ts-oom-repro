import { makeEither } from "sp/user";
import { either } from "fp-ts/lib/Either";
import { option } from "fp-ts/lib/Option";
import { HKT2 } from "fp-ts/lib/HKTv14_1";
import { Thing } from "sp/thing";

export const doThing = () =>
  makeEither()
    .chain(v => either.of<string, boolean>(!v))
    .chain(v => Thing.decode({ name: String(v) })
      .mapLeft(errs => JSON.stringify(errs)));

export const doOther = () =>
  option.of(123);
