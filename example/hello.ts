import { Select } from "../src"
import "reflect-metadata"

class User {
    @Select(".name")
    name: string = ''

    @Select(".age")
    age: number = 0
}

const user = new User();

console.log(
    Reflect.getMetadataKeys(user)
)