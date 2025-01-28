import ResultData from "../../model/result";
import { wordstructuredto } from "../../model/wordstructuredto";
import { IService } from "../IService";

export interface IWordService extends IService<wordstructuredto> {
    addword(word: wordstructuredto): Promise<ResultData>
}