'use client'
import Image from "next/image";
import { useElementSize } from "usehooks-ts";
import { MemeTemplate } from "../(data)/types";

const MemeDisplay = ({ template, values }: {template: MemeTemplate, values: Record<string, string>}) => {
  const [memeRef, { width: memeWidth }] = useElementSize();
  const ratio = memeWidth / template.background.width;

  const {src, alt, width, height} = template.background

  return (
    <div className="relative" ref={memeRef}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {template.textareas.map((textarea) => (
        <div
          className="absolute"
          key={textarea.id}
          style={{
            top: textarea.top * ratio,
            left: textarea.left * ratio,
            width: textarea.width * ratio,
            height: textarea.height * ratio,
          }}
        >
          <div
            className={`text-center text-${textarea.color} text-stroke-white`}
            style={{ fontSize: textarea.size * ratio, lineHeight: "1.1" }}
          >
            {values[textarea.id] ?? textarea.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeDisplay;
