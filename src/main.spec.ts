import { stringIdentity } from './main';

test("stringIdentity", () => {
  expect(stringIdentity("a")).toEqual("a");
});
