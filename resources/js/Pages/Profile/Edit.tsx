import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "../Presentation/Sidebar";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    categories,
}: PageProps<{ mustVerifyEmail: boolean; status?: string; categories: any }>) {
    const [isShowDelete, setIsShowdelete] = useState<boolean>(false);
    const handleAccountSet = () => {
        setIsShowdelete(!isShowDelete);
    };
    return (
        <div className="bg-[#00142C] pl-[40px] flex">
            <div className="w-[15%] h-screen relative">
                <Sidebar categories={categories} />
            </div>
            <div className="w-[85%]">
                <div className="pt-[60px]">
                    <h2 className="font-bold text-gray-100 text-[50px]">
                        PROFILE
                    </h2>
                    <div className="w-[25%]">
                        <div className="sm:p-8 bg-[#140034] shadow rounded-[20px]">
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
                </div>
            </div>
        </div>
    );
}
