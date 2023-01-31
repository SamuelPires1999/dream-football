import { Get, JsonController } from "routing-controllers";

@JsonController("/user")
export class PlayerController {
    @Get()
    async list() {
        return {
            message: "List Players",
        };
    }
}
