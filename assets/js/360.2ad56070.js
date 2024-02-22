(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{682:function(v,_,l){"use strict";l.r(_);var t=l(4),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是gpu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是gpu"}},[v._v("#")]),v._v(" 什么是GPU")]),v._v(" "),_("p",[v._v("图形处理器（英语：graphics processing unit，缩写：GPU），又称显示核心、视觉处理器、显示芯片，是一种专门在个人电脑、工作站、游戏机和一些移动设备（如平板电脑、智能手机等）上做图像和图形相关运算工作的微处理器。 [1]\nGPU使显卡减少了对CPU的依赖，并进行部分原本CPU的工作，尤其是在3D图形处理时GPU所采用的核心技术有硬件T&L（几何转换和光照处理）、立方环境材质贴图和顶点混合、纹理压缩和凹凸映射贴图、双重纹理四像素256位渲染引擎等，而硬件T&L技术可以说是GPU的标志。GPU的生产商主要有NVIDIA和AMD。")]),v._v(" "),_("p",[v._v("最初是为图形渲染和处理而设计的硬件组件，用于加速计算机图形和视频的处理。然而，随着时间的推移，人们开始意识到 GPU 具有强大的并行计算能力，可以用于加速各种计算密集型任务，不仅限于图形处理。这导致了通用 GPU 计算，通常称为 GPGPU（General-Purpose computing on Graphics Processing Units）。")]),v._v(" "),_("h2",{attrs:{id:"gpu中一些比较核心的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gpu中一些比较核心的概念"}},[v._v("#")]),v._v(" GPU中一些比较核心的概念")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("CUDA（Compute Unified Device Architecture）")]),v._v("：\n"),_("ul",[_("li",[v._v("CUDA 是 NVIDIA 开发的一种并行计算平台和应用程序编程接口（API），用于利用 NVIDIA GPU 进行通用计算任务。")]),v._v(" "),_("li",[v._v("CUDA 允许开发人员使用类似于C的编程语言编写 GPU 程序，包括在 CPU 和 GPU 之间传输数据，管理并行计算等。")])])]),v._v(" "),_("li",[_("strong",[v._v("GPU核心")]),v._v("：\n"),_("ul",[_("li",[v._v("GPU 由多个核心（也称为流处理器或CUDA核心）组成，每个核心能够执行计算任务。")]),v._v(" "),_("li",[v._v("许多核心同时工作，可用于处理并行任务，提供高度的计算性能。")])])]),v._v(" "),_("li",[_("strong",[v._v("线程块（Thread Block）")]),v._v("：\n"),_("ul",[_("li",[v._v("线程块是 GPU 上的一组线程，这些线程可以协同工作以执行特定的计算任务。")]),v._v(" "),_("li",[v._v("线程块内的线程可以共享共享内存，并具有低延迟的通信。")])])]),v._v(" "),_("li",[_("strong",[v._v("网格（Grid）")]),v._v("：\n"),_("ul",[_("li",[v._v("网格是线程块的集合，用于组织大规模的计算任务。")]),v._v(" "),_("li",[v._v("网格内的线程块可以相互通信和同步。")])])]),v._v(" "),_("li",[_("strong",[v._v("共享内存（Shared Memory）")]),v._v("：\n"),_("ul",[_("li",[v._v("共享内存是线程块内的内存区域，用于线程之间的数据共享。")]),v._v(" "),_("li",[v._v("共享内存的访问速度比全局内存快，通常用于优化访问模式。")])])]),v._v(" "),_("li",[_("strong",[v._v("全局内存（Global Memory）")]),v._v("：\n"),_("ul",[_("li",[v._v("全局内存是 GPU 上所有线程块和线程都可以访问的内存区域。")]),v._v(" "),_("li",[v._v("全局内存通常用于存储大规模的数据集。")])])]),v._v(" "),_("li",[_("strong",[v._v("核心时钟频率")]),v._v("：\n"),_("ul",[_("li",[v._v("核心时钟频率是 GPU 核心的运行频率，通常以赫兹（Hz）表示。")]),v._v(" "),_("li",[v._v("更高的时钟频率可以导致更高的计算性能，但也可能产生更多的热量。")])])]),v._v(" "),_("li",[_("strong",[v._v("纹理内存（Texture Memory）")]),v._v("：\n"),_("ul",[_("li",[v._v("纹理内存是一种高速缓存内存，通常用于存储纹理数据和实现纹理映射等图形相关任务。")])])]),v._v(" "),_("li",[_("strong",[v._v("并行度（Parallelism）")]),v._v("：\n"),_("ul",[_("li",[v._v("并行度是指 GPU 能够同时执行多个计算任务的能力。")]),v._v(" "),_("li",[v._v("GPU 具有高度的并行性，可同时处理大量线程。")])])]),v._v(" "),_("li",[_("strong",[v._v("流处理（Streaming）")]),v._v("：\n"),_("ul",[_("li",[v._v("流处理是指 GPU 能够按照流水线方式处理计算任务，以提高计算效率。")]),v._v(" "),_("li",[v._v("数据在不同的核心和阶段之间流动，以最大程度地利用硬件资源。")])])])]),v._v(" "),_("p",[v._v("类比一下cpu")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("GPU核心 vs. CPU核心")]),v._v("：\n"),_("ul",[_("li",[v._v("GPU 核心类似于 CPU 核心，但 GPU 通常具有更多的核心。GPU 的核心旨在执行并行计算，而 CPU 核心更适合执行串行任务。")])])]),v._v(" "),_("li",[_("strong",[v._v("线程块 vs. CPU 线程")]),v._v("：\n"),_("ul",[_("li",[v._v("线程块是 GPU 上的一组线程，类似于 CPU 上的线程。但 GPU 线程块通常比 CPU 线程多，它们以并行方式执行任务。")])])]),v._v(" "),_("li",[_("strong",[v._v("共享内存 vs. CPU 缓存")]),v._v("：\n"),_("ul",[_("li",[v._v("共享内存是 GPU 线程块内的内存，类似于 CPU 缓存。共享内存用于高速数据共享，以提高访问速度。")])])]),v._v(" "),_("li",[_("strong",[v._v("全局内存 vs. CPU 内存")]),v._v("：\n"),_("ul",[_("li",[v._v("全局内存类似于 CPU 内存，但 GPU 的全局内存通常更大。它用于存储大规模数据集。")])])]),v._v(" "),_("li",[_("strong",[v._v("核心时钟频率 vs. CPU 时钟速度")]),v._v("：\n"),_("ul",[_("li",[v._v("核心时钟频率是 GPU 核心的运行频率，类似于 CPU 的时钟速度。更高的频率可以提高计算性能。")])])]),v._v(" "),_("li",[_("strong",[v._v("并行度 vs. CPU 多核处理")]),v._v("：\n"),_("ul",[_("li",[v._v("GPU 具有高度的并行度，可以同时执行多个计算任务，而 CPU 多核处理器通过拥有多个核心来实现并行性。")])])]),v._v(" "),_("li",[_("strong",[v._v("流处理 vs. CPU 流水线")]),v._v("：\n"),_("ul",[_("li",[v._v("GPU 通过流处理方式执行任务，其中数据在不同的核心和阶段之间流动，以提高效率，而 CPU 也使用流水线执行指令。")])])]),v._v(" "),_("li",[_("strong",[v._v("纹理内存 vs. CPU 缓存")]),v._v("：\n"),_("ul",[_("li",[v._v("纹理内存用于存储图形相关数据，类似于 CPU 中的缓存，但用于不同的目的。")])])])]),v._v(" "),_("h2",{attrs:{id:"什么是gpu直通"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是gpu直通"}},[v._v("#")]),v._v(" 什么是GPU直通")]),v._v(" "),_("p",[v._v("GPU直通实现方式：通过虚拟化平台的直通技术可以将GPU直接给虚拟机使用，与物理服务器使用GPU的效果基本一致，在虚拟机内上只要安装了对应GPU的驱动，GPU就可以为这个虚拟机提供高性能的图形能力。")]),v._v(" "),_("h3",{attrs:{id:"gpu直通的技术方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gpu直通的技术方案"}},[v._v("#")]),v._v(" GPU直通的技术方案")]),v._v(" "),_("p",[v._v("GPU直通是也叫GPU pass-through直通，是将PCI插槽上的物理设备（这里指GPU设备）绕过OS层，直接提供给了VM。一般情况下PCI设备提供到VM，是需要经过OS层面的设备驱动，经过OS识别到该PCI设备，再将物理设备模拟提供给了VM。")]),v._v(" "),_("blockquote",[_("p",[v._v("PCI（Peripheral Component Interconnect）设备是计算机中的一种硬件设备接口标准，用于连接和交互各种外部硬件设备，例如显卡、声卡、网卡、存储控制器、USB 控制器等。PCI 设备通过主板上的 PCI 插槽或扩展卡插槽连接到计算机系统，并通过主板上的 PCI 控制器进行管理和通信。")])]),v._v(" "),_("h3",{attrs:{id:"为什么使用-gpu-显卡直通"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-gpu-显卡直通"}},[v._v("#")]),v._v(" 为什么使用 GPU 显卡直通")]),v._v(" "),_("p",[v._v("​\t显卡直通（GPU Passthrough）是一项虚拟化技术，允许虚拟机（VM）直接访问物理主机上的显卡。通常，在虚拟化环境中，虚拟机使用虚拟显卡进行图形渲染和加速计算，但这可能导致性能下降，特别是对于需要大量图形处理或 GPU 计算的工作负载。显卡直通通过绕过虚拟显卡，将物理显卡分配给虚拟机，显著提高了性能。")]),v._v(" "),_("h3",{attrs:{id:"什么是显卡驱动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是显卡驱动"}},[v._v("#")]),v._v(" 什么是显卡驱动")]),v._v(" "),_("p",[v._v("显卡驱动（Graphics Card Driver）是一种软件程序，用于操作系统与图形处理单元（GPU，Graphics Processing Unit）之间的通信和协作。它是操作系统和应用程序与显卡硬件之间的桥梁，允许计算机操作系统和应用程序利用显卡来处理和渲染图形和视频。")]),v._v(" "),_("h3",{attrs:{id:"显卡直通技术中的显卡驱动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显卡直通技术中的显卡驱动"}},[v._v("#")]),v._v(" 显卡直通技术中的显卡驱动")]),v._v(" "),_("ul",[_("li",[v._v("显卡驱动在物理主机上的安装和配置对于显卡直通至关重要。虚拟机实例需要访问物理主机上的显卡硬件，因此需要确保主机上的显卡驱动正确配置和运行，以便虚拟机可以正常使用。")]),v._v(" "),_("li",[v._v("虚拟化平台（如KVM/QEMU）通常需要支持显卡直通功能。这意味着虚拟化平台必须具备能够将物理显卡分配给虚拟机的机制，并且虚拟机管理器必须能够正确地配置和控制显卡硬件。")])]),v._v(" "),_("p",[v._v("总之，显卡直通是一项用于虚拟化的技术，它需要与主机上的显卡驱动协同工作，以实现虚拟机对图形硬件的直接访问，从而获得高性能图形渲染和计算能力。因此，显卡驱动和显卡直通之间存在联系，但它们是不同的概念。")])])}),[],!1,null,null,null);_.default=r.exports}}]);