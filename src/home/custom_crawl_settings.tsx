import { useState } from 'react';
import {
	EuiButton,
	EuiFieldText,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFormRow,
	EuiSpacer,
} from '@elastic/eui';

import { UrlSelectableList } from './url_selectable_list';
import { EuiSelectableLIOption } from '@elastic/eui/src/components/selectable/selectable_option';

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
	return (
		<>
			<EuiFlexGroup alignItems="flexEnd">
				<EuiFlexItem>
					<EuiFormRow fullWidth label="Add a custom URL">
						<EuiFieldText fullWidth placeholder="https://jnco.com/best-sellers/50-inch" onChange={(event: any) => setCurrentUrl(event.target.value)} />
					</EuiFormRow>
				</EuiFlexItem>
				<EuiFlexItem grow={false}>
					<EuiButton iconType="plusInCircle" onClick={() => addUrl(currentUrl)}>Add URL</EuiButton>
				</EuiFlexItem>
			</EuiFlexGroup>
			<EuiSpacer size="l" />
			<UrlSelectableList urls={customUrls} />
		</>
	);
}