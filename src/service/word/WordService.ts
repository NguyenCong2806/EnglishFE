import ResultData from "../../model/result";
import { wordstructuredto } from "../../model/wordstructuredto";
import { Service } from "../Service";
import { IWordService } from "./IWordService";
import translate from "translate";

class WordService
    extends Service<wordstructuredto>
    implements IWordService {
    async addword(data: wordstructuredto): Promise<ResultData> {
        try {
            const res = new ResultData();
            data.translate = await translate(data.translate, "vi");
            await super.add(data);

            return res;

        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

}
export default new WordService();