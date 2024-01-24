import Button from "@/components/base-components/button";

const CtaSection = () => {
  return (
    <section className="bg-[url('/images/mobile-cta-background.png')] lg:bg-[url('/images/cta-background-image.webp')] w-full pt-[160px] pb-[90px] px-[22px] lg:px-[0px]">
      <div>
        <p className="text-blue text-center text-[14px] font-bold pb-[30px]">
          Designing Better Experience
        </p>
        <h1 className="text-center text-black font-bold text-[35px] lg:text-[40px] pb-[30px]">
          Problems trying to resolve <br /> the conflict between{" "}
        </h1>
        <p className="text-center text-grey text-[14px] pb-[30px]">
          Problems trying to resolve the conflict between the two major
          <br /> realms of Classical physics:
        </p>
        <p className="text-green text-[24px] text-center font-bold pb-[30px]">
          $16.48
        </p>
        <div className="flex justify-center">
          <Button
            pressEffect={true}
            customStyle="bg-blue flex justify-center items-center rounded-[5px] w-[292px] h-[52px] text-white"
          >
            <p className="text-[14px] font-bold">ADD YOUR CALL TO ACTION</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
