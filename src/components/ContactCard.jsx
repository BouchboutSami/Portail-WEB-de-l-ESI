import { FaPhone, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const ContactCard = ({ contact }) => {
  return (
    <div className="w-[370px] bg-[#185B9C] rounded-md text-white p-6 flex flex-col gap-6 text-sm">
      {contact.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <FaUserCircle className="w-5 h-5" />
              <div className="capitalize text-xs flex-1">{item.username}</div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-3 h-3" />
              <div className="flex-1">{item.phone}</div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-3 h-3" />
              <div className="flex-1">{item.email}</div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default ContactCard;

