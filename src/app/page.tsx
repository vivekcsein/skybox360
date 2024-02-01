"use client";
import { Pannellum } from "pannellum-react";
import { useRef } from "react";
export default function Home() {
  const ImageRef = useRef<any>(null);

  return (
    <main>
      <Pannellum
        width="100%"
        height="100vh"
        autoLoad={true}
        compass={true}
        hfov={110}
        mouseZoom={false}
        showControls={false}
        hotspotDebug={false}
        autoRotate={1}
        image={
          "https://raw.githubusercontent.com/vivekcsein/githost/main/images/skybox/skybox_min01.png"
        }
        // @ts-ignore
        ref={ImageRef}
      ></Pannellum>
    </main>
  );
}
