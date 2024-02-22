(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{489:function(t,n,o){"use strict";o.r(n);var e=o(4),l=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("一.生产者消息丢失：")]),t._v(" "),n("ol",[n("li",[t._v("由于网络原因，消息根本没有发送到broker。")]),t._v(" "),n("li",[t._v("消息已经发送到broker，但是被broker拒绝。")])]),t._v(" "),n("p",[t._v("解决方案:\nack设置为!=0,即使用ack机制\n使用callback机制\n消息重试机制\n设置消息的大小，防止被broker拒绝")]),t._v(" "),n("p",[t._v("二.消费者消息丢失\n发生原因：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("消费者的位移提交机制\n消费者的唯位移提交分为手动提交和自动提交(默认)")]),t._v(" "),n("p",[t._v("当消费者拉取到了分区的某个消息之后，消费者会自动提交了 offset。自动提交的话会有一个问题，试想一下，当消费者刚拿到这个消息准备进行真正消费的时候，突然挂掉了，消息实际上并没有被消费，但是 offset 却被自动提交了。")]),t._v(" "),n("p",[t._v("这种情况的解决办法也比较粗暴，我们手动关闭自动提交 offset，每次在真正消费完消息之后之后再自己手动提交 offset 。但是，细心的朋友一定会发现，这样会带来消息被重新消费的问题。比如你刚刚消费完消息之后，还没提交 offset，结果自己挂掉了，那么这个消息理论上就会被消费两次。")])]),t._v(" "),n("li",[n("p",[t._v("再均衡问题\n再均衡期间，当前消费者的状况将丢失\n比如消费者消费完某个分区中的一部分消息时还没有来得及提交消费位移就发生了再均衡操作，之后这个分区又被分配给了消费组内的另一个消费者，原来被消费完的那部分消息又被重新消费一遍，也就是发生了重复消费。一般情况下，应尽量避免不必要的再均衡的发生。")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);