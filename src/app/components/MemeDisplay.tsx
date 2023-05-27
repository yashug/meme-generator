import Image from "next/image";

type MemeDisplayProps = {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  textAreas: {
    id: string;
    text: string;
    top: number;
    left: number;
    width: number;
    height: number;
    fontSize: number;
    color: string;
  }[];
};

const MemeDisplay = ({ background, textAreas }: MemeDisplayProps) => {
  return (
    <div className="relative">
      <Image
        src={background.src}
        alt={background.alt}
        width={background.width}
        height={background.height}
      />
      {textAreas.map((textArea) => (
        <div
          className="absolute"
          key={textArea.id}
          style={{
            top: textArea.top,
            left: textArea.left,
            width: textArea.width,
            height: textArea.height,
          }}
        >
          <div
            className={`text-center text-${textArea.color} text-stroke-white`}
            style={{ fontSize: textArea.fontSize, lineHeight: "1.1" }}
          >
            {textArea.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeDisplay;
