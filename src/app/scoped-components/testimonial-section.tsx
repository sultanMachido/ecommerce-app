"use client";
import Avatar from "@/components/avatar";
import ImageGrid from "@/components/image-grid";
import StarRating from "@/components/rating";

const TestimonialSection = () => {
  return (
    <section className="pt-[81px] block lg:flex justify-between pb-[48px]">
      <div className="mb-10 lg:mb-[0px]lg:w-5/12 pt-[20px]">
        <h3 className="text-center font-bold text-black">
          What they say about us
        </h3>
        <div className="flex justify-center mt-[58px] mb-[20px]">
          <Avatar imageSource="/images/avi.webp" />
        </div>
        <div className="flex justify-center">
          <StarRating value={4} />
        </div>
        <p className="text-center text-grey text-[14px] font-bold py-[20px]">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <p className="text-blue font-bold text-center text-[14px]">
          Regina Miles
        </p>
        <p className="text-center text-black text-[14px] font-bold">Designer</p>
      </div>
      <div className="w-full lg:w-5/12">
        <ImageGrid />
      </div>
    </section>
  );
};

export default TestimonialSection;
