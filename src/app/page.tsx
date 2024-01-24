"use client";
import Jumbotron from "./scoped-components/jumbotron";
import FeaturedProducts from "./scoped-components/featured-products";
import FeaturedPosts from "./scoped-components/featured-posts";
import TestimonialSection from "./scoped-components/testimonial-section";
import CtaSection from "./scoped-components/cta-section";

export default function Home() {
  return (
    <>
      <div className="w-[88%] lg:w-[80%] mx-auto pt-24">
        <Jumbotron />
        <FeaturedProducts />
        <FeaturedPosts />
        <TestimonialSection />
      </div>
      <CtaSection />
    </>
  );
}
