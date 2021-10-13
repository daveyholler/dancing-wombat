import {
  EuiPageTemplate
} from '@elastic/eui';

import { CrawlConfigFlyout } from './crawl_config_flyout';

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
