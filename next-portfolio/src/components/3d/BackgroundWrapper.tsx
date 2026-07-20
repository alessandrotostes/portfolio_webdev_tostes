"use client";

import dynamic from "next/dynamic";

const GlobalBackground3D = dynamic(
  () => import("@/components/3d/GlobalBackground3D"),
  { ssr: false }
);

export function BackgroundWrapper() {
  return <GlobalBackground3D />;
}
