import { TrashIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { Contact } from "../types";

interface ContactCardProps {
  contact: Contact;
  onRemove: (contact: Contact) => void;
}

const ContactCard = ({ contact, onRemove }: ContactCardProps) => {
  return (
    <li className="grid relative bg-white rounded-xl p-3 py-6 shadow-md">
      <img
        className="w-12 h-12 m-auto mb-2"
        src="/call.png"
        alt="contact-logo"
      />
      <span className="block text-center text-slate-700 font-semibold">
        {contact.firstName} {contact.lastName}
      </span>

      <span className="block text-center text-sm font-semibold text-slate-500">
        <PhoneIcon className="w-5 h-5 inline-block mr-1" />
        {contact.phoneNumber}
      </span>
      <button
        onClick={() => onRemove(contact)}
        id={contact.firstName}
        className="absolute top-2 right-2 w-6 h-6"
      >
        <TrashIcon className="fill-red-700" />
      </button>
    </li>
  );
};

export default ContactCard;
