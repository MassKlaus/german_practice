import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

export async function GET() {
    const prisma = new PrismaClient();
    const result = await prisma.language.findMany();

    return new Response(`Hello ` + result[0].name + "-" + result[0].id);
}
