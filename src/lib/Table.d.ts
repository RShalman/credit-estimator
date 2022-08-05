export type Table<H> = {
  headers: H[];
  items: TableItem<H>[];
};

export type TableItem<I> = Record<I, string | number>;
