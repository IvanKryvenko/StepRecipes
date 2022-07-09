import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    emailAddress: string;

    @Prop({ default: '' })
    imageUrl: string;

    @Prop([String])
    likedList: string[] = [];

    @Prop([String])
    createdRecipes: string[] = [];
}

export const UserSchema = SchemaFactory.createForClass(User);
