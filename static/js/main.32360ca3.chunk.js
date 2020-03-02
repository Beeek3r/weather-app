(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,a,t){e.exports=t(83)},31:function(e,a,t){},33:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(8),s=t.n(c),o=(t(31),t(3)),l=t.n(o),i=(t(33),function(){return n.a.createElement("div",{className:"Header-Wrapper"},n.a.createElement("div",{className:"Header"},n.a.createElement("h1",{className:"Heading"},n.a.createElement("i",{className:"fas fa-cloud-sun "})," Weather App"),n.a.createElement("p",{className:"Slogan"},"stay ahead of the weather")))}),m=t(5),u=t(4),h={loading:!0,location:"Gold Coast",weatherData:null,coords:null,view:"current",forcast:[],error:null},p=Object(r.createContext)(h),d=function(e,a){switch(a.type){case"SET_LOADING":return Object(u.a)({},e,{loading:a.payload});case"FETCH_WEATHER_DATA":return Object(u.a)({},e,{weatherData:a.payload});case"FETCH_COORDS":return Object(u.a)({},e,{coords:a.payload});case"SET_VIEW":return Object(u.a)({},e,{view:a.payload});case"FETCH_WEATHER_FORCAST":return Object(u.a)({},e,{forcast:a.payload});case"SET_ERROR":return Object(u.a)({},e,{error:a.payload});default:return e}},E=function(e){var a=Object(r.useReducer)(d,h),t=Object(m.a)(a,2),c=t[0],s=t[1];return n.a.createElement(p.Provider,{value:{state:c,dispatch:s}},e.children)},f=t(21),N=t(22),W=t(6),T=t.n(W),g=new(function(){function e(){Object(f.a)(this,e),this.key=void 0,this.key="a05e16e0743848e50a1d85870a6820c8"}return Object(N.a)(e,[{key:"getCurrentByCity",value:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",T.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(this.key,"&units=metric")).then((function(e){return console.log("yeet",e.data),e.data})));case 1:case"end":return a.stop()}}),null,this)}},{key:"getForecastByCity",value:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",T.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat(this.key,"&units=metric")).then((function(e){return e.data.list})));case 1:case"end":return a.stop()}}),null,this)}},{key:"getCurrentByCoords",value:function(e){return T.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&APPID=").concat(this.key,"&units=metric")).then((function(e){return e.data}))}},{key:"getForecastByCoords",value:function(e){return T.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&appid=").concat(this.key,"&units=metric")).then((function(e){return e.data.list}))}}]),e}()),y=function(){var e=Object(r.useContext)(p),a=e.state,t=e.dispatch,c=Object(r.useState)(""),s=Object(m.a)(c,2),o=s[0],i=s[1];return n.a.createElement("div",{className:"Search-Wrapper"},n.a.createElement("form",{className:"Search-Form",onSubmit:function(e){!function(e){l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t({type:"SET_LOADING",payload:!0}),t({type:"SET_ERROR",payload:null}),a.next=5,l.a.awrap(g.getCurrentByCity(o).then((function(e){t({type:"FETCH_WEATHER_DATA",payload:e})})).catch((function(e){t({type:"SET_LOADING",payload:!1})})));case 5:return a.next=7,l.a.awrap(g.getForecastByCity(o).then((function(e){t({type:"FETCH_WEATHER_FORCAST",payload:e}),t({type:"SET_LOADING",payload:!1})})).catch((function(e){t({type:"SET_LOADING",payload:!1}),t({type:"SET_ERROR",payload:"City not found. Please enter another one or check for typing errors."})})));case 7:case"end":return a.stop()}}))}(e)}},n.a.createElement("input",{id:"Search-Input",type:"text",placeholder:"Enter a location",onChange:function(e){!function(e){i(e)}(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"Search-Submit"},"Search")),a.error&&n.a.createElement("div",{className:"Search-Error-Message"},n.a.createElement("i",{className:"fas fa-exclamation-triangle"})," ",a.error))},w=function(){var e=Object(r.useContext)(p).state,a=e.weatherData.main,t=a.temp,c=a.feels_like,s=a.temp_min,o=a.temp_max,l=a.pressure,i=a.humidity,m=e.weatherData.weather[0].icon,u=e.weatherData.name,h=e.weatherData.sys.country;return n.a.createElement("div",{className:"Weather-Tile-Wrapper"},n.a.createElement("h2",{className:"Weather-Location"},u,", ",h),n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(m,"@2x.png"),alt:"Raining"}),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Tempature: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},Math.round(t),"\xb0C")),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Feels Like: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},Math.round(c),"\xb0C")),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Minimum Temperature: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},Math.round(s),"\xb0C")),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Maximum Temperature: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},Math.round(o),"\xb0C")),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Humidity: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},i,"%")),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Atmospheric preassure: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},l)),n.a.createElement("p",{className:"Weather-Statistics-Names"},"Wind: ",n.a.createElement("span",{className:"Weather-Statistics-Stats"},e.weatherData.wind.speed,"m/s")))};var S=function(){var e=Object(r.useContext)(p),a=e.state,t=e.dispatch,c=function(e){e!==a.view&&t({type:"SET_VIEW",payload:e})};return n.a.createElement("div",{className:"View-Toggler-Wrapper"},n.a.createElement("button",{className:"View-Toggler-Button ".concat("current"===a.view&&"View-Toggler-Button-Selected"),onClick:function(){c("current")}},"CURRENT"),n.a.createElement("button",{className:"View-Toggler-Button ".concat("forecast"===a.view&&"View-Toggler-Button-Selected"),onClick:function(){c("forecast")}},"FORECAST"))},D=t(23),C=t.n(D),F=function(){var e=Object(r.useContext)(p).state,a=e.weatherData.name,t=e.weatherData.sys.country,c=e.forcast,s="";return n.a.createElement("div",{className:"Weather-Forecast-Block-Wrapper"},n.a.createElement("h2",{className:"Weather-Location"},a,", ",t),n.a.createElement("table",{className:"Weather-Forcast-Table"},c.map((function(e){var a=C.a.unix(e.dt),t=a.local().format("dddd Do MMMM YYYY"),c=a.format("HH:mm");return s!==t?(s=t,n.a.createElement(r.Fragment,null,n.a.createElement("tr",{className:"Weather-Forecast-Row-Header"},n.a.createElement("th",{colSpan:8,className:"Weather-Forecast-Row-Date"},t)),n.a.createElement("tr",null,n.a.createElement("td",{className:"Weather-Forecast-TD"},c),n.a.createElement("td",{className:"Weather-Forecast-TD"},n.a.createElement("img",{className:"Weather-Forecast-TD-Icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-temperature-low fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},Math.round(e.main.temp),"\xb0C"),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-wind fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},Math.round(e.wind.speed),"m/s"),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-cloud fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},e.clouds.all,"%")))):n.a.createElement("tr",null,n.a.createElement("td",{className:"Weather-Forecast-TD"},c),n.a.createElement("td",{className:"Weather-Forecast-TD"},n.a.createElement("img",{className:"Weather-Forecast-TD-Icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-temperature-low fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},Math.round(e.main.temp),"\xb0C"),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-wind fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},Math.round(e.wind.speed),"m/s"),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Icon"},n.a.createElement("i",{className:"fas fa-cloud fa-lg"})),n.a.createElement("td",{className:"Weather-Forecast-TD Weather-Forecast-TD-Weather-Value "},e.clouds.all,"%"))}))))},v=(t(52),t(24)),b=t.n(v),O=function(){var e=Object(r.useContext)(p).state;return n.a.createElement("div",{className:"Weather-Block-Wrapper"},e.loading&&n.a.createElement(b.a,{type:"ThreeDots",color:"#487eb1",height:50,width:50}),"current"===e.view&&!e.loading&&e.weatherData&&n.a.createElement(w,null),"forecast"===e.view&&!e.loading&&e.weatherData&&n.a.createElement(F,null),e.weatherData&&n.a.createElement(S,null))},A=t(25),R=t.n(A),x=function(){var e=n.a.useState(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],c=function(){r(!1)};return n.a.createElement("div",{className:"Footer-Wrapper"},n.a.createElement(R.a,{className:"Modal",isOpen:t,contentLabel:"onRequestClose Example",onRequestClose:c,style:_},n.a.createElement("h1",{className:"Modal-Heading"},"About"),n.a.createElement("p",{className:"Modal-Text"},"This is a learning project that uses the openweathermap's API to provide current weather data and forecast for the next 5 days. Technologies used: HTML, SCSS/CSS, JavaScript/Typescript, and React."),n.a.createElement("button",{className:"Modal-Close",onClick:c},"CLOSE")),n.a.createElement("a",{onClick:function(){r(!0)}},"About"),n.a.createElement("a",{href:"https://github.com/Beeek3r"},n.a.createElement("i",{className:"fab fa-github"})," Github"))},_={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"}},k=function(){var e=Object(r.useContext)(p).dispatch;Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition(a,t)}),[]);var a=function(a){var t,r,n,c,s;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=a.coords,r=t.longitude,n=t.latitude,o.next=3,l.a.awrap(g.getCurrentByCoords({latitude:n,longitude:r}));case 3:return c=o.sent,e({type:"FETCH_WEATHER_DATA",payload:c}),o.next=7,l.a.awrap(g.getForecastByCoords({latitude:n,longitude:r}));case 7:s=o.sent,e({type:"FETCH_WEATHER_FORCAST",payload:s}),e({type:"SET_LOADING",payload:!1});case 10:case"end":return o.stop()}}))},t=function(){e({type:"SET_LOADING",payload:!1})};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"Container"},n.a.createElement(i,null),n.a.createElement(y,null),n.a.createElement(O,null),n.a.createElement(x,null)))};s.a.render(n.a.createElement(E,null,n.a.createElement(k,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.32360ca3.chunk.js.map