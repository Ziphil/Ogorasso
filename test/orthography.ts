/* eslint-disable @typescript-eslint/naming-convention */

import {describe, expect, test} from "vitest";
import {convertCyrillicToLatin} from "../source";


describe("orthography", () => {
  test("convert cyrillic to latin", () => {
    expect(convertCyrillicToLatin("еди̂лат")).toBe("edîlat");
    expect(convertCyrillicToLatin("жу̂кке")).toBe("žûkke");
    expect(convertCyrillicToLatin("коттоси̂чло")).toBe("kottosîčlo");
    expect(convertCyrillicToLatin("беббоди̂жжамо")).toBe("bebbodîžžamo");
  });
});
