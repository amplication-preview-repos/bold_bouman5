/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Policy as PrismaPolicy,
  Access as PrismaAccess,
} from "@prisma/client";

export class PolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PolicyCountArgs, "select">): Promise<number> {
    return this.prisma.policy.count(args);
  }

  async policies<T extends Prisma.PolicyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PolicyFindManyArgs>
  ): Promise<PrismaPolicy[]> {
    return this.prisma.policy.findMany<Prisma.PolicyFindManyArgs>(args);
  }
  async policy<T extends Prisma.PolicyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PolicyFindUniqueArgs>
  ): Promise<PrismaPolicy | null> {
    return this.prisma.policy.findUnique(args);
  }
  async createPolicy<T extends Prisma.PolicyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PolicyCreateArgs>
  ): Promise<PrismaPolicy> {
    return this.prisma.policy.create<T>(args);
  }
  async updatePolicy<T extends Prisma.PolicyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PolicyUpdateArgs>
  ): Promise<PrismaPolicy> {
    return this.prisma.policy.update<T>(args);
  }
  async deletePolicy<T extends Prisma.PolicyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PolicyDeleteArgs>
  ): Promise<PrismaPolicy> {
    return this.prisma.policy.delete(args);
  }

  async getAccess(parentId: string): Promise<PrismaAccess | null> {
    return this.prisma.policy
      .findUnique({
        where: { id: parentId },
      })
      .access();
  }
}
