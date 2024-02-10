import React from "react";

export default function SidebarRank(props: any) {
    const { allRate } = props;
    const Rank = () => {
        let rank;
        switch (true) {
            case allRate === 100:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--sovereign--gra text-[11px] mt-1">
                            Sovereign
                        </p>
                    </>
                );
                break;
            case allRate < 60:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--knight--gra text-[11px] mt-1">
                            Knight
                        </p>
                    </>
                );
                break;
            case allRate < 100:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--herald--gra text-[11px] mt-1">
                            Herald
                        </p>
                    </>
                );
                break;
        }
        return <>{rank}</>;
    };
    return (
        <>
            <Rank />
        </>
    );
}
