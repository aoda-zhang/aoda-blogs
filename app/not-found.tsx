"use client"
import React, { memo } from "react";
import { useLottie } from "lottie-react";

import notFoundJSON from "@/shared/lotties/notFound.json";

const NotFound = () => {
  const options = {
    animationData: notFoundJSON,
    loop: true
  };
  const { View } = useLottie(options);
  return <div className="centerBox mw">{View}</div>;
};

export default memo(NotFound);