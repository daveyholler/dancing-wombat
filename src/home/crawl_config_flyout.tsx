import React, { useMemo, useState } from 'react';

import {
	EuiButton,
	EuiButtonEmpty,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiListGroupItem,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';

import { DomainSelectable } from './domain_selectable';
import { CustomCrawlSettings } from './custom_crawl_settings';

interface Props {
	handleFlyoutClose: any
}

export const CrawlConfigFlyout: React.FC<Props> = ({
	handleFlyoutClose,
}) => {

	return (
		<>
			<EuiFlyout onClose={handleFlyoutClose} outsideClickCloses={false}>
				<EuiFlyoutHeader hasBorder>
	        <EuiTitle size="m">
	          <h2 id="flyoutTitle">Custom crawl configuration</h2>
	        </EuiTitle>
	      </EuiFlyoutHeader>
	      <EuiFlyoutBody>
	      	<DomainSelectable initialIsOpen={false} hasBorder />
	      	<EuiSpacer />
	      	<CustomCrawlSettings />
	      </EuiFlyoutBody>
	      <EuiFlyoutFooter>
	      	<EuiFlexGroup justifyContent="flexEnd">
	      		<EuiFlexItem grow={false}>
	      			<EuiButtonEmpty onClick={handleFlyoutClose}>Cancel</EuiButtonEmpty>
	      		</EuiFlexItem>
	      		<EuiFlexItem grow={false}>
	      			<EuiButton fill>Apply and crawl now</EuiButton>
	      		</EuiFlexItem>
	      	</EuiFlexGroup>
	      </EuiFlyoutFooter>
			</EuiFlyout>
		</>
	)
}
