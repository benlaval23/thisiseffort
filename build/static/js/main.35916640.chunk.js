(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{101:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),o=n.n(a),c=n(53),r=n.n(c),s=n(6),h=n(7),u=n(10),l=n(9),b=n(8),j=(n(63),n(64),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).handleChange=i.handleChange.bind(Object(u.a)(i)),i}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.props.onChange(t.target.value)}},{key:"render",value:function(){return Object(i.jsx)("form",{children:Object(i.jsx)("input",{id:"top-form",className:"name",type:"text",onChange:this.handleChange,placeholder:"Your alias"})})}}]),n}(o.a.Component)),d=(n(65),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).handleChange=i.handleChange.bind(Object(u.a)(i)),i.refreshTitle=i.refreshTitle.bind(Object(u.a)(i)),i}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.props.onChange(t.target.value)}},{key:"refreshTitle",value:function(){this.props.onClick()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{id:"top-form",className:"ticket",type:"text",onChange:this.handleChange,placeholder:"Your ticket"}),Object(i.jsx)("button",{type:"button",id:"refresh",onClick:this.refreshTitle,children:Object(i.jsx)("i",{className:"fas fa-redo"})})]}),Object(i.jsxs)("h3",{children:["Ticket: ",this.props.title]})]})}}]),n}(o.a.Component)),p=(n(35),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{id:"user-box",children:this.props.users.map((function(e){return Object(i.jsxs)("div",{className:"user-list",children:[Object(i.jsx)("p",{id:"p1",children:e.name}),t.props.show?Object(i.jsx)("p",{id:"p2",children:e.vote}):Object(i.jsx)("p",{id:"p2",children:e.status})]})}))},"key")}}]),n}(o.a.Component)),f=(n(66),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).handleClick=i.handleClick.bind(Object(u.a)(i)),i}return Object(h.a)(n,[{key:"handleClick",value:function(t){this.props.onClick(t.target.value)}},{key:"render",value:function(){return Object(i.jsxs)("form",{id:"numbers",onClick:this.handleClick,children:[Object(i.jsx)("button",{type:"button",value:"1",id:"number",children:"1"}),Object(i.jsx)("button",{type:"button",value:"2",id:"number",children:"2"}),Object(i.jsx)("button",{type:"button",value:"3",id:"number",children:"3"}),Object(i.jsx)("button",{type:"button",value:"5",id:"number",children:"5"}),Object(i.jsx)("button",{type:"button",value:"8",id:"number",children:"8"}),Object(i.jsx)("button",{type:"button",value:"13",id:"number",children:"13"}),Object(i.jsx)("button",{type:"button",value:"21",id:"number",children:"21"})]})}}]),n}(o.a.Component)),m=n(54),O=n.n(m),v=n(55),x=n.n(v),g=O.a.connect("/"),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={users:[],title:"",show:!1,count:0,confetti:!1},i.changeName=i.changeName.bind(Object(u.a)(i)),i.showVotes=i.showVotes.bind(Object(u.a)(i)),i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.emit("join_room",window.location.pathname,{name:"New User",status:"Awaiting",vote:"No vote"}),g.on("room_update",(function(e){t.setState({users:e.users,title:e.title,show:e.show,count:e.count,confetti:e.confetti}),console.log("Current room: ",e)}))}},{key:"changeName",value:function(t){g.emit("change_name",t)}},{key:"changeTitle",value:function(t){g.emit("change_title",t)}},{key:"addVote",value:function(t){g.emit("add_vote",t)}},{key:"showVotes",value:function(){g.emit("show_votes")}},{key:"refreshTitle",value:function(){g.emit("refresh_title")}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[this.state.confetti&&Object(i.jsx)(x.a,{width:"2000",height:"1000"}),Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(j,{onChange:this.changeName}),Object(i.jsx)(d,{onChange:this.changeTitle,title:this.state.title,onClick:this.refreshTitle}),Object(i.jsx)(p,{users:this.state.users,show:this.state.show}),Object(i.jsx)(f,{onClick:this.addVote}),Object(i.jsxs)("section",{id:"buttons",children:[Object(i.jsx)("button",{id:"invite",className:"clipboard",children:"Invite"}),Object(i.jsx)("button",{id:"show-votes",onClick:this.showVotes,children:"Show Votes"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{id:"copied",children:"Link copied to clipboard!"})})]})]})}}]),n}(o.a.Component),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={path:""},t.setPath=function(e){return t.setState({path:e.target.value})},t.randomString=function(t){for(var e="",n="abcdefghijklmnopqrstuvwxyz0123456789",i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},t.go=function(e){e.preventDefault(),t.state.path?window.location.href="room/".concat(t.state.path):window.location.href="room/".concat(t.randomString(3),"-").concat(t.randomString(4),"-").concat(t.randomString(3))},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("form",{onSubmit:this.go,id:"chooseRoom",children:[Object(i.jsx)("input",{id:"new-room-input",type:"text",name:"room",value:this.path,onChange:this.setPath,placeholder:"Enter room name"}),Object(i.jsx)("button",{id:"new-room-button",type:"button",onClick:this.go,children:Object(i.jsx)("i",{className:"fas fa-sign-in-alt"})})]})}}]),n}(o.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),o(t),c(t)}))},w=n(56),N=n(2);r.a.render(Object(i.jsxs)(o.a.StrictMode,{children:[Object(i.jsx)("h1",{children:"thisiseffort.io"}),Object(i.jsxs)(w.a,{children:[Object(i.jsx)(N.a,{path:"/",exact:!0,component:k}),Object(i.jsx)(N.a,{path:"/room/:roomName",component:C})]})]}),document.getElementById("root")),y()},35:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.35916640.chunk.js.map