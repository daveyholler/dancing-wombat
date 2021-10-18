import { IUrl } from './url_parser';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiListGroupItem,
  EuiNotificationBadge,
  EuiPanel,
  EuiTitle,
} from '@elastic/eui';

interface UrlListProps {
  urls: IUrl[];
  valid: boolean;
}

export const UrlListGroup: React.FC<UrlListProps> = ({ urls, valid }) => {
  return (
    <>
      {urls.length > 0 && (
        <EuiPanel color={valid ? 'success' : 'warning'}>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiNotificationBadge>{urls.length}</EuiNotificationBadge>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h3>{valid ? 'Valid' : 'Invalid'} URLs</h3>
              </EuiTitle>
            </EuiFlexItem>
          </EuiFlexGroup>  
          <EuiListGroup gutterSize="none">
            {urls.map(url => (
              <EuiListGroupItem iconType={valid ? 'check' : 'alert'} size="s" label={url.label} />
            ))}
          </EuiListGroup>
        </EuiPanel>
      )}
    </>
  )
}
