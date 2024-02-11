import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";

export default function NewsContainer(props: any) {
    const { categories, user, allRate } = props;
    return (
        <div className="flex">
            <div className="w-[15%]">
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
            <div className={`bg-[#00142C]  w-[85%] min-h-screen`}>
                <Header />

                <div className="pt-[60px] pb-[100px] pl-[40px] pr-[50px]">
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-[30px]">NEWS</p>
                        <div>
                            {user ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        className=" text-[30px] maze--title"
                                        href="/login"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        className=" text-[30px] maze--title ml-10"
                                        href="/register"
                                    >
                                        REGISTER
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-footer w-full h-[60px] fixed bottom-0 z-10"></div>
            </div>
        </div>
    );
}
