import { useState } from 'react';
import {
	EuiAccordion,
	EuiFlexGroup,
	EuiFieldNumber,
	EuiFlexItem,
	EuiFormRow,
	EuiIcon,
	EuiPanel,
	EuiSpacer,
	EuiText,
	EuiTitle,
	htmlIdGenerator,
} from '@elastic/eui';

import { EuiSelectableLIOption } from '@elastic/eui/src/components/selectable/selectable_option';
import { UrlParser } from './url_parser';
import { CustomCrawlPresets } from './custom_crawl_presets';

export const CustomCrawlSettings = () => {
	const [customUrls, setCustomUrls] = useState([]);
	const [currentUrl, setCurrentUrl] = useState('');

	const addUrl = (url: string) => {
		let updatedUrlList: EuiSelectableLIOption<any> = [...customUrls];
		updatedUrlList.push({
			label: url,
			checked: 'on'
		})
		setCustomUrls(updatedUrlList);
	}

	const onBulkAdd = (bulkUrls: any) => {
		let updatedUrlList = customUrls.concat(bulkUrls);
		setCustomUrls(updatedUrlList)
	}

	return (
		<EuiPanel hasBorder paddingSize="l">
			<EuiAccordion
				id={htmlIdGenerator()()}
				initialIsOpen
				buttonClassName="customCrawlAccordion__button"
				buttonContent={
					<EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiIcon type="link" color="subdued" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="xs"><h4>Customize crawl settings</h4></EuiTitle>
            </EuiFlexItem>
          </EuiFlexGroup>
				}
			>
				<>
					<EuiSpacer size="m" />
					<EuiFlexGroup alignItems="flexEnd">
						<EuiFlexItem grow={false}>
							<EuiFormRow label="Max crawl depth">
								<EuiFieldNumber placeholder="1" max={5} />
							</EuiFormRow>
						</EuiFlexItem>
						<EuiFlexItem>
							<EuiText color="subdued" size="xs">
								<p>Use max crawl depth to specify how many subpages the crawler should visit when indexing the URLs provided.</p>
							</EuiText>
						</EuiFlexItem>
					</EuiFlexGroup>
					<EuiSpacer size="m" />
					<CustomCrawlPresets />
					<EuiSpacer size="m" />
					<UrlParser handleSubmit={(urls) => onBulkAdd(urls)} />
					<EuiSpacer size="m" />
				</>
			</EuiAccordion>
		</EuiPanel>
	);
}
