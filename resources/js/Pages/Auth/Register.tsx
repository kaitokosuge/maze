import { useEffect, FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        color: "",
        password: "",
        password_confirmation: "",
        admin_code: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    const [isShowModal, setIsShowModal] = useState(false);
    const handleClickAdminModal = () => {
        setIsShowModal(!isShowModal);
    };
    const [isNextClick, setIsClick] = useState<boolean>();
    const handleNextClick = () => {
        setIsClick(!isNextClick);
    };
    return (
        <GuestLayout>
            <div
                onClick={handleClickAdminModal}
                className={
                    isShowModal === true
                        ? "xl:block hidden opacity-80 bg-black w-[100vw] h-full duration-500 fixed z-50"
                        : "xl:block hidden opacity-0 bg-black w-screen h-full fixed -z-10"
                }
            ></div>
            <Head title="Register" />

            <form
                onSubmit={submit}
                className="overflow-hidden auth--card bg-[#140034] xl:w-[60%] w-full m-auto xl:px-[80px] px-10 pt-[40px] pb-[40px] rounded-[20px] xl:mt-[120px] mt-[50px]"
            >
                <div className="w-[240%]">
                    <div
                        className={
                            isNextClick === true
                                ? "flex relative right-[60%] duration-300 justify-between "
                                : "flex relative right-[0%] duration-300 justify-between"
                        }
                    >
                        <div className="w-[40%] relative duration-300 overflow-hidden">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-[10px] block w-full border-b"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="w-[40%] relative r-[100%] duration-300  overflow-hidden">
                            <InputLabel htmlFor="color" value="profile color" />
                            <input
                                type="color"
                                id="color"
                                name="color"
                                value={data.color}
                                className="mt-[10px] block w-full border-none"
                                autoComplete="color"
                                //isFocused={true}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setData("color", e.target.value);
                                }}
                                required
                            />
                            <p className="text-emerald-500 font-bold text-[12px] mt-1">
                                profile color設定はスキップ可能です!
                            </p>
                            <InputError
                                message={errors.color}
                                className="mt-2"
                            />

                            <div className="flex items-center justify-between mt-10">
                                <Link
                                    href={route("login")}
                                    className="underline text-sm text-gray-400 hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    登録済みの方はこちら
                                </Link>

                                <button
                                    className={`bg-blue-800 hover:bg-blue-600 duration-300 rounded-[10px] px-[25px] font-bold p-[10px] text-[15px] text-gray-300 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out  }`}
                                    disabled={processing}
                                >
                                    登録
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p
                        className="cursor-pointer absolute xl:bottom-[60px] xl:block hidden right-[7%] font-bold text-white"
                        onClick={handleClickAdminModal}
                    >
                        <span
                            className={
                                isShowModal === true ? "hidden" : "block"
                            }
                        >
                            for mazer→
                        </span>
                    </p>
                    <div
                        className={
                            isShowModal
                                ? "xl:block hidden opacity-100 duration-500 fixed bottom-[100px] right-[100px] z-50"
                                : "xl:block hidden opacity-0 duration-500 absolute bottom-[100px] right-[-500px]"
                        }
                    >
                        <div className="bg-colorfull-200 w-[500px] rounded-[20px] px-10 pt-10 pb-10">
                            <label
                                className="text-white text-[20px] font-bold"
                                htmlFor="admin_code"
                            >
                                mazer code
                            </label>
                            <p className="text-[12px] text-gray-400">
                                Do you want to be mazer? please
                                call→kaitokosuge.mi@gmail.com
                            </p>
                            <input
                                id="admin_code"
                                type="text"
                                name="admin_code"
                                value={data.admin_code}
                                className="bg-c-none block w-full m-auto mt-5 px-[10px] py-[12px] border-gray-400 ring-gray-400 focus:border-gray-300 focus:ring-gray-300 focus:bg-none shadow-sm ease-in-out duration-500 text-white font-bold text-[18px]"
                                autoComplete="admin_code"
                                onChange={(e) =>
                                    setData("admin_code", e.target.value)
                                }
                            />
                            <div className="flex justify-between">
                                <p
                                    className="cursor-pointer text-white mt-5 text-[10px]"
                                    onClick={handleClickAdminModal}
                                >
                                    ←back
                                </p>
                                <p
                                    className="cursor-pointer text-white mt-5 text-[16px] duration-500 font-bold hover:text-orange-600"
                                    onClick={handleClickAdminModal}
                                >
                                    done
                                </p>
                            </div>
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
                {isNextClick === true ? (
                    <>
                        <div
                            onClick={handleNextClick}
                            className="font-bold text-2xl cursor-pointer "
                        >
                            <p>←prev</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            onClick={handleNextClick}
                            className="font-bold text-2xl cursor-pointer text-right"
                        >
                            <p>next→</p>
                        </div>
                    </>
                )}
            </form>
        </GuestLayout>
    );
}
