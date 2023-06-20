const absolutes = {
  default: "inset-0",

  top: "top-0",
  bottom: "bottom-0",
  left: "left-0",
  right: "right-0",

  topLeft: "top-0 left-0",
  topRight: "top-0 right-0",

  bottomLeft: "bottom-0 left-0",
  bottomRight: "bottom-0 right-0",
};

export const shuffle = (array) => {
  const shuffledArray = [...array];
  shuffledArray.sort(() => Math.random() - 0.5);
  return shuffledArray;
};

export const random = (items) => {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
};