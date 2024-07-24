import { StatsPageContainer } from './stats-page/stats-page.container';
import { ImportDataContainer } from './import-data/import-data.container';
import { TradeHistoryContainer } from './trade-history/trade-history.container';

export const containers = [
	StatsPageContainer,
	ImportDataContainer,
	TradeHistoryContainer
];

export * from './stats-page/stats-page.container';
export * from './import-data/import-data.container';
export * from './trade-history/trade-history.container';
