"use client";

import React from "react";
import Image from "next/image";
import certificateImg from "@/assets/certificate.jpg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Certificate() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40dvw] h-auto rounded-xl p-1 md:p-6 border">
        <CardItem translateZ="100" className="w-full p-4">
          <Image
            src={certificateImg}
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt="certificate"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
