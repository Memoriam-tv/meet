import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

import muxLogo from "../../public/mux-logo.svg";

export default function ControlsLeft(): JSX.Element {
  return (
    <Flex
      alignItems="center"
      display={{ base: "none", md: "flex" }}
      width="290px"
    >
      <Image priority alt="logo" width={150} height={35} src={muxLogo} />
    </Flex>
  );
}
