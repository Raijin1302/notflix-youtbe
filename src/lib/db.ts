import { PrismaClient } from "@prisma/client"
declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var prismadb: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prismadb) {
    global.prismadb = new PrismaClient()
  }
  prisma = global.prismadb
}

export const db = prisma
