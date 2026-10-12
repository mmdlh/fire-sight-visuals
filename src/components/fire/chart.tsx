import { useEffect, useRef } from 'react';
import type { EChartsOption } from 'echarts';
export type ChartKind = 'line' | 'bar' | 'donut' | 'radar' | 'horizontal';
export function FireChart({ kind, period = 'week', className = '', labels }: { kind: ChartKind; period?: string; className?: string; labels?: string[] }) {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  let disposed = false; let chart: import('echarts').ECharts | undefined; let observer: ResizeObserver | undefined;
  const host = ref.current; if (!host) return;
  void import('echarts').then(echarts => {
   if(disposed) return;
   const style = getComputedStyle(document.documentElement);
   const color = (name:string) => style.getPropertyValue(name).trim();
   const palette = [color('--primary'),color('--cyan'),color('--amber'),color('--success')];
   const muted=color('--muted-foreground'), border=color('--border');
   const values = period === 'month' ? [25,40,32,56,35,47,22] : [12,22,16,32,19,26,14];
   const base: EChartsOption = { color:palette, backgroundColor:'transparent', textStyle:{fontFamily:'Noto Sans SC',color:muted,fontSize:10}, animationDuration:650, tooltip:{trigger:'axis',backgroundColor:color('--popover'),borderColor:border,textStyle:{color:color('--foreground'),fontSize:11}}, grid:{left:36,right:15,top:45,bottom:27}, legend:{top:5,right:10,itemWidth:9,itemHeight:5,textStyle:{color:muted,fontSize:9}}, xAxis:{type:'category',data:labels ?? ['10/06','10/07','10/08','10/09','10/10','10/11','10/12'],axisLine:{lineStyle:{color:border}},axisTick:{show:false},axisLabel:{color:muted,fontSize:9}}, yAxis:{type:'value',splitLine:{lineStyle:{color:border,type:'dashed'}},axisLabel:{color:muted,fontSize:9}} };
   let options: EChartsOption;
   if(kind==='line') options={...base,series:[{name:'告警事件',type:'line',smooth:true,data:values,symbol:'circle',symbolSize:5,lineStyle:{width:2},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:palette[0]},{offset:1,color:'transparent'}]),opacity:.13}},{name:'已处置',type:'line',smooth:true,data:values.map((v,i)=>v-3-(i%3)),symbol:'circle',symbolSize:4,lineStyle:{width:2}}]};
   else if(kind==='bar') options={...base,series:[{name:'接入设备',type:'bar',data:period==='month'?[190,260,220,330,280,240,310]:[120,180,140,230,190,160,210],barWidth:9,itemStyle:{borderRadius:[3,3,0,0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:palette[1]},{offset:1,color:color('--secondary')}])}},{name:'异常设备',type:'bar',data:[24,36,20,45,28,33,22],barWidth:9,itemStyle:{borderRadius:[3,3,0,0],color:palette[0]}}]};
   else if(kind==='horizontal') options={...base,legend:{show:false},grid:{left:60,right:25,top:10,bottom:15},xAxis:{type:'value',splitLine:{lineStyle:{color:border,type:'dashed'}},axisLabel:{fontSize:9}},yAxis:{type:'category',data:['智慧用电','消防水压','可燃气体','烟感设备','视频监控'],axisLine:{show:false},axisTick:{show:false},axisLabel:{fontSize:10,color:muted}},series:[{type:'bar',data:[136,182,243,356,420],barWidth:9,itemStyle:{borderRadius:[0,3,3,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:color('--secondary')},{offset:1,color:palette[1]}])}}]};
   else if(kind==='donut') options={color:palette,tooltip:{trigger:'item',backgroundColor:color('--popover'),borderColor:border,textStyle:{color:color('--foreground')}},legend:{orient:'vertical',right:3,top:'center',itemWidth:7,itemHeight:7,textStyle:{color:muted,fontSize:10},formatter:(name:string)=>name},series:[{type:'pie',radius:['48%','66%'],center:['33%','49%'],padAngle:4,itemStyle:{borderRadius:3},label:{show:false},data:[{name:'烟感报警  42%',value:42},{name:'电气报警  28%',value:28},{name:'水压异常  18%',value:18},{name:'其他报警  12%',value:12}]}],graphic:[{type:'text',left:'23%',top:'39%',style:{text:'128',fill:color('--foreground'),font:'600 30px Rajdhani'}},{type:'text',left:'23%',top:'58%',style:{text:'累计告警',fill:muted,font:'10px sans-serif'}}]};
   else options={color:palette,tooltip:{},legend:{top:5,right:5,itemWidth:10,itemHeight:5,textStyle:{color:muted,fontSize:9}},radar:{center:['50%','57%'],radius:'61%',indicator:[{name:'设备完好',max:100},{name:'隐患整改',max:100},{name:'响应速度',max:100},{name:'巡检覆盖',max:100},{name:'安全培训',max:100}],axisName:{color:muted,fontSize:9},splitArea:{areaStyle:{color:['transparent',color('--muted')]}},splitLine:{lineStyle:{color:border}},axisLine:{lineStyle:{color:border}}},series:[{type:'radar',symbolSize:3,data:[{name:'区域评分',value:[92,85,96,88,80],areaStyle:{opacity:.16}},{name:'全市均值',value:[76,72,85,68,75],lineStyle:{type:'dashed'},areaStyle:{opacity:.03}}]}]};
   chart=echarts.init(host); chart.setOption(options,{notMerge:true}); observer=new ResizeObserver(()=>chart?.resize()); observer.observe(host);
  });
  return()=>{disposed=true;observer?.disconnect();chart?.dispose();};
 },[kind,period,labels]);
 return <div ref={ref} className={`chart ${className}`} role="img" aria-label={{line:'告警与处置趋势折线图',bar:'设备接入和异常数量柱状图',donut:'告警类型分布环形图',radar:'区域消防安全评分雷达图',horizontal:'设备类型数量条形图'}[kind]} />;
}
