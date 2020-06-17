const imgsArr = [
  ["DSC01256.JPG", "Devil's Bridge Trail Walking"],
  ["DSC01262.JPG", "Devil's Bridge Trail Corey, Deanna and Bobby"],
  ["DSC01272.JPG", "Devil's Bridge Corey, Deanna and Tina"],
  ["DSC01275.JPG", "Devil's Bridge Bobby, Deanna"],
  ["DSC01285.JPG", "Devil's Bridge Tina, Carlton"],
  ["DSC01301.JPG", "Devil's Bridge Group Closeup"],
  ["DSC01305.JPG", "Devil's Bridge Group"],
];

const imgs = imgsArr.map((i) => ({
  filename: i[0],
  description: i.length > 1 ? i[1] : null,
}));

const dir = "day2";

const macBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";
const linuxBaseDir =
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2020/corey2020bday";
const winBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";

const baseDirs = { macBaseDir, linuxBaseDir, winBaseDir };

const baseDir = baseDirs[`${Deno.build.os}BaseDir`];

const sizeDir = "/resized/size_1080x720/";

export default { baseDir, sizeDir, dir, imgs };
