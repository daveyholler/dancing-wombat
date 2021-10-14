import React, { useMemo, useState } from 'react';

import {
	EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiButton,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiTitle,
} from '@elastic/eui';

import { DomainSelectable } from './domain_selectable';
import { CustomCrawlSettings } from './custom_crawl_settings';

export const CrawlConfigFlyout: React.FC = () => {
	const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

	return (
		<>
			<EuiButton onClick={() => setIsFlyoutVisible(true)}>Set up custom crawl</EuiButton>
			{isFlyoutVisible && (
				<EuiFlyout onClose={() => setIsFlyoutVisible(false)} outsideClickCloses={false}>
					<EuiFlyoutHeader hasBorder>
		        <EuiTitle size="m">
		          <h2 id="flyoutTitle">Custom crawl configuration</h2>
		        </EuiTitle>
		      </EuiFlyoutHeader>
		      <EuiFlyoutBody>
		      	<DomainSelectable />
		      	<EuiSpacer />
		      	<CustomCrawlSettings />
		      </EuiFlyoutBody>
				</EuiFlyout>
			)}
		</>
	)
}
