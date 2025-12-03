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
        keywords: ["pyaar", "kuch", "aisa", "kahe"],
    },
    // Add more levels here
];
