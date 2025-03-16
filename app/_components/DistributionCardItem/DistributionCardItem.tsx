"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type DistributionItemProps = {
  distributionCardItems: any;
  allActiveIcon: any;
};

const DistributionItem = ({
  distributionCardItems,
  allActiveIcon,
}: DistributionItemProps) => {
  return (
    <>
      {distributionCardItems?.length > 0 ? (
        <>
          {distributionCardItems?.map((item: any, index: number) => {
            const matchedIcon = allActiveIcon?.find(
              (iconItem: any) => iconItem?.id == item?.icon
            )?.icon;
            const iconSrc = matchedIcon
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${matchedIcon}`
              : `${process.env.NEXT_PUBLIC_IMAGE_URL}${process.env.NEXT_PUBLIC_DEFAULT_IMAGE}`;
            return item?.brows_type == "download" ? (
              <>
                {item?.brows_file == "null" ? (
                  <Link
                    target="_blank"
                    href={item?.brows_link ? item?.brows_link : "#"}
                    key={index}
                    className="cursor-pointer  flex items-center justify-center "
                  >
                    <Image
                      src={iconSrc}
                      className="w-[22px] "
                      width={22}
                      height={22}
                      alt={item?.label || "Default Icon"}
                    />
                  </Link>
                ) : (
                  <Link
                    target="_blank"
                    href={
                      item?.brows_file
                        ? process.env.NEXT_PUBLIC_IMAGE_URL + item?.brows_file
                        : "#"
                    }
                    key={index}
                    className="cursor-pointer  flex items-center justify-center "
                  >
                    <Image
                      src={iconSrc}
                      className="w-[22px] "
                      width={22}
                      height={22}
                      alt={item?.label || "Default Icon"}
                    />
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link
                  target="_blank"
                  href={item?.brows_link ? item?.brows_link : "#"}
                  key={index}
                  className="cursor-pointer  flex items-center justify-center "
                >
                  <Image
                    src={iconSrc}
                    className="w-[22px] "
                    width={22}
                    height={22}
                    alt={item?.label || "Default Icon"}
                  />
                </Link>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DistributionItem;
