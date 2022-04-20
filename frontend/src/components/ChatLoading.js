import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = ({ loading_number }) => {
  
  let rows = [];
  for (let i = 0; i < loading_number; i++) {
    rows.push(<Skeleton height="45px"/>);
  }


  return (
    <Stack>
      {rows}
      {/* <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" />
      <Skeleton height="45px" /> */}
      
    </Stack>
  );
};

export default ChatLoading;