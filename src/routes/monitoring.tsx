import { createFileRoute } from '@tanstack/react-router';
import { MonitoringPage } from '@/components/fire/pages';
import { pageMeta } from '@/components/fire/data';
export const Route = createFileRoute('/monitoring')({
 head: () => pageMeta('物联设备监测', '查看智慧烟感、电气温度、消防水压和气体监测设备的模拟运行数据。'),
 component: MonitoringPage,
});
