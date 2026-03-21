import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import Header from '@edx/frontend-component-header';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

export const PublicHeader = () => {
  const { formatMessage } = useIntl();
  const config = getConfig();
  const LMS_BASE_URL = config.LMS_BASE_URL;

  const menuItems = [
    {
      type: 'item',
      href: '/public',
      content: formatMessage(messages.home),
    },
    {
      type: 'item',
      href: `${LMS_BASE_URL}/dashboard`,
      content: formatMessage(messages.dashboard),
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