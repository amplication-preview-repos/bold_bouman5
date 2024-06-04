import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessService } from "./access.service";
import { AccessControllerBase } from "./base/access.controller.base";

@swagger.ApiTags("accesses")
@common.Controller("accesses")
export class AccessController extends AccessControllerBase {
  constructor(protected readonly service: AccessService) {
    super(service);
  }
}
