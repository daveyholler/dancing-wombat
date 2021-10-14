import { useState } from 'react';
import {
	EuiButton,
	EuiFieldText,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFormRow,
	EuiPanel,
	EuiSpacer,
	EuiTitle,
} from '@elastic/eui';

import { UrlSelectableList } from './url_selectable_list';
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
		<EuiPanel color="subdued" paddingSize="l">
			<EuiTitle size="xs">
				<h2>Select the URLs you'd like to crawl</h2>
			</EuiTitle>
			<EuiSpacer size="m" />
			<CustomCrawlPresets />
			<EuiSpacer size="m" />
			<UrlParser handleSubmit={(urls) => onBulkAdd(urls)} />
			<EuiSpacer size="m" />
			<UrlSelectableList urls={customUrls} />
		</EuiPanel>
	);
}
