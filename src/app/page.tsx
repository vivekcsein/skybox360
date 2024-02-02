import dynamic from "next/dynamic";
const PannellumEffect = dynamic(() => import("./PannellumEffect"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <PannellumEffect />
    </main>
  );
}
