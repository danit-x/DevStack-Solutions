import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #fff7ed 0%, #ffffff 42%, #e0f2fe 100%)",
          color: "#0f172a",
          padding: "72px",
          fontFamily: "Trebuchet MS, Verdana, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            background: "rgba(255, 255, 255, 0.86)",
            padding: "56px",
            boxShadow: "0 28px 70px rgba(15, 23, 42, 0.12)"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "28px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#ea580c"
            }}
          >
            DevStack Solutions
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}
          >
            <div
              style={{
                maxWidth: "820px",
                fontSize: "64px",
                lineHeight: 1.02,
                fontWeight: 800
              }}
            >
              Modern websites that bring customers to your business
            </div>
            <div
              style={{
                maxWidth: "760px",
                fontSize: "28px",
                lineHeight: 1.4,
                color: "#475569"
              }}
            >
              Fast, mobile-first websites built for Sri Lankan small
              businesses, WhatsApp leads, and Google Maps visibility.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "24px",
              color: "#334155"
            }}
          >
            <div>Fast delivery</div>
            <div>Mobile-first</div>
            <div>WhatsApp ready</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
