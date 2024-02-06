import React from "react";
import TopMazerBtn from "./TopMazerBtn";
import TopNews from "./TopNews";

export default function TopMedia() {
    return (
        <div className="flex justify-between mt-5">
            <TopNews />
            <TopMazerBtn />
        </div>
    );
}
