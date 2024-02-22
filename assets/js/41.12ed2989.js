(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{396:function(t,e,a){"use strict";a.r(e);var r=a(4),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("为什么有这篇文章")]),t._v(" "),e("blockquote",[e("p",[t._v("垃圾回收器中的重点垃圾回收器。在jdk 1.8 存在的垃圾回收器中，性能有优势的垃圾回收器就是G1垃圾回收器\n面试重灾区。一般在面试中，如果问到了JVM，G1是一个常考的考点，包括其介绍、原理等。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231014182434008.png",alt:"image-20231014182434008"}})]),t._v(" "),e("h2",{attrs:{id:"一-什么是g1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是g1"}},[t._v("#")]),t._v(" 一. 什么是G1")]),t._v(" "),e("p",[t._v("①. G1(Garbage-First)是一款面向服务端应用的垃圾收集器,主要针对配备多核CPU及大容量内存的机器,"),e("strong",[t._v("以极高概率满足GC停顿时间的同时")]),t._v(",还"),e("strong",[t._v("兼具高吞吐量的性能特征")])]),t._v(" "),e("p",[t._v("②. 在JDK1.7版本正式启用,是"),e("strong",[t._v("JDK 9以后的默认垃圾收集器,取代了CMS 回收器")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"garbage-first的由来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#garbage-first的由来"}},[t._v("#")]),t._v(" Garbage First的由来")]),t._v(" "),e("p",[t._v("①. G1是一个并行回收器,它"),e("strong",[t._v("把堆内存分割为很多不相关的区域(region物理上不连续),把堆分为2048个区域")]),t._v(",每一个region的大小是1 - 32M不等,必须是"),e("strong",[t._v("2的整数次幂")]),t._v("。使用不同的region可以来表示Eden、幸存者0区、幸存者1区、老年代等\n②. 每次根据允许的收集时间,"),e("strong",[t._v("优先回收价值最大的Region")]),t._v("\n(每次回收完以后都有一个空闲的region,在后台维护一个优先列表)\n③. 由于这种方式的侧重点在于回收垃圾最大量的区间(Region),所以我们给G1一个名字:"),e("strong",[t._v("垃圾优先(Garbage First)")]),t._v("\n④. 下面说一个问题:"),e("strong",[t._v("既然我们已经有了前面几个强大的GC,为什么还要发布Garbage First(G1)GC？")]),t._v(" "),e("strong",[t._v('官方给G1设定的目标是在延迟可控的情况下获得尽可能高的吞吐量,所以才担当起"全功能收集器"的重任与期望。')])]),t._v(" "),e("h3",{attrs:{id:"使用垃圾回收器的常见步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用垃圾回收器的常见步骤"}},[t._v("#")]),t._v(" "),e("strong",[t._v("使用垃圾回收器的常见步骤")])]),t._v(" "),e("p",[t._v("G1的一个设计原则就是简化jvm的性能调优，开发人员最开始只需要简单的三步既可以完成调优\n第一步：开启G1垃圾回收器\n第二步：设置堆的最大内存\n第三部：设置最大的停顿时间")]),t._v(" "),e("h3",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景：")]),t._v(" "),e("ul",[e("li",[t._v("面向服务端应用，针对具有大内存、多处理器的机器。(在普通大小的堆里表现并不惊喜)最主要的应用是需要低GC延迟，并具有大堆的应用程序提供解决方案;如:在堆大小约6GB或更大时，可预测的暂停时间可以低于e.5秒: (G1通过每次只清理一部分而不是全部的Region的增量式清理来保证每次GC停顿时间不会过长)。")]),t._v(" "),e("li",[t._v("用来替换掉JDK1.5中的CMS收集器;在下面的情况时，使用G1可能比CMS好:")])]),t._v(" "),e("p",[t._v("①超过59%的Java堆被活动数据占用;\n②对象分配频率或年代提升频率变化很大\n③gc停顿时间过长(长于.5至1秒)。\nHotspot 垃圾收集器里，除了G1以外，其他的垃圾收集器使用内置的JVM线程执行GC的多线程操作，而G1 GC可以采用应用线程承担后台运行的GC工作，即当JVM的GC线程处理速度慢时，系统会调用应用程序线程帮助加速垃圾回收过程。")]),t._v(" "),e("h2",{attrs:{id:"二-重点概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-重点概念"}},[t._v("#")]),t._v(" 二. 重点概念")]),t._v(" "),e("h3",{attrs:{id:"_2-分区概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-分区概念"}},[t._v("#")]),t._v(" 2.分区概念")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231014182449626.png",alt:"image-20231014182449626"}})]),t._v(" "),e("h4",{attrs:{id:"_2-1-分区region"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-分区region"}},[t._v("#")]),t._v(" 2.1 分区region")]),t._v(" "),e("p",[t._v("G1采用了分区(Region)的思路，将整个堆空间分成若干个大小相等的内存区域，每次分配对象空间将逐段地使用内存。因此，在堆的使用上，G1并不要求对象的存储一定是物理上连续的，只要逻辑上连续即可；每个分区也不会确定地为某个代服务，可以按需在年轻代和老年代之间切换。启动时可以通过参数-XX:G1HeapRegionSize=n可指定分区大小(1MB~32MB，且必须是2的幂)，默认将整堆划分为2048个分区。")]),t._v(" "),e("h4",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231014182502605.png",alt:"image-20231014182502605"}})]),t._v(" "),e("ul",[e("li",[t._v("再次划分H区的原因是什么。")])]),t._v(" "),e("p",[t._v("对于堆中的大对象，默认直接会被分配到老年代，但是如果它是一个短期存在的大对象就会对垃圾收集器造成负面影响。为了解决这个问题，G1划分了一个Humongous区，它用来专门存放大对象。如果一个H区装不下一个大对象，那么G1会寻找连续的H区来家开存储。为了能找到连续的H区，有时候不得不启动Full GC。G1的大多数行为都把H区作为老年代的一部分来看待")]),t._v(" "),e("h4",{attrs:{id:"_2-2-卡片card"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-卡片card"}},[t._v("#")]),t._v(" 2.2 卡片card")]),t._v(" "),e("p",[t._v("在每个分区内部又被分成了若干个大小为512 Byte卡片(Card)，标识堆内存最小可用粒度。所有分区的卡片将会记录在全局卡片表(Global Card Table)中，分配的对象会占用物理上连续的若干个卡片，当查找对分区内对象的引用时便可通过记录卡片来查找该引用对象(见RSet)。每次对内存的回收，都是对指定分区的卡片进行处理。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1824884",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/developer/article/1824884"),e("OutboundLink")],1),t._v(" 待考察真实性")]),t._v(" "),e("h4",{attrs:{id:"_2-3-堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-堆"}},[t._v("#")]),t._v(" 2.3 堆")]),t._v(" "),e("p",[t._v("G1同样可以通过-Xms/-Xmx来指定堆空间大小。当发生年轻代收集或混合收集时，通过计算GC与应用的耗费时间比，自动调整堆空间大小。如果GC频率太高，则通过增加堆尺寸，来减少GC频率，相应地GC占用的时间也随之降低；目标参数-XX:GCTimeRatio即为GC与应用的耗费时间比，G1默认为9，而CMS默认为99，因为CMS的设计原则是耗费在GC上的时间尽可能的少。另外，当空间不足，如对象空间分配或转移失败时，G1会首先尝试增加堆空间，如果扩容失败，则发起担保的Full GC。Full GC后，堆尺寸计算结果也会调整堆空间。")]),t._v(" "),e("p",[t._v("什么是Remembered Set\n"),e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231014182515515.png",alt:"image-20231014182515515"}}),t._v("\n什么是OopMap、安全点、安全区域")]),t._v(" "),e("p",[t._v("什么是CSet")]),t._v(" "),e("h2",{attrs:{id:"三-运行原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-运行原理"}},[t._v("#")]),t._v(" 三. 运行原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/29475739/1697113019602-77ab8fc0-d22f-4a27-bd6f-5f41e089a20a.png#averageHue=%23e2f1e5&clientId=uad5b8271-77b3-4&from=paste&height=317&id=u1b606c77&originHeight=317&originWidth=705&originalType=binary&ratio=2&rotation=0&showTitle=false&size=86748&status=done&style=none&taskId=u287b2b7a-5328-4a3e-adae-86433ed46ab&title=&width=705",alt:"image.png"}})]),t._v(" "),e("h3",{attrs:{id:"流程总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程总览"}},[t._v("#")]),t._v(" 流程总览")]),t._v(" "),e("ol",[e("li",[t._v("应用程序分配内存，当年轻代的Eden区用尽时开始年轻代回收过程:G1的年轻代收集阶段是一个并行的独占式收集器。在年轻代回收期，G1 GC暂停所有应用程序线程，启动多线程执行年轻代回收。然后从年轻代区间移动存活对象到survivor区间或者老年区间，也有可能是两个区间都会涉及。")]),t._v(" "),e("li",[t._v("当堆内存使用达到一定值(默认45%) 时，开始老年代并发标记过程")]),t._v(" "),e("li",[t._v("标记完成马上开始混合回收过程。对于一个混合回收期，G1 GC从老年区间移动存活对象到空闲区间，这些空闲区间也就成为了老年代的一部分。和年轻代不同，老年代的G1回收器和其他GC不同，G1的老年代回收器不需要整个老年代被回收，一次只需要扫描/回收小部分老年代的Region就可以了。同时，这个老年代Region是和年轻代一起被回收的。")])]),t._v(" "),e("h3",{attrs:{id:"young-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#young-gc"}},[t._v("#")]),t._v(" young gc")]),t._v(" "),e("p",[t._v("当我们的程序启动刚开始的时候会默认分配新生代5%的空间。\n当Eden区满了后，就会触发young gc。此时会产生stop to world，用户线程暂停，同时多个gc线程并行进行垃圾回收，通过标记复制算法，存活对象移动到survival区或者old区当中。")]),t._v(" "),e("h3",{attrs:{id:"并发标记阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并发标记阶段"}},[t._v("#")]),t._v(" 并发标记阶段")]),t._v(" "),e("ol",[e("li",[t._v("初始标记阶段 initial Mark")])]),t._v(" "),e("p",[t._v("这个阶段是STW的，会触发一次年轻代GC。标记GC Roots直接引用的对象，\n初始标记(Initial Mark)负责标记所有能被直接可达的根对象(原生栈对象、全局对象、JNI对象)，根是对象图的起点，因此初始标记需要将Mutator线程(Java应用线程)暂停掉，也就是需要一个STW的时间段。事实上，当达到IHOP阈值时，G1并不会立即发起并发标记周期，而是等待下一次年轻代收集，利用年轻代收集的STW时间段，完成初始标记，这种方式称为借道(Piggybacking)。在初始标记暂停中，分区的NTAMS都被设置到分区顶部Top，初始标记是并发执行，直到所有的分区处理完。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("根分区扫描 Root Region Scaning")])]),t._v(" "),e("p",[t._v("在初始标记暂停结束后，年轻代收集也完成的对象复制到Survivor的工作，应用线程开始活跃起来。此时为了保证标记算法的正确性，所有新复制到Survivor分区的对象，都需要被扫描并标记成根，这个过程称为根分区扫描(Root Region Scanning)，同时扫描的Suvivor分区也被称为根分区(Root Region)。根分区扫描必须在下一次年轻代垃圾收集启动前完成(并发标记的过程中，可能会被若干次年轻代垃圾收集打断)，因为每次GC会产生新的存活对象集合。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("并发标记 Concurrent Marking")])]),t._v(" "),e("p",[t._v("和应用线程并发执行，并发标记线程在并发标记阶段启动，由参数-XX:ConcGCThreads(默认GC线程数的1/4，即-XX:ParallelGCThreads/4)控制启动数量，每个线程每次只扫描一个分区，从而标记出存活对象图。在这一阶段会处理Previous/Next标记位图，扫描标记对象的引用字段。同时，并发标记线程还会定期检查和处理STAB全局缓冲区列表的记录，更新对象引用信息。参数-XX:+ClassUnloadingWithConcurrentMark会开启一个优化，如果一个类不可达(不是对象不可达)，则在重新标记阶段，这个类就会被直接卸载。所有的标记任务必须在堆满前就完成扫描，如果并发标记耗时很长，那么有可能在并发标记过程中，又经历了几次年轻代收集。如果堆满前没有完成标记任务，则会触发担保机制，经历一次长时间的串行Full GC。")]),t._v(" "),e("p",[t._v("这个过程有可能被young gc给打断")]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("重新标记 remark")])]),t._v(" "),e("p",[t._v("重新标记(Remark)是最后一个标记阶段。在该阶段中，G1需要一个暂停的时间，去处理剩下的SATB日志缓冲区和所有更新，找出所有未被访问的存活对象，同时安全完成存活数据计算。这个阶段也是并行执行的，通过参数-XX:ParallelGCThread可设置GC暂停时可用的GC线程数。同时，引用处理也是重新标记阶段的一部分，所有重度使用引用对象(弱引用、软引用、虚引用、最终引用)的应用都会在引用处理上产生开销。通过SATB这个初始快照的算法进行重新标记，相比于CMS中的算法更快。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("独占清理 clean up")])]),t._v(" "),e("p",[t._v("不会真正的进行垃圾回收。STW and concurrent\n计算各个区域的存活对象和GC回收比例，并进行排序，识别可以混合回收的区域，为后续阶段做铺垫。")]),t._v(" "),e("p",[t._v("紧挨着重新标记阶段的清除(Clean)阶段也是STW的。Previous/Next标记位图、以及PTAMS/NTAMS，都会在清除阶段交换角色。清除阶段主要执行以下操作：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("RSet梳理")]),t._v("，启发式算法会根据活跃度和RSet尺寸对分区定义不同等级，同时RSet数理也有助于发现无用的引用。参数-XX:+PrintAdaptiveSizePolicy可以开启打印启发式算法决策细节；")]),t._v(" "),e("li",[e("strong",[t._v("整理堆分区")]),t._v("，为混合收集周期识别回收收益高(基于释放空间和暂停目标)的老年代分区集合；")]),t._v(" "),e("li",[e("strong",[t._v("识别所有空闲分区")]),t._v("，即发现无存活对象的分区。该分区可在清除阶段直接回收，无需等待下次收集周期。")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("copying阶段")])]),t._v(" "),e("h3",{attrs:{id:"full-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-gc"}},[t._v("#")]),t._v(" full gc")]),t._v(" "),e("p",[t._v("G1的初衷就是要避免Fu11 GC的出现。但是如果上述方式不能正常工作，G1会停止应用程序的执行 (stop-The-world) ，使用单线程的内存回收算法进行垃圾回收，性能会非常差，应用程序停顿时间会很长。\n要避免Fu11 GC的发生，一旦发生需要进行调整。什么时候会发生Fu11 GC呢? 比如堆内存太小，当G1在复制存活对象的时候没有空的内存分段可用,则会回退到ful1 gc，这种情况可以通过增大内存解决。\n导致G1Full GC的原因可能有两个:\n1.Evacuation的时候没有足够的to-space来存放晋升的对象\n2.并发处理过程完成之前空间耗尽。")]),t._v(" "),e("h2",{attrs:{id:"四-常见的参数总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-常见的参数总结"}},[t._v("#")]),t._v(" 四. 常见的参数总结")]),t._v(" "),e("p",[t._v("常用参数：")]),t._v(" "),e("ul",[e("li",[t._v("-XX: +UseG1GC 手动指定使用G1收集器执行内存回收任务。")]),t._v(" "),e("li",[t._v("-XX:G1HeapRegionsize 设置每个Region的大小。值是2的幂，范围是1MB到32MB之间，目标是根据最小的Java堆大小划分出约2048个区域。默认是堆内存的1/2000。")]),t._v(" "),e("li",[t._v("-XX:MaxGCPauseMillis 设置期望达到的最大GC停顿时间指标 (JVM会尽力实现，但不保证达到)。默认值是200ms")]),t._v(" "),e("li",[t._v("-XX: ParallelGCThread 设置STW工作线程数的值。最多设置为8")]),t._v(" "),e("li",[t._v("-XX:ConcGcThreads 设置并发标记的线程数。将n设置为并行垃圾回收线程数(ParallelGCThreads)的1/4左右。")]),t._v(" "),e("li",[t._v("-XX: InitiatingHeapOccupancyPercent 设置触发并发GC周期的Java堆占用率闯值。超过此值，就触发GC。默认值是45。")])]),t._v(" "),e("h2",{attrs:{id:"五-g1优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-g1优缺点"}},[t._v("#")]),t._v(" 五. G1优缺点")]),t._v(" "),e("ul",[e("li",[t._v("优点：")])]),t._v(" "),e("p",[e("strong",[t._v("①并行与并发")]),t._v("\n并行性：在进行minor gc收集时，可以采用多个gc线程并行回收，有效利用多核计算的能力。此时用户线程STW。\n并发性：在并发标记阶段进行mixed gc时，用户线程可以和gc线程并发工作。一般来说不会在整个回收阶段发生完全阻塞应用程序的情况。")]),t._v(" "),e("p",[e("strong",[t._v("②分代收集")]),t._v("\n从分代上看，G1依然属于"),e("strong",[t._v("分代型")]),t._v("垃圾回收器，它会区分年轻代和老年代，年轻代依然有Eden区和Survivor区。但从堆的结构上看，它不要求整个Eden区、年轻代或者老年代都是连续的，也不再坚持固定大小和固定数量。\n这些区将堆空间分为若干个区域 (Region)域中包含了逻辑上的年轻代和老年代和之前的各类回收器不同，它同时兼顾年轻代和老年代。"),e("strong",[t._v("在进行收集时，可以只收集其中的一部分区域，而不需要收集全部的年轻代或者老年代")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("③空间整合")]),t._v("\nCMS: “标记-清除” 算法、内存碎片、若干次GC后进行一次碎片整理G1将内存划分为一个个的region。内存的回收是以region作为基本单位的。Reqion之间是复制算法，但整体上实际可看作是标记-压缩 (Mark-Compact算法，两种算法都可以避免内存碎片。这种特性有利于程序长时间运行，分配大对象时不会因为无法找到连续内存空间而提前触发次 GC。尤其是当Java堆非常大的时候，G1的优势更加明显。\n"),e("img",{attrs:{src:"https://2290653824-github-io.oss-cn-hangzhou.aliyuncs.com/image-20231014182531089.png",alt:"image-20231014182531089"}}),t._v("\nregion内部采用标记整理算法。region之间采用标记复制，整理都避免了内存碎片。")]),t._v(" "),e("p",[t._v("④**可预测的停顿时间模型 **\n这是 G1 相对于 CMS 的另一大优势，G1除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为 M 毫秒的时间片段内，消耗在垃圾收集上的时间不得超过N毫秒。\n由于分区的原因，G1可以只选取部分区域进行内存回收，这样缩小了回收的范围，因此对于全局停顿情况的发生也能得到较好的控制。\nG1 跟踪各个 Region 里面的垃圾堆积的价值大小(回收所获得的空间大小以及回收所需时间的经验值) ，在后台维护一个优先列表，每次根据允许的收集时间，优先回收价值最大的Region。保证了 G1 收集器在有限的时间内可以获取尽可能高的收集效率。\n相比于CMS GC，G1未必能做到CMS在最好情况下的延时停顿，但是最差情况要好很多。")]),t._v(" "),e("ul",[e("li",[t._v("缺点")])]),t._v(" "),e("p",[t._v("相较于CMS，G1还不具备全方位、压倒性优势。比如在用户程序运行过程中，G1无论是为了垃圾收集产生的内存占用 (Footprint) 还是程序运行时的额外执行负载 (overload) 都要比CMS要高\n从经验上来说，在小内存应用上CMS的表现大概率会优于G1，而G1在大内存应用上则发挥其优势。平衡点在6-8GB之间。\n①内存占用：\ng1的每一个region都会保存一份卡表，而且这个卡表的实现比CMS复杂的多，这导致g1的记忆集可能会占整个堆空间的20%以上。对于cms，其只有一个卡表，而且只需要处理老年代到新生代的引用就可以了，能省下很多空间。\n②负载：\nCMS和g1都采用了写屏障，CMS用写后屏障来更新维护卡表，而g1出来采用写后屏障来进行维护卡表的操作之外，为了实现原始快照搜索算法SATB，还需要使用写前屏障来跟踪并发时的指针变化情况。\n相比于增量快照算法，原始快照可以减少并发标记和重新标记阶段的消耗，避免CMS那样在最终标记阶段停顿时间过长的缺点，但是在用户程序运行过程中确实会产生由跟踪引用变化带来的额外负担。同时因为g1相比cms会带来更多的计算资源消耗，所以CMS的写屏障实现是直接的同步操作，g1是将写前屏障和写后屏障要做的事写到消息队列里，然后再异步处理。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/29475739/1697035032735-fbb68f2f-ee76-4fe5-851a-142fa6ca0348.png#averageHue=%23eaedea&clientId=uf208428d-fc57-4&from=paste&height=606&id=ue3e3055c&originHeight=757&originWidth=1362&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=780993&status=done&style=none&taskId=u769584c9-9f1c-4b67-b39b-1cb2b062480&title=&width=1089.6",alt:"image.png"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/29475739/1697035178711-3bc05984-0340-4314-a969-161d9227c056.png#averageHue=%23cfd1ce&clientId=uf208428d-fc57-4&from=paste&height=87&id=u98d7c0f3&originHeight=109&originWidth=1660&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=160828&status=done&style=none&taskId=uec92ab8d-9ce3-412c-861c-dcf466cf329&title=&width=1328",alt:"image.png"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/29475739/1697035716834-06be9a43-0554-4018-932e-13f15b34453e.png#averageHue=%23e8ece7&clientId=uf208428d-fc57-4&from=paste&height=578&id=u38b7b681&originHeight=722&originWidth=1360&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=544274&status=done&style=none&taskId=ucb9da59d-ceb2-4af8-bc0c-f15243d2d4b&title=&width=1088",alt:"image.png"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/29475739/1697035778173-6d3fc506-f33f-4c24-b73c-37c0b13d701d.png#averageHue=%23e6e8e5&clientId=uf208428d-fc57-4&from=paste&height=577&id=OAUS3&originHeight=721&originWidth=1316&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=770152&status=done&style=none&taskId=uc161f4eb-35c2-4fce-b0a9-55b79317251&title=&width=1052.8",alt:"image.png"}})]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_32099833/article/details/109558171",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMS与三色标记算法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/7023935314703941663",target:"_blank",rel:"noopener noreferrer"}},[t._v("终于把CMS垃圾收集器搞懂了~"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1824884",target:"_blank",rel:"noopener noreferrer"}},[t._v("G1垃圾收集器详解（5）之Card Table"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/7010034105165299725",target:"_blank",rel:"noopener noreferrer"}},[t._v("G1垃圾收集器详解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pdai.tech/md/java/jvm/java-jvm-gc-g1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GC - Java 垃圾回收器之G1详解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/444691935",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 Remembered Set、Card Table、Write Barrier"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/huangzhilin2015/article/details/115288697",target:"_blank",rel:"noopener noreferrer"}},[t._v("垃圾收集之Remember Set(CardTable)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/yunxing323/article/details/109249788",target:"_blank",rel:"noopener noreferrer"}},[t._v("我对OopMap,安全点，安全区域的理解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1847053",target:"_blank",rel:"noopener noreferrer"}},[t._v("G1垃圾收集器详解（3）之CSet"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1PJ411n7xZ?p=187&spm_id_from=pageDriver&vd_source=a05a4698720267eb93bab07197b4276c",target:"_blank",rel:"noopener noreferrer"}},[t._v("宋红康JVM G1"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/7001433550671052836",target:"_blank",rel:"noopener noreferrer"}},[t._v("24-一步一图带你理清G1垃圾回收流程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.oracle.com/technetwork/tutorials/tutorials-1876574.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with the G1 Garbage Collector"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);