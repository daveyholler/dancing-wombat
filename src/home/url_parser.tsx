import { useState, SyntheticEvent } from 'react';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiListGroup,
  EuiListGroupItem,
  EuiTextArea
} from '@elastic/eui';

interface Url {
  label: string;
  checked: 'on' | 'off' | null;
}

interface UrlListProps {
  urls?: Url[] | [];
  handleSubmit: (urls: Url[]) => void;
}

export const UrlParser: React.FC<UrlListProps> = ({
  urls = [],
  handleSubmit
}) => {
  const [urlList, setUrlList] = useState<Url[] | []>(urls);
  const [rawList, setRawList] = useState<string>('');

  const onSubmit = () => {
    handleSubmit(urlList)
    setRawList('')
  }

  const onChange = (value: string) => {
    setRawList(value)
    let raw: string[] = value.split(', ');
    let formattedUrls: Url[] = []
    for (const i of raw) {
      formattedUrls.push({
        label: i.trim(),
        checked: 'on',
      })
    }
    setUrlList(formattedUrls)
  };

  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiFormRow
          fullWidth
          label="Crawl additional URLs"
          helpText="Enter a comma-separated list of additional URLs you'd like to crawl.">
          <EuiTextArea
            value={rawList}
            fullWidth
            onChange={(event) => onChange(event.target.value)}
          />
        </EuiFormRow>
        <EuiButton
          disabled={urlList.length === 0}
          onClick={onSubmit}>
          Add URLs
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}
