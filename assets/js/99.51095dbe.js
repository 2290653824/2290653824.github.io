(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{424:function(a,s,t){"use strict";t.r(s);var n=t(4),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),s("p",[a._v("在 MySQL 数据库，变量分为系统变量和用户自定义变量。系统变量以 @@ 开头，用户自定义变量以 @ 开头。")]),a._v(" "),s("p",[a._v("服务器维护着两种系统变量，即全局变量（GLOBAL VARIABLES）和会话变量（SESSION VARIABLES）。全局变量影响 MySQL 服务的整体运行方式，会话变量影响具体客户端连接的操作。")]),a._v(" "),s("p",[a._v("每一个客户端成功连接服务器后，都会产生与之对应的会话。会话期间，MySQL 服务实例会在服务器内存中生成与该会话对应的会话变量，这些会话变量的初始值是全局变量值的拷贝。")]),a._v(" "),s("h2",{attrs:{id:"常用的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的命令"}},[a._v("#")]),a._v(" 常用的命令")]),a._v(" "),s("h3",{attrs:{id:"查看系统变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看系统变量"}},[a._v("#")]),a._v(" 查看系统变量")]),a._v(" "),s("ul",[s("li",[a._v("查看所有的全局变量的信息")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GLOBAL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("查看当前的会话信息 SESSION 关键字可以省略。")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SESSION")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("MySQL 中的系统变量以两个“@”开头。")]),a._v(" "),s("ul",[s("li",[a._v("@@global 仅仅用于标记全局变量；")]),a._v(" "),s("li",[a._v("@@session 仅仅用于标记会话变量；")]),a._v(" "),s("li",[a._v("@@ 首先标记会话变量，如果会话变量不存在，则标记全局变量。")])]),a._v(" "),s("p",[a._v("MySQL 中有一些系统变量仅仅是全局变量，例如 innodb_data_file_path，可以使用以下 3 种方法查看：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW GLOBAL VARIABLES LIKE 'innodb_data_file_path';\nSHOW SESSION VARIABLES LIKE 'innodb_data_file_path';\nSHOW VARIABLES LIKE 'innodb_data_file_path';\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("MySQL 中有一些系统变量仅仅是会话变量，例如 MySQL 连接 ID 会话变量 pseudo_thread_id，可以使用以下 2 种方法查看。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SESSION")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LIKE")]),a._v(" 'pseudo_thread_id'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LIKE")]),a._v(" 'pseudo_thread_id'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("MySQL 中有一些系统变量既是全局变量，又是会话变量，例如系统变量 character_set_client 既是全局变量，又是会话变量。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SESSION")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LIKE")]),a._v(" 'character_set_client'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LIKE")]),a._v(" 'character_set_client'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("此时查看全局变量的方法如下：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GLOBAL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VARIABLES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LIKE")]),a._v(" 'character_set_client'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"设置系统变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置系统变量"}},[a._v("#")]),a._v(" 设置系统变量")]),a._v(" "),s("p",[a._v("可以通过以下方法设置系统变量：")]),a._v(" "),s("ol",[s("li",[a._v("修改 MySQL 源代码，然后对 MySQL 源代码重新编译（该方法适用于 MySQL 高级用户，这里不做阐述）。")]),a._v(" "),s("li",[a._v("在 MySQL 配置文件（mysql.ini 或 mysql.cnf）中修改 MySQL 系统变量的值（需要重启 MySQL 服务才会生效）。")]),a._v(" "),s("li",[a._v("在 MySQL 服务运行期间，使用 SET 命令重新设置系统变量的值。")])]),a._v(" "),s("p",[a._v("服务器启动时，会将所有的全局变量赋予默认值。这些默认值可以在选项文件中或在命令行中对执行的选项进行更改。")]),a._v(" "),s("p",[a._v("更改全局变量，必须具有 SUPER 权限。设置全局变量的值的方法如下：")]),a._v(" "),s("ul",[s("li",[a._v("SET @@global.innodb_file_per_table=default;")]),a._v(" "),s("li",[a._v("SET @@global.innodb_file_per_table=ON;")]),a._v(" "),s("li",[a._v("SET global innodb_file_per_table=ON;")])]),a._v(" "),s("p",[a._v("需要注意的是，更改全局变量只影响更改后连接客户端的相应会话变量，而不会影响目前已经连接的客户端的会话变量（即使客户端执行 SET GLOBAL 语句也不影响）。也就是说，对于修改全局变量之前连接的客户端只有在客户端重新连接后，才会影响到客户端。")]),a._v(" "),s("p",[a._v("客户端连接时，当前全局变量的值会对客户端的会话变量进行相应初始化。设置会话变量不需要特殊权限，但客户端只能更改自己的会话变量，而不能更改其它客户端的会话变量。设置会话变量的值的方法如下：")]),a._v(" "),s("ul",[s("li",[a._v("SET @@session.pseudo_thread_id=5;")]),a._v(" "),s("li",[a._v("SET session pseudo_thread_id=5;")]),a._v(" "),s("li",[a._v("SET @@pseudo_thread_id=5;")]),a._v(" "),s("li",[a._v("SET pseudo_thread_id = 5;")])]),a._v(" "),s("p",[a._v("如果没有指定修改全局变量还是会话变量，服务器会当作会话变量来处理。比如：")]),a._v(" "),s("p",[a._v("SET @@sort_buffer_size = 50000;")]),a._v(" "),s("p",[a._v("上面语句没有指定是 GLOBAL 还是 SESSION，服务器会当做 SESSION 处理。")]),a._v(" "),s("p",[a._v("使用 SET 设置全局变量或会话变量成功后，如果 MySQL 服务重启，数据库的配置就又会重新初始化。一切按照配置文件进行初始化，全局变量和会话变量的配置都会失效。")]),a._v(" "),s("p",[a._v("MySQL 中还有一些特殊的全局变量，如 log_bin、tmpdir、version、datadir，在 MySQL 服务实例运行期间它们的值不能动态修改，也就是不能使用 SET 命令进行重新设置，这种变量称为静态变量。数据库管理员可以使用前面提到的修改源代码或更改配置文件来重新设置静态变量的值。")])])}),[],!1,null,null,null);s.default=e.exports}}]);