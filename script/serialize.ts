//

import fs from "fs/promises";
import {readEntries, writeEntries} from "../source";


async function execute(): Promise<void> {
  const name = "5232";
  const input = await fs.readFile(`script/file/${name}.zpdc`, "utf8");
  const entries = readEntries(input);
  const output = JSON.stringify(writeEntries(entries), null, 2);
  await fs.writeFile(`script/file/${name}.fndc`, output);
}

execute();