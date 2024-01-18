/* eslint-disable prettier/prettier */

export interface ICalendarScope<T> {
  saveOne(payLoad: T): Promise<T>;

  getAll(): Promise<T[] | null>;

  getOne(id: string): Promise<T | null>;

  setOne(id: string, payLoad: T): Promise<void>;

  deleteOne(id: string): Promise<void>;
}
