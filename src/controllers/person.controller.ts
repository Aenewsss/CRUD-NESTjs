import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonDto } from 'src/dtos/person.dto';
import { PersonService } from 'src/services/person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Get('/find/:id')
    async getPerson(@Param() params): Promise<PersonDto> {
        try {
            let response = await this.personService.findPerson(params.id)

            return response
        } catch (error) {
            return error.message
        }
    }

    @Get('/listAll')
    async getAll(): Promise<PersonDto[]> {
        try {
            let response = await this.personService.getAll()

            return response
        } catch (error) {
            return error.message
        }
    }

    @Post('')
    async createPerson(@Body() person): Promise<PersonDto> {
        try {
            let response = await this.personService.create(person)

            return response
        } catch (error) {
            return error.message
        }
    }

    @Put('/update-person/:id')
    async updatePerson(@Param() params, @Body() person): Promise<PersonDto> {
        try {
            let response = await this.personService.updatePerson(params.id, person)

            return response
        } catch (error) {
            return error.message
        }
    }

    @Delete('remove/:id')
    async deletePerson(@Param() params): Promise<PersonDto> {
        try {
            let response = await this.personService.deletePerson(params.id)

            return response
        } catch (error) {
            return error.message
        }
    }
}
