import translate from "translate";
import { wordstructuredto } from "../model/wordstructuredto";
import axios from "axios";


export class ActivateValue {

    //Uploadfile
    async UploadFile(file: File): Promise<any> {
        const formData = new FormData();

        formData.append('file', file);

        const _data = await axios.post("http://localhost:8088/api/v1/files/upload", formData);

        return _data.data.item.link;
    }
    //Create word
    async getvalueword(word: string, linkimage: string, tag: number) {
        const _data = new wordstructuredto();
        _data.translate = await translate(word, "vi");
        _data.word = word;
        _data.linkimage = linkimage;
        await axios.post("http://localhost:8088/api/v1/wordstructure/addwordstructure", {
            word: _data.word, translate: _data.translate,
            linkimage: _data.linkimage, tag: tag
        });
    }
}