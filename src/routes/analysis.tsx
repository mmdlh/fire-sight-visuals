import { createFileRoute } from '@tanstack/react-router';
import { AnalysisPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/analysis')({
 head: () => pageMeta('消防数据分析', '城市消防安全指数、事件趋势、区域风险与安全评估分析。'),
 component: AnalysisPage,
});
