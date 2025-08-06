import Image from "next/image";
interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageLeft?: boolean;
}

export default function InfoSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Image",
  imageLeft = false,
}: InfoSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-10">
      {/* IMAGE */}
      <div
        className={`w-full ${
          imageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* TEXT */}
      <div
        className={`flex flex-col justify-center space-y-4 h-full ${
          imageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}>
        <span className="text-primary text-[16px] font-bold font-inter">
          {title}
        </span>
        <h4 className="text-[32px] text-[#002629] max-w-[550px] font-bold font-inter">
          {subtitle}
        </h4>
        <p className="text-[16px] font-inter font-normal max-w-[550px] text-[#002629] leading-[40px]">
          {description}
        </p>
      </div>
    </div>
  );
}
