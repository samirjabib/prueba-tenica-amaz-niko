import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  //this come on stringify from the client

  const body = await request.json();
  const { name, phone, pickUpTime, address, material, quantity } = body;
  console.log(body);

  return NextResponse.json({ ok: true, body }, { status: 200 });
}
