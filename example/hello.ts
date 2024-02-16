import { Select } from "../src"

class User {
    @Select(".name")
    name: string = ''

    @Select(".age")
    age: number = 0
}