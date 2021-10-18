import { EuiBasicTable, EuiButtonIcon, EuiText, htmlIdGenerator } from '@elastic/eui';
import { IUrl } from './url_parser';

interface UrlListTableProps {
  urls: IUrl[];
  isRemovable?: boolean;
}

export const UrlListTable: React.FC<UrlListTableProps> = ({ urls, isRemovable = true }) => {
  let actions: any = null;

  if (isRemovable) {
    actions = [
      {
        render: () => {
          return <EuiButtonIcon iconType="trash" color="danger" />
        }
      },
    ]
  } else {
    actions = []
  };

  const columns = [
    {
      field: 'label',
      name: 'Path',
      sortable: true,
    },{
      actions
    }
  ];

  return (
    <>
      {
        !isRemovable && (
          <EuiText color="subdued" size="s" style={{ marginTop: '1rem' }}>
            <p>The following URLs you entered are either invalid, would be 
            skipped by your current crawl rules, or do not match your domain 
            selection above. These will be skipped when staring this crawl.</p>
          </EuiText>
        )
      }
      <EuiBasicTable
        style={{ marginTop: '1rem' }}
        items={urls}
        itemId={htmlIdGenerator()()}
        columns={columns}
      />
    </>
  )
}
