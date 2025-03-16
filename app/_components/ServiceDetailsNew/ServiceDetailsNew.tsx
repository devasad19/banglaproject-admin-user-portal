"use client";
import React, { useEffect, useState } from "react";
import ServiceDetailsContainer from "../ServiceDetailsContainer/ServiceDetailsContainer";
import { getServiceDetails } from "@/app/(admin)/_api";
// import ServiceDetailsContainer from "../ServiceDetailsContainer/ServiceDetailsContainer";
// import { getServiceDetails } from "../../_api";

interface ServiceDetailsNewProps {
  paramsId: any;
  allColorData: any;
  allIconData: any;
}

const ServiceDetailsNew = ({
  paramsId,
  allColorData,
  allIconData,
}: ServiceDetailsNewProps) => {
    const [reFresh, setReFresh] = useState(false);
  const [serviceDetails, setServiceDetails] = useState<any>({
    distribution: [],
    userModules: [],
    sliders: [],
    fourCols: [],
    serviceData: {},
    avg_rating: 0,
    total_feedbacks: 0,
    featurs_and_usages: [],
    distribution_card_items: [],
    broad_description: "",
    serviceSlug: "",
  });



  const fetchData = async (id: any) => {
    const response = await getServiceDetails(id).catch((error) =>
      console.log(error)
    );

    setServiceDetails({
      distribution: response?.data?.details?.distribution_items
        ? JSON.parse(response?.data?.details?.distribution_items)
        : [],
      userModules: response?.data?.details?.user_modules
        ? JSON.parse(response?.data?.details?.user_modules)
        : [],
      sliders: response?.data?.details?.media_images
        ? JSON.parse(response?.data?.details?.media_images)
        : [],
      fourCols: response?.data?.details?.four_col_items
        ? JSON.parse(response?.data?.details?.four_col_items)
        : [],
      serviceData: response?.data?.details,
      avg_rating: response?.data?.avg_rating ?? 0,
      total_feedbacks: response?.data?.total_feedbacks ?? 0,
      featurs_and_usages: response?.data?.details?.featurs_and_usages
        ? JSON.parse(response?.data?.details?.featurs_and_usages)
        : [],
      distribution_card_items: response?.data?.details?.distribution_card_items
        ? JSON.parse(response?.data?.details?.distribution_card_items)
        : [],
      broad_description: response?.data?.details?.broad_description,
      serviceSlug: response?.data?.details?.service?.slug,
    });
  };

  useEffect(() => {
    fetchData(paramsId);
  }, [paramsId,reFresh]);

    console.log("response: ", serviceDetails);
  return (
    <>
    
      <ServiceDetailsContainer
        id={paramsId}
        broad_description={serviceDetails?.broad_description}
        distribution_card_items={serviceDetails?.distribution_card_items}
        featurs_and_usages={serviceDetails?.featurs_and_usages}
        avg_rating={serviceDetails?.avg_rating}
        total_feedbacks={serviceDetails?.total_feedbacks}
        serviceData={serviceDetails?.serviceData}
        sliders={serviceDetails?.sliders}
        distribution={serviceDetails?.distribution}
        // fourCols={serviceDetails?.fourCols}
        userModules={serviceDetails?.userModules}
        allColorData={allColorData}
        allIconData={allIconData}
        serviceSlug={serviceDetails?.serviceSlug}
        refatchData={reFresh}
        setRefatchData={setReFresh}
      />
    </>
  );
};

export default ServiceDetailsNew;
