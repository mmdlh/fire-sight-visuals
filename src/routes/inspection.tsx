import { createFileRoute } from '@tanstack/react-router';
import { InspectionPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/inspection')({
 head: () => pageMeta('隐患巡检管理', '消防巡检任务、安全隐患整改及任务执行进度管理。'),
 component: InspectionPage,
});
