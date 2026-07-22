import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

const Head = () => {
  const { formatMessage } = useIntl();
  const faviconUrl = getConfig().FAVICON_URL;
  const siteName = getConfig().SITE_NAME;

  return (
    <Helmet>
      <title>
        {formatMessage(messages['public.page.title'], { siteName })}
      </title>
      {faviconUrl && (
        <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      )}
    </Helmet>
  );
};

export default Head;
