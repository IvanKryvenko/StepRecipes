import { ObjectId } from "mongoose";

export class GetUserDto {
    fullName: string;
    username: string;
    _id: ObjectId;
    emailAddress: string;
    imageUrl: string;
}