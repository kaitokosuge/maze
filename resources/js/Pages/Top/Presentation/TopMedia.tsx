import React from "react";
import TopMazerBtn from "./TopMazerBtn";
import TopNews from "./TopNews";

export default function TopMedia(props: any) {
    const { user } = props;
    return (
        <div className="flex justify-between mt-5">
            <TopNews />
            <TopMazerBtn user={user} />
        </div>
    );
}
