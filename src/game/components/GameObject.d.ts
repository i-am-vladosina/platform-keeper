export interface GameObject {
  create(): void;
  update?(): void;
}
