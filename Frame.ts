/**
 * Frame contains two throws with each knocked pins
 */
export class Frame {
  private knockedPins1: number;
  private knockedPins2: number;
  private score: number;

  constructor(s1: number, s2: number) {
    this.knockedPins1 = s1;
    this.knockedPins2 = s2;
    this.score = s1 + s2;
  }

  public getKnockedPins1() {
    return this.knockedPins1;
  }

  public getKnockedPins2() {
    return this.knockedPins2;
  }

  public getScore() {
    return this.score;
  }

  public addScore(s: number) {
    this.score += s;
  }

  public isStrike(): boolean {
    return this.knockedPins1 === 10;
  }

  public isSpare(): boolean {
    const totalSpins = this.knockedPins1 + this.knockedPins2;
    return !this.isStrike() && 10 === totalSpins;
  }
}
