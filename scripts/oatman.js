const imgsArr = [
  ["DSC01372.JPG", "Oatman Corey"],
  ["DSC01374.JPG", "Oatman Donkey Closeup"],
  ["DSC01377.JPG", "Oatman Donkey Tina Deanna"],
  ["DSC01379.JPG", "Oatman Main Street"],
  ["DSC01382.JPG", "Oatman Bunny"],
  ["DSC01386.JPG", "Oatman Bobby Corey Deanna Tina"],
  ["DSC01387.JPG", "Oatman Tina"],
  ["DSC01394.JPG", "Oatman Fans"],
  ["DSC01395.JPG", "Oatman Three Donkeys"],
  ["DSC01399.JPG", "Oatman No Peein'"],
  ["DSC01406.JPG", "Oatman Saloon"],
  ["DSC01408.JPG", "Oatman Tina Husband"],
  ["DSC01409.JPG", "Oatman Rock"],
  ["DSC01414.JPG", "Oatman Rock Tina And Two Donkeys"],
];

const imgs = imgsArr.map((i) => ({
  filename: i[0],
  description: i.length > 1 ? i[1] : null,
}));

const dir = "day3";

const macBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";
const linuxBaseDir =
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2020/corey2020bday";
const winBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";

const baseDirs = { macBaseDir, linuxBaseDir, winBaseDir };

const baseDir = baseDirs[`${Deno.build.os}BaseDir`];

const sizeDir = "/resized/size_1080x720/";

export default { baseDir, sizeDir, dir, imgs };
