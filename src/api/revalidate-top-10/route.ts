import { REVALIDATE_TAG } from "@/shared";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag(REVALIDATE_TAG.getTop10Rackets);

  return NextResponse.json({ status: 200 });
}
