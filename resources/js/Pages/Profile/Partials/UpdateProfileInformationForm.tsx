import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
    user: any,
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
    user: any;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            color: user.color,
            admin_code: "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
        setData("admin_code", "");
    };

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-1 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full maze--title"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="color" value="color" />

                    <input
                        id="color"
                        type="color"
                        className="mt-5 w-full bg-none align-[-3px] h-[50px] p-0 border"
                        value={data.color}
                        onChange={(e) => {
                            setData("color", e.target.value);
                        }}
                        required
                    />

                    <InputError className="mt-2" message={errors.color} />
                </div>
                {user.isAdmin === false && (
                    <div>
                        <InputLabel htmlFor="admin" value="become admin" />
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
                    </div>
                )}

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>保存</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
