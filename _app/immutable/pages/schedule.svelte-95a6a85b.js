import{S as pe,i as ge,s as be,l as B,x as re,a as te,u as ae,m as J,p as V,y as se,h as j,c as ne,v as ue,q,b as ye,J as T,z as le,n as ve,f as ce,t as de,C as he}from"../chunks/index-5d6d97c1.js";import{b as we}from"../chunks/paths-b9644fda.js";import{H as $e}from"../chunks/home-d8742978.js";/* empty css                                                    */import{F as ke}from"../chunks/Footer-d7ed53af.js";var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe={exports:{}};(function(X,$){(function(w,h){X.exports=h()})(Se,function(){var w=1e3,h=6e4,_=36e5,g="millisecond",k="second",y="minute",x="hour",S="day",f="week",b="month",Y="quarter",M="year",W="date",O="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},F=function(u,n,e){var r=String(u);return!r||r.length>=n?u:""+Array(n+1-r.length).join(e)+u},H={s:F,z:function(u){var n=-u.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+F(r,2,"0")+":"+F(t,2,"0")},m:function u(n,e){if(n.date()<e.date())return-u(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(r,b),s=e-t<0,a=n.clone().add(r+(s?-1:1),b);return+(-(r+(e-t)/(s?t-a:a-t))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:b,y:M,w:f,d:S,D:W,h:x,m:y,s:k,ms:g,Q:Y}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},A="en",L={};L[A]=I;var z=function(u){return u instanceof K},Z=function u(n,e,r){var t;if(!n)return A;if(typeof n=="string"){var s=n.toLowerCase();L[s]&&(t=s),e&&(L[s]=e,t=s);var a=n.split("-");if(!t&&a.length>1)return u(a[0])}else{var l=n.name;L[l]=n,t=l}return!r&&t&&(A=t),t||!r&&A},p=function(u,n){if(z(u))return u.clone();var e=typeof n=="object"?n:{};return e.date=u,e.args=arguments,new K(e)},c=H;c.l=Z,c.i=z,c.w=function(u,n){return p(u,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var K=function(){function u(e){this.$L=Z(e.locale,null,!0),this.parse(e)}var n=u.prototype;return n.parse=function(e){this.$d=function(r){var t=r.date,s=r.utc;if(t===null)return new Date(NaN);if(c.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(U);if(a){var l=a[2]-1||0,m=(a[7]||"0").substring(0,3);return s?new Date(Date.UTC(a[1],l,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)):new Date(a[1],l,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==O},n.isSame=function(e,r){var t=p(e);return this.startOf(r)<=t&&t<=this.endOf(r)},n.isAfter=function(e,r){return p(e)<this.startOf(r)},n.isBefore=function(e,r){return this.endOf(r)<p(e)},n.$g=function(e,r,t){return c.u(e)?this[r]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,r){var t=this,s=!!c.u(r)||r,a=c.p(e),l=function(N,C){var R=c.w(t.$u?Date.UTC(t.$y,C,N):new Date(t.$y,C,N),t);return s?R:R.endOf(S)},m=function(N,C){return c.w(t.toDate()[N].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(C)),t)},d=this.$W,v=this.$M,P=this.$D,E="set"+(this.$u?"UTC":"");switch(a){case M:return s?l(1,0):l(31,11);case b:return s?l(1,v):l(0,v+1);case f:var G=this.$locale().weekStart||0,Q=(d<G?d+7:d)-G;return l(s?P-Q:P+(6-Q),v);case S:case W:return m(E+"Hours",0);case x:return m(E+"Minutes",1);case y:return m(E+"Seconds",2);case k:return m(E+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,r){var t,s=c.p(e),a="set"+(this.$u?"UTC":""),l=(t={},t[S]=a+"Date",t[W]=a+"Date",t[b]=a+"Month",t[M]=a+"FullYear",t[x]=a+"Hours",t[y]=a+"Minutes",t[k]=a+"Seconds",t[g]=a+"Milliseconds",t)[s],m=s===S?this.$D+(r-this.$W):r;if(s===b||s===M){var d=this.clone().set(W,1);d.$d[l](m),d.init(),this.$d=d.set(W,Math.min(this.$D,d.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},n.set=function(e,r){return this.clone().$set(e,r)},n.get=function(e){return this[c.p(e)]()},n.add=function(e,r){var t,s=this;e=Number(e);var a=c.p(r),l=function(v){var P=p(s);return c.w(P.date(P.date()+Math.round(v*e)),s)};if(a===b)return this.set(b,this.$M+e);if(a===M)return this.set(M,this.$y+e);if(a===S)return l(1);if(a===f)return l(7);var m=(t={},t[y]=h,t[x]=_,t[k]=w,t)[a]||1,d=this.$d.getTime()+e*m;return c.w(d,this)},n.subtract=function(e,r){return this.add(-1*e,r)},n.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||O;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),l=this.$H,m=this.$m,d=this.$M,v=t.weekdays,P=t.months,E=function(C,R,ie,ee){return C&&(C[R]||C(r,s))||ie[R].slice(0,ee)},G=function(C){return c.s(l%12||12,C,"0")},Q=t.meridiem||function(C,R,ie){var ee=C<12?"AM":"PM";return ie?ee.toLowerCase():ee},N={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:c.s(d+1,2,"0"),MMM:E(t.monthsShort,d,P,3),MMMM:E(P,d),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:E(t.weekdaysMin,this.$W,v,2),ddd:E(t.weekdaysShort,this.$W,v,3),dddd:v[this.$W],H:String(l),HH:c.s(l,2,"0"),h:G(1),hh:G(2),a:Q(l,m,!0),A:Q(l,m,!1),m:String(m),mm:c.s(m,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:a};return s.replace(D,function(C,R){return R||N[C]||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,r,t){var s,a=c.p(r),l=p(e),m=(l.utcOffset()-this.utcOffset())*h,d=this-l,v=c.m(this,l);return v=(s={},s[M]=v/12,s[b]=v,s[Y]=v/3,s[f]=(d-m)/6048e5,s[S]=(d-m)/864e5,s[x]=d/_,s[y]=d/h,s[k]=d/w,s)[a]||d,t?v:c.a(v)},n.daysInMonth=function(){return this.endOf(b).$D},n.$locale=function(){return L[this.$L]},n.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),s=Z(e,r,!0);return s&&(t.$L=s),t},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},u}(),oe=K.prototype;return p.prototype=oe,[["$ms",g],["$s",k],["$m",y],["$H",x],["$W",S],["$M",b],["$y",M],["$D",W]].forEach(function(u){oe[u[1]]=function(n){return this.$g(n,u[0],u[1])}}),p.extend=function(u,n){return u.$i||(u(n,K,p),u.$i=!0),p},p.locale=Z,p.isDayjs=z,p.unix=function(u){return p(1e3*u)},p.en=L[A],p.Ls=L,p.p={},p})})(fe);const i=fe.exports,o="M/DD/YYYY HH:mm",me=[{title:"Doors Open",description:"When you arrive at the building on the morning of HackTJ, you will enter through the main door and check in the lobby. From there, you will be directed to the elevators and your designated floor. Please make sure that ALL team members check in individually! This year, we will be implementing <b>staggered check-ins</b>, so please check your email for time assignments.",time:i("3/4/2023 09:00",o)},{title:"Sponsor Fair",time:i("3/4/2023 09:00",o),end:i("3/4/2023 11:00",o)},{title:"Doors Close",time:i("3/4/2023 11:00",o)},{title:"Opening Ceremony",time:i("3/4/2023 11:00",o),end:i("3/4/2023 11:45",o)},{title:"Hacking Begins",time:i("3/4/2023 11:45",o)},{title:"Team Building",time:i("3/4/2023 11:45",o),end:i("3/4/2023 12:00",o)},{title:"Submit Check-In Form",description:'<b>ONE</b> member from each team will fill out the team <a class="text-blue-500 font-bold" href="https://forms.gle/hUrPFt3J5EHEAUvWA" target="_blank">form</a>, which asks for the names and emails of all team members. Without this form filled, you will not be assigned a room!!! Please fill this form as soon as you can to ensure priority seating. <b>[REMEMBER teams must be 2-4 people, no individual pitches will be heard]</b>',time:i("3/4/2023 12:30",o)},{title:"Resources and Q&A for Beginners @ BLUE",description:"If you are a beginner or don\u2019t know where to start, come ask some HackTJ team members general questions about the hackathon!",time:i("3/4/2023 12:30",o),end:i("3/4/2023 13:00",o)},{title:"Lunch",description:"Potbelly Sandwiches: Italian, Turkey Swiss, Veggie<br />Panera Salads: Seasonal Greens, Greek, Caesar, Caesar with Chicken</li></ul>",time:i("3/4/2023 13:00",o),end:i("3/4/2023 14:00",o)},{title:"Workshop @ RED",subtitle:"WebRTC Wizardry: Mastering Real-Time Video Conferencing from Scratch and Beyond",description:"Participants will be introduced to WebRTC, learning how to create a peer-to-peer video conferencing service and gain knowledge on how to expand and scale it for larger meetings, equipping them with the skills and confidence to build their own WebRTC applications. This workshop is ideal for those interested in real-time communication and building advanced applications.<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)",time:i("3/4/2023 14:00",o),end:i("3/4/2023 15:00",o)},{title:"Workshop @ BLUE",subtitle:"Program on Mobile App Development",description:"Join Children's National Hospital researchers Kevin Cleary and Hadi Fooladi Talari as they cover the relationship mobile app development has to the hospital.",time:i("3/4/2023 14:00",o),end:i("3/4/2023 14:30",o)},{title:"Workshop @ GRAY",subtitle:"The Inner Workings of the Web",description:"Learn about how web servers and clients communicate, how web servers function, and the practical applications of these concepts through a presentation and demo by TJ Computer Security Club.<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)",time:i("3/4/2023 14:30",o),end:i("3/4/2023 15:30",o)},{title:"Workshop @ RED",subtitle:"Powering up your Website with Arduino",description:"Come create a website-based user interface for Arduino projects using Node.js with TJ Assistive Technology Club.<br /><br />Recommended Level: Advanced (many CS classes and comfortable with few languages) with a Basic knowledge of Arduino, HTML, and Javascript<br /><br /><b>Targeted to windows machines (discluding school laptops)</b>",time:i("3/4/2023 15:30",o),end:i("3/4/2023 16:30",o)},{title:"Workshop @ BLUE",subtitle:"Introduction to Competitive Coding",description:"Come to the workshop hosted by TJ\u2019s Intermediate Computing team! Participants would learn about basic ASCL concepts and be introduced to USACO competition programming, as well as gain coding competition opportunities<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)",time:i("3/4/2023 15:30",o),end:i("3/4/2023 16:00",o)},{title:"Workshop @ GRAY",subtitle:"Intro to Quantum Computing",description:"Interested about the fascinating field of Quantum Computing? Join Physaurus to learn about superposition through hands-on activity/game.<br /><br />Recommended Level: Beginner (little to no experience)",time:i("3/4/2023 16:00",o),end:i("3/4/2023 17:00",o)},{title:"Workshop @ BLUE",subtitle:"Resume Building",description:"Join our signature Yext Talk workshop and gain the essential skills to perfect your resume for landing coveted internships in the tech industry and prestigious programs. Our expert instructors will guide you through crafting a compelling resume that showcases your unique strengths and experience, including how to highlight academic achievements, relevant coursework, extracurricular activities, and volunteer work, and insider advice on what tech companies and prestigious programs look for in their interns.<br /><br />Recommended Level: Beginner (little to no experience)",time:i("3/4/2023 16:00",o),end:i("3/4/2023 17:00",o)},{title:"Workshop @ RED",subtitle:"Storyboarding App Drafts in XCode",description:"Learn how to use XCode to create iOS app drafts easily!<br /><br />Recommended Level: Beginner/Intermediate (some to no experience)<br /><br /><b>Participants will need a Mac that can run XCode (Come to the RED room 15 minutes in advance if you haven\u2019t downloaded XCode)</b>",time:i("3/4/2023 17:00",o),end:i("3/4/2023 18:00",o)},{title:"Workshop @ BLUE",subtitle:"How to Pitch your Product",description:"Join TJ Investment Club as they cover the basics of Value Proposition. Learn how to create a pitch that captures your audience and has them hooked. <br /><br />Recommended Level: Beginner (little to no experience)",time:i("3/4/2023 17:00",o),end:i("3/4/2023 18:00",o)},{title:"Workshop @ GRAY",subtitle:"Crash Course on Public Speaking",description:"Come to TJ MUN\u2019s Crash Course on Public Speaking to learn presentation tips and tricks that will WOW your judges!",time:i("3/4/2023 17:30",o),end:i("3/4/2023 18:00",o)},{title:"Workshop @ BLUE",subtitle:"How to Use Design Thinking to make an Impact as a Student",description:"Join the Ingenuity Foundation to learn how YOU can make an Impact.",time:i("3/4/2023 18:00",o),end:i("3/4/2023 18:30",o)},{title:"Workshop @ RED",subtitle:"Game Development",description:"Join Mr. Arulandu for our traditional game development workshop!",time:i("3/4/2023 18:00",o),end:i("3/4/2023 18:30",o)},{title:"Dinner",description:"Noodles & Co.: Pad Thai, Vegetarian Spaghetti, Meat Spaghetti, Wisconsin Mac & Cheese, Korean Spicy Noodles, Pesto Cavatappi",time:i("3/4/2023 19:00",o),end:i("3/4/2023 20:00",o)},{title:"Women in Tech Panel",description:"Come to hear about the experiences, education/career paths, obstacles overcome, advice, and more of women working in technical fields. All student hackers are welcome to attend.",time:i("3/4/2023 20:30",o),end:i("3/4/2023 21:30",o)},{title:"Submit Project Category",description:'You must submit your intended prize categories (MLH and sponsored prizes) and project details (project name and elevator pitch) to <a class="text-blue-500 font-bold" href="https://hacktj2023.devpost.com/" target="_blank">Devpost</a> by 11:30 PM on Saturday March 4th. You do not need to finish the Project Story section, but we encourage you to start it. You might need to add a temporary video URL before submitting, but you can edit your link after you submit on Devpost. You must click \u201CComplete Submission\u201D in order to save the prize categories you\u2019d like to enter, but you can, again, edit your submission after you submit it.',time:i("3/4/2023 23:30",o)},{title:"Ping Pong Tournament",description:"Come play off the stress of submitting your project in our nail-biting singles ping-pong tournament. Spots are limited to 35 people, so make sure to sign up fast!",time:i("3/4/2023 23:45",o)},{title:"Midnight Snack",description:"Pizza!",time:i("3/5/2023 00:00",o)},{title:"Chess Tournament",description:"Join us online for our traditional 1AM Chess Tournament.",time:i("3/5/2023 01:00",o)},{title:"Online Codenames",description:"Bring your computers and find a team to play Codenames!",time:i("3/5/2023 02:00",o)},{title:"Poker Tournament",description:"In-person poker tournament! Come for a chance to win prizes and raffle tickets!",time:i("3/5/2023 03:00",o)},{title:"Breakfast",description:"Einstein Bros. Bagels: Honey, Blueberry, Chocolate Chip, Cinnamon Raisin, Plain, Everything<br /><br />Blueberry Muffins",time:i("3/5/2023 06:30",o),end:i("3/5/2023 08:00",o)},{title:"Hacking Ends",description:'Visit <a class="text-blue-500 font-bold" href="https://hacktj2023.devpost.com/" target="_blank">Devpost</a> to submit your project.<br /><br />You can only opt into one category of: Mobile, Web, and AI/ML, and you will have to choose one of the 5 categories to enter a hack in. Additionally, you will also be prompted to state whether or not that you are a beginner.  You can enter as many sponsor categories as you want.  Judges will nominate you for the HackTJ prizes of best design, social impact, and best overall.<br /><br />Your Devpost submission will require your team to record a three-minute-long video demonstrating your hack, the reasoning or inspiration behind the hack, and how you built it.',time:i("3/5/2023 08:00",o)},{title:"Judging",description:"Judges will be going around each team by room, so make sure to stay in the vicinity of your room and be ready to present during the judging period.<br /><br />If you win: we\u2019re going to choose 3 groups to present for 3 minutes each at the closing ceremony.  You can use slides if you\u2019d like, or you can just talk to us. We will notify you if you are presenting at the ceremony around 30-45 minutes after judging ends.",time:i("3/5/2023 08:30",o),end:i("3/5/2023 11:30",o)},{title:"Closing Ceremony",time:i("3/5/2023 11:30",o),end:i("3/5/2023 12:00",o)},{title:"Hackathon Ends",time:i("3/5/2023 12:00",o)}];function Me(X){let $,w,h,_,g,k,y,x,S,f,b,Y,M,W,O,U;return g=new $e({props:{width:"32px",class:"text-theme-100 hover:text-theme-200"}}),O=new ke({}),{c(){$=B("section"),w=B("div"),h=B("div"),_=B("a"),re(g.$$.fragment),k=te(),y=B("h1"),x=ae("Schedule"),S=te(),f=B("br"),b=te(),Y=B("h2"),M=ae("Coming Soon!"),W=te(),re(O.$$.fragment),this.h()},l(D){$=J(D,"SECTION",{class:!0});var I=V($);w=J(I,"DIV",{class:!0});var F=V(w);h=J(F,"DIV",{class:!0});var H=V(h);_=J(H,"A",{href:!0});var A=V(_);se(g.$$.fragment,A),A.forEach(j),k=ne(H),y=J(H,"H1",{class:!0});var L=V(y);x=ue(L,"Schedule"),L.forEach(j),S=ne(H),f=J(H,"BR",{}),b=ne(H),Y=J(H,"H2",{class:!0});var z=V(Y);M=ue(z,"Coming Soon!"),z.forEach(j),H.forEach(j),F.forEach(j),W=ne(I),se(O.$$.fragment,I),I.forEach(j),this.h()},h(){q(_,"href",we+"/"),q(y,"class","pt-8 md:pt-8 text-5xl font-black text-white"),q(Y,"class","text-2xl font-bold text-theme-100"),q(h,"class","px-8 md:px-12 pt-8 md:pt-12"),q(w,"class","h-full grow flex flex-col"),q($,"class","text-blueberry-200 flex flex-col justify-between min-h-screen")},m(D,I){ye(D,$,I),T($,w),T(w,h),T(h,_),le(g,_,null),T(h,k),T(h,y),T(y,x),T(h,S),T(h,f),T(h,b),T(h,Y),T(Y,M),T($,W),le(O,$,null),U=!0},p:ve,i(D){U||(ce(g.$$.fragment,D),ce(O.$$.fragment,D),U=!0)},o(D){de(g.$$.fragment,D),de(O.$$.fragment,D),U=!1},d(D){D&&j($),he(g),he(O)}}}function Ce(X){const $=[...new Set(me.map(({time:g})=>g.format("M/DD/YYYY")))],w={};$.forEach(g=>{w[g]={};const k=me.filter(({time:f})=>f.format("M/DD/YYYY")===g),y=[...new Set(k.map(({time:f})=>f.hour()))],x=Math.min(...y),S=Math.max(...y);for(let f=x;f<=S;f++){const b=k.filter(({time:M})=>M.hour()===f);let Y=k[0].time.clone().set("hour",f);w[g][f]={columnTime:Y,data:b}}});let h=0,_=Object.keys(w)[h];return Object.values(w[_]),[]}class We extends pe{constructor($){super(),ge(this,$,Ce,Me,be,{})}}export{We as default};
