import { ArrayUtils } from "src/game/utils/ArrayUtils";
import { IRandom } from "src/game/utils/random/IRandom";

export enum TrackSystemItemStatus {
  InQueue = "InQueue",
  Success = "Success",
  Fail = "Fail",
}

export interface TrackModelItem {
  id: number;
  status: TrackSystemItemStatus;
}

export class TrackModel {
  public items: (TrackModelItem | null)[];

  constructor(private readonly random: IRandom) {
    this.items = [];
  }

  public generate(count: number) {
    this.items = ArrayUtils.range(0, count).map((key) =>
      this.random.generateIntegerNumber(0, 100) > 30 ? { id: key, status: TrackSystemItemStatus.InQueue } : null
    );
  }

  public getItemByKey(key: number): TrackModelItem | null {
    return this.items[key];
  }

  public getItemById(id: number): TrackModelItem | null {
    return this.items.find((item) => item?.id === id) || null;
  }

  public setSuccess(id: number) {
    const item = this.getItemById(id);
    if (item === null) return;

    item.status = TrackSystemItemStatus.Success;
  }

  public setFail(id: number) {
    const item = this.getItemById(id);
    if (item === null) return;

    item.status = TrackSystemItemStatus.Fail;
  }
}
