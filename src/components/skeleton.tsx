import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton variant="rect" width={210} height={118} />
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={210} />
    </div>
  );
};

export const SkeletonLoaderWrapper = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );
};

export default SkeletonLoader;
