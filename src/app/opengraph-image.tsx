import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Êxito em Imóveis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public", "logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#eef2f8",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 4,
            background: "#1d63c4",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={420} height={136} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            color: "#4c5d7a",
          }}
        >
          COMPRA · LOCAÇÃO · CRECI 59048F
        </div>
      </div>
    ),
    { ...size },
  );
}
