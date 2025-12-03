export interface LyricLevel {
    id: number;
    fullText: string;
    missingPart: string;
    keywords: string[]; // Words to check for in user input
}

export const lyricsData: LyricLevel[] = [
    {
        id: 1,
        fullText: "Dil di galiyan ch teri",
        missingPart: "zindagi bhar lyi vasdi ravaan",
        keywords: ["zindagi", "vasdi", "ravaan"],
    },
    {
        id: 2,
        fullText: "Mera muqammal aasma ho tum,Jo maangu sar",
        missingPart: "jhuka ke wo dua ho tum",
        keywords: ["jhuka", "dua", "tum"],
    },
    {
        id: 3,
        fullText: "Khamoshiyan bhi baatein karein, Jab tu",
        missingPart: "pyaar se kuch aisa kahe",
        keywords: ["pyaar", "kuch", "aisa", "kahes"],
    },
    {
        id: 4,
        fullText: "Tried to change myself for you,But",
        missingPart: "we couldn't see it through",
        keywords: ["coudnt", "see", "through"],
    },
    {
        id: 5,
        fullText: "aise koi hove mulaqaat,",
        missingPart: "ni tu pul pawe na mai pul pawa",
        keywords: ["pul", "pawe", "bhul"],
    },
    // Add more levels here


    //ise koi howe mulaqaat , ni tu pul pawe na mai pul pawa
];
