'use client'
import Image from "next/image";
import { useElementSize } from "usehooks-ts";

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
  const [memeRef, { width }] = useElementSize();
  const ratio = width / background.width;

  return (
    <div className="relative" ref={memeRef}>
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
            top: textArea.top * ratio,
            left: textArea.left * ratio,
            width: textArea.width * ratio,
            height: textArea.height * ratio,
          }}
        >
          <div
            className={`text-center text-${textArea.color} text-stroke-white`}
            style={{ fontSize: textArea.fontSize * ratio, lineHeight: "1.1" }}
          >
            {textArea.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeDisplay;
