import { useState } from 'react';

import {
  EuiAccordion,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiNotificationBadge,
  EuiPanel,
  EuiSelectable,
  EuiSpacer,
  EuiTitle,
  htmlIdGenerator,
} from '@elastic/eui';
import { EuiSelectableLIOption } from '@elastic/eui/src/components/selectable/selectable_option';

interface DomainProps {
  domains?: EuiSelectableLIOption<any>[];
}

export const DomainSelectable: React.FC<DomainProps> = ({
  domains = [
    { label: 'jnco.com', checked: 'on' },
    { label: 'stussy.com', checked: 'on' },
    { label: 'jordache.com', checked: 'on' },
    { label: 'vans.com', checked: 'on' },
    { label: 'freshjive.com', checked: 'on' },
    { label: 'seanjohn.com', checked: 'on' },
    { label: 'alienworkshop.com', checked: 'on' },
    { label: 'airwalk.com', checked: 'on' },
    { label: 'babyphat.com', checked: 'on' },
  ],
}) => {
  
  const [options, setOptions] = useState(domains);
  
  let selectedOptions = options.filter(function (e) {
      return e.checked === 'on';
  });

  const selectAll = () => {
    const updatedOptions = [...domains]
    for (let domain of updatedOptions) {
      domain.checked = 'on';
    }
    setOptions(updatedOptions);
  }

  const deselectAll = () => {
    const updatedOptions = [...domains]
    for (let domain of updatedOptions) {
      domain.checked = null;
    }
    setOptions(updatedOptions);
  }

  return (
    <EuiPanel hasBorder paddingSize="l">
      <EuiAccordion
        id={htmlIdGenerator()()}
        buttonContentClassName="customCrawlAccordion__button"
        initialIsOpen
        buttonContent={
          <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
            <EuiFlexItem>
              <EuiFlexGroup gutterSize="s" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiIcon type="globe" color="subdued" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiTitle size="xs"><h4>Add domains to your crawl</h4></EuiTitle>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiNotificationBadge>{selectedOptions.length}</EuiNotificationBadge>
                </EuiFlexItem>
                <EuiFlexItem>
                  Selected
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      >
        <>
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                disabled={options.length === selectedOptions.length}
                iconType="check"
                onClick={() => selectAll()}>
                Select all
              </EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                disabled={selectedOptions.length === 0}
                iconType="cross"
                onClick={() => deselectAll()}>
                Deselect all
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
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
        </>
      </EuiAccordion>
    </EuiPanel>
  );
};
