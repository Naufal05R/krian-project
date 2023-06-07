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

const array = [
  {
    title: "frame1",
    content: "content1",
  },
  {
    title: "frame2",
    content: "content2",
  },
  {
    title: "frame3",
    content: "content3",
  },
  {
    title: "frame4",
    content: "content4",
  },
  {
    title: "frame5",
    content: "content5",
  },
  {
    title: "frame6",
    content: "content6",
  },
  {
    title: "frame7",
    content: "content7",
  },
  {
    title: "frame8",
    content: "content8",
  },
  {
    title: "frame9",
    content: "content9",
  },
  {
    title: "frame10",
    content: "content10",
  },
];

const objectArray = {
  frame1: {
    obj1: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj2: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj3: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
  },
  frame02: {
    obj01: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj02: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj03: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
  },
  frame003: {
    obj001: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj002: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
    obj003: [
      {
        title: "frame1",
        content: "content1",
      },
      {
        title: "frame2",
        content: "content2",
      },
      {
        title: "frame3",
        content: "content3",
      },
    ],
  },
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

const arrayAbsolutes = Object.values(absolutes);

console.log(random(arrayAbsolutes));
console.log(random(arrayAbsolutes));
console.log(random(arrayAbsolutes));
