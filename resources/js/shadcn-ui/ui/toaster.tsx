"use client";

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/shadcn-ui/ui/toast";
import { useToast } from "@/shadcn-ui/ui/use-toast";

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }) {
                return (
                    <Toast
                        key={id}
                        {...props}
                        className="bg-emerald-600 text-white border-none duration-300"
                    >
                        <div className="grid gap-1">
                            {title && (
                                <ToastTitle className="text-[20px]">
                                    {title}
                                </ToastTitle>
                            )}
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
