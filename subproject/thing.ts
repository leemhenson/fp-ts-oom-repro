import * as t from "io-ts";

export const Thing = t.type({
  name: t.string,
});

export type Thing = t.TypeOf<typeof Thing>;
