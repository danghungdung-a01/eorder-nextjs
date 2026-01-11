import { NextResponse } from "next/server";

let cachedFonts: any[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 60 * 24;

export async function GET() {
    const now = Date.now();

    // ⚡️ Nếu cache còn hiệu lực, trả về cache luôn
    if (cachedFonts && now - lastFetchTime < CACHE_DURATION) {
        return NextResponse.json(cachedFonts);
    }
    try {
        const apiKey = process.env.GOOGLE_FONTS_API_KEY;
        if (!apiKey) throw new Error("Missing GOOGLE_FONTS_API_KEY");

        const res = await fetch(
            `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
        );

        if (!res.ok) {
            const err = await res.text();
            return NextResponse.json({ error: err }, { status: res.status });
        }

        const data = await res.json();

        // ✅ Lọc font unicode
        const unicodeFonts = data.items.filter((font: any) =>
            font.subsets.includes("latin-ext") || font.subsets.includes("vietnamese")
        );

        // 🔁 Cập nhật cache
        cachedFonts = unicodeFonts;
        lastFetchTime = now;

        // if (cachedFonts && now - lastFetchTime < CACHE_DURATION) {
        //     console.log("🟢 Using cached fonts:", cachedFonts.length);
        //     return NextResponse.json(cachedFonts);
        // }

        return NextResponse.json(unicodeFonts);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}