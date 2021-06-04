(this["webpackJsonpquiz-react"]=this["webpackJsonpquiz-react"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var o,a,i,r,c,s,l=t(1),d=t.n(l),b=t(9),j=t.n(b),p=t(4),u=t(2),m=t(3),w=m.b.section(o||(o=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),y=m.b.h1(a||(a=Object(u.a)(["\n  font-size: 35px;\n  color: var(--mainColor);\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 2.5rem;\n"]))),h=m.b.img(i||(i=Object(u.a)(["\n  height: 80%;\n  width: 100%;\n  margin-bottom: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n"]))),O=Object(m.a)(r||(r=Object(u.a)(["\n  html {\n    --mainColor: #858285;\n    --secondColor: #272727;\n    --infoColor: #C7C1C1;\n    --successColor: green;\n    --failureColor: red;\n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    letter-spacing: 2px;\n    font-size: 10px;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n"]))),g=m.b.div(c||(c=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),x=m.b.button(s||(s=Object(u.a)(["\n  width: 20%;\n  align-self: center;\n  font-size: 20px;\n  text-transform: uppercase;\n  padding: 10px;\n  background-color: white;\n  color: var(--infoColor);\n  border: 1px solid var(--infoColor);\n  border-radius: 2px;\n  cursor: pointer;\n  \n  :hover {\n    background-color: var(--infoColor);\n    color: white;\n  }\n"]))),f=t(0);var z,k,v,S=function(n){var e=n.showNextStage;return Object(f.jsxs)(w,{children:[Object(f.jsx)(y,{children:"Maderia Quiz"}),Object(f.jsx)(h,{src:"./img/madeira.jpg",alt:"madeira"}),Object(f.jsx)(x,{type:"button",onClick:e,children:"Start"})]})},C=m.b.li(z||(z=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  color: var(--secondColor);\n  margin-top: 2rem;\n  margin-right: 1rem;\n  \n  &.correct {\n    color: var(--successColor);\n  }\n  \n  &.wrong {\n    color: var(--failureColor);\n  }\n"]))),M=m.b.label(k||(k=Object(u.a)(["\n  width: 100%;\n  display: flex;\n"]))),P=m.b.input(v||(v=Object(u.a)(["\n  margin-right: 1rem;\n"])));var N,L,W=function(n){var e=n.value,t=n.label,o=n.disabled,a=n.className,i=n.checkAnswer;return Object(f.jsx)(C,{className:a,children:Object(f.jsxs)(M,{htmlFor:e,children:[Object(f.jsx)(P,{type:"radio",id:e,value:e,disabled:o,onClick:function(n){i(n.target.value)}}),t]})})},q=m.b.h2(N||(N=Object(u.a)(["\n  font-size: 30px;\n  text-align: center;\n  font-weight: 500;\n  color: var(--mainColor);\n"]))),A=m.b.ul(L||(L=Object(u.a)(["\n  list-style: none;\n  padding: 1rem;\n  margin-top: 2rem;\n  margin-bottom: 6rem;\n"])));var D,F=function(n){var e=n.question,t=n.index,o=n.addPoint,a=Object(l.useState)(null),i=Object(p.a)(a,2),r=i[0],c=i[1],s=Object.entries(e.options),d=function(n){c(n),n===e.correctOption&&o()};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(q,{children:e.title}),Object(f.jsx)(A,{children:s.map((function(n){var o=Object(p.a)(n,2),a=o[0],i=o[1],c="".concat(t,"-").concat(a),s="";return null!==r&&(a===e.correctOption?s="correct":a===r&&(s="wrong")),Object(f.jsx)(W,{value:a,label:i,className:s,disabled:null!==r,checkAnswer:d},c)}))})]})},B=m.b.section(D||(D=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n"]))),E=[{title:"Madera jest regionem autonomicznym:",options:{a:"Hiszpanii",b:"Portugalii",c:"Wielkiej Brytanii",d:"\u017badnego z powy\u017cszych"},correctOption:"b"},{title:"W sk\u0142ad archipelagu Madery wchodz\u0105 r\xf3wnie\u017c:",options:{a:"Wyspy Desertas, Selvagens i Porto Santo",b:"Wyspy Desertas i Porto Santo",c:"Porto Santo i Lobos",d:"Porto Santo, Lobos i La Graciosa"},correctOption:"a"},{title:"Madera nazywana bywa r\xf3wnie\u017c:",options:{a:"Ogrodem Atlantyku",b:"Wysp\u0105 Afrodyty",c:"\u017bon\u0105 Morza",d:"Lawendow\u0105 Wysp\u0105"},correctOption:"a"},{title:"Maderyjskie lotnisko nale\u017cy do jednych z najbardziej niebezpiecznych na \u015bwiecie. Znajduje si\u0119 ono w miejscowo\u015bci:",options:{a:"Santa Cruz",b:"Funchal",c:"Machico",d:"Porto da Cruz"},correctOption:"a"},{title:"Funchal, stolica wyspy wzi\u0119\u0142a sw\u0105 nazw\u0119 od:",options:{a:"Wilk\xf3w morskich",b:"Kopru w\u0142oskiego",c:"Las\xf3w wawrzynowych",d:"Drzew draceny smoczej"},correctOption:"b"},{title:"Lewady, jedna z najwi\u0119kszych maderyjskich atrakcji to:",options:{a:"Baseny lawowe",b:"Szlaki wiod\u0105ce wzd\u0142u\u017c kana\u0142\xf3w irygacyjncyh odprowadzaj\u0105cych wod\u0119 z g\xf3r na wybrze\u017ce",c:"Szlaki i dawne trakty kr\xf3lweskie",d:"Lasy wawrzynowe wpisane na list\u0119 UNESCO"},correctOption:"b"},{title:"Najwy\u017cszy szczyt Madery Pico Ruivo ma wysoko\u015b\u0107:",options:{a:"1689 m n.p.m.",b:"2001 m n.p.m.",c:"1862 m n.p.m.",d:"2404 m n.p.m."},correctOption:"c"},{title:"S\u0142ynne wino Madeira, produkowane jest z winoro\u015bli odmiany:",options:{a:"Sercial, Cabernet, Malvasia",b:"Sercial, Syrah, Merlot, Trebbiano",c:"Sercial, Malvasia, Nebbiolo",d:"Sercial, Boal, Malvasia i Verdelho"},correctOption:"d"},{title:"Poncha - regionalny nap\xf3j Madery robiony jest na bazie, kt\xf3rego alkoholu:",options:{a:"Wina Madeira",b:"Rumu",c:"Aguardente - bimbru z trzciny cukrowej",d:"Likieru kasztanowego"},correctOption:"c"},{title:"Maderyjskie quintas to:",options:{a:"Stare, zabytkowe kamienice",b:"Posiad\u0142o\u015bci ziemskie z pi\u0119knymi ogrodami",c:"Pola golfowe",d:"Punkty widokowe, z kt\xf3rych s\u0142ynie wyspa"},correctOption:"b"}];var H,J,R,T,G=function(n){var e=n.showNextStage,t=n.addPoint,o=Object(l.useState)(0),a=Object(p.a)(o,2),i=a[0],r=a[1],c=E[i];return Object(f.jsxs)(B,{children:[Object(f.jsx)(F,{question:c,index:i,addPoint:t},i),Object(f.jsx)(x,{type:"button",onClick:function(){i<E.length-1?r(i+1):e()},children:"Dalej"})]})},I=m.b.section(H||(H=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),K=m.b.div(J||(J=Object(u.a)(["\n  width: 100%;\n  height: 200px;\n  background-color: rgba(199, 193, 193, 0.3);\n"]))),Q=m.b.h3(R||(R=Object(u.a)(["\n  text-align: center;\n  font-size: 20px;\n  color: var(--mainColor);\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"]))),U=m.b.p(T||(T=Object(u.a)(["\n  font-size: 25px;\n  text-align: center;\n  text-transform: uppercase;\n  color: var(--secondColor);\n"])));var V=[S,G,function(n){var e,t,o=n.points;return e=o<=3?"Oj, s\u0142abo :-(":o<=5?"Mog\u0142o by\u0107 lepiej...":o<=8?"Dobra robota!":"\u015awietnie!",t=1===o?"punkt":0===o||o>1&&o<5?"punkty":"punkt\xf3w",Object(f.jsx)(I,{children:Object(f.jsxs)(K,{children:[Object(f.jsx)(Q,{children:e}),Object(f.jsx)("hr",{}),Object(f.jsxs)(U,{children:["Tw\xf3j wynik to:",Object(f.jsx)("strong",{children:" ".concat(o," ")}),t]})]})})}];var Z=function(){var n=Object(l.useState)(0),e=Object(p.a)(n,2),t=e[0],o=e[1],a=Object(l.useState)(0),i=Object(p.a)(a,2),r=i[0],c=i[1],s=V[t];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{}),Object(f.jsx)(g,{children:Object(f.jsx)(s,{showNextStage:function(){o(t+1)},points:r,addPoint:function(){c(r+1)}})})]})};j.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2c7014cb.chunk.js.map