import { Bowling } from "./Bowling";
import { Player } from "./Player";

const players = [
  new Player("A"),
  new Player("B"),
  new Player("C"),
  new Player("D"),
  new Player("E"),
  new Player("F"),
];

const bowling = new Bowling(players);
bowling.render();
