const imgsArr = [
  ["DSC01018.JPG", "Cathedral Rock"],
  ["DSC01024.JPG", "Cathedral Rock Group Shot At Bottom"],
  ["DSC01028.JPG", "Cathedral Rock Bobby"],
  ["DSC01029.JPG", "Cathedral Rock Deanna"],
  ["DSC01030.JPG", "Cathedral Rock Corey"],
  ["DSC01031.JPG", "Cathedral Rock Carlton"],
  ["DSC01033.JPG", "Cathedral Rock Group Mid Way Up"],
  ["DSC01034.JPG", "Cathedral Rock Group Mid Way Up Close Up"],
  ["DSC01051.JPG", "Cathedral Rock Top Corey"],
  ["DSC01055.JPG", "Cathedral Rock Top Group"],
  ["DSC01058.JPG", "Cathedral Rock Top Tina Cliff"],
  ["DSC01080.JPG", "Cathedral Rock Top Tina And Carlton Cliff"],
  ["DSC01130.JPG", "Cathedral Rock Top Deanna And Bobby Cliff"],
  ["DSC01142.JPG", "Cathedral Rock Top Deanna Cliff"],
  ["DSC01151.JPG", "Cathedral Rock Top Pic Of Chapel On The Rock"],
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
