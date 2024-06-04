import * as graphql from "@nestjs/graphql";
import { AccessResolverBase } from "./base/access.resolver.base";
import { Access } from "./base/Access";
import { AccessService } from "./access.service";

@graphql.Resolver(() => Access)
export class AccessResolver extends AccessResolverBase {
  constructor(protected readonly service: AccessService) {
    super(service);
  }
}
