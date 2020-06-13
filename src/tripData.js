const locations = [
  ["6/13/20", "Slide rock", "Sunset", "https://bit.ly/2MWgmst"],
  ["6/13/20", "Blue rock", "Sunset", null],
  ["6/13/20", "Pink rock", "Sunset", null],
  ["6/14/20", "Devils Bridge Trail", "Details", "https://bit.ly/3foW5YN"],
  ["6/14/20", "Black rock", "Sunset", null],
  ["6/14/20", "Gray rock", "Sunset", null],
  ["6/15/20", "Cathedral Rock", "Sunset", null],
  ["6/15/20", "Fred rock", "Sunset", null],
  ["6/15/20", "Bed rock", "Sunset", null],
];
export default {
  locations: locations.map((l) => ({
    date: l[0],
    at: l[1],
    details: l[2],
    link: l[3],
  })),
};
