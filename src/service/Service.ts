import axios from "axios";
import ResultData from "../model/result";
import { IService } from "./IService";
import { http } from "../const/http";

export abstract class Service<T> implements IService<T> {
    async add(u: T): Promise<ResultData> {
        try {
            const res = new ResultData();
            await axios.post(`${http.HTTPAPI}/wordstructure/addwordstructure`, u);
            return res;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async upload(file: File): Promise<string> {
        try {
            const formData = new FormData();

            formData.append('file', file);

            const _data = await axios.post(`${http.HTTPAPI}/files/upload`, formData);

            return _data.data.item.link as string;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

}