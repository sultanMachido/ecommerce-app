import Link from "next/link";

const Jumbotron = () => {
  return (
    <section className="block lg:flex justify-between">
      <div>
        <div className="hover:opacity-[0.9] h-[300px] mb-[15px] lg:mb-[0px] lg:h-[616px] w-[331px] lg:w-[451px] bg-[url('/images/ec-card-cover-1.webp')]">
          <p className="text-lightGreen text-[14px] font-bold pl-5 pt-5">
            5 Items
          </p>
          <h2 className="pl-5 text-[24px] lg:text-[40px] font-bold text-black">
            FURNITURE
          </h2>
          <p className="hover:text-white w-fit hover:underline pl-5 text-[14px] font-bold text-black">
            <Link href="#">Read More</Link>
          </p>
        </div>
      </div>
      <div>
        <div className="hover:opacity-[0.9] h-[300px] w-[331px] lg:w-[678px] mb-[15px] bg-[url('/images/ec-card-cover-2.webp')]">
          <p className="text-lightGreen text-[14px] font-bold pl-5 pt-5">
            5 Items
          </p>
          <h2 className="pl-5 text-[24px] font-bold text-black">FURNITURE</h2>
          <p className="hover:text-white w-fit hover:underline pl-5 text-[14px] font-bold text-black">
            <Link href="#">Read More</Link>
          </p>
        </div>
        <div className="hover:opacity-[0.9] h-[300px] w-[331px] mb-[200px] lg:mb-[0px] lg:w-[678px] block lg:flex justify-between">
          <div className="h-[300px]  mb-[15px] lg:mb-[0px] lg:h-auto w-[331px] bg-[url('/images/ec-card-cover-3.webp')]">
            <p className="text-lightGreen text-[14px] font-bold pl-5 pt-5">
              5 Items
            </p>
            <h2 className="pl-5 text-[24px] font-bold text-black">FURNITURE</h2>
            <p className="hover:text-white w-fit hover:underline pl-5 text-[14px] font-bold text-black">
              <Link href="#">Read More</Link>
            </p>
          </div>
          <div className="hover:opacity-[0.9] h-[300px] lg:h-auto w-[331px] bg-[url('/images/ec-card-cover-4.webp')]">
            <p className="text-lightGreen text-[14px] font-bold pl-5 pt-5">
              5 Items
            </p>
            <h2 className="pl-5 text-[24px] font-bold text-black">FURNITURE</h2>
            <p className="hover:text-white w-fit hover:underline pl-5 text-[14px] font-bold text-black">
              <Link href="#">Read More</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
