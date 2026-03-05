import React, { FC } from "react";

type EmployeeContactProps = {
  name: string;
  title: string;
  contact: string;
};

const EmployeeContact: FC<EmployeeContactProps> = ({
  title,
  name,
  contact,
}) => {
  return (
    <tr className="flex flex-col gap-4 py-6 md:table-row md:py-0">
      <td className="font-radio-canada-big text-start text-[20px] font-medium -tracking-[0.4px] md:table-cell md:py-4">
        {name}
      </td>
      <td className="font-source-serif-pro text-start text-[20px] leading-[1.15] -tracking-[0.8px] md:table-cell md:py-4">
        {title}
      </td>
      <td className="font-source-serif-pro text-start text-[20px] leading-[1.15] -tracking-[0.8px] underline md:table-cell md:py-4 md:text-end">
        {contact}
      </td>
    </tr>
  );
};

export default EmployeeContact;
