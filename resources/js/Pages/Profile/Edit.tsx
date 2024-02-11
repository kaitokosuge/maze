import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "../Presentation/Sidebar";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import ProfileData from "./ProfileData";

export default function Edit({
    auth,
    user,
    mustVerifyEmail,
    status,
    categories,
    allRate,
    trueQuizNum,
    allQuizNum,
    categoryQuizCount,
    categoryQuizTrueCount,
}: PageProps<{
    user: any;
    mustVerifyEmail: boolean;
    status?: string;
    categories: any;
    allRate: number;
    trueQuizNum: number;
    allQuizNum: number;
    categoryQuizCount: any;
    categoryQuizTrueCount: any;
}>) {
    const [isShowDelete, setIsShowdelete] = useState<boolean>(false);
    const handleAccountSet = () => {
        setIsShowdelete(!isShowDelete);
    };
    const [isSetClick, setIsSetClick] = useState<boolean>(false);
    const handleSetting = () => {
        setIsSetClick(!isSetClick);
    };
    return (
        <div className="bg-[#00142C] pl-[40px] flex pr-[40px] pb-[100px]">
            <div className="w-[15%] h-screen relative">
                <Sidebar
                    categories={categories}
                    user={user}
                    allRate={allRate}
                />
            </div>
            <div className="w-[85%] flex justify-between">
                <div className="pt-[60px] w-[100%]">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-gray-400 text-[30px]">
                            PROFILE
                        </h2>

                        <img
                            onClick={handleSetting}
                            className="w-[30px] h-[30px] cursor-pointer"
                            src="/set--logo.png"
                        ></img>
                    </div>

                    <div className="flex justify-between">
                        <div
                            className={
                                isSetClick === true
                                    ? "w-[25%] opacity-100 duration-100"
                                    : "w-[0%] opacity-0 duration-100"
                            }
                        >
                            <div
                                className={
                                    isSetClick === true
                                        ? "sm:p-8 bg-[#140034] shadow rounded-[20px] mt-5"
                                        : "sm:p-8 bg-[#140034] shadow rounded-[20px] mt-5"
                                }
                            >
                                <p className="font-bold text-gray-100 text-[30px]">
                                    SETTING
                                </p>
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                                <p
                                    className="mt-10 text-[14px] cursor-pointer text-gray-500 hover:text-gray-200 duration-300"
                                    onClick={handleAccountSet}
                                >
                                    アカウント管理→
                                </p>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    ログアウト→
                                </Dropdown.Link>
                            </div>

                            {isShowDelete === true ? (
                                <>
                                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg opacity-100 duration-300">
                                        <UpdatePasswordForm className="max-w-xl" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg opacity-0 duration-300">
                                        <DeleteUserForm className="max-w-xl" />
                                    </div>
                                </>
                            )}
                            {isShowDelete === true ? (
                                <>
                                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg opacity-100 duration-300">
                                        <DeleteUserForm className="max-w-xl" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg opacity-0 duration-300">
                                        <DeleteUserForm className="max-w-xl" />
                                    </div>
                                </>
                            )}
                        </div>
                        <ProfileData
                            categories={categories}
                            auth={auth}
                            allRate={allRate}
                            trueQuizNum={trueQuizNum}
                            allQuizNum={allQuizNum}
                            isSetClick={isSetClick}
                            categoryQuizCount={categoryQuizCount}
                            categoryQuizTrueCount={categoryQuizTrueCount}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
