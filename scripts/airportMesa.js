const imgsArr = [
  ["DSC01332.JPG", "Airport Mesa Closeup"],
  ["DSC01334.JPG", "Airport Mesa"],
  ["DSC01335.JPG", "Airport Mesa Group"],
  ["DSC01337.JPG", "Airport Mesa Tina And Carlton"],
  ["DSC01338.JPG", "Airport Mesa Court House"],
  ["DSC01342.JPG", "Airport Mesa Town"],
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
