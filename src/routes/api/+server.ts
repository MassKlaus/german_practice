import { PrismaClient } from "@prisma/client";
import { json } from "@sveltejs/kit";

export async function GET() {
    const prisma = new PrismaClient();
    const result = await prisma.language.findMany();
    return new Response("Hello " + result[0].name + "-" + result[0].id);
}
