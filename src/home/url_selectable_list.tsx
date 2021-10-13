import { useState } from 'react';
import {
	EuiFlexGroup,
	EuiFlexItem,
	EuiNotificationBadge,
	EuiSelectable,
	EuiSpacer,
	EuiTitle,
} from '@elastic/eui';
import { EuiSelectableLIOption } from '@elastic/eui/src/components/selectable/selectable_option';

interface UrlSelectableProps {
	urls: EuiSelectableLIOption<any>[] | [];
}

export const UrlSelectableList: React.FC<UrlSelectableProps> = ({
	urls = []
}) => {
	const [options, setOptions] = useState(urls);
	return (
		<>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem>
          <EuiTitle size="xxs"><h4>Select the domains you'd like to crawl</h4></EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiNotificationBadge>{options.length}</EuiNotificationBadge>
            </EuiFlexItem>
            <EuiFlexItem>
              Selected
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xs" />
      <EuiSelectable
        aria-label="Searchable example"
        searchable
        searchProps={{
          'data-test-subj': 'selectableSearchHere',
        }}
        options={urls}
        listProps={{ bordered: true }}
        onChange={(newOptions) => setOptions(newOptions)}
        emptyMessage="Add some URLs to crawl"
      >
        {(list, search) => (
          <>
            {search}
            {list}
          </>
        )}
      </EuiSelectable>
    </>
	)
}