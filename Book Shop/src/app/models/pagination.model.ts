import { IProduct } from './book.model';

export interface IPagination {
  index: number;
  size: number;
  count: number;
  data: IProduct[];
}
export class Pagination implements IPagination {
  index!: number;
  size!: number;
  count!: number;
  data: IProduct[] = [];
}