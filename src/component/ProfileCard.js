import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProfileCard = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;

  return (
    <div className="flex flex-col lg:flex-row items-center p-2 gap-x-3 rounded-md  bg-base-100 shadow-xl">
      <figure className="w-[50%]">
        <LazyLoadImage
          src={`https://avatars.dicebear.com/api/adventurer/${username}.svg`}
          alt={name}
        />
      </figure>
      <div className="py-4">
        <h1 className="break-all">
          <strong>Name: </strong> {name}({username})
        </h1>

        <h1 className="break-all">
          <strong>Email:</strong> {email}
        </h1>

        <h1 className="font-semibold break-all">
          <strong>Address: </strong>
          {address.street},{address.suite}, {address.city},{address.zipcode}{" "}
          <strong>Geo:</strong> ({address.geo.lat},{address.geo.lng})
        </h1>

        <h1 className="break-all">
          <strong>Phone:</strong> {phone}
        </h1>
        <h1 className="break-all">
          <strong>Website:</strong>{" "}
          <a
            className="font-semibold text-blue-400"
            target="_blank"
            href={`https://${website}`}
            rel="noreferrer"
          >
            {website}
          </a>
        </h1>

        <h1 className="break-all">
          <strong>Company:</strong> {company.name} (
          <span>
            {company.catchPhrase}, {company.catchPhrase}
          </span>
          )
        </h1>
      </div>
    </div>
  );
};

export default ProfileCard;
