import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from 'src/database/schemas/person.schema';
import { PersonDto } from 'src/dtos/person.dto';

@Injectable()
export class PersonService {

    constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) { }

    async create(person: PersonDto): Promise<Person> {
        const newPerson = new this.personModel(person);
        return newPerson.save();
    }

    async findPerson(id: string): Promise<Person> {
        return await this.personModel.findById(id)
    }

    async getAll(): Promise<Person[]> {
        return await this.personModel.find()
    }

    async updatePerson(id: string, person: PersonDto): Promise<Person> {
        const oldPerson = await this.personModel.findByIdAndUpdate(id, person);
        return oldPerson.save()
    }

    async deletePerson(id: string): Promise<Person> {
        return await this.personModel.findByIdAndDelete(id);
    }
}
