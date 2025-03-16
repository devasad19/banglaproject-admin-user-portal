import Image from 'next/image';
import React from 'react';

type FeturesAndUsagesProps = {
    FeturesAndUsagesData: any;
    allColorData: any;
}

const FeturesAndUsages = ({FeturesAndUsagesData,allColorData}:FeturesAndUsagesProps) => {
    return (
        <>
        <section className="container mx-auto px-2 lg:px-16 pb-[33px]">
        {FeturesAndUsagesData?.map((item:any, index:number) => {
          allColorData?.map((colorItem:any) => {
            if (colorItem?.id == item?.bg_color) {
              item.bg_color = colorItem?.color;
            }
          });

          return (
            <div
              key={index}
              style={{
                backgroundColor: item?.bg_color,
              }}
              className="bg-[#F9F4F4] p-10 px-4 lg:px-16 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5"
            >
              <div
                className="text-center prose lg:prose-lg lg:text-left"
                dangerouslySetInnerHTML={{ __html: item?.left_description }}
              ></div>
              <div className="w-full inline-block lg:flex gap-[22px] border-t-2 border-black border-dashed lg:border-t-0 lg:border-l-2 lg:border-black lg:border-dashed px-2 lg:pl-12 pt-7 lg:pt-0">
                <div className="flex lg:inline-block items-center justify-center w-full lg:w-[25%]">
                  <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_URL + (item?.right_img || process.env.NEXT_PUBLIC_DEFAULT_IMAGE)
                  }
                  className="!w-[91px] !h-[91px]"
                  width={91}
                  height={91}
                  alt="Bangla"
                  />
                </div>

                <div
                  className=" w-full text-center prose lg:prose-lg lg:text-left lg:w-[75%]"
                  dangerouslySetInnerHTML={{ __html: item?.right_description }}
                ></div>
              </div>
            </div>
          );
        })}
      </section>
            
        </>
    );
};

export default FeturesAndUsages;