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
				<EuiText size="s" color="subdued">
					<p>
						The options below are ideal for quickly updating your App Search documents from <em>only</em> the URLs contained withn either sitemaps or entry points and seed URLs. &nbsp;
						<EuiLink external={true} href="https://elastic.co" target="_blank">Learn more about partial crawls</EuiLink>
					</p>
				</EuiText>
				<EuiSpacer size="s" />
			</EuiFlexItem>
			<EuiFlexItem>
				<EuiCheckableCard
		      id={htmlIdGenerator()()}
		      label="Crawl all URLs from sitemaps"
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
		      label="Crawl all entry points"
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