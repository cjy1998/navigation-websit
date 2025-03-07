import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
// export const dynamic = "force-dynamic";
export async function GET() {
  try {
    // 从环境变量获取配置
    const databaseId = process.env.NOTION_DATABASE_ID;
    const apiKey = process.env.NOTION_API_KEY;
    const notion = new Client({
      auth: apiKey,
    });
    // 查询数据库
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    // 处理数据
    const { results } = response;
    console.log(response);

    const data = [];
    results.map((item) => data.push(item.properties));
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
