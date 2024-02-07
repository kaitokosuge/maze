import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "../Presentation/Sidebar";
import { useState } from "react";

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
        <div className="bg-[#00142C]">
            <Sidebar categories={categories} />
            <div className="ml-[250px] pt-[70px]">
                <div className="w-[25%]">
                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                        <p
                            className="mt-10 text-[14px] cursor-pointer"
                            onClick={handleAccountSet}
                        >
                            アカウント管理→
                        </p>
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
    );
}
