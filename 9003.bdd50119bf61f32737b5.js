"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9003],{9003:function(a,e,t){t.r(e),t(7378);var n=t(2682);function s(){return(s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}function o({components:a,...e}){return(0,n.kt)("wrapper",s({components:a},e),(0,n.kt)("p",null,"엔트리 객체는 webpack이 번들 빌드를 시작하는 곳입니다. 컨텍스트는 엔트리 파일을 포함하는 디렉터리에 대한 절대 경로입니다."),(0,n.kt)("h2",{id:"context"},"context",(0,n.kt)("a",{href:"#context","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"설정에서 엔트리 포인트와 로더를 확인하기 위한 ",(0,n.kt)("strong",{parentName:"p"},"절대 경로의")," 기본 디렉터리."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'path'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  context",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'app'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"기본적으로 현재 디렉터리가 사용되지만, 설정에 값을 전달하는 것이 좋습니다. 이렇게 하면 CWD(현재 작업 디렉터리)와 독립적인 설정이 가능합니다."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"entry"},"entry",(0,n.kt)("a",{href:"#entry","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")," ",(0,n.kt)("inlineCode",{parentName:"p"},"[string]")," ",(0,n.kt)("inlineCode",{parentName:"p"},"object = { <key> string | [string] | object = { import string | [string], dependOn string | [string], filename string, layer string }}")," ",(0,n.kt)("inlineCode",{parentName:"p"},"(function() => string | [string] | object = { <key> string | [string] } | object = { import string | [string], dependOn string | [string], filename string })")),(0,n.kt)("p",null,"애플리케이션 번들 처리를 시작할 지점입니다. 배열이 전달되면 배열의 모든 항목이 처리됩니다."),(0,n.kt)("p",null,"동적으로 로드된 모듈은 엔트리 포인트가 ",(0,n.kt)("strong",{parentName:"p"},"아닙니다.")),(0,n.kt)("p",null,"간단한 규칙: HTML 페이지 당 하나의 엔트리 포인트. SPA: 하나의 엔트리 포인트, MPA: 다중 엔트리 포인트."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    home",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./home.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    about",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./about.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    contact",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./contact.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h3",{id:"naming"},"Naming",(0,n.kt)("a",{href:"#naming","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"문자열 또는 문자열 배열이 전달되면, 청크 이름은 ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),"입니다. 객체가 전달되면, 객체의 키는 청크의 이름이 되고, 객체의 값은 청크의 엔트리 포인트를 설명합니다."),(0,n.kt)("h3",{id:"entry-descriptor"},"Entry descriptor",(0,n.kt)("a",{href:"#entry-descriptor","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"객체가 전달되면 객체의 값은 문자열, 문자열 배열 또는 디스크립터가 될 수 있습니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    home",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./home.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    shared",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'react'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-dom'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'redux'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-redux'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    catalog",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./catalog.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'pages/catalog.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'shared'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    personal",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./personal.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'pages/personal.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'shared'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      chunkLoading",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'jsonp'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      layer",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'name of layer'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// 엔트리 포인트에 대한 레이어 설정"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"디스크립터를 사용하여 추가 옵션을 엔트리 포인트에 전달할 수 있습니다."),(0,n.kt)("h3",{id:"output-filename"},"Output filename",(0,n.kt)("a",{href:"#output-filename","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"기본적으로, 엔트리 청크의 출력 파일 이름은 ",(0,n.kt)("a",{href:"/configuration/output/#outputfilename",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"output.filename")),"에서 추출되지만, 특정 엔트리에 대한 커스텀 출력 파일 이름을 지정할 수 있습니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    home",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./contact.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'pages/[name][ext]'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    about",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./about.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'pages/[name][ext]'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"여기의 디스크립터는 특정 엔트리 포인트에 ",(0,n.kt)("inlineCode",{parentName:"p"},"filename")," 옵션을 전달하는 데 사용되었습니다."),(0,n.kt)("h3",{id:"dependencies"},"Dependencies",(0,n.kt)("a",{href:"#dependencies","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"기본적으로, 모든 엔트리 청크는 사용하는 모든 모듈을 저장합니다. ",(0,n.kt)("inlineCode",{parentName:"p"},"dependOn")," 옵션을 사용하면 한 엔트리 청크에서 다른 엔트리 청크로 모듈을 공유할 수 있습니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-vendors'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-vendors'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'react'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-dom'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'prop-types'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"app")," 청크에는 ",(0,n.kt)("inlineCode",{parentName:"p"},"react-vendors"),"에 있는 모듈이 포함되지 않습니다."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dependOn")," 옵션은 문자열 배열을 허용합니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    moment",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'moment-mini'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," runtime",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'runtime'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    reactvendors",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'react'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-dom'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," runtime",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'runtime'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    testapp",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./wwwroot/component/TestApp.tsx'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'reactvendors'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'moment'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"또한, 배열을 사용해서 하나의 엔트리에 여러 개의 파일을 지정할 수 있습니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./app2.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-vendors'")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-vendors'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'react'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'react-dom'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'prop-types'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h3",{id:"dynamic-entry"},"Dynamic entry",(0,n.kt)("a",{href:"#dynamic-entry","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"함수가 전달되면 모든 ",(0,n.kt)("a",{href:"/api/compiler-hooks/#make",parentName:"p"},"make")," 이벤트에서 호출됩니다."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"make 이벤트는 webpack이 시작될 때와 ",(0,n.kt)("a",{href:"/configuration/watch/",parentName:"p"},"파일 변경을 감시")," 할 때 모든 유효하지 않은 상황에서 호출됩니다.")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  ",(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"entry"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./demo'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"또는"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  ",(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"entry"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"Promise"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./demo'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./demo2'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"예: 외부 소스(원격 서버, 파일 시스템 콘텐츠 또는 데이터베이스)에서 실제 엔트리를 가져오기 위해 동적 엔트리를 사용할 수 있습니다."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token function",parentName:"code"},"entry"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"fetchPathsFromSomeExternalSource"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// returns a promise that will be resolved with something like ['src/main-layout.js', 'src/admin-layout.js']"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("a",{href:"/configuration/output/#outputlibrary",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"output.library"))," 옵션과 결합하는 경우, 배열이 전달되면 마지막 항목만 내보냅니다."))}o.isMDXComponent=!0,e.default=o}}]);