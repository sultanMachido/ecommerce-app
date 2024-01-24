import Image from "next/image";

type AvatarProps = {
  imageSource: string;
};
const Avatar = ({ imageSource }: AvatarProps) => {
  return (
    <div>
      <Image src={imageSource} alt="customer picture" width={90} height={90} />
    </div>
  );
};

export default Avatar;
