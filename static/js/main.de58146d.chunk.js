(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(1),s=a(2),m=a(4),u=a(3),h=a(5),i=(a(13),a(14),function(e){var t=e.weakDays;return r.a.createElement("div",{className:"calendar__head"},t.map((function(e){return r.a.createElement("div",{key:e,className:"calendar__cell"},e)})))}),y=(a(15),function(e){var t=e.month,a=e.year,n=new Date(a,t,0).getDate(),c=Array.from({length:[n]},(function(e,t){return t+1})),o=new Date("".concat(a,"-").concat(t,"-01")).getDay();0===o&&(o=7);var l=n-7*Math.floor((n-o-1)/7)-(7-o-1)-7,s=Array.from({length:[l]},(function(e,t){return t+1})),m=Array.from({length:[o-1]},(function(e,t){return t+1}));return r.a.createElement("div",{className:"calendar-section"},m.map((function(e){return r.a.createElement("div",{key:e,className:"calendar__cell"}," ")})),c.map((function(e,t){return r.a.createElement("div",{id:t+1,key:e,className:"calendar__cell"},e)})),s.map((function(e){return r.a.createElement("div",{key:e,className:"calendar__cell"}," ")})))}),p=(a(16),function(e){var t=e.month,a=e.year,n=e.weakDays;e.monthes;return r.a.createElement("div",{className:"calendar"},r.a.createElement(i,{weakDays:n}),r.a.createElement(y,{month:t,year:a}))}),f=(a(17),function(e){var t=e.month,a=e.year,n=e.weakDays,c=e.monthes,o=e.selectVeiw;if("Day"===o)return r.a.createElement(p,{month:t,year:a,weakDays:n,monthes:c});if("Month"===o)return r.a.createElement(p,{month:t,year:a,weakDays:n,monthes:c});if("Year"===o)return c.map((function(e,t){return r.a.createElement("div",{key:e},r.a.createElement(p,{month:t+1,year:a,weakDays:n,monthes:c}))}));if("Week"===o){var l=(new Date).toDateString().split(" "),s=(l=Number(l[l.length-2]))-((new Date).getDay()-1),m=Array.from({length:7},(function(e,t){return t})).map((function(e){return e+s}));return r.a.createElement("div",{className:"calendar calendar-week"},r.a.createElement(i,{weakDays:n}),r.a.createElement("div",{className:"calendar__week"},m.map((function(e){return r.a.createElement("div",{key:e,className:"calendar__cell"},e)}))))}return""}),d=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.changeYear(Number(e.target.value))},a.handleMonthChange=function(e){a.props.changeMonth(Number(e.target.value))},a.handlePrev=function(){var e=a.props,t=e.month,n=e.year;1===t?(a.props.changeYear(n-1),a.props.changeMonth(12)):a.props.changeMonth(t-1)},a.handleNext=function(){var e=a.props,t=e.month,n=e.year;12===t?(a.props.changeYear(n+1),a.props.changeMonth(1)):a.props.changeMonth(t+1)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.monthes,a=e.month,n=e.year;return r.a.createElement("div",{className:"action"},r.a.createElement("input",{type:"number",value:n,onChange:this.handleChange,className:"action__input"}),r.a.createElement("button",{type:"button",onClick:this.handlePrev,className:"action__button"},"<"),r.a.createElement("select",{value:a,onChange:this.handleMonthChange,className:"action__select"},t.map((function(e,t){return r.a.createElement("option",{value:t+1,key:e},e)}))),r.a.createElement("button",{type:"button",onClick:this.handleNext,className:"action__button"},">"))}}]),t}(n.Component)),v=["mon","tue","wed","thurs","fri","sat","sun"],g=["January","February","March","April","May","June","July","August","September","October","November","December"],E=["Day","Week","Month","Year"],b=new Date,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={month:b.getMonth()+1,year:b.getFullYear(),selectVeiw:"Day"},a.selected=function(e){var t=e.target.value;a.setState({selectVeiw:t})},a.changeMonth=function(e){a.setState({month:e})},a.changeYear=function(e){a.setState({year:e})},a.resetToCurrentDate=function(){a.setState({month:b.getMonth()+1,year:b.getFullYear()})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.month,a=e.year,n=e.selectVeiw;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"current-month"},r.a.createElement(d,{monthes:g,year:a,month:t,changeMonth:this.changeMonth,changeYear:this.changeYear}),r.a.createElement(p,{month:t,year:a,weakDays:v,monthes:g}),r.a.createElement("button",{className:"button-reset",type:"button",onClick:this.resetToCurrentDate},"Current Month")),r.a.createElement("div",{className:"list-of-months"},r.a.createElement("select",{onChange:this.selected,className:"list-of-months__select"},E.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement(f,{month:t,year:a,weakDays:v,monthes:g,selectVeiw:n})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.de58146d.chunk.js.map