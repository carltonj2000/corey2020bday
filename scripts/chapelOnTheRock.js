const imgsArr = [
  ["DSC01319.JPG", "Chapel On The Rock"],
  ["DSC01320.JPG", "Chapel On The Rock, Tina, Carlton And Bobby"],
  ["DSC01324.JPG", "Chapel On The Rock"],
  ["DSC01325.JPG", "Chapel On The Rock, Corey"],
  ["DSC01326.JPG", "Chapel On The Rock, Group"],
  ["DSC01327.JPG", "Chapel On The Rock, Deanna and Bobby"],
  ["DSC01328.JPG", "Chapel On The Rock, Tina and Carlton"],
];

const imgs = imgsArr.map((i) => ({
  filename: i[0],
  description: i.length > 1 ? i[1] : null,
}));

const dir = "day2nite";

const macBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";
const linuxBaseDir =
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2020/corey2020bday";
const winBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";

const baseDirs = { macBaseDir, linuxBaseDir, winBaseDir };

const baseDir = baseDirs[`${Deno.build.os}BaseDir`];

const sizeDir = "/resized/size_1080x720/";

export default { baseDir, sizeDir, dir, imgs };
