//

import fs from "fs/promises";
import {parseArgs} from "node:util";
import {readDictionary, writeDictionary} from "../source";


async function execute(): Promise<void> {
  const {values} = parseArgs({options: {
    name: {type: "string", short: "n"}
  }});
  const input = await fs.readFile(`script/file/${values.name}.zpdc`, "utf8");
  const dictionary = readDictionary(input);
  const output = writeDictionary(dictionary);
  await fs.writeFile(`script/file/${values.name}.fndc`, output);
  console.log(`${dictionary.words.length} words, ${dictionary.roots.length} roots`);
}

execute();