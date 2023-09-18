import { User } from "./user";

export interface Comment {
    _id: string,
    user: User,
    story: string,
    content: string,
    childComments: Comment[],
    parentComment: Comment['_id'],
    likedUsers: User["_id"][],
    createdAt: string,
    updatedAt: string,
}