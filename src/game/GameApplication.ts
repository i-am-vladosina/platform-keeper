import { Application as PixiApp, Point } from "pixi.js";
import { GameScene } from "./GameScene/GameScene";
import { getDPR } from "./utils/getDPR";

export class GameApplication {
  private containerNode!: HTMLElement;
  private app!: PixiApp;
  private stageDimensions!: Point;

  constructor(private readonly gameScene: GameScene) {}

  public start(containerNode: HTMLElement) {
    this.containerNode = containerNode;

    const { width, height } = this.containerNode.getBoundingClientRect();

    this.app = new PixiApp({
      background: 0xb1b8c8,
      width,
      height,
      antialias: true,
      resolution: getDPR(),
    });
    this.containerNode.appendChild(this.app.view as HTMLCanvasElement);

    (globalThis as any).__PIXI_APP__ = this.app;

    const style = this.app.view.style;
    if (style) {
      style.width = "100%";
      style.height = "100%";
    }

    this.app.stage.addChild(this.gameScene);
  }

  public getAppInstance(): PixiApp {
    return this.app;
  }

  public getStageDimensions(): Point {
    return this.stageDimensions;
  }

  public destroy() {
    this.containerNode.childNodes.forEach((child) => child.remove());
  }
}
