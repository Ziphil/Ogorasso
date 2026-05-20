//

import fs from "fs/promises";
import {parseArgs} from "node:util";
import {readEntries, writeEntries} from "../source";


async function execute(): Promise<void> {
  const {values} = parseArgs({options: {
    name: {type: "string", short: "n"}
  }});
  const input = await fs.readFile(`script/file/${values.name}.zpdc`, "utf8");
  const entries = readEntries(input);
  const output = JSON.stringify(writeEntries(entries), null, 2);
  await fs.writeFile(`script/file/${values.name}.fndc`, output);
}

execute();