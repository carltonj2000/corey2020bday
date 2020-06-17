const imgsArr = [
  ["DSC01214.JPG", "Italian Eats NOT"],
  ["DSC01215.JPG", "Italian Eats Lamp NOT"],
  ["DSC01216.JPG", "Italian Eats Flag"],
  ["DSC01220.JPG", "Italian Eats Social Distancing"],
  ["DSC01228.JPG", "Italian Eats Patio"],
  ["DSC01230.JPG", "Italian Eats Cheese"],
  ["DSC01234.JPG", "Italian Eats Group"],
  ["DSC01238.JPG", "Italian Eats Corey Cake"],
  ["DSC01242.JPG", "Italian Eats Group Vines"],
  ["DSC01244.JPG", "Italian Eats Tina and Carlton Vines"],
  ["DSC01247.JPG", "Italian Eats Vines"],
  ["DSC01248.JPG", "Italian Eats Peach"],
];

const imgs = imgsArr.map((i) => ({
  filename: i[0],
  description: i.length > 1 ? i[1] : null,
}));

const dir = "day1";

const macBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";
const linuxBaseDir =
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2020/corey2020bday";
const winBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";

const baseDirs = { macBaseDir, linuxBaseDir, winBaseDir };

const baseDir = baseDirs[`${Deno.build.os}BaseDir`];

const sizeDir = "/resized/size_1080x720/";

export default { baseDir, sizeDir, dir, imgs };
