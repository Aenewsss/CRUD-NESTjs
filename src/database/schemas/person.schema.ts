import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
    @Prop({required: true, type: String})
    name: string;
    
    @Prop({required: true, type: Number})
    age: number;
}

export const PersonSchema = SchemaFactory.createForClass(Person);