"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import React from "react";

type TCustomizeServiceBodyList = {
  index: number;
  id: any;
  name: string;
  logo: string;
  page: number;
  limit: number;
  status: any;
};

const CustomizeServiceBodyList = ({
  index,
  id,
  name,
  logo,
  page,
  limit,
  status,
}: TCustomizeServiceBodyList) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, data: { index } });

  // console.log({page, limit, index});

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab text-12 lg:text-16 border border-gray-800 text-left h-16"
    >
      <td className="text-center px-2"> {(page - 1) * limit + index}</td>
      <td className="text-center px-2">{name}</td>
      <td className="text-center">
        <div className="flex justify-center items-center">
        <Image
          className="w-10 h-10 rounded-md"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logo}`}
          height={1000}
          width={1000}
          alt="Bangla"
        />
        </div>
      
      </td>
      <td className="text-center px-2">
        {status == 1 ? (
          <span className="text-green-500">Active</span>
        ) : (
          <span className="text-red-500">Inactive</span>
        )}
      </td>
    </tr>
  );
};

export default CustomizeServiceBodyList;
