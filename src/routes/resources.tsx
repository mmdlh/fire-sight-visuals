import { createFileRoute } from '@tanstack/react-router';
import { ResourcesPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/resources')({
 head: () => pageMeta('应急资源调度', '消防救援力量分布、应急物资保障及模拟资源调度。'),
 component: ResourcesPage,
});
