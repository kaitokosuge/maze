import { useRef, useState, FormEventHandler } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-[20px] font-medium text-gray-100">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                    アカウントが削除されると、すべてのリソースとデータ
                    が永久に削除されます。アカウントを削除する前に
                    保持したいデータや情報を忘れずにダウンロードしてください🙇。
                </p>
            </header>

            <button
                onClick={confirmUserDeletion}
                className="rounded-[10px] cursor-pointer text-[12px] bg-red-800 px-5 py-[8px]"
            >
                削除する
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-200">
                        本当にアカウントを削除しますか?
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        アカウントが削除されると、すべてのリソースとデータ
                        が永久に削除されます。アカウントを削除する前に
                        保持したいデータや情報を忘れずにダウンロードしてください🙇。
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            削除をやめる
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            削除する
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
