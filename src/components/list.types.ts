export type Item = {
  id: number;
  data: {
    name: string;
    bought: boolean;
    desc?: string;
  };
};

export type List = {
  id: number;
  name: string;
  items: Array<Item>;
};
