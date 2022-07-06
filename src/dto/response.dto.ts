import { BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { statusEnum } from "./../enums/util.enum";

export class ResponseDTO<T> {
    @ApiProperty({
        type: 'boolean',

    })
    status: boolean = false;
    @ApiProperty()
    data: T;
    @ApiProperty()
    message: string = "";
    @ApiProperty()
    extra_data: any;
    @ApiProperty()
    code: number = statusEnum.failed;


    getResponse = ()  => {
        
        
        this.status = this.code > statusEnum.failed;
        if (this.code == statusEnum.error) {
            this.message = "An error occured";
            throw new InternalServerErrorException(this);
        }
        if (!this.status) throw new BadRequestException(this);
        console.log("here");
        
        //const _instance = new ResponseDTO();
        
        return this;
    }
}