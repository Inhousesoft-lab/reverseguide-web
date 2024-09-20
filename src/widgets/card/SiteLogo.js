import Image from "next/image";

export default function SiteLogo({ item }) {
  const { name, image } = item;
  return (
    <div>
      <Image src={image} alt={name} width={120} height={40} />
    </div>
  );
}