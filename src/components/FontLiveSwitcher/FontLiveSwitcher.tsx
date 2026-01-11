"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

export default function FontLiveSwitcher() {
    const [fonts, setFonts] = useState<{ family: string }[]>([]);
    const [headingFont, setHeadingFont] = useState<string>("Prompt");
    const [bodyFont, setBodyFont] = useState<string>("Baskervville");

    // 🔹 Lấy danh sách fonts từ API
    useEffect(() => {
        fetch("/api/fonts")
            .then((res) => res.json())
            .then((data) => {
                const items = Array.isArray(data) ? data : data.items;
                setFonts(items || []);
                console.log("Fetched fonts:", items?.length);
            })
            .catch(console.error);
    }, []);

    // 🔹 Tải font từ Google Fonts nếu chưa có
    const loadFont = (family: string) => {
        const id = `font-${family}`;
        if (document.getElementById(id)) return;
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@400;500;700&display=swap`;
        document.head.appendChild(link);
    };

    // 🔹 Khi user chọn font
    const handleChange = (type: "heading" | "body", family: string) => {
        loadFont(family);
        if (type === "heading") {
            setHeadingFont(family);
            document.documentElement.style.setProperty("--heading-font-family", `"${family}", sans-serif`);
            localStorage.setItem("headingFont", family);
        } else {
            setBodyFont(family);
            document.documentElement.style.setProperty("--body-font-family", `"${family}", sans-serif`);
            localStorage.setItem("bodyFont", family);
        }
    };

    // 🔹 Load lại font đã chọn từ localStorage
    useEffect(() => {
        const savedHeading = localStorage.getItem("headingFont");
        const savedBody = localStorage.getItem("bodyFont");
        if (savedHeading) handleChange("heading", savedHeading);
        if (savedBody) handleChange("body", savedBody);
    }, []);

    if (!fonts.length) return <p>Loading fonts...</p>;

    // 🔹 Chuẩn bị danh sách option cho react-select
    const fontOptions = fonts.map((font) => ({
        value: font.family,
        label: font.family,
    }));

    return (
        <div className="flex flex-col md:flex-row gap-3 items-center mt-2 w-full">
            {/* Heading Font */}
            <div className="w-full md:w-1/2 flex justify-start lg:justify-center items-center space-x-2">
                <label className="text-sm font-medium block !mb-0">
                    Heading Font:
                </label>
                <Select
                    options={fontOptions}
                    value={{ value: headingFont, label: headingFont }}
                    onChange={(opt) => handleChange("heading", opt?.value || "")}
                    isSearchable
                    styles={{
                        control: (base) => ({
                            ...base,
                            fontFamily: headingFont,
                        }),
                        menu: (base) => ({
                            ...base,
                            maxHeight: 300,
                            overflowY: "auto",
                        }),
                    }}
                />
            </div>

            {/* Body Font */}
            <div className="w-full md:w-1/2 flex justify-start lg:justify-center items-center space-x-2">
                <label className="text-sm font-medium block !mb-0">
                    Body Font:
                </label>
                <Select
                    options={fontOptions}
                    value={{ value: bodyFont, label: bodyFont }}
                    onChange={(opt) => handleChange("body", opt?.value || "")}
                    isSearchable
                    styles={{
                        control: (base) => ({
                            ...base,
                            fontFamily: bodyFont,
                        }),
                        menu: (base) => ({
                            ...base,
                            maxHeight: 300,
                            overflowY: "auto",
                        }),
                    }}
                />
            </div>
        </div>
    );
}