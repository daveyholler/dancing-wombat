import { useMemo, useState } from 'react';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiNotificationBadge,
  EuiPanel,
  EuiTabbedContent,
  EuiTextArea,
  EuiTitle,
} from '@elastic/eui';

import { UrlListGroup } from './url_list_group';
import { UrlListTable } from './url_list_table';
import { validateUrl } from './url_validator';

export interface IUrl {
  label: string;
  errors: string[];
}

interface UrlListProps {
  urls?: IUrl[] | [];
  handleSubmit: (urls: IUrl[]) => void;
}

export const UrlParser: React.FC<UrlListProps> = ({
  urls = [],
  handleSubmit
}) => {
  const [urlList, setUrlList] = useState<IUrl[]>(urls);
  const [rawList, setRawList] = useState<string>('');
  const [selectedTabId, setSelectedTabId] = useState('validUrls');

  const onSubmit = () => {
    handleSubmit(urlList)
    let raw: string[] = rawList.split(', ');
    console.log(raw);
    let formattedUrls: IUrl[] = []
    for (const i of raw) {
      formattedUrls.push({
        label: i.trim(),
        errors: validateUrl(i),
      })
    }  
    setUrlList(urlList.concat(formattedUrls))
    setRawList('');
  }

  const onChange = (value: string) => {
    console.log(value);
    setRawList(value)
  };

  const validUrls = urlList.filter(function (e) {
      return e.errors.length === 0;
  });

  const invalidUrls = urlList.filter(function (e) {
      return e.errors.length > 0;
  });

  const ValidUrlTable = <UrlListTable urls={validUrls} />

  const tabs = [
    {
      id: 'validUrls',
      prepend: <EuiNotificationBadge>{validUrls.length}</EuiNotificationBadge>,
      name: 'Valid URLs',
      content: <UrlListTable isRemovable urls={validUrls} />,
    },
    {
      id: 'invalidUrls',
      prepend: <EuiNotificationBadge>{invalidUrls.length}</EuiNotificationBadge>,
      name: 'Invalid URLs',
      content: <UrlListTable isRemovable={false} urls={invalidUrls} />
    }
  ];

  const selectedTabContent = useMemo(() => {
    return tabs.find((obj) => obj.id === selectedTabId)?.content;
  }, [selectedTabId]);

  const onSelectedTabChanged = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <EuiFlexGroup direction="column">
      <EuiFlexItem>
        <EuiFormRow
          fullWidth
          label="URLs to crawl"
          helpText="Enter a comma-separated list of additional URLs you'd like to crawl.">
          <EuiTextArea
            value={rawList}
            fullWidth
            onChange={(event) => onChange(event.target.value)}
          />
        </EuiFormRow>
        <EuiButton
          disabled={rawList === ''}
          onClick={onSubmit}>
          Validate and add URLs
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem>
        {invalidUrls.length >= 1 ? (
          <EuiPanel color="subdued" paddingSize="m">
            <EuiTabbedContent
              tabs={tabs}
              initialSelectedTab={tabs[0]}
            />
          </EuiPanel>
        ) : (
          validUrls.length >= 1 && (
            <EuiPanel color="subdued" paddingSize="m">
              <EuiFlexGroup direction="column" gutterSize="none">
                <EuiFlexItem>
                  <EuiFlexGroup gutterSize="s" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiNotificationBadge>{validUrls.length}</EuiNotificationBadge>
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiTitle size="xxs">
                        <h4>URLs</h4>
                      </EuiTitle>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                  <UrlListTable isRemovable urls={validUrls} />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          )
        )}
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}
