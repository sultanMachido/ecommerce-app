"use client";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

type FeaturedPostsCardProps = {
  posts: { title: string; body: string; image: string }[];
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    paddingBottom: 35,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    position: "relative",
  },
}));

const FeaturedPostsCard = ({ posts }: FeaturedPostsCardProps) => {
  const classes = useStyles();
  return (
    <section className="mt-[80px] flex flex-wrap lg:flex-nowrap gap-[10px]">
      {posts?.length
        ? posts?.map((post) => (
            <Grid xs={12} sm={4} key={post?.title}>
              <Card className={classes.root}>
                <div className="ml-[20px] mt-[20px] rounded-[3px] absolute z-10 bg-red p-[10px]">
                  <p className="text-white text-[14px] font-bold">New</p>
                </div>
                <CardMedia
                  className={classes.media}
                  image={post?.image}
                  title=""
                ></CardMedia>
                <CardContent>
                  <div className="flex ">
                    <p className="text-[12px] text-[#8EC2F2] pr-[15px]">
                      Google
                    </p>
                    <p className="text-grey text-[12px] pr-[15px] ">Trending</p>
                    <p className="text-grey text-[12px]">New</p>
                  </div>
                  <h5 className="text-[20px] text-black text-left py-5">
                    {post?.title}
                  </h5>
                  <p className="text-[14px] text-grey text-left pb-5">
                    {post?.body}
                  </p>
                  <div className="flex justify-between">
                    <span className="flex">
                      <Image
                        src="/icons/clock-icon.svg"
                        alt="icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-grey text-[12px]">22 April 2021</p>
                    </span>
                    <span className="flex">
                      <Image
                        src="/icons/chart-icon.svg"
                        alt="icon"
                        width={16}
                        height={16}
                      />
                      <p className="text-grey text-[12px]">10 comments</p>
                    </span>
                  </div>
                </CardContent>
                <CardActions disableSpacing>
                  <p className="text-[14px] text-grey font-bold pl-[10px] pr-[10px]">
                    Learn More
                  </p>
                  <Image
                    src="/icons/icon-arrow-next.svg"
                    alt="icon"
                    width={9}
                    height={16}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))
        : null}
    </section>
  );
};

export default FeaturedPostsCard;
