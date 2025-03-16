import { getSettingActiveColors } from "@/app/(admin)/_api/Setting/ColorApi";
import { getActiveSettingIcon } from "@/app/(admin)/_api/Setting/SettingIconApi";
import ServiceDetailsNew from "@/app/_components/ServiceDetailsNew/ServiceDetailsNew";

const page = async ({ params }: { params: { id: string } }) => {
  const responseColor = await getSettingActiveColors()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

  const responseIcon = await getActiveSettingIcon()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

  const { id } = params;
  return (
    <>
      <ServiceDetailsNew
        paramsId={id}
        allColorData={responseColor?.data}
        allIconData={responseIcon?.data}
      />
    </>
  );
};

export default page;
