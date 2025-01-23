export class WordStructure {
    _id: string | undefined;
    word!: string;
    createddate!: Date;
    translate!: string;
    phonetic!: {
        phonetic_uk: string;
        phonetic_us: string;
    };
    example!: string;
    voice!: {
        voice_uk: string;
        voice_us: string;
    };
    image!: {
        image_fontend: string;
        image_backend: string;
    };
    tag!: string;
    num!: number;
}