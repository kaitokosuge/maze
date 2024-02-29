import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-emerald-400 text-center pt-10">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="auth--card bg-[#140034] w-[60%] m-auto px-[80px] pt-[40px] pb-[40px] rounded-[20px] mt-[200px]"
            >
                <div>
                    <InputLabel htmlFor="email" value="Email -メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value="Password -パスワード"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-[10px] text-gray-600">
                            次回ログイン時に入力を省略する
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <div>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-[10px] text-gray-600 hover:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                パスワードを忘れた方はこちら
                            </Link>
                        )}
                        <Link
                            href="/register"
                            className="mt-5 block duration-300 underline text-[14px] text-gray-300 hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            新規登録はこちら
                        </Link>
                    </div>

                    <button
                        className={`bg-blue-800 hover:bg-blue-600 duration-300 rounded-[10px] px-[25px] font-bold p-[10px] text-[15px] text-gray-300 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out }`}
                        disabled={processing}
                    >
                        ログイン
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
