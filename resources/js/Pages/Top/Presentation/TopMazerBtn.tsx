import { Link } from "@inertiajs/react";
import React from "react";

export default function TopMazerBtn(props: any) {
    const { user } = props;
    const showAdminForm = () => {};
    return (
        <div className="w-[18%]">
            {user.isAdmin === 1 ? (
                <>
                    <Link
                        href={"/mazer"}
                        className="font-bold px-5 py-[10px] bg-colorfull-300 rounded-[10px] block w-full"
                    >
                        <span className="maze--title font-bold">MAZE </span>
                        admin
                    </Link>
                </>
            ) : (
                <>
                    <div
                        onClick={showAdminForm}
                        className="font-bold px-5 py-[10px] bg-colorfull-300 rounded-[10px] block w-full text-[12px]"
                    >
                        become{" "}
                        <span className="maze--title text-[17px]"> MAZE </span>{" "}
                        admin
                    </div>
                </>
            )}
        </div>
    );
}
