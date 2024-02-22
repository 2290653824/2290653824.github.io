(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{482:function(e,a,r){"use strict";r.r(a);var _=r(4),v=Object(_.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Kafka 本质上是一个 MQ（Message Queue），使用消息队列的好处？")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("解耦")]),e._v("：允许我们独立修改队列两边的处理过程而互不影响。")]),e._v(" "),a("li",[a("strong",[e._v("冗余")]),e._v("：有些情况下，我们在处理数据的过程会失败造成数据丢失。消息队列把数据进行持久化直到它们已经被完全处理，通过这一方式规避了数据丢失风险, 确保你的数据被安全的保存直到你使用完毕")]),e._v(" "),a("li",[a("strong",[e._v("峰值处理能力")]),e._v("：不会因为突发的流量请求导致系统崩溃，消息队列能够使服务顶住突发的访问压力, 有助于解决"),a("strong",[e._v("生产消息和消费消息的处理速度不一致的情况")])]),e._v(" "),a("li",[a("strong",[e._v("异步通信")]),e._v("：消息队列允许用户把消息放入队列但不立即处理它, 等待后续进行消费处理。")])]),e._v(" "),a("p",[e._v("术语：")]),e._v(" "),a("ol",[a("li",[e._v("Producer：即消息生产者，向 Kafka Broker 发消息的客户端。")]),e._v(" "),a("li",[e._v("Consumer：即消息消费者，从 Kafka Broker 读消息的客户端。")]),e._v(" "),a("li",[e._v("Consumer Group：即消费者组，消费者组内每个消费者负责消费不同分区的数据，以提高消费能力。一个分区只能由组内一个消费者消费，不同消费者组之间互不影响。")]),e._v(" "),a("li",[e._v("Broker：一台 Kafka 机器就是一个 Broker。一个集群是由多个 Broker 组成的且一个 Broker 可以容纳多个 Topic。")]),e._v(" "),a("li",[e._v("Topic：可以简单理解为队列，Topic 将消息分类，生产者和消费者面向的都是同一个 Topic。")]),e._v(" "),a("li",[e._v("Partition：为了实现Topic扩展性，提高并发能力，一个非常大的 Topic 可以分布到多个 Broker 上，一个 Topic 可以分为多个 Partition 进行存储，每个 Partition 是一个有序的队列。")]),e._v(" "),a("li",[e._v("Replica：即副本，为实现数据备份的功能，保证集群中的某个节点发生故障时，该节点上的 Partition 数据不丢失，且 Kafka 仍然能够继续工作，为此Kafka提供了副本机制，一个 Topic 的每个 Partition 都有若干个副本，一个 Leader 副本和若干个 Follower 副本。")]),e._v(" "),a("li",[e._v("Leader：即每个分区多个副本的主副本，生产者发送数据的对象，以及消费者消费数据的对象，都是 Leader。")]),e._v(" "),a("li",[e._v("Follower：即每个分区多个副本的从副本，会实时从 Leader 副本中同步数据，并保持和 Leader 数据的同步。Leader 发生故障时，某个 Follower 还会被选举并成为新的 Leader , 且不能跟 Leader 在同一个broker上, 防止崩溃数据可恢复。")]),e._v(" "),a("li",[e._v("Offset：消费者消费的位置信息，监控数据消费到什么位置，当消费者挂掉再重新恢复的时候，可以从消费位置继续消费。")]),e._v(" "),a("li",[e._v("ZooKeeper服务：Kafka 集群能够正常工作，需要依赖于 ZooKeeper，ZooKeeper 帮助 Kafka 存储和管理集群元数据信息。在最新版本中, 已经慢慢要脱离 ZooKeeper。")])]),e._v(" "),a("p",[e._v("每个topic的partition数量不同，每个partition的副本数量也不同都是可以在创建的时候指定的。")]),e._v(" "),a("p",[e._v("快速进行安装：")]),e._v(" "),a("p",[e._v("https://colobu.com/2019/09/27/install-Kafka-on-Mac/")]),e._v(" "),a("p",[e._v("java中使用kafka")]),e._v(" "),a("h2",{attrs:{id:"kafka的三高设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka的三高设计"}},[e._v("#")]),e._v(" kafka的三高设计")]),e._v(" "),a("h3",{attrs:{id:"高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[e._v("#")]),e._v(" 高可用")]),e._v(" "),a("p",[e._v("kafka中的选举：控制器选举、leader选举、消费者的选举")]),e._v(" "),a("h4",{attrs:{id:"_1控制器的选举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1控制器的选举"}},[e._v("#")]),e._v(" ①控制器的选举")]),e._v(" "),a("p",[e._v("什么是控制器")]),e._v(" "),a("p",[e._v("在Kafka集群中，控制器是一个特殊的Broker节点，它负责监管整个集群的状态，并执行一些重要的管理任务。")]),e._v(" "),a("p",[e._v("控制器的主要功能包括：")]),e._v(" "),a("ol",[a("li",[e._v("监控Broker是否在线。")]),e._v(" "),a("li",[e._v("监控Partition的分配和副本备份情况。")]),e._v(" "),a("li",[e._v("处理新的Topic和Partition的创建请求。")]),e._v(" "),a("li",[e._v("处理Broker故障和副本迁移。")]),e._v(" "),a("li",[e._v("管理ISR（in-sync replicas）列表。")])]),e._v(" "),a("p",[e._v("控制器是Kafka集群的核心组件之一，它的稳定性对整个集群的可靠性和高可用性都非常重要。")]),e._v(" "),a("p",[e._v("那控制器的选举是怎么进行的呢？")]),e._v(" "),a("ol",[a("li",[e._v("当第一个控制器启动时，会在zookeeper的controller路径下创建相应的"),a("strong",[e._v("临时节点")]),e._v("，并写入相应的注册信息，该节点便是控制器。")]),e._v(" "),a("li",[e._v("当其他节点也进行启动的时候，也会尝试在zk上建立临时节点，但是因为/controller目录上已经存在了节点，所以创建节点会失败，此时就认为最开始的节点就是一个唯一一个控制器")]),e._v(" "),a("li",[e._v("其他的节点，"),a("strong",[e._v("也会在控制器上注册相应的监听器")]),e._v("，各个监听器负责监听各自代理节点的状态变化。当监听到节点状态发生变化时，会触发相应的监听函数进行处理")])]),e._v(" "),a("h4",{attrs:{id:"_2什么是leader选举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2什么是leader选举"}},[e._v("#")]),e._v(" ②什么是leader选举")]),e._v(" "),a("p",[e._v("首先在topic中，一个partition是有多个副本的，那么如果记录一个leader有多少个副本呢？kafka采用了"),a("strong",[e._v("ISR机制")]),e._v("。")]),e._v(" "),a("p",[e._v("什么是ISR：指的是那些已经同步到最新Leader副本状态的所有副本集合。每个领导者都有一个ISR，它由一组与领导者保持同步的副本组成。在分区的ISR中，如果某个副本因为某种原因无法和领导者进行通信，则该副本会被视为“落后”，并且从ISR中移除。当ISR缩小时，Kafka会触发重新平衡操作，以确保数据可用性和负载均衡。")]),e._v(" "),a("p",[e._v("总的来说，分区的ISR是指当前保持与领导者同步的副本集合，它反映了当前"),a("strong",[e._v("可靠地接收消息")]),e._v("的副本集合。")]),e._v(" "),a("p",[e._v("必须同时满足两个条件才认为是可靠的：必须可靠的向zookeeper发送心跳；在规定时间内从Leader副本 低延迟 地获取过消息。")]),e._v(" "),a("p",[e._v("kafka中的默认配置：")]),e._v(" "),a("p",[e._v("Kafka 判断 Follower 是否与 Leader 同步的条件就是 Broker 端参数 "),a("strong",[e._v("replica.lag.time.max.ms")]),e._v(" 参数值。这个参数的含义就是 Follower 副本能够落后 Leader 副本的最长时间间隔, 当前"),a("strong",[e._v("默认值为10秒")]),e._v(", 也就是说, 只要一个Follower 副本落后 Leader 副本的时间不连续超过10秒, Kafka 就认为两者是同步的, 即使 Follower 副本中保持的消息要少于 Leader 副本中的消息。")]),e._v(" "),a("p",[e._v("ISR的维护")]),e._v(" "),a("p",[a("strong",[e._v("1) Controller来维护")]),e._v("：Kafka 集群中的其中一个 Broker 会被选举为Controller，主要负责 Partition 管理和副本状态管理，也会执行重分配 Partition 之类的管理任务。在符合某些特定条件下，Controller 下的 LeaderSelector 会选举新的 Leader，ISR 和新的 leader_epoch 及controller_epoch 写入 Zookeeper 的相关节点中。同时发起 leaderAndIsrRequest 通知所有的 Replicas。")]),e._v(" "),a("p",[a("strong",[e._v("2) Leader来维护")]),e._v("：Leader 有单独的线程定期检测 ISR 中 Follower 是否脱离 ISR , 如果发现 ISR 变化，则会将新的 ISR 信息返回到 Zookeeper 的相关节点中。")]),e._v(" "),a("p",[e._v("综上可以看出：")]),e._v(" "),a("p",[e._v("​\t由于ISR中的备份副本在所有方面（包括数据）都与主副本保持同步，因此在主副本故障时，"),a("strong",[e._v("任何一个ISR副本都可以被提升为新的主副本，从而实现高可用性。")])]),e._v(" "),a("h4",{attrs:{id:"_3ack机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3ack机制"}},[e._v("#")]),e._v(" ③ack机制")]),e._v(" "),a("p",[e._v("ack机制非常重要，关系到了ISR机制、选举机制等。")]),e._v(" "),a("ul",[a("li",[e._v("ack=0")])]),e._v(" "),a("p",[e._v("如果acks设置为0，那么 Producer 是不会等待 Broker 的反馈。该消息会被立刻添加到 Socket Buffer 中就认为已经发送完成。在这种情况下，服务器端是否收到请求是无法保证的，并且参数 Retries 也不会生效（因为客户端无法获得失败信息）。")]),e._v(" "),a("p",[e._v("这个时候每个记录返回的 Offset 总是被设置为-1。这个模式下 Kafka 的吞吐量最大，并发最高，但是数据非常容易丢失，通常适用在一些记录应用日志，对数据要求不高的业务场景。")]),e._v(" "),a("ul",[a("li",[e._v("ack=1")])]),e._v(" "),a("p",[e._v("​\t如果acks设置为1，这个时候 Leader 节点会将记录先写入本地日志，并且在所有 Follower 节点反馈之前就先确认成功。在这种情况下，如果 Leader 节点在接收记录之后，并且在 Follower 节点复制数据完成之前发生错误，那么这条记录会丢失。这个模式和 Mysql 的主从异步复制一样，主从之间会有数据差异，此配置为 Kafka 默认配置。它平衡了数据安全和性能。")]),e._v(" "),a("ul",[a("li",[e._v("acks = all || acks >=2")])]),e._v(" "),a("p",[e._v("如果acks设置为all，这个时候 Leader 节点会等待所有同步中的LSR副本确认之后再确认这条记录是否发送完成。只要至少有一个同步副本存在，记录就不会丢失。")]),e._v(" "),a("p",[e._v("如果说 Leader 这时候刚接收到了消息，但是 Follower 没有收到消息，此时 Leader 宕机了，那么客户端会感知到这个消息没发送成功，他会重试再次发送消息过去。")]),e._v(" "),a("p",[e._v("其中Broker有个配置项min.insync.replicas(默认值为1)代表了正常写入生产者数据所需要的最少ISR个数, 当ISR中的副本数量小于min.insync.replicas时，Leader停止写入生产者生产的消息，并向生产者抛出NotEnoughReplicas异常，阻塞等待更多的 Follower 赶上并重新进入ISR, 因此能够容忍min.insync.replicas-1个副本同时宕机")]),e._v(" "),a("p",[e._v("这种方式是牺牲了性能为代价，适合对数据要求比较高的业务场景。")]),e._v(" "),a("p",[e._v("从上面可以看出：随着ack的增大，其对数据的可用性保证是越来越高的")]),e._v(" "),a("p",[e._v("producer缓存")]),e._v(" "),a("p",[e._v("https://juejin.cn/post/6983614310224232462")]),e._v(" "),a("p",[e._v("[深度剖析 Kafka Producer 的缓冲池机制【图解 + 源码分析】 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1698563#:~:text=在新版的 Kafka Producer 中，设计了一个消息缓冲池，在创建 Producer 时会默认创建一个大小为 32M 的缓冲池，也可以通过,时传的 batch.size 大小，默认大小 16384，而每个 Batch 都会包含一个 batch.size 大小的内存块，消息就是存放在内存块当中。)")]),e._v(" "),a("p",[e._v("Kafka中的内存池设计主要用于提高内存分配与释放的效率。Kafka使用了一种基于slab的内存池管理方式，这种方式可以有效地减少内存碎片，提高内存的利用率。")]),e._v(" "),a("p",[e._v("在Kafka源码中，内存池的实现主要分为三个部分：SlabAllocator、Slab和ByteBuffer。")]),e._v(" "),a("p",[e._v("SlabAllocator是整个内存池的管理者，它负责对所有的Slab进行管理和分配。Slab是内存池中的一个固定大小的内存块，被划分为多个大小相等的ByteBuffer，每个ByteBuffer可以被用来存储消息等数据。ByteBuffer则是Kafka内存池中真正被使用的内存单元，它是由Slab中的部分内存组成，用来存储具体的数据。")]),e._v(" "),a("p",[e._v("SlabAllocator会预先申请一定数量的Slab，并将它们组织成链表结构，以便进行快速的分配和回收。在SlabAllocator中，通过一个数组记录每个ByteBuffer的状态，如是否被分配、所属的Slab等信息。")]),e._v(" "),a("p",[e._v("当需要分配内存时，SlabAllocator会从空闲的Slab中查找可以满足需求的ByteBuffer，并将其标记为已分配。同样地，在释放内存时，SlabAllocator会根据要释放的ByteBuffer确定其所属的Slab，并将其标记为未分配。如果某个Slab中的所有ByteBuffer都已经被分配，则该Slab会被释放，以便回收内存。")]),e._v(" "),a("p",[e._v("通过这种方式，Kafka内存池可以大大减少内存碎片，提高内存使用效率。此外，由于预先申请了一定数量的Slab，因此在消息发送等高频操作中，内存的分配和释放也可以更加快速和稳定。")]),e._v(" "),a("p",[e._v("推荐：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/user/1065851/search/article-kafka",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人中心 - 腾讯云开发者社区-腾讯云 (tencent.com)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);