!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var o=function(e){if("string"==typeof e){const t=e;return e=>e[t]}return t=>e.map(e=>t[e])};t.a=function(e,t){return t.map(function(t){const n=t.properties;return r(n),n.dataframeToD3&&(t.data=HTMLWidgets.dataframeToD3(t.data)),HTMLWidgets.shinyMode&&(n.onClick=function(t){const n={lng:t.lngLat[0],lat:t.lngLat[1],object:t.object};Shiny.onInputChange(e.id+"_onclick",n)}),n.getTooltip&&i(n),n.data=t.data,new deck[t.className](n)})};const r=function(e){for(let n of Object.keys(e)){var t=e[n];"object"==typeof t&&void 0!==t.dataAccessor&&(console.log(n,"make data accessor"),e[n]=o(t.dataAccessor))}},i=function(e){e.onHover=function({x:t,y:n,object:o}){var r=_deckGLWidget.tooltipElement;if(o){var i=e.getTooltip(o);e.fixedTooltip||(r.style.top=n+"px",r.style.left=t+"px"),r.innerHTML=i}else r.innerHTML=""}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var o=n(3),r=n(0),i=n(4),a=n(5),c=n(6);const s=e._deckGLWidget={};s.colorToRGBArray=a.a,s.renderMapTiles=c.a,t.a=function(e,t,n){console.log("I am your DeckGLWidget!");var i=this,a=null;i.renderValue=function(t){i._logVersions(),console.log("el",e,"x",t),s[e.id]={},s[e.id].element=e,i._createTooltipElement(),a=s[e.id].deckGL=Object(o.a)(e,t);const n=s[e.id].layers=Object(r.a)(e,t.layers);a.setProps({layers:n})},i.resize=function(e,t){},i.getDeckGL=function(){return a},i._logVersions=function(){console.log("deck.gl version: "+deck.version),"undefined"!=typeof mapboxgl&&console.log("mapbox-gl version: "+mapboxgl.version)},i._createTooltipElement=function(){var t=s.tooltipElement=document.createElement("div");t.id="tooltip",e.appendChild(t)}},HTMLWidgets.shinyMode&&Shiny.addCustomMessageHandler("proxythis",function(e){console.log(e);var t=HTMLWidgets.find("#"+e.id).getDeckGL();console.log("deckGL",t);var n=document.getElementById(e.id);Object(i.a)(e.x.layers);var o=Object(r.a)(n,e.x.layers);console.log(o),t.setProps({layers:o})})}).call(this,n(1))},function(e,t,n){"use strict";(function(e){t.a=function(t,o){const r=e.deck;var i={mapboxApiAccessToken:o.mapboxApiAccessToken||"",mapStyle:o.mapStyle||"",container:t.id,initialViewState:o.initialViewState||n(o),views:o.views||new r.MapView,layers:[]};return i=Object.assign(i,o.properties),new r.DeckGL(i)};var n=function(e){return{longitude:e.longitude,latitude:e.latitude,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing}}}).call(this,n(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=function(layers){for(let i=0;i<layers.length;i++){var properties=layers[i].properties;for(let key of Object.keys(properties))if("string"==typeof properties[key])try{properties[key]=eval(properties[key])}catch(e){}}}},function(e,t,n){"use strict";t.a=function(e){return e=e.substring(1),[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4),16)]}},function(e,t,n){"use strict";t.a=function(e){const t=e.tileServer||"http://a.tile.stamen.com/toner/",{x:n,y:o,z:r,bbox:i}=e.tile,{west:a,south:c,east:s,north:l}=i;return new deck.BitmapLayer(e,{image:`${t}/${r}/${n}/${o}.png`,bounds:[a,c,s,l]})}},function(e,t,n){"use strict";n.r(t);var o=n(2);HTMLWidgets.widget({name:"deckgl",type:"output",factory:function(e,t,n){var r=new o.a(e,t,n);return{renderValue:r.renderValue,resize:r.resize,getDeckGL:r.getDeckGL}}})}]);