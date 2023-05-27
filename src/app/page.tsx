import MemeDisplay from "./(components)/MemeDisplay";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="max-w-[600px]">
        <MemeDisplay
          background={{
            src: "/disaster-girl.jpg",
            alt: "Disaster Girl",
            width: 1200,
            height: 900,
          }}
          textAreas={[
            {
              top: 750,
              left: 100,
              width: 1000,
              height: 100,
              color: "white",
              fontSize: 100,
              text: "I'm gonna be rich",
              id: "saying",
            },
          ]}
        />
      </div>
    </main>
  );
}
