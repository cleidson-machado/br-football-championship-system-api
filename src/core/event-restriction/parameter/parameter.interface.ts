/* eslint-disable prettier/prettier */

export interface IParameter<T> {
  create(payLoad: T): Promise<T>;

  findAll(): Promise<T[] | null>;

  findOne(id: string): Promise<T | null>;

  update(id: string, payLoad: T): Promise<T>;

  remove(id: string): Promise<T>;
}
