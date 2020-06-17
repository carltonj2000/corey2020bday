const imgsArr = [
  ["DSC01153.JPG", "Airport Sunset Bobby And Deanna Back"],
  ["DSC01156.JPG", "Airport Sunset Corey, Bobby And Deanna"],
  ["DSC01175.JPG", "Airport Sunset Cockscomb"],
  ["DSC01178.JPG", "Airport Sunset Corey, Bobby And Deanna"],
  ["DSC01180.JPG", "Airport Sunset Corey, Bobby And Deanna"],
  ["DSC01182.JPG", "Airport Sunset Tina and Carlton"],
  ["DSC01197.JPG", "Airport Sunset Town"],
  ["DSC01199.JPG", "Airport Sunset Town"],
  ["DSC01202.JPG", "Airport Sunset Restaurant"],
  ["DSC01203.JPG", "Airport Sunset Restaurant Corey, Bobby, Tina, Deanna"],
  ["DSC01206.JPG", "Airport Sunset Restaurant Corey, Carlton, Tina, Deanna"],
  ["DSC01209.JPG", "Airport Sunset Restaurant Tina"],
  ["DSC01212.JPG", "Airport Sunset Town"],
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
