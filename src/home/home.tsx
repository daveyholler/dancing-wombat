import {
  EuiPageTemplate
} from '@elastic/eui';

import { CrawlConfigFlyout } from './crawl_config_flyout';
import { UrlParser } from './url_parser';

export default function Home() {
  return (
    <EuiPageTemplate
      pageHeader={{
        pageTitle: 'Web crawler',
        // rightSideItems: [button],
      }}
    >
      <CrawlConfigFlyout />
    </EuiPageTemplate>
  );
}
