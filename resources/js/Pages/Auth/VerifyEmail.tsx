import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <div className="auth--card bg-[#000238] xl:w-[80%] w-full m-auto xl:px-[40px] px-5 pt-[40px] pb-[40px] rounded-[20px] xl:first:mt-[120px]">
                <div className="mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                        <img
                            className="xl:w-[100px] w-[45px]"
                            src="/maze_logo.png"
                        />
                        <p className="maze--title font-bold xl:text-4xl text-[16px]">
                            MAZEへようこそ!!!
                        </p>
                    </div>
                    <br />
                    MAZEはご登録いただいたメールアドレスに届いた認証リンクよりご利用可能になります。メールが届いていない場合は、下記より再度お受け取りよろしくお願いいたします。
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4  text-sm text-emerald-500 font-bold">
                        新しい認証リンクが登録時に入力されたEメールアドレスに送信されました。
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="xl:mt-4 mt-10 flex items-center justify-between">
                        <PrimaryButton disabled={processing}>
                            認証メールを再送する
                        </PrimaryButton>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
