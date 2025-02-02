import React from 'react';
import { osmBaseUrl } from '../../config/constants';

export const UserOSMLink = ({ userName, linkClasses, children }) => {
  if (!userName) return null;

  const url = `${osmBaseUrl}/user/${userName}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Open in OSM"
      className={
        linkClasses ||
        'mx3 btn btn--s border border--1 border--darken5 border--darken25-on-hover round bg-darken10 bg-darken5-on-hover color-gray transition'
      }
    >
      {children}
    </a>
  );
};
