import { createAsyncThunk } from "@reduxjs/toolkit";
import { wordstructuredto } from "../../model/wordstructuredto";
import WordService from "../../service/word/WordService";

export const addWordEnglish = createAsyncThunk(
    'word/addWordEnglish',
    async (worddto: wordstructuredto) => {
        await WordService.addword(worddto);
    }
)

export const updateFile = createAsyncThunk(
    'word/updateFile',
    async (file: File) => {
       return await WordService.upload(file);
    }
)