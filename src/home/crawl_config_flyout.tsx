import React, { useMemo, useState } from 'react';

import {
	EuiButton,
	EuiButtonEmpty,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
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
		      <EuiFlyoutFooter>
		      	<EuiFlexGroup justifyContent="flexEnd">
		      		<EuiFlexItem grow={false}>
		      			<EuiButtonEmpty onClick={() => setIsFlyoutVisible(false)}>Cancel</EuiButtonEmpty>
		      		</EuiFlexItem>
		      		<EuiFlexItem grow={false}>
		      			<EuiButton fill>Apply and crawl now</EuiButton>
		      		</EuiFlexItem>
		      	</EuiFlexGroup>
		      </EuiFlyoutFooter>
				</EuiFlyout>
			)}
		</>
	)
}
