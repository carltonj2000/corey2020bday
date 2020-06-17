import * as path from "https://deno.land/std/path/mod.ts";
import { exists } from "https://deno.land/std/fs/mod.ts";
import * as c from "https://deno.land/std/fmt/colors.ts";

import gettingThere from "./gettingThere.js";
import giftTime from "./giftTime.js";
import cathedralRock from "./cathedralRock.js";
import airportSunset from "./airportSunset.js";
import italianEats from "./italianEats.js";
import devilsBridge from "./devilsBridge.js";
import sedona from "./sedona.js";
import chapelOnTheRock from "./chapelOnTheRock.js";
import airportMesa from "./airportMesa.js";

const imgGrpsArr = [
  [{ gettingThere }, "Getting There"],
  [{ giftTime }, "Gift Time"],
  [{ cathedralRock }, "Cathedral Rock"],
  [{ airportSunset }, "Airport At Sunset"],
  [{ italianEats }, "Italian Eats"],
  [{ devilsBridge }, "Devil's Bridge"],
  [{ sedona }, "Sedona"],
  [{ chapelOnTheRock }, "Chapel On The Rock"],
  [{ airportMesa }, "Airport Mesa"],
];

const grpStr = (g) => Object.keys(g)[0];

const imgGrps = imgGrpsArr.map((ig) => {
  const description = ig[1];
  const name = grpStr(ig[0]);
  const imgInfo = ig[0][name];
  return { name, description, ...imgInfo };
});

// TODO: real hash of file
const imgHash = (img) => img.replace(".JPG", "");

imgGrps.map(async (grp) => {
  const imgGrp = [];
  const arrGrp = [];

  for (const img of grp.imgs) {
    const { filename, description } = img;
    const { baseDir, dir, sizeDir } = grp;
    const relFnSub = path.join(dir, sizeDir, filename);
    const relFn = path.join(Deno.cwd(), "./src/images", relFnSub);
    const absFn = path.join(baseDir, relFnSub);
    const relFnEx = await exists(relFn);
    const absFnEx = await exists(absFn);
    if (!(absFnEx && relFnEx)) {
      console.log(c.red(`Error! ${filename} skipped.`));
      console.log(` ${absFnEx} ${c.gray(absFn)}`);
      console.log(` ${relFnEx} ${c.gray(relFn)}`);
      return;
    }

    const imgH = imgHash(filename);
    imgGrp.push(
      `import ${imgH} from "./${path.join("./images", relFnSub)}";\n`
    );
    const imgFn = `  { img: ${imgH}, filename: "${filename}"`;
    const des = (description ? `, description: "${description}"` : "") + "},\n";
    arrGrp.push(imgFn + des);
  }

  const arrGrpStr = "\nexport default [\n" + arrGrp.join("") + "]\n";
  const header = `// DO NOT edit. Auto generated.`; // on ${new Date()}\n\n`;
  const outStr = header + imgGrp.join("") + arrGrpStr;

  const outFn = path.join(Deno.cwd(), "./src", `${grp.name}.js`);
  await Deno.writeTextFile(outFn, outStr);
  console.log(c.green("Generated"), c.gray(grp.name));
});
