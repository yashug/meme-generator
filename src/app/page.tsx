import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="relative">
        <Image
          src="/disaster-girl.jpg"
          alt="Disaster Girl"
          width={1200}
          height={900}
        />
        <div
          className="absolute"
          style={{
            top: 760,
            left: 100,
            width: 1000,
            height: 100,
            border: "2px solid red",
          }}
        >
          <div
            className="text-center text-white text-stroke-white"
            style={{ fontSize: 100, lineHeight: "1.1" }}
          >
            Really ?
          </div>
        </div>
      </div>
    </main>
  );
}
