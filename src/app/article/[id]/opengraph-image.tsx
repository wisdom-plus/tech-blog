import { ImageResponse } from "next/og";
import Image from "next/image";
import { getBlog } from "@/api/microcms";

export const runtime = "edge";
export const revalidate = 10;
export const size = { width: 1200, height: 600 };
export const alt = "About Acme";
export const contentType = "image/png";

const srcUrl = (url: string) => {
  if (process.env.NODE_ENV === "production") {
    return `https://techamply.com/${url}`;
  } else {
    return `http://localhost:3000/${url}`;
  }
};

const og = async ({ params }: { params: { id: string } }) => {
  const data = await getBlog(params.id);
  if (data) {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e8e8e8",
          fontSize: 64,
          fontWeight: 600,
        }}
      >
        <Image src={srcUrl("logo.png")} height={380} width={380} alt="logo" />
        <h1 style={{ margin: "10px" }}>Tech Amply</h1>
        <h1 style={{ margin: "1px" }}>{data ? data.title : "No Title"}</h1>
      </div>,
      {
        ...size,
      },
    );
  } else {
    return new Response("Not Found", { status: 404 });
  }
};

export default og;
