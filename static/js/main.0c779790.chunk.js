(this.webpackJsonppoker=this.webpackJsonppoker||[]).push([[0],{42:function(e,t,a){"use strict";a.r(t);var c=a(7),r=a(6),n=a(0),s=a.n(n),i=(a(22),a(44)),l=a(30),o=a(18),j=a(49),b=a(45),u=a(25),d=a(29),h=a(1);function O(e){return Object(h.jsx)(d.a,{src:"".concat("/reactPoker","/cards/").concat(e.cardName,".PNG"),style:{height:"100px",width:"100px"},rounded:!0})}var f=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{variant:e.theTurn?"primary":"secondary",style:{margin:"auto",display:"block",textAlign:"center"},onClick:e.foldFunc,children:"Fold"})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{variant:e.theTurn?"primary":"secondary",style:{margin:"auto",display:"block",textAlign:"center"},onClick:e.raiseFunc,children:"Raise"})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{variant:e.theTurn?"primary":"secondary",style:{margin:"auto",display:"block",textAlign:"center"},onClick:e.callFunc,children:"Call"})})]})})},x=a(15),p=function(e){for(var t=["hearts","clubs","spades","diamonds"],a={hearts:0,clubs:0,spades:0,diamonds:0},c=0;c<e.length;c++){var r,n=Object(x.a)(t);try{for(n.s();!(r=n.n()).done;){var s=r.value;e[c].includes(s)&&(a[s]+=1)}}catch(i){n.e(i)}finally{n.f()}}return Object.keys(a).map((function(e){return a[e]})).some((function(e){return e>=5}))},m=function(e){for(var t={ace:14,king:13,queen:12,jack:11,ten:10,nine:9,eight:8,seven:7,six:6,five:5,four:4,three:3,two:2},a=[],r=0;r<e.length;r++)for(var n=e[r],s=0,i=Object.keys(t);s<i.length;s++){var l=i[s];if(n.includes(l)){a.push(t[l]);break}}a.sort((function(e,t){return e-t})),a=Object(c.a)(new Set(a));for(var o=0,j=0;j<a.length-1;j++){var b=a[j],u=a[j+1];if(1===Math.abs(b-u))o++;else{if(4===o)return!0;1!==Math.abs(b-u)&&(o=0)}}return!1},v=function(e){for(var t={ace:14,king:13,queen:12,jack:11,ten:10,nine:9,eight:8,seven:7,six:6,five:5,four:4,three:3,two:2},a=0,c=Object.keys(t);a<c.length;a++){var r=c[a];if(e.includes(r))return t[r]}return-1},g=function(e,t){return void 0===t||void 0===e?0:(t=t.map((function(e){return e.replace("hearts","").replace("spades","").replace("diamonds","").replace("clubs","")})),e=e.replace("hearts","").replace("spades","").replace("diamonds","").replace("clubs",""),t.filter((function(t){return t===e})).length)},y=function(e){var t=0;return!function(e){for(var t=["hearts","clubs","spades","diamonds"],a=["ace","king","queen","jack","ten"],c=!1,r=0;r<t.length;r++){c=!0;for(var n=0;n<a.length;n++)if(!e.includes("".concat(a[n]).concat(t[r]))){c=!1;break}if(c)return!0}return!1}(e)?!function(e){return!!p(e)&&!!m(e)&&(e.sort((function(e,t){return v(e)-v(t)})),!0)}(e)?!function(e){var t,a=Object(x.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value;if(4===g(c,e))return!0}}catch(r){a.e(r)}finally{a.f()}return!1}(e)?!function(e){var t,a=!1,c=!1,r=Object(x.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,s=g(n,e);2===s?a=!0:3===s&&(c=!0)}}catch(i){r.e(i)}finally{r.f()}return a&&c}(e)?!function(e){return p(e)}(e)?!function(e){return m(e)}(e)?!function(e){var t,a=Object(x.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value;if(3===g(c,e))return!0}}catch(r){a.e(r)}finally{a.f()}return!1}(e)?!function(e){var t,a=0,r=new Set,n=Object(x.a)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value.replace("hearts","").replace("spades","").replace("diamonds","").replace("clubs","");r.add(s)}}catch(j){n.e(j)}finally{n.f()}for(var i=0,l=Object(c.a)(r);i<l.length;i++){var o=l[i];2===g(o,e)&&a++}return 2===a}(e)?function(e){var t,a=Object(x.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value.replace("hearts","").replace("spades","").replace("diamonds","").replace("clubs","");if(2===g(c,e))return!0}}catch(r){a.e(r)}finally{a.f()}return!1}(e)&&(t=9):t=8:t=7:t=6:t=5:t=4:t=3:t=2:t=1,t},C=function(e){return e.map((function(e){return v(e)})).sort((function(e,t){return e-t}))[e.length-1]},k=function(e){for(var t=0;t<10;t++)for(var a,c=e.length;0!==c;){a=Math.floor(Math.random()*c),c--;var r=[e[a],e[c]];e[c]=r[0],e[a]=r[1]}return e},S=function(e){if(e<2)return!0;if(e<0)return!1;if(2===e||3===e||5===e)return!0;for(var t=2;t<=Math.ceil(Math.sqrt(e));t++)if(e%t===0)return!1;return!0},A=a(47),F=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(A.a,{horizontal:!0,style:{textAlign:"center"},children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["User Wins : ",e.userWins]})})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["Computer Wins : ",e.computerWins]})})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["User Chips : ",e.userChips]})})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["Computer Chips : ",e.computerChips]})})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["User Losses : ",e.userLosses]})})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(A.a.Item,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["Computer Losses : ",e.computerLosses]})})})]})})},w=a(46),M=function(e){var t=Object(n.useState)("0"),a=Object(r.a)(t,2);a[0],a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(w.a,{show:e.appear,onHide:function(){console.log("calling onHide")},children:[Object(h.jsxs)(w.a.Header,{children:["Raise Demand : Amount [",e.raiseAmt,"]"]}),Object(h.jsx)(w.a.Footer,{}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(o.a,{style:{textAlign:"center"},children:Object(h.jsx)(u.a,{variant:"primary",onClick:function(){e.raiseFunc(0,0)},children:"Fold"})}),Object(h.jsx)(o.a,{style:{textAlign:"center"},children:Object(h.jsx)(u.a,{variant:"primary",onClick:function(){e.raiseFunc(1,e.raiseAmt)},children:"Call"})})]})]})})})})},I=a(48),N=function(e){var t=Object(n.useState)("0"),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(w.a,{show:e.appear,onHide:function(){console.log("calling onHide")},children:[Object(h.jsx)(w.a.Header,{children:"Chip Amount"}),Object(h.jsx)(w.a.Body,{children:"Input amount of chips to enter"}),Object(h.jsxs)(w.a.Footer,{children:[Object(h.jsx)(I.a,{children:Object(h.jsxs)(I.a.Group,{className:"raiseText",controlId:"raiseAmt",children:[Object(h.jsxs)(I.a.Label,{children:["Number of Chips to Enter [Current Amount : $",e.playerChips]}),Object(h.jsx)(I.a.Control,{type:"text",value:c,placeholder:"0",name:"raiseForm",onChange:function(t){var a=t.target,r=parseInt(a.value);if(isNaN(r)){var n=c;n=n.substring(0,n.length-1),s(n)}else if(r>e.playerChips){console.log("chip amount = ".concat(e.playerChips," and value = ").concat(r)),alert("Not allowed to go above current chip amount");var i=parseInt(c)-1;s(String(i))}else r<0?(alert("Not allowed to raise negative chips"),s("0")):s(String(r))}}),Object(h.jsx)(I.a.Text,{children:"Chip enter amount goes above ^^"})]})}),Object(h.jsx)(u.a,{variant:"primary",onClick:function(){e.submitChips(parseInt(c))},children:"Submit amount"})]})]})})},T=function(e){var t=Object(n.useState)("0"),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(w.a,{show:e.appear,onHide:function(){console.log("calling onHide")},children:[Object(h.jsx)(w.a.Header,{children:"Raise Demand"}),Object(h.jsx)(w.a.Body,{children:"Input amount to raise"}),Object(h.jsxs)(w.a.Footer,{children:[Object(h.jsx)(I.a,{children:Object(h.jsxs)(I.a.Group,{className:"raiseText",controlId:"raiseAmt",children:[Object(h.jsxs)(I.a.Label,{children:["Number of Chips to Raise [Current Amount : $",e.playerChips]}),Object(h.jsx)(I.a.Control,{type:"text",value:c,placeholder:"0",name:"raiseForm",onChange:function(t){var a=t.target,r=parseInt(a.value);if(isNaN(r)){var n=c;n=n.substring(0,n.length-1),s(n)}else if(r>e.playerChips){console.log("chip amount = ".concat(e.playerChips," and value = ").concat(r)),alert("Not allowed to go above current chip amount");var i=parseInt(c)-1;s(String(i))}else r<0?(alert("Not allowed to raise negative chips"),s("0")):s(String(r))}}),Object(h.jsx)(I.a.Text,{children:"Raise amount goes above ^^"})]})}),Object(h.jsx)(u.a,{variant:"primary",onClick:function(){e.raiseFunc(parseInt(c))},children:"Raise Amount"})]})]})})};function H(){var e=["acehearts","kinghearts","queenhearts","jackhearts","tenhearts","ninehearts","eighthearts","sevenhearts","sixhearts","fivehearts","fourhearts","threehearts","twohearts","acediamonds","kingdiamonds","queendiamonds","jackdiamonds","tendiamonds","ninediamonds","eightdiamonds","sevendiamonds","sixdiamonds","fivediamonds","fourdiamonds","threediamonds","twodiamonds","acespades","kingspades","queenspades","jackspades","tenspades","ninespades","eightspades","sevenspades","sixspades","fivespades","fourspades","threespades","twospades","aceclubs","kingclubs","queenclubs","jackclubs","tenclubs","nineclubs","eightclubs","sevenclubs","sixclubs","fiveclubs","fourclubs","threeclubs","twoclubs"],t=Object(n.useState)(k(e)),a=Object(r.a)(t,2),s=a[0],d=a[1],x=Object(n.useState)(!1),p=Object(r.a)(x,2),m=p[0],v=p[1],g=Object(n.useState)([]),A=Object(r.a)(g,2),w=A[0],I=A[1],H=Object(n.useState)([]),q=Object(r.a)(H,2),L=q[0],R=q[1],P=Object(n.useState)([]),W=Object(r.a)(P,2),B=W[0],E=W[1],G=Object(n.useState)(!0),U=Object(r.a)(G,2),D=U[0],J=U[1],K=Object(n.useState)(1e3),$=Object(r.a)(K,2),z=$[0],Q=$[1],V=Object(n.useState)(1e3),X=Object(r.a)(V,2),Y=X[0],Z=X[1],_=Object(n.useState)(0),ee=Object(r.a)(_,2),te=ee[0],ae=ee[1],ce=Object(n.useState)(0),re=Object(r.a)(ce,2),ne=re[0],se=re[1],ie=Object(n.useState)(0),le=Object(r.a)(ie,2),oe=le[0],je=le[1],be=Object(n.useState)(0),ue=Object(r.a)(be,2),de=ue[0],he=ue[1],Oe=Object(n.useState)(0),fe=Object(r.a)(Oe,2),xe=fe[0],pe=fe[1],me=Object(n.useState)(!1),ve=Object(r.a)(me,2),ge=ve[0],ye=ve[1],Ce=Object(n.useState)([]),ke=Object(r.a)(Ce,2),Se=ke[0],Ae=ke[1],Fe=Object(n.useState)([]),we=Object(r.a)(Fe,2),Me=we[0],Ie=we[1],Ne=Object(n.useState)([]),Te=Object(r.a)(Ne,2),He=Te[0],qe=Te[1],Le=Object(n.useState)("Start Game"),Re=Object(r.a)(Le,2),Pe=Re[0],We=Re[1],Be=Object(n.useState)(!1),Ee=Object(r.a)(Be,2),Ge=Ee[0],Ue=Ee[1],De=Object(n.useState)(!1),Je=Object(r.a)(De,2),Ke=Je[0],$e=Je[1],ze=Object(n.useState)(0),Qe=Object(r.a)(ze,2),Ve=Qe[0],Xe=Qe[1],Ye=Object(n.useState)(!1),Ze=Object(r.a)(Ye,2),_e=Ze[0],et=Ze[1],tt=Object(n.useState)(""),at=Object(r.a)(tt,2),ct=at[0],rt=at[1],nt=Object(n.useState)(!1),st=Object(r.a)(nt,2),it=st[0],lt=st[1],ot=function(t){var a=de,c=xe,r=ne,n=oe;if(2===t){he(++a),je(++n);var s=Y;Z(s+=te),alert("Computer lost")}else if(1===t){pe(++c),se(++r);var i=z;Q(i+=te),alert("User lost")}else{var l=Math.round(te/2),o=z;Q(o+=l);var j=Y;Z(j+=l),alert("Tie!")}d(k(e)),ye(!1),J(!0),Ue(!1),et(!1),rt(""),I([]),R([]),E([]),Ae([]),qe([]),Ie([]),ae(0),v(!1),$e(!1)};Object(n.useEffect)((function(){if(m){var e=function(e,t,a){var r=y([].concat(Object(c.a)(t),Object(c.a)(a))),n=y([].concat(Object(c.a)(e),Object(c.a)(a))),s=Math.floor(100*Math.random())%Math.floor(1e4*Math.random());return 0===r?0!==n?2:C([].concat(Object(c.a)(t),Object(c.a)(a)))>C([].concat(Object(c.a)(e),Object(c.a)(a)))?1:S(s)?3:1:r>n?s%2===0?1:2:r===n?s%2===0?1:s%2!==0?2:S(s)?3:1:-1}(w,L,B);if(3===e)ot(2);else if(2===e){alert("Computer raises"),v(!1);var t=Math.ceil(Math.ceil(Math.random()+z/10)*(te%10));Xe(t),Ue(!0)}else if(5===B.length){var a=y([].concat(Object(c.a)(L),Object(c.a)(B))),r=y([].concat(Object(c.a)(w),Object(c.a)(B)));ot(r>a?2:r<a?1:0)}else alert("Computer calls"),v(!1),jt(!1,s,d,B,E,1,Ie)}}),[m]),Object(n.useEffect)((function(){We("Deal Table Cards")}),[w,L]),Object(n.useEffect)((function(){if(ge){var e="";switch(y([].concat(Object(c.a)(w),Object(c.a)(B)))){case 1:e="Royal Flush";break;case 2:e="Straight Flush";break;case 3:e="Four of a Kind";break;case 4:e="Full House";break;case 5:e="Flush";break;case 6:e="Straight";break;case 7:e="Three of a Kind";break;case 8:e="Two Pairs";break;case 9:e="Pair";break;default:e="High Card"}console.log("hand strength = ".concat(e)),rt(e)}}),[B]);var jt=function(e,t,a,r,n,s,i){for(var l=[],o=0;o<s;o++){var j=t.pop();void 0!==j&&l.push(j)}a(Object(c.a)(t)),r=r.concat([].concat(l)),n(Object(c.a)(r));var b=r.map((function(t){return Object(h.jsx)(O,{cardName:e?"backofcard":t},t)}));i(Object(c.a)(b))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{fluid:!0,children:[Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Poker Game"})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(F,{userWins:oe,computerWins:ne,userChips:Y,computerChips:z,userLosses:xe,computerLosses:de})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(j.a.Body,{children:Object(h.jsxs)("h5",{style:{textAlign:"center"},children:["Total Chips : ",te]})})})})}),Object(h.jsx)("br",{}),Object(h.jsxs)(b.a,{bg:"primary",style:{textAlign:"center",display:"block"},children:["Current Hand Strength :  ",ct]}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h4",{style:{textAlign:"center"},children:"Table Cards"})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{style:{border:"2px dashed black"},children:Me})}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)("h4",{style:{textAlign:"center"},children:"Computer Cards"})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{style:{border:"2px dashed black"},children:He})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{style:{textAlign:"center"},children:Object(h.jsx)("h4",{children:"Player Cards"})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{style:{border:"2px dashed black"},children:Se})}),Object(h.jsx)("br",{}),Object(h.jsx)(f,{theTurn:D,callFunc:function(){m?alert("Already selected : ".concat(_e?"call":"raise")):(et(!0),v(!0),alert("User selects call"))},foldFunc:function(){m||ot(1)},raiseFunc:function(){ge&&$e(!0)}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(u.a,{variant:D?"primary":"secondary",onClick:function(){ge?5===B.length?alert("Cannot deal more table cards, max amount is 5"):m?(jt(!1,s,d,B,E,1,Ie),J(!D)):alert("Select a move before advancing turn"):(jt(!1,s,d,w,I,2,Ae),jt(!1,s,d,B,E,3,Ie),jt(!0,s,d,L,R,2,qe),ye(!0),lt(!0))},style:{margin:"auto",display:"block",textAlign:"center"},id:"mainButton",children:Pe})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(M,{appear:Ge,playerChips:Y,raiseAmt:Ve,raiseFunc:function(e,t){if(0===e)ot(1);else if(1===e){console.log("raising from comp");var a=Y;Z(a-=t);var r=te;if(ae(r+=t),Xe(0),5===B.length){var n=y([].concat(Object(c.a)(L),Object(c.a)(B))),s=y([].concat(Object(c.a)(w),Object(c.a)(B)));ot(s>n?2:s<n?1:0)}}Ue(!1)}})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(N,{appear:it,submitChips:function(e){var t=Y;if(t-=e,e>z)e+=z,Q(0);else{var a=z;a-=e,e+=e,Q(a)}ae(e),Z(t),lt(!1)},playerChips:Y})})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(T,{appear:Ke,playerChips:Y,raiseFunc:function(e){if(e>z)ot(2);else{var t=function(e,t,a){var r=y([].concat(Object(c.a)(t),Object(c.a)(a))),n=y([].concat(Object(c.a)(e),Object(c.a)(a))),s=Math.floor(100*Math.random())%Math.floor(1e4*Math.random());return 0===r?0!==n?2:C([].concat(Object(c.a)(t),Object(c.a)(a)))>C([].concat(Object(c.a)(e),Object(c.a)(a)))?1:S(s)?3:1:r>n?s%2===0?1:3:r===n?s%2===0||s%2!==0?1:S(s)?3:1:-1}(w,L,B);if(1===t){var a=z;e,Q(a-=e);var r=Y;if(r-=e,ae(te),Z(r),5===B.length){var n=y([].concat(Object(c.a)(L),Object(c.a)(B))),i=y([].concat(Object(c.a)(w),Object(c.a)(B)));ot(i>n?2:i<n?1:0)}else v(!1),jt(!1,s,d,B,E,1,Ie)}else ot(2)}$e(!1)}})})})]})})}var q=function(){return Object(h.jsx)(H,{})},L=a(11);a.n(L).a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0c779790.chunk.js.map