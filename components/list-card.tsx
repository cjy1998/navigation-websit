import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoArrowRedo } from "react-icons/io5";
import Link from "next/link";
export function ListCard({ list }: { list: any }) {
  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-center">
            <Image src={list.icon.url} width={20} height={20} alt="图标" />
            {list.name.title[0].plain_text}
          </div>
          <Link href={list.url.url} target="_blank">
            <IoArrowRedo />
          </Link>
        </CardTitle>
        <CardDescription>
          {list.tag.multi_select.length > 0 &&
            list.tag.multi_select.map((item: any) => {
              return (
                <span
                  key={item.id}
                  style={{ backgroundColor: item.color }}
                  className="inline-block py-1 px-2  mr-1 rounded-sm  text-[10px] text-white"
                >
                  {item.name}
                </span>
              );
            })}
        </CardDescription>
      </CardHeader>
      {list.remark.rich_text.length > 0 && (
        <CardContent>{list.remark.rich_text[0].plain_text}</CardContent>
      )}

      {/* <CardFooter className="float-right">
        <Button variant="link">{list.url.url}</Button>
      </CardFooter> */}
    </Card>
  );
}
