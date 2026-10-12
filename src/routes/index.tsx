import { createFileRoute } from '@tanstack/react-router';
import { OverviewPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/')({
 head: () => pageMeta('消防综合态势', '上海城市消防综合态势、联网单位、设备监测与消防告警模拟分析。'),
 component: OverviewPage,
});
