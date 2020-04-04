import { Frame } from "./Frame";

/**
 * Player shoots Frames
 */
export class Player {
  private name: string;
  private frames: Frame[];
  private lastFrame: Frame | null;

  constructor(name: string) {
    this.name = name;
    this.frames = [];
    this.lastFrame = null;
  }

  public getName() {
    return this.name;
  }

  public getFrames() {
    return this.frames;
  }

  /**
   * Shoots a frame
   */
  public addFrame(f: Frame) {
    this.lastFrame = f;
    this.frames.push(f);
  }

  /**
   * Gets last frame
   */
  public getLastFrame() {
    return this.lastFrame;
  }
}
