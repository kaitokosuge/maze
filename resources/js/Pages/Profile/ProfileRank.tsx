import React from "react";

export default function ProfileRank(props: any) {
    const { trueQuizNum, allQuizNum, allRate } = props;
    const Rank = () => {
        let rank;
        switch (true) {
            case allRate === 100:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--sovereign--gra text-[34px] mt-5">
                            Sovereign
                        </p>
                        <span className="text-[10px] text-gray-300">
                            You are maze Sovereign. You are always completely
                            perfect. Your power helps a lot of people.
                        </span>
                    </>
                );
                break;
            case allRate < 60:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--knight--gra text-[34px] mt-5">
                            Knight
                        </p>
                        <span className="text-[10px] mt-1">
                            You are maze Knight. <br />
                            You are about to become something great.
                        </span>
                    </>
                );
                break;
            case allRate < 90:
                rank = (
                    <>
                        <p className="maze--title font-bold maze--herald--gra text-[34px] mt-5">
                            Herald
                        </p>
                        <span className="text-[10px] text-gray-300">
                            You are maze Herald.
                            <br /> With your strength, you can keep going.
                        </span>
                    </>
                );
                break;
        }
        console.log("rank", rank);
        return <>{rank}</>;
    };

    return (
        <div>
            <Rank />
        </div>
    );
}
