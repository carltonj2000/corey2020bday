import gettingThere from "./gettingThere.js";

const imgGrpsArr = [[gettingThere, "Getting There"]];
const imgGrps = imgGrpsArr.map((ig) => ({
  imgsInfo: ig[0],
  description: ig[1],
}));

const imgHash = (img) => img.replace(".JPG", "");

imgGrps.map(async (grp) => {
  const imgGrp = [];
  const arrGrp = ["const imgs = [\n"];
  grp.imgsInfo.imgs.map((imgI) => {
    console.log(imgI);
    const { image } = imgI;
    const imgH = imgHash(image);
    imgGrp.push(`import ${imgH} form "./images/${image}";\n`);
    arrGrp.push(`  ${imgH},\n`);
  });
  arrGrp.push(`];\n`);

  const outStr = imgGrp.join("") + "\n" + arrGrp.join("");

  const grpStr = (g) => Object.keys(g)[0];
  const gStr = grpStr(grp);
  const gStr2 = grpStr(grp[gStr]);
  console.log(gStr, gStr2, outStr);
  //await Deno.writeTextFile("../src/", outStr);
});
