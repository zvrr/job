webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(88);var r=t(15)(t(48),t(99),"data-v-647e008b",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(15)(t(49),t(97),"data-v-35c047fd",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(15)(t(46),t(96),"data-v-22ce9519",null);n.exports=r.exports},44:function(n,e,t){t(87);var r=t(15)(t(47),t(98),"data-v-53c8d54c",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是珍爱网平台技术部小猎手，\n* 我来找些攻城狮！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，开始团队和职位介绍 */\n\n\n","\n/* 这个介绍好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"平台产品部\n====\n\n\n坐标：深圳市南山区航天科技广场A座20楼\n\n团队：珍爱网平台验技术部，一只致力成为最专业有爱的团队。\n\n致力于连接线上和线下，打造高满意用户相亲恋爱体验服务，解决广大单身男女婚恋困扰，成就天下姻缘。\n\n负责公司核心系统，高可用高性能架构研发工作，提供1.4亿会员的全链路生命周期管理系统，\n\n以连接和智能两大核心产品设计为理念，基于分布式微服务理念构建，实践混合云、持续集成、自动化测试等系列创新，\n\n提供简单好用的核心系统，支撑公司20亿+收入，\n\n承载基础信息、资源分配、心理测试、匹配搜索、实时推荐、短信通道、语音识别、图片、视频分析等基础服务。\n\n\n高级JAVA研发工程\n====\n\n岗位描述\n----\n1. 负责珍爱网核心系统相关产品研发\n2. 负责Linux下高可用分布式Java服务设计开发和数据库优化\n3. 负责重大或疑难问题的技术攻关\n4. 参与平台微服务化架构设计\n\n岗位要求\n----\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；\n3. 熟练使用主流开发框架，如Spring cloud,dubbo, 消息队列等；\n4. 熟悉shell脚本，有awk等使用经验；\n5. 精通Mysql相关知识，有数据库调优经验者优先；\n6. 有大数据服务开发经验，能够处理高并发服务者优先；\n7. 熟悉公有云环境和相关组件服务；\n7. 熟悉网络、多线程、IO、内存管理等方面编程；\n8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。\n\n高级Android研发工程\n====\n\n岗位描述\n----\n1. 负责珍爱网核心系统相关产品安卓版研发\n2. 负责Android新技术的预研、引入，底层框架设计，基本组件研发、工具研发；\n3. 负责重大或疑难问题的技术攻关\n\n岗位要求\n----\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年及以上Android软件开发经验，熟悉Android平台SDK以及框架原理，并具有开发SDK的能力，精通性能调优方法;\n3. 具备解决复杂业务技术问题的能力，有多个完整的Android项目经验，并至少在一个大型项目中承担核心设计与开发工作;\n4. 具备音视频项目经验或一线App项目研发经验者优先；\n5. 精通Mysql相关知识，有数据库调优经验者优先；\n6. 熟悉网络、多线程、IO、内存管理等方面编程；\n7. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。\n\n联系方式\n====\n\n* [Boss直聘珍爱网平台技术部](https://m.zhipin.com/weijd/v2/boss/d86daeaa870e28d31HJ53N-_E1Y~?aid=07b5df7e131fbe2e1w~~&sid=self)\n* 邮箱：goborabora@qq.com\n* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)\n\n* 感谢[南方](http://www.sitexa.org/anires/public/)创意支持\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是珍爱网平台技术部小猎手，\n* 我来找些攻城狮！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，开始团队和职位介绍 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"平台产品部\n====\n\n坐标：深圳南山区航天科技广场A座20楼\n\n团队：珍爱网平台验技术部，一直致力成为最专业有爱的团队。\n\n致力于连接线上和线下，打造高满意用户相亲恋爱体验服务，解决广大单身男女婚恋困扰，成就天下姻缘。\n\n负责公司核心系统，高可用高性能架构研发工作，提供1.4亿会员的全链路生命周期管理系统，\n\n以连接和智能两大核心产品设计为理念，基于分布式微服务理念构建，实践混合云、敏捷开发、持续集成、自动化测试等系列创新，\n\n对外提供简单好用的服务，承载日均20亿基础信息请求、输出资源分配、实时推荐、短信通道等基础服务。\n\n[Boss直聘](https://m.zhipin.com/weijd/v2/boss/d86daeaa870e28d31HJ53N-_E1Y~?aid=07b5df7e131fbe2e1w~~&sid=self)\n\n高级JAVA研发工程\n====\n\n岗位描述\n----\n1. 负责珍爱网核心系统相关产品研发\n2. 负责Linux下高可用分布式Java服务设计开发和数据库优化\n3. 能够承担项目技术攻坚项目\n4. 参与平台微服务化架构设计\n\n岗位要求\n----\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年或以上JAVA开发经验，熟悉MVC架构和UML建模语言等相关技术；\n3. 熟练使用主流开发框架，如Spring cloud,dubbo, 消息队列等；\n4. 熟悉shell脚本，有awk等使用经验；\n5. 精通Mysql相关知识，有数据库调优经验者优先；\n6. 有大数据服务开发经验，能够处理高并发服务者优先；\n7. 熟悉公有云环境和相关组件服务；\n7. 熟悉网络、多线程、IO、内存管理等方面编程；\n8. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。。\n\n高级Android研发工程\n====\n\n岗位描述\n----\n1. 负责珍爱网核心系统相关产品安卓版研发\n2. 负责Android新技术的预研、引入，底层框架设计，基本组件研发、工具研发；\n3. 负责重大或疑难问题的技术攻关\n\n岗位要求\n----\n1. 本科以上学历，计算机相关专业，具有互联网项目开发经验；\n2. 3年及以上Android软件开发经验，熟悉Android平台SDK以及框架原理，并具有开发SDK的能力，精通性能调优方法;\n3. 具备解决复杂业务技术问题的能力，有多个完整的Android项目经验，并至少在一个大型项目中承担核心设计与开发工作;\n4. 具备音视频项目经验或一线App项目研发经验者优先；\n5. 精通Mysql相关知识，有数据库调优经验者优先；\n6. 熟悉网络、多线程、IO、内存管理等方面编程；\n7. 良好的学习和沟通能力，责任心强，能够独立并有效解决问题。\n\n联系方式\n====\n\n* [Boss直聘珍爱网平台技术部](https://m.zhipin.com/weijd/v2/boss/d86daeaa870e28d31HJ53N-_E1Y~?aid=07b5df7e131fbe2e1w~~&sid=self)\n* 邮箱：goborabora@qq.com\n* ![微信](https://raw.githubusercontent.com/zvrr/anires/master/static/WechatIMG5.png)\n\n* 感谢[南方](http://www.sitexa.org/anires/public/)创意支持\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},97:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},98:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},99:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.8060cebe8ed4e99587d7.js.map