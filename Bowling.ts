import { Player } from "./Player";
import { Frame } from "./Frame";

export class Bowling {
  private framesCount = 10;
  private players: Player[];

  constructor(players: Player[]) {
    this.players = players;
    this.input();
  }

  protected input() {
    for (let r = 0; r < this.framesCount; r++) {
      const isLast = r === this.framesCount - 1;
      for (let p = 0; p < this.players.length; p++) {
        const spin1 = Math.floor(Math.random() * 11);
        const spin2 = Math.floor(Math.random() * (11 - spin1));
        const spin3 = isLast ? Math.floor(Math.random() * 11) : ``;

        const frame = new Frame(spin1, spin2);
        const player = this.players[p];

        const lastPlayerFrame = player.getLastFrame();
        if (lastPlayerFrame) {
          if (lastPlayerFrame.isStrike()) {
            lastPlayerFrame.addScore(spin1 + spin2);
          } else if (lastPlayerFrame.isSpare()) {
            lastPlayerFrame.addScore(spin1);
          }
        }

        // Third throw when in last frame
        if (isLast) {
          frame.addScore(spin3 as any);
        }

        // Complete the frame
        player.addFrame(frame);
      }
    }
  }

  /**
   * Render the score of players
   */
  render() {
    let output = ``;
    this.players.forEach((p) => {
      let score = 0;
      output = p.getFrames().reduce((o, f, index) => {
        score += f.getScore();
        const isLast = index === p.getFrames().length - 1;
        const lastThrow = isLast
          ? ` ${f.getScore() - (f.getKnockedPins1() + f.getKnockedPins2())}`
          : ``;
        let suffix = `` as any;
        if (!isLast) {
          if (f.isStrike()) {
            suffix = " X";
          } else if (f.isSpare()) {
            suffix = " /";
          }
        }

        return `${o} (${f.getKnockedPins1()} ${f.getKnockedPins2()}${lastThrow}${suffix}, ${score})`;
      }, ``);

      console.log(`Player ${p.getName()}>`, output);
    });

    return output;
  }
}
