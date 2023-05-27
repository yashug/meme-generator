import { Meme } from "./types";

const database: Meme[] = [
  {
    id: "1",
    template: "drake",
    values: {
      top: "Java",
      bottom: "JavaScript",
    },
  },
  {
    id: "2",
    template: "guy-looking",
    values: {
      old: "CRA",
      person: "JavaScript Dev",
      new: "Next JS",
    },
  },
  {
    id: "3",
    template: "disaster-girl",
    values: {
      tagline: "Something Funny",
    },
  },
];

export default database;
