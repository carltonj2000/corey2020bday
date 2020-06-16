const imgsArr = [
  ["DSC00979.JPG", "suv on freeway"],
  ["DSC00983.JPG", "Tina in car"],
  ["DSC00983.JPG", "Corey in car"],
];

const imgs = imgsArr.map((i) => ({
  image: i[0],
  description: i.length > 1 ? i[1] : null,
}));

const dir = "day1";

const macBaseDir = "/Users/carltonjoseph/Pictures/pics2020/corey2020bday/";

const sizeDir = "/resized/size_1080x720/";

const sysDir = macBaseDir + dir + sizeDir;

export default { sysDir, dir, imgs };
