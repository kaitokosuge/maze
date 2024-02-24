export interface User {
    color: string;
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    isAdmin: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
