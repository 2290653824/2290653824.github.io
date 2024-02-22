(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{476:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"异步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[v._v("#")]),v._v(" 异步")]),v._v(" "),_("p",[v._v("当一个接口调用的逻辑链路过程，可能会导致一个接口的RT(Response Time)时间过长，这样的话对用户方面肯定是不友好的。")]),v._v(" "),_("p",[v._v("这时候我们就可以使用异步的方式，将接口中业务逻辑没有相互依赖的模块异步进行处理，这样速度肯定就会加快，如图")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/29475739/1667740722888-d6298ef5-fdff-412c-accf-4b42e7871146.png",alt:"img"}})]),v._v(" "),_("p",[v._v("解决方案，使用线程池。")]),v._v(" "),_("p",[v._v("优点：简单，使用线程池，将一些业务放在一个线程中")]),v._v(" "),_("p",[v._v("缺点：你一个订单流程，你扣积分，扣优惠券，发短信，扣库存。。。等等这么多业务要调用这么多的接口，"),_("strong",[v._v("每次加一个你要调用一个接口然后还要重新发布系统")]),v._v("，写一次两次还好。而且写在一起的话，会使多个业务耦合在一起，难以维护。另外这里使用线程池就必须保证这几个服务写在一个机器节点里，在高并发的情况下肯定是不行的。")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("p",[v._v("使用消息队列，将非核心业务逻辑放到消息队列中，让处理对应逻辑的机器订阅这个消息队列，老结点支付成功后，新的结点就可以从消息队列中拉取信息进行消费。")]),v._v(" "),_("p",[v._v("问题：其他非核心业务逻辑是否成功，主节点无法感知，否则会对时间造成影响（结点成功后返回ack，速度太慢）。")]),v._v(" "),_("p",[v._v("解决需要依靠分布式事务")]),v._v(" "),_("h2",{attrs:{id:"削峰"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#削峰"}},[v._v("#")]),v._v(" 削峰")]),v._v(" "),_("p",[v._v("就拿我上一期写的秒杀来说（暗示新同学看我上一期），你平时流量很低，但是你要做秒杀活动00 ：00的时候流量疯狂怼进来，你的服务器，"),_("strong",[v._v("Redis")]),v._v("，"),_("strong",[v._v("MySQL")]),v._v("各自的承受能力都不一样，你直接"),_("strong",[v._v("全部流量照单全收")]),v._v("肯定有问题啊，直接就打挂了")]),v._v(" "),_("p",[v._v("解决方法")]),v._v(" "),_("p",[v._v("简单，把请求放到队列里面，然后至于每秒消费多少请求，就看自己的"),_("strong",[v._v("服务器处理能力")]),v._v("，你能处理5000QPS你就消费这么多，可能会比正常的慢一点，但是"),_("strong",[v._v("不至于打挂服务器")]),v._v("，等流量高峰下去了，你的服务也就没压力了。")]),v._v(" "),_("p",[v._v("使用消息队列的缺点：")]),v._v(" "),_("p",[_("strong",[v._v("增加系统复杂性：重复消费、消息丢失、消息的顺序消费")])]),v._v(" "),_("p",[v._v("数据一致性：就那上面的下单问题来讲，下单的业务成功了，但是后面异步的调用万一失败了呢，那不就导致数据不一致了吗（本来该要么全部成功要么全部失败）。所以又需要分布式事务")]),v._v(" "),_("p",[_("strong",[v._v("额外需要保证消息队列的可用性")])]),v._v(" "),_("p",[_("strong",[v._v("根据业务和消息队列选择合适的消息队列")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/jpeg/29475739/1667741654601-63c90c45-59ba-4aeb-86a0-2aa895355661.jpeg",alt:"img"}})]),v._v(" "),_("p",[v._v("现在公司都非常看重吞吐量。")]),v._v(" "),_("p",[v._v("重点看kafka")]),v._v(" "),_("h2",{attrs:{id:"解耦"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解耦"}},[v._v("#")]),v._v(" 解耦")]),v._v(" "),_("p",[v._v("这个很容易理解，就是使不同的业务处理进行了解耦")])])}),[],!1,null,null,null);_.default=a.exports}}]);