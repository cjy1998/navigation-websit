"use client";

import * as React from "react";
import Link from "next/link";
import { SiLinkfire, SiGithub } from "react-icons/si";
import ModeToggle from "@/components/modeToggle";

export default function Header() {
  return (
    <div className="w-full flex justify-between py-2 px-4">
      <div className="flex cursor-pointer items-center gap-2">
        <Link className="flex cursor-pointer items-center gap-2" href="/">
          <SiLinkfire className="text-4xl text-primary" />
          <h1 className="text-2xl font-bold">LinkView</h1>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <SiGithub className="text-1xl text-primary" />
      </div>
    </div>
  );
}
