import Link from "next/link";

type PackageCardProps = {
  bgColor: any;
  title: any;
  icon: any;
  version: any;
  release_date: any;
  button_link: any;
  button_label: any;
  button_bg: any;
  resource_type: any;
  buttonFile: any;
};

const PackageCard = ({
  bgColor,
  title,
  icon,
  version,
  release_date,
  button_link,
  button_label,
  button_bg,
  resource_type,
  buttonFile,
}: PackageCardProps) => {
  // console.log("PackageCard ButtonFile"+buttonFile);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`bg-white rounded-lg p-9 flex flex-col items-center justify-center w-full lg:w-1/4`}
    >
      <div className="pb-[18px]">
        <div className=" h-[78px]  flex items-center justify-center">
          {icon}
        </div>
      </div>
      {/* <Image src={relative_image_path("chrome2.png")} width={79} height={78} alt="Bangla" className="pb-[18px]" /> */}
      <div className="w-full flex flex-col pb-[13px]">
        <p className="font-bold">{title}</p>
        <p>Version: {version}</p>
        <p>Release Date: {release_date}</p>
        <p>Resource Type: {resource_type == "download" ? "File" : "Link"}</p>
      </div>
      <div className="w-full">
        {resource_type == "download" ? (
          <>
            {buttonFile == "null" ? (
              <Link
                target="_blank"
                style={{ backgroundColor: button_bg }}
                href={button_link ? button_link : "#"}
                className="bg-white text-12 text-white px-2 py-1 rounded-sm"
              >
                {button_label}
              </Link>
            ) : (
              <Link
                target="_blank"
                style={{ backgroundColor: button_bg }}
                // onClick={onButtonClick}
                href={
                  buttonFile
                    ? process.env.NEXT_PUBLIC_IMAGE_URL + buttonFile
                    : "#"
                }
                className="bg-white text-12 text-white px-2 py-1 rounded-sm cursor-pointer"
              >
                {button_label}
              </Link>
            )}
          </>
        ) : (
          <>
            <Link
              target="_blank"
              style={{ backgroundColor: button_bg }}
              href={button_link ? button_link : "#"}
              className="bg-white text-12 text-white px-2 py-1 rounded-sm"
            >
              {button_label}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
