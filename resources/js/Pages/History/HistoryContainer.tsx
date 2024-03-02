import { Link } from "lucide-react";
import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import HistoryCopy from "./Presentation/HistoryCopy";
import HistoryDesc from "./Presentation/HistoryDesc";

export default function HistoryContainer(props: any) {
    const { categories, user, allRate } = props;
    return (
        <div className="flex justify-between">
            <div className="md:w-[15%] w-0 md:block md:left-0 left-[-280px] relative">
                {user === undefined ? (
                    <>
                        <Sidebar categories={categories} />
                    </>
                ) : (
                    <>
                        <Sidebar
                            categories={categories}
                            user={user}
                            allRate={allRate}
                        />
                    </>
                )}
            </div>
            <div className={`bg-today-quiz md:w-[85%] min-h-screen w-full`}>
                <div className="pt-[60px] pb-[100px] xl:pl-[40px] lg:pl-[100px] md:pl-[20%] pr-[5%] pl-[5%]">
                    <div className="flex items-center justify-between">
                        <p className="maze--title md:text-[100px] text-[50px] font-bold">
                            MAZE
                        </p>
                        <div>
                            {user ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        className=" md:text-[30px] text-[17px] maze--title"
                                        href="/login"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        className="md:text-[30px] text-[17px] maze--title md:ml-10 ml-5"
                                        href="/register"
                                    >
                                        REGISTER
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <p className="font-bold text-[20px]">RULES</p>
                    <HistoryDesc />
                </div>
                <HistoryCopy />
            </div>
        </div>
    );
}
