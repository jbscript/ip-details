(this.webpackJsonpipdetails=this.webpackJsonpipdetails||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(11),c=a.n(o),r=(a(22),a(12)),s=a(13),i=a(16),m=a(15),u=(a(23),a(14)),h=a.n(u),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={detail:[],name:"",namecode:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://ipapi.co/json/").then((function(t){var a=[];for(var n in t.data)a.push({name:n,value:t.data[n]});e.setState({detail:a,name:t.data.country_name,namecode:t.data.country_code})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"hello"},l.a.createElement("h6",null,"Hello")),l.a.createElement("div",{className:"welcome-msg"},l.a.createElement("div",{className:"country"},l.a.createElement("h3",null,this.state.name,",")),l.a.createElement("div",{className:"country-code"},l.a.createElement("h6",null,"(",this.state.namecode,")"))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"What is IP?"),l.a.createElement("p",null,"What? You don't know what an IP address is used for? Don't worry. Most of the billions of computer users don't know either, and to tell you the truth, that's perfectly alright. Because even though it's your passport to the Internet, you never have to think about it above is some in depth details about your ip")),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Your IP Detail"),l.a.createElement("div",{className:"list-item"},l.a.createElement("ul",null,this.state.detail.map((function(e,t){return l.a.createElement("li",null,l.a.createElement("span",{className:"name"},e.name,":")," ",l.a.createElement("span",{className:"namevalue"},e.value))}))))),l.a.createElement("footer",null,l.a.createElement("hr",null),"Designed & Developed by",l.a.createElement("a",{href:"https://www.instagram.com/jabi_jaleel/"},"Jabir Jaleel"))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.31390877.chunk.js.map