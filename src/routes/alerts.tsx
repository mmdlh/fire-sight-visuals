import { createFileRoute } from '@tanstack/react-router';
import { AlertsPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/alerts')({
 head: () => pageMeta('告警事件中心', '消防告警事件查询、分类筛选与模拟处置闭环管理。'),
 component: AlertsPage,
});
