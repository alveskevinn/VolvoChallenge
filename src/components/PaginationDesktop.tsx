import { Flex, IconButton } from "vcc-ui";
import ChevronIcon from "./icons/chevron-icon";

interface PaginationDesktopProps {
  onClickLeft: () => void;
   
  onClickRight: () => void;
}

export default function PaginationDesktop({
  onClickLeft,
  onClickRight,
}: PaginationDesktopProps) {
  return (
    <Flex
      extend={{
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        gap: "5px",
        width: "90%",
      }}
    >
      <IconButton
        onClick={onClickLeft}
        aria-label="left"
        iconName="navigation-chevronback"
        variant="outline"
      />
      <IconButton
        onClick={onClickRight}
        aria-label="right"
        iconName="navigation-chevronforward"
        variant="outline"
      />
    </Flex>
  );
}
