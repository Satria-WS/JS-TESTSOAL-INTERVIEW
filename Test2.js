//Test2
const Color = {
  black: "0",
  brown: "1",
  red: "2",
  orange: "3",
  yellow: "4",
  green: "5",
  blue: "6",
  violet: "7",
  grey: "8",
  white: "9",
};

const colorsResistors = { ...Color };
function checkResistors(colors) {
  return (colorsResistors[colors[0]] + colorsResistors[colors[1]]) * 1;
}
const dobleColor = [
  ["brown", "black"],
  ["blue", "grey"],
  ["yellow", "violet"],
  ["orange", "orange"],
  ["green", "brown", "orange"],
];

const outputColor = (dobleColor) => {
  for (let i = 0; i < dobleColor.length; i++) {
    console.log(checkResistors(dobleColor[i]));
  }
};

outputColor(dobleColor);
