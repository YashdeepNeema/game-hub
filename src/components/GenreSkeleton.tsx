import { HStack, List, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <List>
      <HStack>
        <Skeleton boxSize={"32px"} />
        <SkeletonText fontSize={"lg"} />
      </HStack>
    </List>
  );
};

export default GenreSkeleton;
