(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"9nVL":function(e,t,a){e.exports={linkGroup:"antd-pro\\components\\-editable-link-group\\index-linkGroup"}},bjO7:function(e,t,a){"use strict";var l=a("GyWo"),r=a("4Gf+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Rzmo");var d=r(a("RC+H")),n=r(a("jx1L")),c=r(a("pvd2")),u=r(a("RPUv")),o=r(a("1KPh")),i=r(a("ZA+g")),s=l(a("4G06")),f=(r(a("T9cD")),r(a("9nVL"))),m=function(e){function t(){return(0,n.default)(this,t),(0,u.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,i.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.links,a=e.linkElement,l=e.onAdd;return s.default.createElement("div",{className:f.default.linkGroup},t.map(function(e){return(0,s.createElement)(a,{key:"linkGroup-item-".concat(e.id||e.title),to:e.href,href:e.href},e.title)}),s.default.createElement(d.default,{size:"small",type:"primary",ghost:!0,onClick:l,icon:"plus"},"\u6dfb\u52a0"))}}]),t}(s.PureComponent);m.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var p=m;t.default=p},"t/hC":function(e,t,a){"use strict";var l=a("4Gf+"),r=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("h+JS");var d=l(a("8BG6"));a("RjP6");var n=l(a("Q44p"));a("hVLL");var c=l(a("OZJJ"));a("okja");var u=l(a("jwFx"));a("gy85");var o,i,s=l(a("7oEX")),f=l(a("jx1L")),m=l(a("pvd2")),p=l(a("RPUv")),h=l(a("1KPh")),v=l(a("ZA+g")),E=r(a("4G06")),g=l(a("I9Uw")),b=a("LneV"),k=l(a("L+tQ")),y=a("KTCi"),w=l(a("bjO7")),j=l(a("zHco")),N=l(a("wnz0")),L=[{title:"\u64cd\u4f5c\u4e00",href:""},{title:"\u64cd\u4f5c\u4e8c",href:""},{title:"\u64cd\u4f5c\u4e09",href:""},{title:"\u64cd\u4f5c\u56db",href:""},{title:"\u64cd\u4f5c\u4e94",href:""},{title:"\u64cd\u4f5c\u516d",href:""}],C=(o=(0,b.connect)(function(e){var t=e.user,a=e.project,l=e.activities,r=e.chart,d=e.loading;return{currentUser:t.currentUser,project:a,activities:l,chart:r,currentUserLoading:d.effects["user/fetchCurrent"],projectLoading:d.effects["project/fetchNotice"],activitiesLoading:d.effects["activities/fetchList"]}}),o(i=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"project/fetchNotice"}),e({type:"activities/fetchList"}),e({type:"chart/fetch"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"chart/clear"})}},{key:"renderActivities",value:function(){var e=this.props.activities.list;return e.map(function(e){var t=e.template.split(/@\{([^{}]*)\}/gi).map(function(t){return e[t]?E.default.createElement("a",{href:e[t].link,key:e[t].name},e[t].name):t});return E.default.createElement(u.default.Item,{key:e.id},E.default.createElement(u.default.Item.Meta,{avatar:E.default.createElement(s.default,{src:e.user.avatar}),title:E.default.createElement("span",null,E.default.createElement("a",{className:N.default.username},e.user.name),"\xa0",E.default.createElement("span",{className:N.default.event},t)),description:E.default.createElement("span",{className:N.default.datetime,title:e.updatedAt},(0,g.default)(e.updatedAt).fromNow())}))})}},{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.currentUserLoading,l=e.project.notice,r=e.projectLoading,o=e.activitiesLoading,i=e.chart.radarData,f=t&&Object.keys(t).length?E.default.createElement("div",{className:N.default.pageHeaderContent},E.default.createElement("div",{className:N.default.avatar},E.default.createElement(s.default,{size:"large",src:t.avatar})),E.default.createElement("div",{className:N.default.content},E.default.createElement("div",{className:N.default.contentTitle},"\u65e9\u5b89\uff0c",t.name,"\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),E.default.createElement("div",null,t.title," |",t.group))):null,m=E.default.createElement("div",{className:N.default.extraContent},E.default.createElement("div",{className:N.default.statItem},E.default.createElement("p",null,"\u9879\u76ee\u6570"),E.default.createElement("p",null,"56")),E.default.createElement("div",{className:N.default.statItem},E.default.createElement("p",null,"\u56e2\u961f\u5185\u6392\u540d"),E.default.createElement("p",null,"8",E.default.createElement("span",null," / 24"))),E.default.createElement("div",{className:N.default.statItem},E.default.createElement("p",null,"\u9879\u76ee\u8bbf\u95ee"),E.default.createElement("p",null,"2,223")));return E.default.createElement(j.default,{loading:a,content:f,extraContent:m},E.default.createElement(d.default,{gutter:24},E.default.createElement(n.default,{xl:16,lg:24,md:24,sm:24,xs:24},E.default.createElement(c.default,{className:N.default.projectList,style:{marginBottom:24},title:"\u8fdb\u884c\u4e2d\u7684\u9879\u76ee",bordered:!1,extra:E.default.createElement(k.default,{to:"/"},"\u5168\u90e8\u9879\u76ee"),loading:r,bodyStyle:{padding:0}},l.map(function(e){return E.default.createElement(c.default.Grid,{className:N.default.projectGrid,key:e.id},E.default.createElement(c.default,{bodyStyle:{padding:0},bordered:!1},E.default.createElement(c.default.Meta,{title:E.default.createElement("div",{className:N.default.cardTitle},E.default.createElement(s.default,{size:"small",src:e.logo}),E.default.createElement(k.default,{to:e.href},e.title)),description:e.description}),E.default.createElement("div",{className:N.default.projectItemContent},E.default.createElement(k.default,{to:e.memberLink},e.member||""),e.updatedAt&&E.default.createElement("span",{className:N.default.datetime,title:e.updatedAt},(0,g.default)(e.updatedAt).fromNow()))))})),E.default.createElement(c.default,{bodyStyle:{padding:0},bordered:!1,className:N.default.activeCard,title:"\u52a8\u6001",loading:o},E.default.createElement(u.default,{loading:o,size:"large"},E.default.createElement("div",{className:N.default.activitiesList},this.renderActivities())))),E.default.createElement(n.default,{xl:8,lg:24,md:24,sm:24,xs:24},E.default.createElement(c.default,{style:{marginBottom:24},title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a",bordered:!1,bodyStyle:{padding:0}},E.default.createElement(w.default,{onAdd:function(){},links:L,linkElement:k.default})),E.default.createElement(c.default,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:0===i.length},E.default.createElement("div",{className:N.default.chart},E.default.createElement(y.Radar,{hasLegend:!0,height:343,data:i}))),E.default.createElement(c.default,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56e2\u961f",loading:r},E.default.createElement("div",{className:N.default.members},E.default.createElement(d.default,{gutter:48},l.map(function(e){return E.default.createElement(n.default,{span:12,key:"members-item-".concat(e.id)},E.default.createElement(k.default,{to:e.href},E.default.createElement(s.default,{src:e.logo,size:"small"}),E.default.createElement("span",{className:N.default.member},e.member)))})))))))}}]),t}(E.PureComponent))||i),x=C;t.default=x},wnz0:function(e,t,a){e.exports={activitiesList:"antd-pro\\pages\\-dashboard\\-workplace-activitiesList",username:"antd-pro\\pages\\-dashboard\\-workplace-username",event:"antd-pro\\pages\\-dashboard\\-workplace-event",pageHeaderContent:"antd-pro\\pages\\-dashboard\\-workplace-pageHeaderContent",avatar:"antd-pro\\pages\\-dashboard\\-workplace-avatar",content:"antd-pro\\pages\\-dashboard\\-workplace-content",contentTitle:"antd-pro\\pages\\-dashboard\\-workplace-contentTitle",extraContent:"antd-pro\\pages\\-dashboard\\-workplace-extraContent",statItem:"antd-pro\\pages\\-dashboard\\-workplace-statItem",members:"antd-pro\\pages\\-dashboard\\-workplace-members",member:"antd-pro\\pages\\-dashboard\\-workplace-member",projectList:"antd-pro\\pages\\-dashboard\\-workplace-projectList",cardTitle:"antd-pro\\pages\\-dashboard\\-workplace-cardTitle",projectGrid:"antd-pro\\pages\\-dashboard\\-workplace-projectGrid",projectItemContent:"antd-pro\\pages\\-dashboard\\-workplace-projectItemContent",datetime:"antd-pro\\pages\\-dashboard\\-workplace-datetime",activeCard:"antd-pro\\pages\\-dashboard\\-workplace-activeCard"}}}]);