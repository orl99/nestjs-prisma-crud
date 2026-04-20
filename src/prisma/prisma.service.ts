import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";
import * as path from "path";

const dbPath = path.resolve(process.cwd(), "dev.db");
const connectionString = `file:${dbPath}`;
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    constructor() {
        const adapter = new PrismaBetterSqlite3({
            url: connectionString
        });
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }
} 