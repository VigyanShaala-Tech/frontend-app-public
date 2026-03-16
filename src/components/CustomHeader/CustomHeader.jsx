import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import Header from '@edx/frontend-component-header';

import messages from './messages';

export const PublicHeader = () => {
  const { formatMessage } = useIntl();

  const menuItems = [
    {
      type: 'item',
      href: '/public',
      content: formatMessage(messages.home),
    },
    {
      type: 'item',
      href: '/public/courses',
      content: formatMessage(messages.courses),
    },
    {
      type: 'menu',
      content: formatMessage(messages.aboutUs),
      submenuContent: (
        <>
          <a className="dropdown-item" href="/public/story">
            {formatMessage(messages.ourStory)}
          </a>
          <a className="dropdown-item" href="/public/team">
            {formatMessage(messages.team)}
          </a>
          <a className="dropdown-item" href="/public/supporter">
            {formatMessage(messages.supporters)}
          </a>
          <a className="dropdown-item" href="/public/financial">
            {formatMessage(messages.financials)}
          </a>
        </>
      ),
    },
    {
      type: 'item',
      href: '/public/contact',
      content: formatMessage(messages.contactUs),
    },
  ];

  return (
    <Header
      mainMenuItems={menuItems}
    />
  );
};

export default PublicHeader;