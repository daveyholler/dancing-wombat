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

interface DomainProps {
  domains?: EuiSelectableLIOption<any>[];
}

export const DomainSelectable: React.FC<DomainProps> = ({
  domains = [
    { label: 'jnco.com', checked: null },
    { label: 'stussy.com', checked: null },
    { label: 'jordache.com', checked: null },
    { label: 'vans.com', checked: null },
    { label: 'freshjive.com', checked: null },
    { label: 'seanjohn.com', checked: null },
    { label: 'alienworkshop.com', checked: null },
    { label: 'airwalk.com', checked: null },
    { label: 'babyphat.com', checked: null },
  ],
}) => {
  
  const [options, setOptions] = useState(domains);
  
  let selectedOptions = options.filter(function (e) {
      return e.checked === 'on';
  });
  console.log(selectedOptions);

  return (
    <EuiPanel color="subdued" paddingSize="l">
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem>
          <EuiTitle size="xs"><h4>Select the domains you'd like to crawl</h4></EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiNotificationBadge>{selectedOptions.length}</EuiNotificationBadge>
            </EuiFlexItem>
            <EuiFlexItem>
              Selected
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />
      <EuiSelectable
        aria-label="Searchable example"
        searchable
        searchProps={{
          'data-test-subj': 'selectableSearchHere',
          isClearable: true,
        }}
        options={options}
        onChange={(newOptions) => setOptions(newOptions)}
      >
        {(list, search) => (
          <>
            {search}
            {list}
          </>
        )}
      </EuiSelectable>
    </EuiPanel>
  );
};
