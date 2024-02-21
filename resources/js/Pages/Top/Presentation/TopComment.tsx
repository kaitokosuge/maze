import React, { useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/shadcn-ui/ui/drawer";
import parse from "html-react-parser";

export default function TopComment(props: any) {
    const { todayQuiz, comments } = props;
    const [stateComments, setComments] = useState(comments);
    const [postComment, setPostComment] = useState({
        comment: "",
    });
    const postComments = async (e: any) => {
        e.preventDefault();
        const csrfTag = document.head.querySelector(
            'meta[name="csrf-token"]'
        ).content;
        const res = await fetch(`/comment/${todayQuiz.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": `${csrfTag}`,
            },
            body: JSON.stringify(postComment),
        });
        if (res.ok) {
            const data = await res.json();
            setComments(data.comments);
            setPostComment({ comment: "" });
        } else {
            alert("画面をリロードし、再送信してください");
        }
    };
    const handleChangeComment = (e: any) => {
        console.log(postComment.comment);
        setPostComment((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <div>
            <Drawer>
                <DrawerTrigger className="text-yello-300">
                    <div className="ml-1 flex items-center hover:border duration-300 hover:border-gray-100 border border-gray-800 rounded-[10px] px-5 py-[5px]">
                        <img
                            className="duration-200 w-[30px] cursor-pointer"
                            src="/voice--logo.png"
                        />
                        <p className="ml-5 font-bold">{stateComments.length}</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="bg-profile-card border-none min-h-[70%] max-h-[80%] px-[100px] pb-5">
                    <DrawerHeader>
                        <DrawerTitle className="mt-10 text-[30px]">
                            REVIEWS
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="flex justify-between">
                        <div className="w-[40%] text-gray-400">
                            <div className="font-bold mt-5 flex items-center">
                                <img
                                    className="w-[15px] h-[15px]"
                                    src="/pen--logo.png"
                                />
                                <p className="ml-[8px] maze--title">
                                    {todayQuiz.user.name}
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-5 mt-5">
                                {todayQuiz.categories.map((category: any) => (
                                    <div className="flex items-center">
                                        <div className="w-[15px] h-auto">
                                            {parse(category.category_img)}
                                        </div>
                                        <p className="font-bold ml-[8px]">
                                            {category.category}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-start font-bold mt-5 text-[12px]">
                                <p className="text-[28px]">?</p>
                                {""}
                                <p className="ml-[8px] tracking-wider mt-1">
                                    {todayQuiz.quiz}
                                </p>
                            </div>
                        </div>
                        <div className="w-[55%]">
                            <div className="bg-black min-h-[400px] max-h-[450px] rounded-[20px] overflow-scroll  px-10 py-[15px] pb-[50px]">
                                {stateComments.map((comment: any) => (
                                    <>
                                        <div className="flex items-center mt-[27px]">
                                            <div
                                                style={{
                                                    "background-color": `${comment.user.color}`,
                                                }}
                                                className="w-[25px] h-[25px] auth--card shadow-white rounded-full"
                                            ></div>
                                            <p className="maze--title font-bold ml-[8px] text-[12px]">
                                                {comment.user.name}
                                            </p>
                                        </div>
                                        <p className="mt-1 text-[15px]">
                                            {comment.comment}
                                        </p>
                                    </>
                                ))}
                            </div>
                            <form
                                onSubmit={postComments}
                                className="block relative"
                            >
                                <input
                                    onChange={handleChangeComment}
                                    type="text"
                                    name="comment"
                                    value={postComment.comment}
                                    className="w-full focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none text-white bg-black rounded-[10px] px-5 py-[15px] border-gray-700 duration-300 block mt-5"
                                />
                                <button className="absolute right-5 bottom-[11px] bg-blue-950 px-5 py-[5px] rounded-[10px]">
                                    送信する
                                </button>
                            </form>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
