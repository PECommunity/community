---
title: 应用现代化趋势：平淡之美 ③
author: Richard Seroter
translator: 崔
date: 2023-08-23
originalLink: https://cloud.google.com/blog/products/application-modernization/richard-seroter-on-the-need-to-durable-systems
---

# 应用现代化趋势：平淡之美 ③

远离地球 150 亿英里的宇宙飞船的算力，还比不上现今的个人装备的算力——不仅移动电话比他强，甚至连遥控车钥匙都比他强。[旅行者 1 号](https://solarsystem.nasa.gov/missions/voyager-1/in-depth/)和 [2 号](https://solarsystem.nasa.gov/missions/voyager-2/in-depth/)于 1977 年升空，到现在为止，他们已经服役 45 年，还在以超过 [3 万英里的时速](https://twitter.com/NASAVoyager/status/1659244080172515328)在冰冷空旷的太空中游荡，并向地球回传数据。你觉得 45 年后，你的车钥匙还能用吗？同样令人惊叹的是，两千年罗马人用混凝土用建造的建筑仍在使用。可我家门口的道路，随便有点风吹草动，就会变得坑坑洼洼。

持续性是创造性思维的基础。可靠的环境、稳定的基础让人更倾向于突破界限，在舒适区之外进行创新。我们为客户创建的每个应用程序和环境都是他们下一代技术和业务战略的第一步，所以要讨论应用程序现代化，就必须要讨论耐久性。整个企业的目标和梦想都寄托在我们正在构建的技术架构上，因此需要确保基础具有足够的强度，能够承受未来将要面对的一切可能。

在为现代化应用选择合适的基础技术时，技术的寿命和可靠性至关重要。令人兴奋的[新开源大型语言模型](https://www.infoworld.com/article/3695530/servicenow-hugging-faces-free-starcoder-llm-takes-on-copilot-codewhisperer.html)能活过明年吗？或者 PayPal 推出了有趣的[新数据库](https://medium.com/paypal-tech/unlocking-the-power-of-junodb-paypals-key-value-store-goes-open-source-ee85f935bdc1)？我该如何从不断增长的 CNCF 图表中做出选择？这是开源社区的力量,也是供应商支持发挥作用的地方。例如，Kubernetes、PostgreSQL 和 Java 都经受住了时间的考验，这要归功于它们强大的功能、专注的社区和强大的厂商支持。

在谷歌的大力支持下，Kubernetes 为应用程序提供了可扩展的管理和部署解决方案：截至 7 月份，我们为 k8s 项目做出了超过 100 万次贡献，是其他贡献者的 2.3 倍。PostgreSQL 是世界上最先进的开源数据库之一，它提供了一系列全面的功能，可满足广泛的数据处理需求，其活跃的社区也在不断增强其功能。而 Java 作为一种通用编程语言，几十年来一直是开发社区的主要工具，为构建强大的应用程序提供了一个可靠的平台。

选择成熟的技术不仅能带来成熟功能的好处，还能保证连续性。新的数据库或语言模型尽管可能很有前途，但相对于这些经过测试的技术来说，他们还缺少足够的跟踪记录。新技术的风险之一在于它们可能会停产或缺乏支持，这就对应用程序的稳定性和寿命造成了威胁。

旅行者号团队[采用铝箔来抵抗辐射](https://www.businessinsider.com/voyager-kitchen-aluminum-wrap-radiation-short-circuit-2017-9)，该做法就很好地诠释了这一原则。他们选择了一种简单、可靠、可用的解决方案来保护任务中的敏感仪器。铝箔可能不是一个足够前沿或激动人心的选择，但它实用、可靠，并最终取得了成功。同样，在为现代应用选择基础技术时，有时“平淡”的选择才是最好的选择。不要追逐最新的潮流，而是要选择有效的、经得起时间考验的技术。

厂商支持是选择基础技术时的另一个重要考虑因素。可靠的平台提供商能够提供够高的（SLA）。例如，[谷歌 Kubernetes 引擎（GKE）](https://cloud.google.com/kubernetes-engine/sla)提供 99.95% 的SLA，[云存储](https://cloud.google.com/storage/docs/faq#policy)之所以不会丢失数据，是由于采用了支持 99.99999999999% 的可用性的设计。

## 平淡并非乏味

并不是说我们不应该尝试新技术，也不是说鼓励客户跟我们一样。[创新战略](https://future.battery.com/blog/business-development/is-your-enterprise-innovation-strategy-tired-or-wired-our-advice-move-quickly-and-partner-with-early-stage-tech/)是必要的。创新光谱的概念在这里很有帮助。这个光谱代表了不同程度的技术创新，企业可以根据自身的具体需求和能力加以运用。在光谱的一端，是渐进式创新，即对现有产品、服务或流程进行微小的改进或扩展。另一端是激进或破坏性创新，涉及创造全新的产品或服务，有可能颠覆整个行业。

平衡尖端与传统技术的一个典型例子就是许多金融机构。它们可能会将人工智能和机器学习用于欺诈检测或预测分析，而核心系统则依赖那些久经考验的技术。这种新旧技术的融合，使他们从最新技术进步中获益的同时，又不会危及关键业务的稳定性和可靠性。[银行业发现](https://www.insiderintelligence.com/content/banks-losing-on-new-customers-must-bring-innovation-customer-experience)，这种做法也有扼杀创新的风险，并可能导致客户另寻他处。

对于开发人员来说，谷歌云基于 Kubernetes 的平台在创新性和稳定性之间实现了类似的平衡。例如，研究人员可以利用 GKE 中共享的的尖端 GPU 来[探索宇宙的起源](https://cloud.google.com/blog/products/containers-kubernetes/gke-gpu-sharing-helps-scientists-quest-for-neutrinos)，而 BBC 则使用 [Cloud Run](https://cloud.google.com/run) 的无服务器容器技术来满足忙时需求。

采用平台工程等最佳实践可以为推出新技术奠定坚实的基础。平台工程侧重于创建一个稳定、可扩展和安全的平台，以便快速部署应用程序。GitOps 是另一种重要的实践，它将 Git 作为声明式基础架构和应用程序的单一真实来源。以 Git 为交付管道的中心，开发人员可以使用熟悉的工具提出 Pull Request。可以轻松的进行变更的推出或回滚，从而使采用新技术的过程更加顺畅。

在开发现代化应用时，开发人员需要相信他们所选择的基础技术是可靠和持久的。如果没有这种保证，开发人员可能会对承担风险或探索创造性的解决方案犹豫不决。为了给开发人员以信心，有效的平台工程战略可以为推出新技术奠定坚实的基础，同时确保稳定性和安全性。

平淡也可以很美，这种美在长期项目中会更加耀眼。不管修路、造飞船，还是微服务或网络架构，基本结构都需要能够承受未来可能发生的一切。坚实、耐用的基础可为开发人员提供突破极限所需的能力和可靠性，使他们的智慧结晶在 150 亿英里之外仍能茁壮成长。
