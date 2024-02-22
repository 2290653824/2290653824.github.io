(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{513:function(t,e,r){"use strict";r.r(e);var _=r(4),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"什么是桥接模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是桥接模式"}},[t._v("#")]),t._v(" 什么是桥接模式")]),t._v(" "),e("ul",[e("li",[t._v("官方定义")])]),t._v(" "),e("p",[t._v("​\t桥接（Bridge）是用于把"),e("strong",[t._v("抽象化与实现化解耦")]),t._v("，使得二者可以独立变化。这种类型的设计模式属于结构型模式，它通过提供抽象化和实现化之间的桥接结构，来实现二者的解耦。将抽象和实现解耦，让它们可以独立变化。")]),t._v(" "),e("p",[t._v("这里我们需要注意关键字：抽象化与实现化解耦。这里的抽象化并不是指抽象类或者接口，而是指的业务中的抽象；实现化也不是指接口的实现，而是指的业务中的实现。")]),t._v(" "),e("p",[t._v("具体分析：")]),t._v(" "),e("p",[t._v("​\t理解桥接模式，重点需要理解如何将抽象化(Abstraction)与实现化(Implementation)脱耦，使得二者可以独立地变化。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("抽象化：抽象化就是忽略一些信息，把不同的实体当作同样的实体对待。在面向对象中，将对象的共同性质抽取出来形成类的过程即为抽象化的过程。")])]),t._v(" "),e("li",[e("p",[t._v("实现化：针对抽象化给出的具体实现，就是实现化，抽象化与实现化是一对互逆的概念，实现化产生的对象比抽象化更具体，是对抽象化事物的进一步具体化的产物。")])])]),t._v(" "),e("p",[t._v("脱耦：脱耦就是将抽象化和实现化之间的耦合解脱开，或者说是将它们之间的"),e("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%BC%BA%E5%85%B3%E8%81%94&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2498600056%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("强关联"),e("OutboundLink")],1),t._v("改换成弱关联，将两个角色之间的继承关系改为关联关系。桥接模式中的所谓脱耦，就是指在一个软件系统的抽象化和实现化之间使用关联关系（组合或者聚合）而不是继承，从而使两者可以相对独立地变化，这就是桥接模式的用意。")]),t._v(" "),e("p",[t._v("也可理解成：“一个类存在两个（或多个）独立变化的维度，通过组合，让这两个（或多个）维度可独立进行扩展。”组合替代继承，就能避免继承层次的指数级爆炸，即“组合优于继承”设计原则。")]),t._v(" "),e("h2",{attrs:{id:"uml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231001122134978.png",alt:"image-20231001122134978"}})]),t._v(" "),e("p",[e("code",[t._v("Abstraction")]),t._v("： 定义抽象类的接口,维护一个指向Implementor类型对象的指针,将Client的请求转发给它的Implementor.RefinedAbstraction扩充由Abstraction定义的接口.定义了基于基本操作的较高层次的操作")]),t._v(" "),e("p",[e("code",[t._v("RefinedAbstraction")]),t._v("： 扩充由Abstraction定义的接口而得的  "),e("a",{attrs:{href:"https://www.zhihu.com/search?q=%E6%8A%BD%E8%B1%A1%E7%B1%BB&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2498600056%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象类"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("Implementor")]),t._v("： 定义实现类的接口.仅提供基本操作")]),t._v(" "),e("p",[e("code",[t._v("ConcreteImplementor")]),t._v("：实现Implementor接口并定义它的具体实现")]),t._v(" "),e("p",[e("strong",[t._v("核心是：抽象化与实现化分离，组合代替继承")])]),t._v(" "),e("h2",{attrs:{id:"具体demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体demo"}},[t._v("#")]),t._v(" 具体demo")]),t._v(" "),e("p",[t._v("​\t假如现在有一个几何 "),e("code",[t._v("形状")]),t._v("Shape类， 从它能扩展出两个子类：  "),e("code",[t._v("圆形")]),t._v("Circle和 "),e("code",[t._v("方形")]),t._v("Square 。 你希望对这样的类层次结构进行扩展以使其包含颜色， 所以你打算创建名为 "),e("code",[t._v("红色")]),t._v("Red和 "),e("code",[t._v("蓝色")]),t._v("Blue的形状子类。 但是， 由于你已有两个子类， 所以总共需要创建四个类才能覆盖所有组合， 例如 "),e("code",[t._v("蓝色圆形")]),t._v("Blue­Circle和 "),e("code",[t._v("红色方形")]),t._v("Red­Square 。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231001123321993.png",alt:"image-20231001123321993"}})]),t._v(" "),e("p",[t._v("或是")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231001123742579.png",alt:"image-20231001123742579"}})]),t._v(" "),e("p",[t._v("这样使用继承来扩展的结果，就是让所有的实现类的数量将以集合级数的增长。")]),t._v(" "),e("p",[t._v("怎么解决呢？")]),t._v(" "),e("p",[t._v("问题的根本原因是我们试图在两个独立的维度——形状与颜色——上扩展形状类。 这在处理类继承时是很常见的问题。")]),t._v(" "),e("p",[t._v("桥接模式通过将继承改为组合的方式来解决这个问题。 具体来说， 就是抽取其中一个维度并使之成为独立的类层次， 这样就可以在初始类中引用这个新层次的对象， 从而使得一个类不必拥有所有的状态和行为。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/solution-zh.png",alt:"桥接模式的解决方案"}})]),t._v(" "),e("p",[t._v("将一个类层次转化为多个相关的类层次， 避免单个类层次的失控。")]),t._v(" "),e("p",[t._v("根据该方法， 我们可以将颜色相关的代码抽取到拥有 "),e("code",[t._v("红色")]),t._v("和 "),e("code",[t._v("蓝色")]),t._v("两个子类的颜色类中， 然后在 "),e("code",[t._v("形状")]),t._v("类中添加一个指向某一颜色对象的引用成员变量。 现在， 形状类可以将所有与颜色相关的工作委派给连入的颜色对象。 这样的引用就成为了 "),e("code",[t._v("形状")]),t._v("和 "),e("code",[t._v("颜色")]),t._v("之间的桥梁。 此后， 新增颜色将不再需要修改形状的类层次， 反之亦然。")]),t._v(" "),e("h2",{attrs:{id:"源码中的桥接模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码中的桥接模式"}},[t._v("#")]),t._v(" 源码中的桥接模式")]),t._v(" "),e("p",[t._v("JDBC 中的设计模式就用到了桥接模式")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6caa6fb34a624153ae411602979a2b38~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:"file"}})]),t._v(" "),e("p",[t._v("那在JDBC的设计中，什么是“抽象”，什么是“实现”呢？JDBC抽象出来的那套API就是抽象，不同数据库服务商实现的Driver就是实现。所以桥接模式中的抽象并不是指一个接口，它可能是设计出来的一套跟数据库操作相关的API。而具体的实现也不是一个接口，也可能是一套API，就像Driver中的connect，execute等方法。最后抽象和实现彻底分开，以组合这种弱关联的方式让两者相互合作，增强灵活性，避免继承层次的指数级爆炸。其实调用到最后，DriverManager都是委托具体的Driver干活的（connect，execute）")]),t._v(" "),e("h2",{attrs:{id:"桥接模式和策略模式区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式和策略模式区别"}},[t._v("#")]),t._v(" 桥接模式和策略模式区别")]),t._v(" "),e("p",[t._v("桥接模式")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/qftkl5sb4j.jpeg",alt:"img"}})]),t._v(" "),e("p",[t._v("策略模式")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/v9yqzfws78.jpeg",alt:"img"}})]),t._v(" "),e("p",[e("strong",[t._v("形式上的不同")])]),t._v(" "),e("p",[t._v("两者还是有一定区别的，对比两幅结构图，我们可以发现，在桥接模式中不仅Implementor具有变化 （ConcreateImplementior），而且Abstraction也可以发生变化（RefinedAbstraction），而且两者的变化 是完全独立的，RefinedAbstraction与ConcreateImplementior之间松散耦合，它们仅仅通过Abstraction与 Implementor之间的关系联系起来。而在策略模式中，并不考虑Context的变化，只有算法的可替代性。")]),t._v(" "),e("p",[e("strong",[t._v("语意上的不同")])]),t._v(" "),e("p",[t._v("桥接模式强调Implementor接口仅提供基本操作，而Abstraction则基于这些基本操作定义更高层次的操作。而策略模式强调 Strategy抽象接口的提供的是一种算法，一般是无状态、无数据的，而Context则简单调用这些算法完成其操作。")]),t._v(" "),e("p",[t._v("策略模式，桥接模式要表达的内容要更多，结构也更加复杂。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("https://cloud.tencent.com/developer/article/1431446")]),t._v(" "),e("p",[t._v("https://juejin.cn/post/7066448550506266661")]),t._v(" "),e("p",[t._v("https://cloud.tencent.com/developer/article/1817106")]),t._v(" "),e("p",[t._v("https://www.modb.pro/db/151037")]),t._v(" "),e("p",[t._v("https://www.zhihu.com/question/67735508")]),t._v(" "),e("p",[t._v("https://refactoringguru.cn/design-patterns/bridge")])])}),[],!1,null,null,null);e.default=v.exports}}]);