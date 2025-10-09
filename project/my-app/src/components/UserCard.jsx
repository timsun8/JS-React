import React from "react";
import "../styles/UserCard.css";

export default function UserCard({ user }) {
  const { name, username, email, phone, website, address } = user;
  const avatar = `https://robohash.org/${encodeURIComponent(
    username
)}.png?size=80x80&set=set4`;

return (
    <article className="uc-card">
      <img className="uc-avatar" src={avatar} alt={`${username} avatar`} />
      <div className="uc-body">
        <h3 className="uc-name">{name}</h3>
        <p className="uc-username">@{username}</p>
        <div className="uc-meta">
          <a href={`mailto:${email}`} className="uc-link">{email}</a>
          <span>·</span>
          <span>{phone}</span>
          <span>·</span>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
            className="uc-link"
          >
            {website}
          </a>
          {address?.city && <span> · {address.city}</span>}
        </div>
      </div>
    </article>
);
}
