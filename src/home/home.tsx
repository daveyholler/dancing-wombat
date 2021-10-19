import { useState } from 'react';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiListGroupItem,
  EuiPageTemplate,
  EuiPanel,
  EuiPopover,
  EuiText,
} from '@elastic/eui';

import { CrawlConfigFlyout } from './crawl_config_flyout';
import { DomainSelectionModal } from './domain_selection_modal';

export default function Home() {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [flyoutIsOpen, setFlyoutIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onButtonClick = () => {
    setPopoverIsOpen((popoverIsOpen) => !popoverIsOpen);
  }

  const openFlyout = () => {
    setFlyoutIsOpen(true);
    setPopoverIsOpen(false);
  }

  const openModal = () => {
    setModalIsOpen(true);
    setPopoverIsOpen(false);
  }

  const Placeholder = () => (
    <EuiPanel
      color="subdued"
      style={{ minHeight: '30rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EuiText color="subdued"><p>Stuff goes here</p></EuiText>
      </EuiPanel>
  )

  const StartCrawlPopoverButton = (
    <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      Start a crawl
    </EuiButton>
  )

  const StartCrawlPopover = (
    <EuiPopover
      button={StartCrawlPopoverButton}
      isOpen={popoverIsOpen}
      closePopover={() => setPopoverIsOpen(false)}
      anchorPosition="downRight">
      <EuiListGroup>
        <EuiListGroupItem label="Crawl all domains on this engine" />
        <EuiListGroupItem
          onClick={() => openModal()}
          label="Crawl select domains"/>
        <EuiListGroupItem
          onClick={() => openFlyout()}
          label="Crawl with custom settings" />
      </EuiListGroup>
    </EuiPopover>
  )

  return (
    <EuiPageTemplate
      pageHeader={{
        pageTitle: 'Web crawler',
        rightSideItems: [StartCrawlPopover],
      }}
    >
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          { flyoutIsOpen && <CrawlConfigFlyout handleFlyoutClose={() => setFlyoutIsOpen(false)}/> }
          { modalIsOpen && <DomainSelectionModal initialIsOpen hasBorder={false} onModalClose={() => setModalIsOpen(false)} />}
          <Placeholder />
        </EuiFlexItem>
        <EuiFlexItem>
          <Placeholder />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageTemplate>
  );
}
