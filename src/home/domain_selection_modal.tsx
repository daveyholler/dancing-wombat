import {
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiTitle,
} from '@elastic/eui';

import { DomainSelectable } from './domain_selectable';

interface Props {
  onModalClose: any;
  initialIsOpen: boolean;
  hasBorder: boolean;
}

export const DomainSelectionModal: React.FC<Props> = ({
  onModalClose,
  initialIsOpen,
  hasBorder = true,
}) => {
  const handleClose = () => {
    onModalClose();
  }
  return (
    <EuiModal onClose={handleClose} style={{ width: '50rem', maxWidth: '90%' }}>
      <EuiModalHeader>
        <EuiTitle size="s">
          <h1>Crawl select domains</h1>
        </EuiTitle>
      </EuiModalHeader>
       <EuiModalBody>
         <DomainSelectable initialIsOpen={initialIsOpen} hasBorder={hasBorder} />
       </EuiModalBody>
       <EuiModalFooter>
         <EuiFlexGroup justifyContent="flexEnd">
           <EuiFlexItem grow={false}>
             <EuiButtonEmpty onClick={handleClose}>Cancel</EuiButtonEmpty>
           </EuiFlexItem>
           <EuiFlexItem grow={false}>
             <EuiButton>Apply and crawl now</EuiButton>
           </EuiFlexItem>
         </EuiFlexGroup>        
       </EuiModalFooter>
    </EuiModal>
  )
}
