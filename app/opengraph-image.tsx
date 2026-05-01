import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Alinhado ao token --color-brand-black em globals.css */
const BRAND_BLACK = "#0b0b0b";
const BRAND_ORANGE = "#FF5A1F";

export default async function Image() {
  const logoSvg = await readFile(
    join(process.cwd(), "public/logo.svg"),
    "base64",
  );
  const logoSrc = `data:image/svg+xml;base64,${logoSvg}`;

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
          background: BRAND_BLACK,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 12,
            background: BRAND_ORANGE,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            padding: 56,
          }}
        >
          <img src={logoSrc} alt="" height={130} />
          <p
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "0.02em",
              textAlign: "center",
              maxWidth: 900,
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
