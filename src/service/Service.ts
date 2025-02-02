import axios from "axios";
import ResultData from "../model/result";
import { IService } from "./IService";
import { HTTP } from "../const/http";
import { toast } from 'react-toastify';
import { NOTIFY } from "../const/notify";

export abstract class Service<T> implements IService<T> {
    async add(u: T): Promise<ResultData> {
        try {
            const res = new ResultData();
            const _data = await axios.post(`${HTTP.HTTPAPI}/wordstructure/addwordstructure`, u);
            res.item = _data.data.item;
            res.message = _data.data.message;
            res.status = _data.data.status;
            res.statuscode = _data.data.statuscode;
            toast.success(NOTIFY.SUCCESS);
            return res;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async upload(file: File): Promise<string> {
        try {
            const formData = new FormData();

            formData.append('file', file);

            const _data = await axios.post(`${HTTP.HTTPAPI}/files/upload`, formData);
            toast.success(NOTIFY.SUCCESSFILE);
            return _data.data.item.link as string;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

}