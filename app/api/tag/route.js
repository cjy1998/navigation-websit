import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
export async function GET() {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // 提取所有tag属性值并去重
    const uniqueTags = Array.from(
      new Set(
        response.results.flatMap(
          (item) =>
            item.properties.tag?.multi_select?.map((select) => select.name) ||
            []
        )
      )
    );
    return NextResponse.json(uniqueTags);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch database" },
      { status: 500 }
    );
  }
}
