import { useState } from 'react';
import { Plus, Minus, LocateFixed, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { points } from './data';
export function CityMap({large=false}:{large?:boolean}) {
 const [zoom,setZoom]=useState(1); const [selected,setSelected]=useState<number|null>(null);
 const p=selected===null?undefined:points[selected];
 return <div className={`map-panel ${large?'large':''}`}>
  <div className="map-heading"><h3>城市消防态势一张图</h3><p>上海市 · 重点单位监测分布 <span className="text-cyan"> / 示意地图</span></p></div>
  <svg className="city-map" viewBox={`${300-300/zoom} ${245-245/zoom} ${600/zoom} ${490/zoom}`} aria-label="上海消防监测点位示意图">
   <defs><pattern id="map-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" className="map-grid"/></pattern></defs>
   <rect width="600" height="490" fill="url(#map-grid)"/>
   <path className="map-land" d="M102 247L127 202L156 192L153 157L201 141L220 112L261 109L278 77L318 73L345 97L365 84L392 125L440 135L471 181L510 200L523 247L492 281L504 320L475 350L437 361L414 397L371 407L332 387L299 411L258 391L227 405L198 376L170 370L139 339L113 316L126 279Z"/>
   <path className="map-river" d="M369 85C380 130 345 140 358 192S336 247 352 276S400 293 396 332S369 367 377 411"/>
   {Array.from({length:15},(_,i)=><path key={`h${i}`} className="map-road" d={`M${130+(i%3)*15} ${145+i*15} L${455+(i%2)*20} ${122+i*16}`}/>)}
   {Array.from({length:19},(_,i)=><path key={`v${i}`} className="map-road" d={`M${170+i*15} ${135+(i%4)*12} L${120+i*18} ${345+(i%3)*15}`}/>)}
   {Array.from({length:65},(_,i)=>{const x=170+(i%10)*29,y=160+Math.floor(i/10)*29;return <rect key={i} className="map-block" x={x} y={y} width={9+(i%3)*4} height={8+(i%4)*3} rx="1"/>;})}
   <path className="map-road" d="M134 281L254 196L423 180M176 346L310 305L471 224M210 135L280 369M165 244L435 339" strokeWidth="2"/>
   {[['普陀区',198,190],['静安区',260,246],['黄浦区',302,301],['浦东新区',433,286],['杨浦区',425,194],['虹口区',303,182],['徐汇区',236,352],['长宁区',169,281],['宝山区',309,122],['闵行区',183,378]].map(([label,x,y])=><text key={label} className="district-label" x={x} y={y}>{label}</text>)}
   {points.map((point,i)=><g key={point.name} className={`map-point ${point.danger?'danger':''}`} transform={`translate(${point.x},${point.y})`} role="button" aria-label={point.name} tabIndex={0} onClick={()=>setSelected(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(i);}}}><circle className="pin-ring" r={point.danger?17:10}/><circle className="pin-ring" r={point.danger?10:6}/><circle className="pin-core" r={point.danger?4:2.5}/>{point.danger&&<path d="M-2 0H2M0-2V2" stroke="currentColor" strokeWidth="1"/>}</g>)}
  </svg>
  {p&&<div className="map-popup"><div className="flex items-center justify-between"><strong>{p.name}</strong><Button variant="ghost" size="icon" className="size-5" onClick={()=>setSelected(null)} aria-label="关闭点位详情"><X/></Button></div><p>监测编号 SH-{String((selected??0)+1).padStart(4,'0')}</p><p>接入设备 128 台 · 最近更新 14:16</p><span className={`badge ${p.danger?'':'green'}`}>{p.danger?'存在消防告警':'运行正常'}</span></div>}
  <div className="map-controls"><Button variant="glass" size="icon" aria-label="放大地图" onClick={()=>setZoom(z=>Math.min(1.8,z+.2))}><Plus/></Button><Button variant="glass" size="icon" aria-label="缩小地图" onClick={()=>setZoom(z=>Math.max(.8,z-.2))}><Minus/></Button><Button variant="glass" size="icon" aria-label="重置地图" onClick={()=>{setZoom(1);setSelected(null);}}><LocateFixed/></Button></div>
  <div className="map-bottom">121°28′ E &nbsp; 31°13′ N &nbsp; · &nbsp; SHANGHAI FIRE SAFETY</div>
  <div className="map-legend"><span><i/>正常监测点</span><span><i className="danger"/>告警监测点</span><span className="text-cyan">覆盖 16 个行政区</span></div>
 </div>;
}
