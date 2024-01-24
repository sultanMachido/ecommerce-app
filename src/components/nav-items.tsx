import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type Items = {
  name: string;
  path: string;
  children: string[];
};
type NavItemsProps = {
  navItems: Items[];
};
const NavItems = ({ navItems }: NavItemsProps) => {
  return (
    <ul className="flex text-grey text-[14px] font-[700]  justify-between">
      {navItems.length
        ? navItems.map((item) => (
            <>
              <li key={item?.name} className="hover:text-black">
                <Link href={item?.path}>{item?.name}</Link>
                {item?.children?.length ? <ExpandMoreIcon /> : null}
              </li>
            </>
          ))
        : null}
    </ul>
  );
};

export default NavItems;
