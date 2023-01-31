import { Get, JsonController } from "routing-controllers";

@JsonController("/user")
export class UserController {
    @Get()
    async list() {
        return {
            message: "List users",
        };
    }
}
