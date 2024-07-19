"use client"
import React, { memo } from "react";
import { useLottie } from "lottie-react";

import loadingJSON from "@/shared/lotties/loading.json";

const Loading = () => {
  const options = {
    animationData: loadingJSON,
    loop: true
  };
  const { View } = useLottie(options);
  return <div className="centerBox sw">{View}</div>;
};

export default memo(Loading);