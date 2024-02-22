(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{624:function(t,n,a){"use strict";a.r(n);var e=a(4),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"目前简历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目前简历"}},[t._v("#")]),t._v(" 目前简历")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 设计搭建了基于"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SAML")]),t._v("协议的公司内部业务系统"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSO")]),t._v("单点登录，结合"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Open")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SAML")]),t._v("工具实现安全的登录和注销，提升系统安全和用户体验。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 负责开发和实现 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OIDC")]),t._v(" 协议，并将公司员工钉钉登录用"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OIDC")]),t._v("的方式接入公司内部 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSO")]),t._v(" 认证系统，提高了系统安全性和用户体验。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 负责公司账户业务系统重构，双写迁移"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoDB")]),t._v("至"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySQL")]),t._v("，提升响应速度、稳定性，无停机迁移。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 对风控累积量平台 "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flash")]),t._v(" 存储结构进行优化。重新设计 "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flash")]),t._v(" 的存储结构和上层实现，解决原来老系统读放大的问题，使缓存 redkv 流量下降 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 分析风控中哪些实体会对已经上线的策略产生影响，并设计上报至公司内部的xray平台，达到在风控中因修改出现问题时能够快速定位操作人、操作类型等。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("ol",[n("li",[t._v("什么是SSO。公司内部为什么会有 sso。什么是SAML SSO，怎么设计的？")])]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://javaguide.cn/system-design/security/sso-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是SSO"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("当时讨论的SAML迁移方案：[SAML迁移](http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230716200259_SAML SSO实现现状与迁移方案.pdf)")])]),t._v(" "),n("li",[n("p",[t._v("其他网站对SAML的解释: "),n("a",{attrs:{href:"https://docs.authing.cn/v2/concepts/saml/saml-overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("authing"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("开发当中有没有遇到什么问题：")])])]),t._v(" "),n("p",[t._v("①创建新的表sp_metadata 。创建新的rpc接口，通过thrift")]),t._v(" "),n("p",[t._v("②协议对比，构造samlResponse，对sp方无感，我们只需要修改idp方。通过预期标签和构造标签进行对比，找出相应的缺失部分（最艰难）")]),t._v(" "),n("p",[t._v("③证书错误login2和login3证书不同")]),t._v(" "),n("p",[t._v("SAML中比较重要的标签")]),t._v(" "),n("p",[t._v("Issuer: idp方唯一标识")]),t._v(" "),n("p",[t._v("Attribute：相关属性")]),t._v(" "),n("p",[t._v("ID: 与request对应的唯一标识")]),t._v(" "),n("p",[t._v("Signature：验签")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("OIDC协议是什么？和SAML有什么区别？为什么来做的OIDC。证书是怎么获得的？单点登录还有哪些协议")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/CKExp/p/16084545.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIDC简介"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.51cto.com/u_13466321/5283267",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIDC与SAML区别"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("钉钉接入OIDC")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://authing.co/blog/445",target:"_blank",rel:"noopener noreferrer"}},[t._v("所有协议"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/bluishglc/article/details/123617558",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎么获取证书"),n("OutboundLink")],1)])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("数据库迁移")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230808123755_%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BB.drawio",target:"_blank",rel:"noopener noreferrer"}},[t._v("drawio图"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("调研:"),n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717131044_sso%E9%87%8D%E6%9E%84%E6%95%B0%E6%8D%AE%E5%B1%82%E5%AE%9E%E7%8E%B0%E7%8E%B0%E7%8A%B6%E8%B0%83%E7%A0%94.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("sso重构数据层实现现状调研"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("方案:"),n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717130754_%E8%BF%81%E7%A7%BB%E6%96%B9%E6%A1%88%E3%80%81%E5%BC%80%E5%8F%91%E6%96%B9%E6%A1%88%E5%A4%8D%E7%9B%98%E6%80%BB%E7%BB%93.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("迁移方案、开发方案.pdf"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("复盘:"),n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717131007_SSO%E9%87%8D%E6%9E%84%E9%A1%B9%E7%9B%AE%E5%A4%8D%E7%9B%98.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSO重构项目复盘"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("①mysql相关表")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717131301_sso%E5%AD%98%E5%82%A8%E8%BF%81%E7%A7%BBMYSQL%E6%96%B9%E6%A1%88.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("表调研"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717115404_%E8%A1%A8%E7%BB%93%E6%9E%84%E5%AE%9A%E4%B9%89.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("表结构"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("表结构制定中遇到了哪些问题？")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("oid问题")])]),t._v(" "),n("li",[n("p",[t._v("mongo中为null的字段，迁移到mysql后应该是什么")])]),t._v(" "),n("li",[n("p",[t._v("由于mongo表无schema限制，mysql表有schema限制，因此部分字段迁到mysql后数据会发生改变：")])])]),t._v(" "),n("p",[t._v("​            a.     字符类型字段，若mongo数据为null，迁移到mysql后变为 空字符串")]),t._v(" "),n("p",[t._v("​            b.     日期类型字段，若mongo数据为null，迁移到mysql后变为 CURRENT_TIMESTAMP（mysql datetime类型字段的默认值）")]),t._v(" "),n("ul",[n("li",[t._v("联合索引问题，oid字段需要单独加唯一索引")])]),t._v(" "),n("p",[t._v("②更改java层代码")]),t._v(" "),n("ul",[n("li",[t._v("如何设计？")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("最小接口")]),t._v("（接口隔离）：")]),t._v(" "),n("p",[t._v("​                ● 接口应该尽量正交")]),t._v(" "),n("p",[n("strong",[t._v("单一职责")]),t._v("：")]),t._v(" "),n("p",[t._v("​                ● 在设计时，接口应该（几乎）完全不与具体的数据库相关。")]),t._v(" "),n("p",[t._v("db 层的重要设计目标之一是屏蔽数据在存储层的差异。")]),t._v(" "),n("p",[t._v("​                ● 在设计以及实现时，单一接口内不允许同时包含读写两种数据库操作。")]),t._v(" "),n("p",[t._v("​                ● 接口的实现应该类似 fp 的纯函数。")]),t._v(" "),n("p",[t._v("写接口的调用不应引起任何除向数据库网络 IO 外的其他副作用，例如 uuid 生成，password 带 salt hash 等。")]),t._v(" "),n("p",[t._v("写接口对同样的入参执行无限次应该永远发出相同的数据库写请求。")]),t._v(" "),n("p",[t._v("​                ● 尽量少或不对入参做修改。")]),t._v(" "),n("p",[t._v("仅包含必要的到存储层数据类型的转换，这一转换也应是抽象的，对上层应该做到不被感知。")]),t._v(" "),n("p",[t._v("​                ● 不应与业务相关，不包含任何业务逻辑。")]),t._v(" "),n("p",[t._v("​                ● 入参的合法性，由调用方保证。")]),t._v(" "),n("p",[t._v("​                ● 异常封装为通用的业务异常。")]),t._v(" "),n("p",[t._v("​                ● 返回的复杂类型使用通用的 DTO。")]),t._v(" "),n("p",[t._v("工程：")]),t._v(" "),n("p",[t._v("​                ● 保持单一写入口，对外不暴露数据库接口，保证数据写入完全可控。")]),t._v(" "),n("p",[t._v("​                ● "),n("strong",[t._v("更新数据时尽量不要使用 upsert，存在并发同步问题")]),t._v("。")])]),t._v(" "),n("p",[t._v("实际上是对比Mongo rep层新增mysql repo层")]),t._v(" "),n("p",[t._v("③dts同步")]),t._v(" "),n("p",[t._v("④增量数据同步")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("Flash平台研发")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717151706_flash%E5%AD%98%E5%82%A8%E4%BC%98%E5%8C%96.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("flash存储优化"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717151738_flash%E9%87%8D%E6%9E%84%E6%96%B9%E6%A1%88%E8%AE%BE%E8%AE%A1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("方案设计"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://other-file-manager.oss-cn-hangzhou.aliyuncs.com/xiaohongshu/20230717151912_%E4%BC%98%E5%8C%96%E7%BB%93%E6%9E%9C.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("结果"),n("OutboundLink")],1)]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("本质是日志的处理")])]),t._v(" "),n("p",[t._v("开发同一的xray调度接口，供业务方使用")]),t._v(" "),n("ul",[n("li",[t._v("项目中有什么收获（技术、非技术）")]),t._v(" "),n("li",[t._v("为什么想要接触更大的挑战（责任==挑战），b与c的区别")]),t._v(" "),n("li")])])}),[],!1,null,null,null);n.default=r.exports}}]);