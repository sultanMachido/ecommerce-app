import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const testifyingCustomers = [
  {
    img: "/images/grid-pic-1.webp",
  },
  {
    img: "/images/grid-pic-2.webp",
  },
  {
    img: "/images/grid-pic-3.webp",
  },
  {
    img: "/images/grid-pic-4.webp",
  },
  {
    img: "/images/grid-pic-5.webp",
  },
  {
    img: "/images/grid-pic-6.webp",
  },
  {
    img: "/images/grid-pic-7.webp",
  },
  {
    img: "/images/grid-pic-8.webp",
  },
  {
    img: "/images/grid-pic-9.webp",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

const ImageGrid = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  let width: number;
  let height: number;
  if (matches) {
    width = 300;
    height = 300;
  } else {
    width = 500;
    height = 450;
  }
  return (
    <Grid xs={2} sm={6}>
      <ImageList
        style={{ width: width, margin: "0 auto" }}
        rowHeight={160}
        className={classes.imageList}
        cols={3}
      >
        {testifyingCustomers.map((item) => (
          <ImageListItem key={item.img} cols={1}>
            <Image src={item.img} alt="" width={width} height={height} />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default ImageGrid;
