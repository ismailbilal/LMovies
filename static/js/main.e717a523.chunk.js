(this.webpackJsonplmovies=this.webpackJsonplmovies||[]).push([[0],{26:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,l,d,p,u,x,b,f,h,j,g=t(1),m=t.n(g),v=t(14),w=t.n(v),O=t(2),A=t.n(O),k=t(10),y=t(6),S=t(5),E="87530440e30dafdf4d135a3be51309b9",B="https://api.themoviedb.org/3",N=function(){var n=Object(y.a)(A.a.mark((function n(e){var t,r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=Object(y.a)(A.a.mark((function n(e,t){var r,a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(B,"/search/").concat(t,"?query=").concat(e,"&api_key=").concat(E),n.next=4,N(r);case 4:return a=n.sent,n.abrupt("return",a.results);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),z=function(){var n=Object(y.a)(A.a.mark((function n(e,t){var r,a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(B,"/").concat(e,"/").concat(t,"?api_key=").concat(E,"&append_to_response=videos"),n.next=4,N(r);case 4:return a=n.sent,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),C=function(){var n=Object(y.a)(A.a.mark((function n(){var e,t,r,a,c,i=arguments;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"movie",t=i.length>1&&void 0!==i[1]?i[1]:"week",r=i.length>2&&void 0!==i[2]?i[2]:1,n.prev=3,a="".concat(B,"/trending/").concat(e,"/").concat(t,"?api_key=").concat(E,"&page=").concat(r),n.next=7,N(a);case 7:return c=n.sent,n.abrupt("return",c.results);case 11:return n.prev=11,n.t0=n.catch(3),console.log(n.t0),n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=Object(y.a)(A.a.mark((function n(){var e,t,r,a,c=arguments;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"movie",t=c.length>1&&void 0!==c[1]?c[1]:1,n.prev=2,r="".concat(B,"/discover/").concat(e,"?api_key=").concat(E,"&sort_by=popularity.desc&page=").concat(t),n.next=6,N(r);case 6:return a=n.sent,n.abrupt("return",a.results);case 10:return n.prev=10,n.t0=n.catch(2),console.log(n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),L="https://image.tmdb.org/t/p/w1280/",U=t(3),I=t(4),q=t.p+"static/media/logo.bd9cfa93.svg",F=t.p+"static/media/login.92a47941.svg",J=t.p+"static/media/loginHover.0927c50f.svg",R=t.p+"static/media/search.ccbe27b7.svg",K="#ff6600",Q=Object(I.b)(r||(r=Object(U.a)(["\n    from{\n        left: -120px\n    }\n    to{\n        left: 0;\n    }\n"]))),Y=I.a.div(a||(a=Object(U.a)(["\n    height: 70px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: #00000099;\n    box-shadow: 0px 0px 80px 80px #00000099;\n    @media (max-width: 768px){\n        box-shadow: 0px 0px 50px 50px #00000040;\n        background-color: #00000040;\n    }\n    position: relative;\n    z-index: 3;\n    "]))),P=I.a.div(c||(c=Object(U.a)(["\n    width: calc(1vw + 30px);\n    height: calc(1vw + 30px);\n    background:url(",");\n    background-size: 100% 100%;\n    cursor: pointer;\n    &:hover{\n        background: url(",");\n        background-size: 100% 100%;\n    }\n    display: none;\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7klEQVR4nO3bMWgTURgH8P93Fw9e2qWLlCKdpJMQBwu1g4JuJhkCHkh2B3VQxElaKdZFENFB6+Cu9oQrJGar1A7FRbAgXepUbIbioEsOjvM+h3bqfWkL5r2L6fuN773h/768JO+94wDLsizr+KLDBlQqlRKAy0Q0xswFA5n+GRElzNwGsNxsNtcPHNuto1wujxDREwB+rwOaRESLruveW1pa+iX2S421Wu1kkiSrzDymN54ZRNQuFAoXwjDc2d/nSOPjOH4+KJMHAGYei+P4mdSX+U5XKpVLAMraUxlGRBWpXVoBVzRn6StSAcaNp8iRVIDIeIocSQX4ZjxFjjIFIKK3GMxVIM4pU4BGo7HFzLP685jVbU7SVwCTk5OvASxoTWTWwt6cMg48C1Sr1YvMPA/grJZY+n1N03Sm1Wqt5h3EsizLsvpQ132A7/tuFEU3AMwAKJqL1FMdAPNKqVdBEPyRBogF8H1fRVEUApjWmc6gNaVULQiCzHlA3ApHUfQAgzN5AJiOouhoZ4G9a/Cb2iOZd0tqlFbAVRzhecF/SJxTpgDMfFp/lv4h/gYcJ9KN0Pc8guRFWgHvAbDpIAaIc8oUYO9h4kvtccx7ITWKvwFKqYcA1rTGMWtNKTUvdbhS48bGRlIqld4kSfIbuxuiEzrTadRh5tlisXg3CIJYGnDo/73v+6rT6Uw5jnMqTVOv9xl7z3GcOE3TH8Vi8bO0/bUsy7KsXUd5NPYIQMlQnl5bJ6KZRqPxqdsAcSM0NzfnDA8PPwbwFMCornQGjAKoT0xMjNTr9eWVlZXMeUAswNDQ0HUiuq89njnntre3f25ubn7Z35E5C1Sr1XEiEvfN/7Nuc5JuhK4BUNoTmSfOSToNntEcpK9IBRjET78rqQBbxlPkSCpAy3iKHElXYh+Z+UMeYXRi5qbULq0A9jzvNhG1NWcyhojanufdkfrEO8EwDHfSND1PRIt6o+lHRO9c152S3hUA7CszlmVZ1rH2Fzfz3nwPPz9BAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/klEQVR4nO2bMW/TQBTH/884VGFjKEOFOjEilWYqGUCCjSatYoHFB+hQYICBoUgFRZSBgQEG2g79ABChICWGrUh0iJhSKjEyVahD24GpqYntx9BM9UuaIXdO3fuN9y7S7559l+ezDzAYDAbD2YVO6lCv1ycA3AYwBsBWbjQYAgA7ANaLxeJWr45dE+B53sUwDN8Q0b1B2+mEmStRFD0tlUp/pbiYgGq1esm27Q0cXfU0sBMEwQ3HcXaPB6zjDcxMmUzmHdIzeAAYs237rRSIJcDzvFvMPK3eSTsFqTGWAAB3FIsMFVICxrVbJIi0BrSSEEmKWAKI6FcSIkkhTYEPAFJ3F3S7s2MJKBaL2wCeKzfSDBGJY5LuADSbzTUiWlGrpA8iWmk2m2tirNcPa7XaTWZeIqJratTUwsw/ASzOzs5uJO1iMBgMBsMQ0rUOqFQq57LZ7IMoihaJ6IJOqUHBzAeWZS21Wq1V13VDqY+YgEajkd3b2/tMRHm1inpg5obv+yXXdWPPA2IpvL+//yItgwcAIsqPjIz09yzQ2QZ/qNxKM0T0SGqPJSCKorvo433BKUQcUywBlmVdUe8yPIhrwFlCmgK/kxBJCmkKfALACbioRhyTtCW2BWBZuY5mmPm91C6uAYeHhy+ZuaFWSR+dQmhJiokJcF235fv+NBE9Y+YDtXrq6Lgv+L4/LVWBQB//952yeIqILgM4P2hJRfxj5j+jo6M/8vl86rb4DQaDwTAoTnw1BuAVgAk9OgNnC8DizMzM924dxASUy2VrcnLyNRHNK1PTCDOvbm5uLpTL5eh4TKwEc7ncXFoGDwBENJ/L5eakmLQlNg5ArJtPM8zc97PAfQBZtTr6ISJxTNJHUlfV6wwP0kdSqbv6vZCmwLZ2iwSREvBVu0WCxBJQKBS+EdGXJGQU40mN0hrA7Xb7MY4OHKSFnSAInkgBsRByHGfXsqzrzFxR66WFj2EYTklnBYA+tsSq1epEJpM5lUdm2u32uuM4PY/MGAwGg+Es8x9ahvGx/OZ0uAAAAABJRU5ErkJggg=="),W=I.a.div(i||(i=Object(U.a)(["\n    /* color is #ff6600 */\n    height: calc(1vw + 30px);\n    width: calc(6vw + 90px);\n    background: url(",");\n    background-size: 100% 100%;\n    cursor: pointer;\n    margin-left: 2vw;\n    order: 2;\n"])),q),G=I.a.div(o||(o=Object(U.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: relative;\n    margin-left: 2vw;\n    order: 2;\n    & ul{\n        display: flex;\n        flex-direction: row;\n        gap: 2vw;\n        & li{\n            list-style: none;\n            font-size: calc(15px + .2vw);\n            color: rgba(255, 255 , 255, 0.55);\n            cursor: pointer;\n            &:hover{\n                text-shadow: 4px 4px 10px #11111111;\n                color: ",";\n            }\n        }\n    }\n    @media (max-width: 768px){\n        order: 1;\n        & ul{\n            display: none;\n            position: absolute;\n        }\n        & div{\n            display: block;\n        }\n        &:hover ul{\n            padding: 2rem 0;\n            width: 100px;\n            gap: 20px;\n            display: flex;\n            flex-direction: column;\n            top: 30px;\n            animation: "," 0.8s;\n        }\n    }\n"])),K,Q),V=I.a.div(s||(s=Object(U.a)(["\n    background: url(",");\n    background-size: 100% 100%;\n    width: calc(1vw + 23px);\n    height: calc(1vw + 23px);\n    margin: 0 2vw;\n    order: 5;\n    &:hover{\n        background: url(",");\n        background-size: 100% 100%;\n    }\n    cursor: pointer;\n    "])),F,J),D=I.a.div(l||(l=Object(U.a)(["\n    width: clamp(200px, 100% , 300px);\n    align-self: flex-start;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    order: 4;\n    margin-top: calc((70px - (1px + 23px))/2);\n    margin-left: auto;\n    & div{\n        border-radius: 10px;\n        background-color: rgba(255, 255, 255, .4);\n        & input{\n            ::placeholder{\n                color: #47474790;\n            }\n        }\n    }\n    &:hover,\n    &:focus-within{\n        & div{\n            background-color: rgba(255, 255, 255, .8);\n            /* display: flex; */ // i've do this with js\n            & div{\n                background-color: transparent;\n            }\n            & .searchBut{\n                background: url(",");\n                background-size: 100% 100%;\n            }\n            & input{\n                ::placeholder{\n                    color: #474747;\n                }\n            }\n        }\n    }\n    & .flex{\n        display: flex;\n    }\n    & .none{\n        display: none;\n    }\n    @media (max-width: 768px){\n        width: calc(1vw + 20px);\n        & div {\n            border-radius: 50%;\n            padding: 0;\n            & input{\n                display: none;\n            }\n            & button{\n                margin: auto;\n            }\n        }\n        &:focus-within {\n            & + div{\n                margin-left: auto;\n            }\n            width: 90%;\n            position: absolute;\n            left: 5%;\n            top: 50px;\n            & div {\n                padding: .2em .8em;\n                width: 100%;\n                border-radius: 10px;\n                & input{\n                    display: block;\n                }\n                & button{\n                    margin-left: -5px;\n                }\n            }\n        }\n    }\n"])),R),H=I.a.div(d||(d=Object(U.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: .2em .8em;\n        background-color: rgba(255, 255, 255, 0.3);\n    & input,\n    & button {\n        background-color: transparent;\n        border: none;\n        height: calc(.2vw + 25px);\n        &:focus{\n            outline: none;\n        }\n    }\n    & button{\n        width: calc(1vw + 15px);\n        background-image: url(",");\n        background-size: 100% 100%;\n        margin-left: -5px;\n        cursor: pointer;\n    }\n    & input{\n        width: calc(100% - 1vw - 15px);\n        font-size: 16px;\n        font-weight : large;\n        ::placeholder{\n            color: #999999;\n        }\n    }\n    "])),R),X=I.a.div(p||(p=Object(U.a)(["\n    /* display: none; */\n    flex-direction: column;\n    margin-top: 10px;\n    padding: 0;\n    background-color: rgba(255, 255, 255, 0.3);\n    & div{\n        padding: .5em .8em;\n    }\n    & .sugges{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        width: 100%;\n        color: rgba(0, 0, 0, 0.8);\n        & aside{\n            display: flex;\n            flex-direction: row;\n            & img{\n                height: 90px;\n                width: 70px;\n            }\n            & .movie-info{\n                & h4 {\n                    width: 100%;\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    max-width: 200px;\n                }\n                & span{\n                    margin-right: 5px;\n                    & img{\n                        height: 13px;\n                        width: 13px;\n                        margin-right: 3px;\n                    }\n                    & em{\n                        margin-right: 5px;\n                        & .dot{\n                            background-color: #000;\n                            height: 5px;\n                            width: 5px;\n                            display: inline-block;\n                            border-radius: 50%;\n                        }\n                    }\n                }\n            }\n            &:hover{\n                color: #000;\n                cursor: pointer;\n            }\n        }\n    }\n    & .types{\n        display: flex;\n        flex-direction: row;\n        justify-content: start;\n        gap: 10px;\n        & button{\n            background-color: transparent;\n            border: none;\n            outline: none;\n            font-size: 16px;\n            color: rgba(0, 0, 0, .5);\n            margin: 2px;\n            cursor: pointer;\n        }\n        & .selectedType{\n            color: ",";\n            border-bottom: 2px solid ",";\n        }\n    }\n"])),K,K),_=t.p+"static/media/blackStar.57634606.svg",Z=t(0),$=function(n){var e=n.data,t=n.dataType,r=Object(g.useState)([]),a=Object(S.a)(r,2),c=a[0],i=a[1],o=function(n){return n?n.slice(0,4):""};return Object(g.useEffect)((function(){var n=function(){var n=Object(y.a)(A.a.mark((function n(){var r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(t,e.id);case 2:r=n.sent,i(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),Object(Z.jsxs)("aside",{children:[Object(Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/"+(c.poster_path||c.profile_path),alt:" ",style:{borderRadius:"person"===t?"50%":"0",height:"person"===t?"70px":"90px"}}),Object(Z.jsxs)("div",{className:"movie-info",children:[Object(Z.jsx)("h4",{children:c.name||c.title}),Object(Z.jsx)("span",{children:"tv"===t?"serie":t}),"person"!==t?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)("img",{src:_,alt:" "}),c.vote_average]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("span",{children:c.genres?c.genres.slice(0,2).map((function(n){return Object(Z.jsxs)("em",{children:[Object(Z.jsx)("span",{className:"dot"}),n.name]})})):""}),Object(Z.jsx)("br",{}),Object(Z.jsxs)("span",{children:["(",o(c.release_date)||o(c.first_air_date)+"-"+o(c.last_air_date),")"]})]}):""]})]})},nn=function(){var n=Object(g.useState)([]),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(g.useState)(""),c=Object(S.a)(a,2),i=c[0],o=c[1],s=Object(g.useState)("multi"),l=Object(S.a)(s,2),d=l[0],p=l[1],u=Object(g.useState)("none"),x=Object(S.a)(u,2),b=x[0],f=x[1],h=function(n,e){document.querySelector(".selectedType").classList.remove("selectedType"),n.classList.add("selectedType"),p(e),j(i,e)},j=function(){var n=Object(y.a)(A.a.mark((function n(e,t){var a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e,t);case 2:a=n.sent,r(e?Object(k.a)(a):[]),f(e?"flex":"none");case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return Object(Z.jsxs)(Y,{children:[Object(Z.jsx)(W,{}),Object(Z.jsxs)(G,{children:[Object(Z.jsx)(P,{}),Object(Z.jsxs)("ul",{children:[Object(Z.jsx)("li",{children:"Home"}),Object(Z.jsx)("li",{children:"Genre"}),Object(Z.jsx)("li",{children:"Movies"}),Object(Z.jsx)("li",{children:"Tv-Series"}),Object(Z.jsx)("li",{children:"Top IMDb"})]})]}),Object(Z.jsxs)(D,{onBlur:function(n){null===n.nativeEvent.relatedTarget&&f("none")},children:[Object(Z.jsxs)(H,{children:[Object(Z.jsx)("button",{className:"searchBut",onClick:function(){j(i,d)}}),Object(Z.jsx)("input",{type:"search",placeholder:"search ...",value:i,onChange:function(n){o(n.target.value),j(n.target.value,d)}})]}),Object(Z.jsxs)(X,{className:b,children:[Object(Z.jsxs)("div",{className:"types",children:[Object(Z.jsx)("button",{onClick:function(n){return h(n.target,"multi")},className:"selectedType",children:"All"}),Object(Z.jsx)("button",{onClick:function(n){return h(n.target,"movie")},children:"Movie"}),Object(Z.jsx)("button",{onClick:function(n){return h(n.target,"tv")},children:"Serie"}),Object(Z.jsx)("button",{onClick:function(n){return h(n.target,"person")},children:"Person"})]}),Object(Z.jsx)("div",{className:"sugges",children:t.slice(0,2).map((function(n,e){return Object(Z.jsx)($,{data:n,dataType:n.media_type||d})}))})]})]}),Object(Z.jsx)(V,{})]})},en=I.a.div(u||(u=Object(U.a)(["\n    margin-top: 0px;\n    color: #ffffff;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n"]))),tn=I.a.div(x||(x=Object(U.a)(["\n    padding: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    @media (max-width: 768px) {\n        flex-direction: column;\n        padding: 0px 10px;\n    }\n    & p{\n        font-size: 30px;\n        color: #ffffff90;\n        border-bottom: 1px solid #ffffff90;\n        padding-bottom: 10px;\n        margin-bottom: 15px;\n    }\n\n"]))),rn=I.a.div(b||(b=Object(U.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    min-width: 25%;\n    align-items: center;\n    margin: 0px 10px;\n    padding-bottom: 10px;\n    margin-bottom: 14px;\n    & button{\n        width: 30%;\n        min-width: max-content;\n        border: none;\n        background-color: rgb(25, 25, 25);\n        color: #ffffff95;\n        border-radius: 5px;\n        padding: 5px 10px;\n        margin: 0 5px;\n        & .fas{\n            margin-right: 5px;\n        }\n    }\n    & .hoverEvent{\n        &:hover{\n            background-color: rgb(40, 40,40);\n            color: #ffffff;\n        }\n    }\n    & .selected{\n        background-color: ",";\n        color: #ffffff;\n    }\n    @media (max-width: 768px) {\n        margin: 10px 0px;\n    }\n"])),K),an=I.a.div(f||(f=Object(U.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),cn=I.a.div(h||(h=Object(U.a)(["\n    font-family: Sans-serif;\n    width: 200px;\n    height: max-content;\n    margin: .5rem;\n    margin-top: 20px;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0px 0px 5px #000;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    gap: 10px;\n    & img{\n        width: 100%;\n        margin-bottom: 5px;\n    }\n    & h4{\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 1; /* number of lines to show */\n        line-clamp: 1; \n        -webkit-box-orient: vertical;\n        font-weight: 100;\n        color: #fff;\n    }\n    & em{\n        font-size: calc(70% + .3vw);\n    }\n    @media (max-width: 768px) {\n        width: 150px;\n    }\n"]))),on=I.a.div(j||(j=Object(U.a)(["\n    color: rgba(255, 255, 255, .7);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 8px;\n    & em{\n        & .fa-circle{\n            transform: scale(.3);\n        }\n        & .fa-star{\n            transform: scale(.79);\n        }\n    }\n\n"])));var sn,ln,dn,pn,un,xn,bn=function(n){var e,t=n.item,r=n.type,a=Object(g.useState)({}),c=Object(S.a)(a,2),i=c[0],o=c[1],s=function(){var n=Object(y.a)(A.a.mark((function n(){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z(r,t.id);case 3:e=n.sent,console.log(r),console.log(e),o(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){s()}),[]),"movie"==r?Object(Z.jsxs)(on,{children:[Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-star"}),i.vote_average]}),Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-circle"}),(e=i.release_date,e?e.slice(0,4):"")]}),Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-circle"}),i.runtime," min"]})]}):Object(Z.jsxs)(on,{children:[Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-star"}),i.vote_average]}),Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-circle"}),"SS ",i.number_of_seasons]}),Object(Z.jsxs)("em",{children:[Object(Z.jsx)("i",{class:"fas fa-circle"}),"EP ",i.number_of_episodes]})]})},fn=function(){var n=Object(g.useState)([]),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(g.useState)("movie"),c=Object(S.a)(a,2),i=c[0],o=(c[1],Object(g.useState)(1)),s=Object(S.a)(o,2),l=s[0],d=(s[1],function(n,e){var t=document.querySelector(".selected");t.classList.remove("selected"),t.classList.add("hoverEvent"),n.classList.remove("hoverEvent"),n.classList.add("selected")}),p=function(){var n=Object(y.a)(A.a.mark((function n(){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(i,l);case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){p()}),[]),Object(Z.jsxs)(en,{children:[Object(Z.jsxs)(tn,{children:[Object(Z.jsx)("p",{children:"Recommanded"}),Object(Z.jsxs)(rn,{children:[Object(Z.jsxs)("button",{onClick:function(n){return d(n.target)},className:"selected",children:[Object(Z.jsx)("i",{className:"fas fa-video"}),"Movies"]}),Object(Z.jsxs)("button",{onClick:function(n){return d(n.target)},className:"hoverEvent",children:[Object(Z.jsx)("i",{className:"fas fa-list-ul"}),"TV Show"]}),Object(Z.jsxs)("button",{onClick:function(n){return d(n.target)},className:"hoverEvent",children:[Object(Z.jsx)("i",{className:"fas fa-chart-line"}),"Trinding"]})]})]}),Object(Z.jsx)(an,{children:t.map((function(n,e){return Object(Z.jsxs)(cn,{children:[Object(Z.jsx)("img",{src:L+n.poster_path}),Object(Z.jsx)("h4",{children:n.name||n.title}),Object(Z.jsx)(bn,{item:n,type:n.media_type||i})]},e)}))})]})},hn=t.p+"static/media/star.dd17d69a.svg",jn=Object(I.b)(sn||(sn=Object(U.a)(["\n    0%{\n        visibility: visible;\n        opacity: 0;\n    }\n    15%{\n        opacity: 0;\n    }\n    25%{\n        opacity: 1;\n    }\n    99%{\n        opacity: 1;\n    }\n    100%{\n        visibility: hidden;\n        opacity: 0;\n    }\n"]))),gn=I.a.div(ln||(ln=Object(U.a)(["\n    position: relative;\n    width: 100%;\n    height: calc(50vh + 20vw);\n    top: -70px;\n    overflow: hidden;\n    & .showen{\n        animation: "," 6s;\n    }\n"])),jn),mn=I.a.div(dn||(dn=Object(U.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    color: white;\n    transition: all 1s ease-in-out;\n"]))),vn=I.a.div(pn||(pn=Object(U.a)(["\n    width: 100%;\n    height: 70px;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background-color: #00000099;\n    box-shadow: 0px 0px 80px 80px #00000099;\n    & .orange{\n        background-color: ",";\n    }\n    @media (max-width: 768px){\n        box-shadow: 0px 0px 50px 50px #00000040;\n        background-color: #00000040;\n    }\n    "])),"#ff6600"),wn=I.a.div(un||(un=Object(U.a)(["\n    background-color: #ffffff50;\n    border-radius: 50%;\n    width: calc(10px + .1vw);\n    height: calc(10px + .1vw);\n    cursor: pointer;\n"]))),On=I.a.div(xn||(xn=Object(U.a)(['\n    position: absolute;\n    top: 50%;\n    color: #fff;\n    text-shadow: 2px 2px 5px #000000;\n    background-color: #00000040;\n    box-shadow: 0px 0px 5px 5px #00000070;\n    z-index: 2;\n    visibility: hidden;\n    max-width: 50%;\n    max-height: 50%;\n    margin: 0px 20px;\n    padding: 10px;\n    overflow: hidden;\n    font-family: "Gill Sans", sans-serif;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    & h2 {\n        font-size: calc(24px + 1vw);\n        color: rgba(255, 255, 255, .95);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 1; /* number of lines to show */\n        line-clamp: 1; \n        -webkit-box-orient: vertical;\n        position: relative;\n        z-index: 2;\n    }\n    & span{\n        color: rgba(255, 255, 255, .78);\n        display: flex;\n        flex-direction: row;\n        gap: 10px;\n        & .vote{\n            color: rgba(255, 255, 255, .9);\n        }\n        & p{\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 5; /* number of lines to show */\n            line-clamp: 5; \n            -webkit-box-orient: vertical;\n            display: flex;\n            flex-direction: row;\n            gap: 5px;\n        }\n        & em{\n            & div{\n                margin: 0;\n                display: inline-block;\n                background: url(',");\n                background-size: contain;\n                background-position: center;\n                width: 14px;\n                height: 14px;\n            }\n            & .geDot{\n                background: none;\n                background-color: rgba(255, 255, 255, .9);\n                border-radius: 50%;\n                width: 5px;\n                height: 5px;\n                margin: 3px;\n                margin-left: 0px;\n            }\n        }\n    }\n    & .text {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 5; /* number of lines to show */\n        line-clamp: 5; \n        -webkit-box-orient: vertical;\n        color: rgba(255, 255, 255, .78);\n    }\n    @media (max-width: 768px){\n        max-width: 100%;\n        top: 35%;\n        background-color: #00000030;\n        box-shadow: 0px 0px 5px 5px #00000050;\n        & .text{\n            -webkit-line-clamp: 3; /* number of lines to show */\n            line-clamp: 3; \n        }\n        & span{\n            gap: 5px;\n        }\n    }\n"])),hn);var An=function(n){var e=n.movie,t=n.index,r=Object(g.useState)(0),a=Object(S.a)(r,2),c=a[0],i=a[1];return Object(g.useEffect)((function(){var n,e,t=6e3,r=document.querySelectorAll(".dot");r[0].classList.add("orange");var a=document.querySelectorAll(".info");a[0].classList.add("showen");var c=function n(){i((function(n){return r[n].classList.remove("orange"),a[n].classList.remove("showen"),r[n=n<8?n+1:0].classList.add("orange"),a[n].classList.add("showen"),n})),e=setTimeout((function(){n()}),t)};e=setTimeout((function(){c()}),t);for(var o=function(o){var s=r[o];n=function(){clearTimeout(e),i((function(n){return r[n].classList.remove("orange"),a[n].classList.remove("showen"),r[o].classList.add("orange"),a[o].classList.add("showen"),o})),e=setTimeout((function(){c()}),t)},s.addEventListener("click",n)},s=0;s<r.length;s++)o(s);return function(){clearTimeout(e);for(var t=0;t<r.length;t++){r[t].removeEventListener("click",n)}}}),[]),Object(Z.jsx)(mn,{style:{background:"url(".concat(L+e.backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center",left:"".concat(100*t,"%"),transform:"translateX(".concat(-100*c,"%)")}},t)};var kn,yn=function(){for(var n=Object(g.useState)([]),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(g.useState)([]),c=Object(S.a)(a,2),i=c[0],o=c[1],s=[],l=0;l<9;l++)s.push(Object(Z.jsx)(wn,{className:"dot"},l));return Object(g.useEffect)((function(){var n=function(){var n=Object(y.a)(A.a.mark((function n(){var e,t,a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C();case 2:if(!((e=n.sent).length>0)){n.next=12;break}t=A.a.mark((function n(t){var r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(e[t].media_type,e[t].id);case 2:r=n.sent,o((function(n){return[].concat(Object(k.a)(n),[r])}));case 4:case"end":return n.stop()}}),n)})),a=0;case 6:if(!(a<9)){n.next=11;break}return n.delegateYield(t(a),"t0",8);case 8:a++,n.next=6;break;case 11:r(e);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(Z.jsxs)(gn,{children:[t.slice(0,9).map((function(n,e){return Object(Z.jsx)(An,{movie:n,index:e},e)})),i.map((function(n,e){return Object(Z.jsxs)(On,{className:"info",children:[Object(Z.jsx)("h2",{children:n.original_title||n.title}),Object(Z.jsxs)("span",{children:[Object(Z.jsxs)("em",{className:"vote",children:[Object(Z.jsx)("div",{})," ",n.vote_average]}),Object(Z.jsxs)("em",{children:[n.runtime," min"]}),Object(Z.jsx)("p",{children:n.genres.slice(0,2).map((function(n,e){return Object(Z.jsxs)("em",{children:[Object(Z.jsx)("div",{className:"geDot"}),n.name.split(" ")[0]]},e)}))})]}),Object(Z.jsx)("p",{className:"text",children:n.overview})]},e)})),Object(Z.jsx)(vn,{children:s})]})},Sn=I.a.div(kn||(kn=Object(U.a)(["\n    \n"]))),En=function(){return Object(Z.jsxs)(Sn,{children:[Object(Z.jsx)(nn,{}),Object(Z.jsx)(yn,{}),Object(Z.jsx)(fn,{})]})};t(26);w.a.render(Object(Z.jsx)(m.a.StrictMode,{children:Object(Z.jsx)(En,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e717a523.chunk.js.map