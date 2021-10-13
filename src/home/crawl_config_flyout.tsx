import { useMemo, useState } from 'react';

import {
	EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiButton,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { DomainSelectable } from './domain_selectable';
import { CustomCrawlPresets } from './custom_crawl_presets';
import { CustomCrawlSettings } from './custom_crawl_settings';

export const CrawlConfigFlyout: React.FC = () => {
	const tabs = [
		{
			id: 'presets',
			name: "Presets",
			content: <CustomCrawlPresets />,
		},
		{
			id: 'custom',
			name: 'Custom configuration',
			content: <CustomCrawlSettings />,
		}
	];
	const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
	const [selectedTabId, setSelectedTabId] = useState('custom');
	const selectedTabContent = useMemo(() => {
		return tabs.find((obj) => obj.id === selectedTabId)?.content;
	}, [selectedTabId]);
	const onSelectedTabChanged = (id: string) => {
    setSelectedTabId(id);
  };

	const renderTabs = () => {
		return tabs.map((tab, index) => (
			<EuiTab
				key={index}
				onClick={() => onSelectedTabChanged(tab.id)}
				isSelected={tab.id === selectedTabId}
			>
				{tab.name}
			</EuiTab>
		))
	}

	return (
		<>
			<EuiButton onClick={() => setIsFlyoutVisible(true)}>Set up custom crawl</EuiButton>
			{isFlyoutVisible && (
				<EuiFlyout onClose={() => setIsFlyoutVisible(false)}>
					<EuiFlyoutHeader hasBorder>
		        <EuiTitle size="m">
		          <h2 id="flyoutTitle">Custom crawl configuration</h2>
		        </EuiTitle>
		      </EuiFlyoutHeader>
		      <EuiFlyoutBody>
		      	<DomainSelectable />
		      	<EuiSpacer />
		      	<EuiTabs>{renderTabs()}</EuiTabs>
		      	<EuiSpacer />
		      	{selectedTabContent}
		      </EuiFlyoutBody>
				</EuiFlyout>
			)}
		</>
	)
}