import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Sidebar from "../Presentation/Sidebar";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    categories,
}: PageProps<{ mustVerifyEmail: boolean; status?: string; categories: any }>) {
    return (
        <div className="bg-[#00142C]">
            <Sidebar categories={categories} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-20 space-y-6 ml-[250px]">
                <div className="w-[30%]">
                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-[#140034] shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
