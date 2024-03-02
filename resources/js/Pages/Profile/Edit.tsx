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
    todayQuizRate,
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
    todayQuizRate: number;
}>) {
    const [isShowDelete, setIsShowdelete] = useState<boolean>(false);
    const handleAccountSet = () => {
        setIsShowdelete(!isShowDelete);
    };
    const [isSetClick, setIsSetClick] = useState<boolean>(false);
    const handleSetting = () => {
        setIsSetClick(!isSetClick);
    };
    const [isHumShow, setIsHumShow] = useState<boolean>();
    const handleHumClick = () => {
        setIsHumShow(!isHumShow);
    };
    return (
        <div className="bg-[#00142C] flex pb-[60px]">
            <div
                className={
                    isHumShow === true
                        ? "md:w-[15%] w-0 md:block md:left-0 left-0 relative duration-300 z-20"
                        : "md:w-[15%] w-0 md:block md:left-0 left-[-280px] duration-300 relative"
                }
            >
                <Sidebar
                    categories={categories}
                    user={user}
                    allRate={allRate}
                />
            </div>
            <div className="md:w-[85%] w-full flex justify-between md:px-[40px] px-[0%]">
                <div className="md:pt-[60px] pt-[20px] w-[100%]">
                    <div
                        onClick={handleHumClick}
                        className="w-[40px] h-[40px] m-0 ml-auto mr-[5%] block md:hidden relative z-20"
                    >
                        {isHumShow === true ? (
                            <>
                                <img src="eye--logo.png" />
                            </>
                        ) : (
                            <>
                                <img src="eyeclose--logo.png" />
                            </>
                        )}
                    </div>
                    <div
                        onClick={handleHumClick}
                        className={
                            isHumShow === true
                                ? "bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-10"
                                : "bg-black opacity-0 w-screen h-screen fixed top-0 left-0 -z-10"
                        }
                    ></div>
                    <div className="flex justify-between items-center md:px-0 px-[5%]">
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
                                    ? "md:w-[25%] w-[90%] md:ml-0 ml-[5%] opacity-100 duration-100"
                                    : "w-[0%] opacity-0 duration-100"
                            }
                        >
                            <div
                                className={
                                    isSetClick === true
                                        ? "md:p-8 p-5 bg-[#140034] shadow rounded-[20px] mt-5"
                                        : "md:p-8 p-5 bg-[#140034] shadow rounded-[20px] mt-5"
                                }
                            >
                                <p className="font-bold text-gray-100 text-[30px]">
                                    SETTING
                                </p>
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                    user={user}
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
                            todayQuizRate={todayQuizRate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
