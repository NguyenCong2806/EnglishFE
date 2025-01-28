import ResultData from "../model/result";

export interface IService<T> {
   add(u: T): Promise<ResultData>;
   upload(file: File): Promise<string>;
}