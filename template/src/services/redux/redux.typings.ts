export type TActionCombiner<T> = T extends { [key: string]: infer U }
  ? U
  : never;
