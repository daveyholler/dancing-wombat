import { useState } from 'react';
import {
	EuiFlexGroup,
	EuiFlexItem,
	EuiNotificationBadge,
  EuiPanel,
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
      <EuiPanel hasBorder>
        <EuiFlexGroup justifyContent="spaceBetween">
          <EuiFlexItem>
            <EuiTitle size="xxs"><h3>Additional URL summary</h3></EuiTitle>
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
      </EuiPanel>
    </>
	)
}
