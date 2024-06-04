import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessServiceBase } from "./base/access.service.base";

@Injectable()
export class AccessService extends AccessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
