import { Clock4, MapPin } from "lucide-react";
import { ReactNode } from "react";

type ContactListType = {
  icon: ReactNode;
  title: string;
}[];

const contactList: ContactListType = [
  {
    icon: <MapPin size={20} className="text-white" />,
    title: "Mansoura",
  },
  {
    icon: <Clock4 size={20} className="text-white" />,
    title: "Working Hours: 9:00 AM – 8:00 PM",
  },
];

export const TopContact = () => {
  return (
    <div className="flex items-center space-x-12">
      <div>
        <p className="text-white text-base hidden lg:block">Bizper</p>
      </div>
      {contactList.map((contact, index) => (
        <div key={index} className="flex items-center space-x-2">
          {contact.icon}
          <p className="text-white text-base">{contact.title}</p>
        </div>
      ))}
    </div>
  );
};
