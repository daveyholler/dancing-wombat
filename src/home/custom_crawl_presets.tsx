import { useState } from 'react';
import {
	EuiCheckableCard,
	EuiFlexGroup,
	EuiFlexItem,
	EuiLink,
	EuiSpacer,
	EuiText,
	htmlIdGenerator
} from '@elastic/eui';

export const CustomCrawlPresets = () => {
	const [sitemaps, setSitemaps] = useState(false);
	const [entryPoints, setEntryPoints] = useState(false);

	return (
		<EuiFlexGroup direction="column" gutterSize="s">
			<EuiFlexItem>
				<EuiCheckableCard
		      id={htmlIdGenerator()()}
		      label="Include all URLs from sitemaps"
		      checkableType="checkbox"
		      value="checkbox1"
		      checked={sitemaps}
		      onChange={() => setSitemaps(!sitemaps)}
		      hasBorder
		    />
			</EuiFlexItem>
			<EuiFlexItem>
				<EuiCheckableCard
		      id={htmlIdGenerator()()}
		      label="Include all entry points"
		      checkableType="checkbox"
		      value="checkbox2"
		      checked={entryPoints}
		      onChange={() => setEntryPoints(!entryPoints)}
		      hasBorder
		    />
			</EuiFlexItem>
		</EuiFlexGroup>
  )
}
