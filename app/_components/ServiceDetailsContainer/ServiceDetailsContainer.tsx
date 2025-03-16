"use client";
import { useState } from "react";
import Image from "next/image";
import { checkYoutubeOrVimeo, relative_image_path } from "@/helper";
import { FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileImage, FaFile } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { BsFiletypeExe } from "react-icons/bs";
import { toast } from "react-toastify";
import AppSliderNew from "../AppSliderNew/AppSliderNew";
import PackageCard from "../PackageCard/PackageCard";
import DistributionItem from "../DistributionCardItem/DistributionCardItem";
import FeturesAndUsages from "../FeaturesAndUsages/FeaturesAndUsages";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import VimeoVideo from "../VimeoVideo/VimeoVideo";


type ServiceDetailsContainerProps = {
    id: any;
    avg_rating: any;
    total_feedbacks: any;
    userModules: any;
    serviceData: any;
    sliders: any;
    distribution: any;
    featurs_and_usages: any;
    distribution_card_items: any;
    broad_description: any;
    allColorData: any;
    allIconData: any;
    serviceSlug: any;
    setRefatchData: any;
    refatchData: any;
}

const ServiceDetailsContainer = ({
  id,
  avg_rating,
  total_feedbacks,
  userModules,
  serviceData,
  sliders,
  distribution,
  featurs_and_usages,
  distribution_card_items,
  broad_description,
  allColorData,
  allIconData,
  serviceSlug,
  setRefatchData,
  refatchData,
}:ServiceDetailsContainerProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedBack, setFeedBack] = useState();
  const [feedbackRating, setFeedbackRating] = useState();

  const [error, setError] = useState({
    review_description: "",
    rating: "",
  });


  // set dynamic color start

  const colorItem = allColorData?.find(
    (colorItem:any) => colorItem.id == serviceData?.prom_area_bg
  );
  if (colorItem) {
    serviceData.prom_area_bg = colorItem.color;
  }
  const colorItem1 = allColorData?.find(
    (colorItem:any) => colorItem.id == serviceData?.prom_title_bg
  );
  if (colorItem1) {
    serviceData.prom_title_bg = colorItem1.color;
  }

  const promRightLabelColor = allColorData?.find(
    (colorItem:any) => colorItem.id == serviceData?.prom_right_label_color
  );
  if (promRightLabelColor) {
    serviceData.prom_right_label_color = promRightLabelColor.color;
  }

  const promLeftLabelColor = allColorData?.find(
    (colorItem:any) => colorItem.id == serviceData?.prom_left_label_color
  );
  if (promLeftLabelColor) {
    serviceData.prom_left_label_color = promLeftLabelColor.color;
  }

  // set dynamic color start





  const CopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  console.log("data", user);

  return (
    <>
      <section className="container mx-auto px-2 lg:px-16 grid grid-cols-1 lg:grid-cols-2 pb-12 pt-20">
        <div className="inline-block lg:flex items-center gap-[29px]">
          <div className="flex items-center justify-center">
            <Image
              src={
                process.env.NEXT_PUBLIC_IMAGE_URL + serviceData?.service?.logo
              }
              width={80}
              height={80}
              alt="Bangla"
            />
          </div>

          <div>
            <h3 className="text-26 lg:text-36 font-semibold text-center lg:text-left">
              {serviceData?.service?.name}
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <a
                  target="_blank"
                  href={
                    serviceData?.domain_link ? serviceData?.domain_link : "#"
                  }
                >
                  {serviceData?.domain_name
                    ? serviceData?.domain_name
                    : "No Domain Found"}
                </a>
                <div className="flex items-center gap-2 mr-2">
                  <p className="flex items-center gap-2">
                    {avg_rating.toFixed(2)}{" "}
                    <FaStar size={16} className="fill-current" />
                  </p>
                  <p>
                    ({total_feedbacks}{" "}
                    {total_feedbacks > 1 ? "Ratings" : "Rating"})
                  </p>
                </div>
                <p>Release Date: {serviceData?.service?.release_date}</p>
              </div>
              <div className="flex items-center gap-2">
                {distribution_card_items?.length > 0 && (
                  <DistributionItem
                    distributionCardItems={distribution_card_items}
                    allActiveIcon={allIconData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end lg:justify-center ">
          <div className="grow flex justify-center">
            <div>
              <button onClick={() => CopyUrl()}>
                <IoShareSocialOutline size={48} />
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <section className="container mx-auto px-2 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-4">
        <div>
          <div
            className="prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: broad_description }}
          />
        </div>
        <div className="flex flex-col gap-[26px]">
          <AppSliderNew sliders={sliders} />

          <div
            style={{ backgroundColor: serviceData?.prom_area_bg }}
            className="p-7 lg:p-10 rounded-lg flex flex-col items-center gap-4"
          >
            <h1
              // key={coloItem.id}

              style={{ backgroundColor: serviceData?.prom_title_bg }}
              className="text-white py-2 px-4 rounded-lg text-16 lg:text-20"
            >
              {serviceData?.promotion_title}
            </h1>

            <div className="flex items-center gap-[40px]">
              <div className="flex flex-col items-center gap-[6px]">
                <Image
                  className="w-[62px] h-[62px]"
                  src={
                    (process.env.NEXT_PUBLIC_IMAGE_URL || "") +
                    serviceData?.prom_left_icon
                  }
                  width={62}
                  height={62}
                  alt="Bangla"
                />
                <span
                  className="max-w-[161px] text-center"
                  style={{ color: serviceData?.prom_left_label_color }}
                >
                  {serviceData?.prom_left_label}
                </span>
              </div>
              <div className="flex flex-col items-center gap-[6px]">
                <Image
                  className="w-[62px] h-[62px]"
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_URL +
                    serviceData?.prom_right_icon
                  }
                  width={62}
                  height={62}
                  alt="Bangla"
                />
                <span
                  className="max-w-[161px] text-center"
                  style={{ color: serviceData?.prom_right_label_color }}
                >
                  {serviceData?.prom_right_label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {featurs_and_usages?.length > 0 && (
        <>
          <FeturesAndUsages
            FeturesAndUsagesData={featurs_and_usages?.slice(0, 1)}
            allColorData={allColorData}
          />
        </>
      )}

      <section className="container mx-auto px-2 lg:px-16 pb-[37px]  flex flex-col lg:flex-row justify-center gap-8">
        {distribution_card_items.map((item:any, index:number) => {
          // Assign background and button colors
          const itemBgColor =
            allColorData?.find((colorItem:any) => colorItem?.id == item?.item_bg)
              ?.color || process.env.NEXT_PUBLIC_DEFAULT_COLOR;
          const buttonBgColor =
            allColorData?.find((colorItem:any) => colorItem?.id == item?.btn_bg)
              ?.color || process.env.NEXT_PUBLIC_DEFAULT_COLOR;

          // Assign icon
          const itemIcon =
            allIconData?.find((iconItem:any) => iconItem?.id == item?.icon)?.icon ||
            "default-icon.png";

          return (
            <PackageCard
              key={index}
              icon={
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_URL +
                    (itemIcon || process.env.NEXT_PUBLIC_DEFAULT_IMAGE)
                  }
                  width={78}
                  height={78}
                  className="w-[78px] "
                  alt="Icon"
                />
              }
              bgColor={itemBgColor}
              button_bg={buttonBgColor}
              title={item?.title}
              version={item?.version}
              release_date={item?.release_date}
              button_link={item?.brows_link}
              buttonFile={item?.brows_file}
              button_label={item?.btn_label}
              resource_type={item?.brows_type}
            />
          );
        })}
      </section>

      <section className="container mx-auto px-2 lg:px-16 pb-[35px]">
        <div className="border-4 border-[#D9D9D9] rounded-lg p-3 lg:p-7 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center  justify-start lg:justify-around gap-4">
            <div className="flex lg:flex-col flex-row gap-3">
              {serviceData?.user_doc_icon ? (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_URL +
                    serviceData?.user_doc_icon
                  }
                  width={70}
                  height={70}
                  // className="w-[70px] h-[70px] rounded"
                  alt="Bangla"
                  className="w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]"
                />
              ) : (
                <Image
                  src={
                    (process.env.NEXT_PUBLIC_IMAGE_URL ?? "") +
                    (process.env.NEXT_PUBLIC_DEFAULT_IMAGE ?? "/default-image.png")
                  }
                  width={70}
                  height={70}
                  // className="w-[70px] h-[70px] rounded"
                  alt="Bangla"
                  className="w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]"
                />
              )}
              <div>
                <h3 className="text-20 font-semibold pb-[2px]">
                  {serviceData?.user_doc_label}
                </h3>
                <p className="text-12 w-full lg:max-w-[124px]">
                  {serviceData?.user_desc}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold pb-4">
                {serviceData?.youtube_video_title}
              </h3>
              <div>
                {checkYoutubeOrVimeo(serviceData?.user_youtube_link) ===
                "youtube" ? (
                  <YoutubeVideo link={serviceData?.user_youtube_link} />
                ) : checkYoutubeOrVimeo(serviceData?.user_youtube_link) ===
                  "vimeo" ? (
                  <VimeoVideo link={serviceData?.user_youtube_link} />
                ) : (
                  <Image
                    src={relative_image_path("dummy_video.jpg")}
                    width={1000}
                    height={1000}
                    alt="Bangla"
                    className="w-28 h-20"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="w-full lg:w-[60%]">
              <h3 className="font-semibold pb-5">Download & Links</h3>
              <ul>
                {userModules?.map((item:any, index:number) => {
                  return (
                    <li key={index}>
                      <Link
                        // onClick={() =>
                        //   HandleDownloadCounter(id, parseInt(item?.id))
                        // }
                        href={process.env.NEXT_PUBLIC_IMAGE_URL + item?.module}
                        target="_blank"
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="text-blue-500 hover:underline w-[80%]">
                          {item?.label}
                        </span>
                        <div className="flex items-center justify-start gap-2 w-[20%]">
                          <span className="">
                            {["png", "jpeg", "jpg", "svg"]?.some((ext) =>
                              item?.module?.includes(ext)
                            ) ? (
                              <FaFileImage size={18} />
                            ) : item?.module?.includes("pdf") ? (
                              <FaFilePdf size={18} />
                            ) : ["doc", "docx"]?.some((ext) =>
                                item?.module?.includes(ext)
                              ) ? (
                              <FaFileWord size={18} />
                            ) : item?.module?.includes("exe") ? (
                              <BsFiletypeExe size={18} />
                            ) : (
                              <FaFile size={18} />
                            )}
                          </span>

                          <span>{item?.download}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-center">
              <button
                // href={{
                //   pathname: "/services/download",
                //   query: { service: serviceSlug },
                // }}
                // shallow
              >
                <CiCircleChevRight size={68} className="w-[30px] lg:w-[68px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {featurs_and_usages?.length > 0 && featurs_and_usages?.length > 1 && (
        <>
          <FeturesAndUsages
            FeturesAndUsagesData={featurs_and_usages?.slice(
              1,
              featurs_and_usages?.length
            )}
            allColorData={allColorData}
          />
        </>
      )}
    </>
  );
};

export default ServiceDetailsContainer;
