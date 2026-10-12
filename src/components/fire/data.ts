export const alerts = [
 {id:'XF20261012001',name:'环球金融中心',location:'浦东新区 · 世纪大道100号',type:'烟感报警',time:'14:12:36',level:'紧急',device:'SD-PD-0086',status:'待处理'},
 {id:'XF20261012002',name:'来福士广场',location:'黄浦区 · 西藏中路268号',type:'电气温度异常',time:'14:08:22',level:'重要',device:'EL-HP-0128',status:'处理中'},
 {id:'XF20261012003',name:'静安嘉里中心',location:'静安区 · 南京西路1515号',type:'消防水压异常',time:'13:56:09',level:'一般',device:'WP-JA-0032',status:'待处理'},
 {id:'XF20261012004',name:'上海中心大厦',location:'浦东新区 · 银城中路501号',type:'烟感报警',time:'13:42:18',level:'紧急',device:'SD-PD-0191',status:'已处理'},
 {id:'XF20261012005',name:'虹桥商务中心',location:'闵行区 · 申长路988号',type:'设备离线',time:'13:38:45',level:'一般',device:'SD-MH-0064',status:'已处理'},
 {id:'XF20261012006',name:'杨浦滨江园区',location:'杨浦区 · 杨树浦路1088号',type:'可燃气体报警',time:'13:25:11',level:'重要',device:'GS-YP-0018',status:'已处理'},
];
export const points=[{x:384,y:253,name:'环球金融中心',danger:true},{x:290,y:279,name:'来福士广场',danger:true},{x:249,y:221,name:'静安嘉里中心',danger:true},{x:411,y:308,name:'上海中心大厦',danger:false},{x:156,y:340,name:'虹桥商务中心',danger:false},{x:430,y:162,name:'杨浦滨江园区',danger:false},{x:209,y:175,name:'普陀消防站',danger:false},{x:310,y:155,name:'虹口消防站',danger:false},{x:218,y:320,name:'徐汇消防站',danger:false},{x:361,y:354,name:'浦东消防站',danger:false},{x:319,y:227,name:'外滩金融中心',danger:false},{x:142,y:266,name:'长宁科技园',danger:false},{x:343,y:112,name:'宝山监测站',danger:false},{x:475,y:252,name:'张江科技园',danger:false}];
export const pageMeta=(title:string,description:string)=>({meta:[{title:`${title} · 智慧消防管控平台`},{name:'description',content:description},{property:'og:title',content:`${title} · 智慧消防管控平台`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]});
