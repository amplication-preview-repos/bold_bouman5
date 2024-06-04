import { Module } from "@nestjs/common";
import { AccessModuleBase } from "./base/access.module.base";
import { AccessService } from "./access.service";
import { AccessController } from "./access.controller";
import { AccessResolver } from "./access.resolver";

@Module({
  imports: [AccessModuleBase],
  controllers: [AccessController],
  providers: [AccessService, AccessResolver],
  exports: [AccessService],
})
export class AccessModule {}
