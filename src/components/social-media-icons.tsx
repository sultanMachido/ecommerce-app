import Image from "next/image";
type SocialMediaIconsProps = {
  iconList: string[];
  width?: number;
  height?: number;
};
const SocialMediaIcons = ({
  iconList,
  width,
  height,
}: SocialMediaIconsProps) => {
  return (
    <ul className="flex justify-between">
      {iconList?.length
        ? iconList?.map((iconListPath) => (
            <li className="px-2" key={""}>
              <Image
                src={iconListPath}
                alt=""
                width={width || 15}
                height={height || 15}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default SocialMediaIcons;
