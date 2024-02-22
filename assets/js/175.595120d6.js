(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{499:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),a("p",[s._v("前提条件：")]),s._v(" "),a("ul",[a("li",[s._v("jdk 1.8+")]),s._v(" "),a("li",[s._v("linux")])]),s._v(" "),a("h3",{attrs:{id:"_1-get-apache-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-apache-rocketmq"}},[s._v("#")]),s._v(" 1. Get Apache RocketMQ")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("download: "),a("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/rocketmq/5.1.3/rocketmq-all-5.1.3-bin-release.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("RocketMQ 5.0+ "),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("code",[s._v("unzip rocketmq-all-5.1.3-bin-release.zip")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("cd rocketmq-all-5.1.3-bin-release")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-start-nameserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-start-nameserver"}},[s._v("#")]),s._v(" 2. Start NameServer")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### start namesrv")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqnamesrv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### verify namesrv ")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Once we see "),a("strong",[s._v("'The Name Server boot success..'")]),s._v(" from namesrv.log, it means the NameServer has been started successfully.")]),s._v(" "),a("h3",{attrs:{id:"_3-start-broker-and-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-broker-and-proxy"}},[s._v("#")]),s._v(" 3. Start Broker and Proxy")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### start broker")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqbroker "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" localhost:9876 --enable-proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### verify broker")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ~/logs/rocketmqlogs/proxy.log \nThe broker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("broker-a,192.169.1.2:10911"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" boot success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Once we see “The broker[brokerName,ip:port] boot success..” from proxy.log, it means the Broker has been started successfully.")]),s._v(" "),a("h3",{attrs:{id:"_4-send-and-receive-messages-with-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-send-and-receive-messages-with-tools"}},[s._v("#")]),s._v(" 4. Send and Receive Messages with tools")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAMESRV_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost:9876\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sendStatus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SEND_OK, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msgId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MessageExt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"华仔谈技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#华仔谈技术"}},[s._v("#")]),s._v(" 华仔谈技术")]),s._v(" "),a("p",[s._v("使用机器 linux")]),s._v(" "),a("p",[s._v("前提 : 安装好JDK")]),s._v(" "),a("p",[s._v("关闭防火墙或开放对应的端口")]),s._v(" "),a("ul",[a("li",[s._v("下载RocketMQ")])]),s._v(" "),a("p",[s._v("https://archive.apache.org/dist/rocketmq/")]),s._v(" "),a("p",[s._v("下载4.9.4为例子：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" rocketmq-all-4.9.4-bin-release.zip \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("查看文件目录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512134635280.png",alt:"image-20230512134635280"}})]),s._v(" "),a("ul",[a("li",[s._v("NameServer")])]),s._v(" "),a("p",[s._v("启动NameServer前，若是在本地测试使用，建议调节下jvm启动参数，因为默认的参数比较大，可能会占用大量的空间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim bin/runserver.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改如下所示的内容:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512134956168.png",alt:"image-20230512134956168"}})]),s._v(" "),a("p",[s._v("可以直接修改为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-server -Xms512m -Xmx512m -Xmn256m -XX:MetaspaceSize=32m -XX:MaxMetaspaceSize=50m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改完后，直接启动server：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("nohup sh bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mqnamesrv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动后，查看对应的日志:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tail -f ~/logs/rocketmqlogs/namesrv.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("成功的日志是这样：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512140134331.png",alt:"image-20230512140134331"}})]),s._v(" "),a("ul",[a("li",[s._v("启动broker")])]),s._v(" "),a("p",[s._v("和上面的方法大概一致，我们也需要修改启动jvm内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim bin/runbroker.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改如下的内容：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512140434514.png",alt:"image-20230512140434514"}})]),s._v(" "),a("p",[s._v("可以直接修改为：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Xms1g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Xm1g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Xmn512m")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来，我们要对broker的配置文件进行配置，就像我们配置kafka的配置文件一样。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("vim conf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("broker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512140858744.png",alt:"image-20230512140858744"}})]),s._v(" "),a("p",[s._v("增加一处配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("namesrvAddr = localhost:9876\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改完成后进行启动：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("nohup sh bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mqbroker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c conf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("broker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动后可以看看启动日志：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tail -f ~/logs/rocketmqlogs/broker.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512150402281.png",alt:"image-20230512150402281"}})]),s._v(" "),a("p",[s._v("启动后怎么查看rocket进程：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jps\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512150853420.png",alt:"image-20230512150853420"}})]),s._v(" "),a("ul",[a("li",[s._v("关闭rocketmq")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mqshutdown broker\nbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mqshutdown namesrv  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可视化界面：下载一个jar包并启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://pan.baidu.com/s/1Yci-Lt5i_fW3plolfG5HNA?pwd=jpr6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用jdk8启动")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("nohup java "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Xms256m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Xmx256m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Drocketmq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("namesrvAddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v(" rocketmq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("console"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ng"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对应的日志存放在：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tail -f ~/logs/consolelogs/rocketmq-console.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512152110624.png",alt:"image-20230512152110624"}})]),s._v(" "),a("p",[s._v("Localhost:8088进入页面")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/undefinedimage-20230512152143928.png",alt:"image-20230512152143928"}})]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://rocketmq.apache.org/docs/quickStart/01quickstart",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);