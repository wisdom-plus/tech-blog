import { getOgLogo } from "lib/og-logo";
import { ImageResponse } from "next/og";
import { getBlog } from "@/api/microcms";

export const runtime = "nodejs";
export const revalidate = 10;
export const size = { width: 1200, height: 600 };
export const alt = "About Acme";
export const contentType = "image/png";

const og = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getBlog(id);
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
        {/* biome-ignore lint/performance/noImgElement: ImageResponse renders this into a PNG. */}
        <img src={await getOgLogo()} height={380} width={380} alt="logo" />
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
