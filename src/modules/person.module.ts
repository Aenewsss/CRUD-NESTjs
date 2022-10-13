import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonController } from 'src/controllers/person.controller';
import { Person, PersonSchema } from 'src/database/schemas/person.schema';
import { PersonService } from 'src/services/person.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
    controllers: [PersonController],
    providers: [PersonService]
})
export class PersonModule {}
