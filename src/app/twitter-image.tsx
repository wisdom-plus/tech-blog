import { getOgLogo } from "lib/og-logo";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const revalidate = 10;
export const size = { width: 1200, height: 600 };
export const alt = "About Acme";
export const contentType = "image/png";

const twitterImage = async () => {
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
      <img src={await getOgLogo()} height={400} width={400} alt="logo" />
      Tech Amply
    </div>,
    {
      ...size,
    },
  );
};

export default twitterImage;
