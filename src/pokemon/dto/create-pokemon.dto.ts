import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    //IsInt, IsPositive, minLength 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    //isString, MinLength 1
    @IsString()
    @MinLength(1)
    name: string
}
