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
import axios from "axios";

export default function TopComment(props: any) {
    const { todayQuiz, comments, isUserQuizAnswer, user } = props;
    console.log("visUserQuizAnswer", isUserQuizAnswer);
    const [stateComments, setComments] = useState(comments);
    const [postComment, setPostComment] = useState({
        comment: "",
    });
    const postComments = async (e: any) => {
        e.preventDefault();
        const data = postComment;
        const res = await axios.post(`/comment/${todayQuiz.id}`, data);
        if (res.status) {
            setComments(res.data.comments);
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
    const [isShowReplies, setIsShowReplies] = useState<boolean>(false);
    const [commentId, setCommentId] = useState<number>(0);
    const handleCommentClick = (commentId: number) => {
        setIsShowReplies(!isShowReplies);
        setCommentId(commentId);
    };
    //const [stateReplies, setReplies] = useState(comments);
    const [postReply, setPostReply] = useState({
        reply: "",
    });
    const postReplies = async (e: any, num: number, quizId: number) => {
        e.preventDefault();
        const data = postReply;
        const res = await axios.post(`/reply/${num}/${quizId}`, data);
        if (res.status) {
            setComments(res.data.comments);
            setPostReply({ reply: "" });
        } else {
            alert("画面をリロードし、再送信してください");
        }
    };
    const handleChangeReply = (e: any) => {
        setPostReply((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <div>
            <Drawer>
                <DrawerTrigger className="text-yello-300">
                    {todayQuiz.is_user_true.some(
                        (ob: any) => ob.id === user.id
                    ) === true || isUserQuizAnswer ? (
                        <div className="ml-1 flex items-center hover:border duration-300 hover:border-gray-100 border border-gray-800 rounded-[10px] px-5 py-[5px]">
                            <img
                                className="duration-200 md:w-[30px] w-[16px] cursor-pointer"
                                src="/voice--logo.png"
                            />
                            <p className="ml-5 font-bold md:text-[16px] text-[12px] max-w-[20px]">
                                {stateComments.length}
                            </p>
                        </div>
                    ) : (
                        <></>
                    )}
                </DrawerTrigger>
                <DrawerContent className="bg-profile-card border-none md:min-h-[70%] md:max-h-[80%] min-h-[95%] max-h-[95%] md:px-[100px] md:p-20 md:pt-5 pb-5">
                    <DrawerHeader className="md:p-0 px-5">
                        <DrawerTitle className="flex items-center md:mt-10 mt-5 md:text-[30px] text-[15px]">
                            <img
                                className="md:w-[40px] w-[20px]"
                                src="voice--logo.png"
                            />
                            <p className="ml-5">REVIEWS</p>
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-[40%] text-gray-400 md:px-0 px-5">
                            <div className="font-bold mt-5 flex items-center">
                                <img
                                    className="w-[15px] h-[15px]"
                                    src="/pen--logo.png"
                                />
                                <p className="ml-[8px] maze--title md:text-[16px] text-[11px]">
                                    {todayQuiz.user.name}
                                </p>
                            </div>
                            <div className="grid grid-cols-6 gap-5 mt-5">
                                {todayQuiz.categories.map((category: any) => (
                                    <div className="flex items-center">
                                        <div className="w-[15px] h-auto">
                                            {parse(category.category_img)}
                                        </div>
                                        {/* <p className="font-bold ml-[8px]">
                                            {category.category}
                                        </p> */}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center font-bold md:mt-5 mt-1 text-[12px]">
                                <p className="md:text-[28px] text-[15px]">?</p>
                                {""}
                                <p className="ml-[8px] tracking-wider mt-1 text-limit">
                                    {todayQuiz.quiz}
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[55%] w-full md:mt-0 mt-[10px]">
                            <div className="bg-black md:min-h-[450px] md:max-h-[450px] min-h-[320px] max-h-[350px] rounded-[20px] overflow-scroll md:px-5 px-[10px] py-[15px] pb-[50px]">
                                {isShowReplies === true ? (
                                    <div className="">
                                        <p
                                            className="cursor-pointer text-[30px] px-1 pt-[12px] w-[40px] h-[40px] leading-4 text-center rounded-full bg-gray-800"
                                            onClick={() =>
                                                handleCommentClick(0)
                                            }
                                        >
                                            ←
                                        </p>
                                        <div className="mt-5 px-5">
                                            {stateComments.map(
                                                (comment: any) => (
                                                    <>
                                                        {comment.id ===
                                                            commentId && (
                                                            <>
                                                                <div className="flex items-center">
                                                                    <div
                                                                        style={{
                                                                            "background-color": `${comment.user.color}`,
                                                                        }}
                                                                        className="w-[25px] h-[25px] auth--card shadow-white rounded-full"
                                                                    ></div>
                                                                    <p className="maze--title font-bold ml-[8px] text-[12px]">
                                                                        {
                                                                            comment
                                                                                .user
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <p className="mt-[8px] border-b border-b-gray-800 pb-5">
                                                                    {
                                                                        comment.comment
                                                                    }
                                                                </p>
                                                                <div className="px-5">
                                                                    {comment.replies.map(
                                                                        (
                                                                            reply: any
                                                                        ) => (
                                                                            <div className="mt-[25px]">
                                                                                <div className="flex items-center">
                                                                                    <div
                                                                                        style={{
                                                                                            "background-color": `${reply.user.color}`,
                                                                                        }}
                                                                                        className="w-[20px] h-[20px] auth--card shadow-white rounded-full"
                                                                                    ></div>
                                                                                    <p className="maze--title ml-1 text-[12px]">
                                                                                        {
                                                                                            reply
                                                                                                .user
                                                                                                .name
                                                                                        }
                                                                                    </p>
                                                                                </div>

                                                                                <p className="mt-[8px]">
                                                                                    {
                                                                                        reply.reply
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {stateComments.map((comment: any) => (
                                            <>
                                                <div
                                                    onClick={() =>
                                                        handleCommentClick(
                                                            comment.id
                                                        )
                                                    }
                                                    className="hover:bg-gray-900 p-5 rounded-[10px] duration-300 mt-[10px] cursor-pointer"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div
                                                                style={{
                                                                    "background-color": `${comment.user.color}`,
                                                                }}
                                                                className="w-[25px] h-[25px] auth--card shadow-white rounded-full"
                                                            ></div>
                                                            <p className="maze--title font-bold ml-[8px] text-[12px]">
                                                                {
                                                                    comment.user
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="font-bold text-[12px] maze--title text-red-700">
                                                            {comment.replies
                                                                .length ===
                                                            0 ? (
                                                                <></>
                                                            ) : (
                                                                <>
                                                                    {
                                                                        comment
                                                                            .replies
                                                                            .length
                                                                    }
                                                                    reply
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <p className="mt-1 text-[15px]">
                                                        {comment.comment}
                                                    </p>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>
                            {isShowReplies === true ? (
                                <>
                                    <form
                                        onSubmit={(e) =>
                                            postReplies(
                                                e,
                                                commentId,
                                                todayQuiz.id
                                            )
                                        }
                                        className="block relative"
                                    >
                                        <input
                                            onChange={handleChangeReply}
                                            type="text"
                                            name="reply"
                                            value={postReply.reply}
                                            className="md:w-full w-[90%] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none text-white bg-black rounded-[10px] px-5 pr-[80px] py-[15px] border-gray-700 duration-300 block m-auto mt-5"
                                        />
                                        <button className="text-[18px] absolute right-[25px]  bottom-[11px] bg-slate-900 px-5 py-[5px] rounded-[10px]">
                                            ▶︎
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <form
                                        onSubmit={postComments}
                                        className="block relative"
                                    >
                                        <input
                                            onChange={handleChangeComment}
                                            type="text"
                                            name="comment"
                                            value={postComment.comment}
                                            className="md:w-full w-[90%] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none text-white bg-black rounded-[10px] px-5 pr-[80px] py-[15px] border-gray-700 duration-300 block m-auto mt-5"
                                        />
                                        <button className="text-[18px] absolute right-[25px] bottom-[11px] bg-slate-900 px-5 py-[5px] rounded-[10px]">
                                            ▶︎
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
