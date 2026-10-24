---
permalink: /
title: "About"
author_profile: true
panda_greeting: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a Ph.D student in Shanghai Jiao Tong University (SJTU), under the supervision of Prof. [Cewu Lu](https://www.mvig.org/). Prior to that, I received my Bachelor's degree from SJTU in 2022.

My research focuses on how agents interact with objects. Prior to 2024, I concentrated on **Human-Object Interaction (HOI)** — detecting and recognizing interaction semantics between humans and objects, with representative works including [PartMap](https://arxiv.org/pdf/2207.14192), [Symbol-LLM](https://proceedings.neurips.cc/paper_files/paper/2023/file/5edb57c05c81d04beb716ef1d542fe9e-Paper-Conference.pdf), and [Pangea](https://openaccess.thecvf.com/content/CVPR2024/papers/Li_From_Isolated_Islands_to_Pangea_Unifying_Semantic_Space_for_Human_CVPR_2024_paper.pdf).

Since then, I have expanded my research toward **transferring HOI knowledge to robotic systems**, and [GPS](https://enlighten0707.github.io/gps/) represents an initial outcome of this ongoing effort.

Experience
======

<div class="experience-entry">
  <div class="experience-entry__aside">
    <div class="experience-entry__date">Mar 2026 – Oct 2026</div>
    <img class="experience-entry__logo" src="/images/bytedance-logo.png" alt="ByteDance logo">
  </div>
  <div class="experience-entry__body">
    <h3>Research Intern — ByteDance</h3>
    <p class="experience-entry__team">Seed Model <em>Beijing, China</em></p>
    <p class="experience-entry__area"><em>Embodied Multimodal Foundation Models</em></p>
    <div class="experience-entry__topics" aria-label="Research topics">
      <span>Ego-centric UMI</span>
      <span>Active Perception</span>
      <span>Embodied Reasoning</span>
    </div>
  </div>
</div>

Selected Publications
======

<div class="publication-card">
  <div class="publication-card__media publication-card__media--videos">
    <video id="gps-video-1" autoplay muted loop playsinline preload="metadata" style="width: calc(50% - 4px); height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block;">
      <source src="/images/gps1_cropped.mp4?v=3" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video id="gps-video-2" autoplay muted loop playsinline preload="metadata" style="width: calc(50% - 4px); height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block;">
      <source src="/images/gps2_cropped.mp4?v=3" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">GPS: Geometric Primary Structure for Articulated Parts Perception in Robot Manipulation</h3>
    <p class="publication-card__meta"><strong>Xiaoqian Wu</strong>, Yejie Guo, Xiaoyang Chen, Lixin Yang, Cewu Lu, Yong-Lu Li</p>
    <p class="publication-card__meta">
      <strong>CVPR 2026 (findings)</strong>
      <a href="https://openaccess.thecvf.com/content/CVPR2026F/papers/Wu_Revisiting_Articulated_Parts_Perception_in_Robot_Manipulation_CVPRF_2026_paper.pdf" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/enlighten0707/Geometric_Primary_Structure" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://enlighten0707.github.io/gps/" style="color: #007acc;">[project]</a>
    </p>
    <p class="publication-card__summary">VR-based data collection system for articulated objects in real-world, which balances scalability and data quality.</p>
  </div>
</div>

<script>
  (function () {
    var v1 = document.getElementById('gps-video-1');
    var v2 = document.getElementById('gps-video-2');
    if (!v1 || !v2) return;

    var syncing = false;

    function align(master, slave) {
      if (syncing) return;
      if (Math.abs(master.currentTime - slave.currentTime) <= 0.12) return;
      syncing = true;
      slave.currentTime = master.currentTime;
      syncing = false;
    }

    function playBoth(master, slave) {
      align(master, slave);
      slave.play().catch(function () {});
    }

    v1.addEventListener('play', function () { playBoth(v1, v2); });
    v2.addEventListener('play', function () { playBoth(v2, v1); });
    v1.addEventListener('seeking', function () { align(v1, v2); });
    v2.addEventListener('seeking', function () { align(v2, v1); });
    v1.addEventListener('ended', function () { v2.currentTime = 0; });
    v2.addEventListener('ended', function () { v1.currentTime = 0; });
    v1.addEventListener('pause', function () { if (!v2.paused) v2.pause(); });
    v2.addEventListener('pause', function () { if (!v1.paused) v1.pause(); });
  })();
</script>


<div class="publication-card">
  <div class="publication-card__media">
    <img src="/images/pangea.jpg" alt="Pangea Framework" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">From Isolated Islands to Pangea: Unifying Semantic Space for Human Action Understanding</h3>
    <p class="publication-card__meta">Yong-Lu Li*, <strong>Xiaoqian Wu*</strong>, Xinpeng Liu, Yiming Dou, Yikun Ji, Junyi Zhang, Yixing Li, Jingru Tan, Xudong Lu, Cewu Lu</p>
    <p class="publication-card__meta">
      <strong>CVPR 2024 (highlight)</strong>
      <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Li_From_Isolated_Islands_to_Pangea_Unifying_Semantic_Space_for_Human_CVPR_2024_paper.pdf" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/Sandwich" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://mvig-rhos.com/pangea" style="color: #007acc;">[project]</a>
    </p>
    <p class="publication-card__summary">A unified framework that bridges isolated action datasets by learning shared semantic representations across different human activity domains.</p>
  </div>
</div>

<div class="publication-card">
  <div class="publication-card__media">
    <img src="/images/symbol_llm.jpg" alt="Symbol-LLM Framework" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">Symbol-LLM: Leverage Language Models for Symbolic System in Visual Human Activity Reasoning</h3>
    <p class="publication-card__meta"><strong>Xiaoqian Wu</strong>, Yong-Lu Li, Jianhua Sun, Cewu Lu</p>
    <p class="publication-card__meta">
      <strong>NeurIPS 2023</strong>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/5edb57c05c81d04beb716ef1d542fe9e-Paper-Conference.pdf" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/enlighten0707/Symbol-LLM" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://mvig-rhos.com/symbol_llm" style="color: #007acc;">[project]</a>
    </p>
    <p class="publication-card__summary">Leverage Large Language Models and neuro-symbolic computation to generate human part primitives, thus improving activity reasoning.</p>
  </div>
</div>

<div class="publication-card">
  <div class="publication-card__media">
    <img src="/images/partmap.jpg" alt="Body-Part HOI Detection" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">Mining Cross-Person Cues for Body-Part Interactiveness Learning in HOI Detection</h3>
    <p class="publication-card__meta"><strong>Xiaoqian Wu*</strong>, Yong-Lu Li*, Xinpeng Liu, Junyi Zhang, Yuzhe Wu, Cewu Lu</p>
    <p class="publication-card__meta">
      <strong>ECCV 2022</strong>
      <a href="https://arxiv.org/pdf/2207.14192" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/enlighten0707/Body-Part-Map-for-Interactiveness" style="color: #007acc;">[code]</a>
    </p>
    <p class="publication-card__summary">Human-Object Interaction learning from a global, scene-level perspective.</p>
  </div>
</div>

<div class="publication-card">
  <div class="publication-card__media">
    <img src="/images/hake.jpg" alt="HAKE Knowledge Engine" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">HAKE: A Knowledge Engine Foundation for Human Activity Understanding</h3>
    <p class="publication-card__meta">Yong-Lu Li, Xinpeng Liu, <strong>Xiaoqian Wu</strong>, Yizhuo Li, Zuoyu Qiu, Liang Xu, Yue Xu, Hao-Shu Fang, Cewu Lu</p>
    <p class="publication-card__meta">
      <strong>TPAMI 2022</strong>
      <a href="https://arxiv.org/pdf/2202.06851" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/HAKE-Action-Torch/tree/HAKE-Reason" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="http://hake-mvig.cn/" style="color: #007acc;">[project]</a>
    </p>
    <p class="publication-card__summary">Program interpretable logic rules to infer human activity semantics.</p>
  </div>
</div>

<div class="publication-card">
  <div class="publication-card__media">
    <img src="/images/tin_teaser.jpg" alt="Transferable Interactiveness Network" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div class="publication-card__body">
    <h3 class="publication-card__title">Transferable Interactiveness Knowledge for Human-Object Interaction Detection</h3>
    <p class="publication-card__meta">Yong-Lu Li, Xinpeng Liu, <strong>Xiaoqian Wu</strong>, Xijie Huang, Liang Xu, Cewu Lu</p>
    <p class="publication-card__meta">
      <strong>TPAMI 2021</strong>
      <a href="https://arxiv.org/pdf/2101.10292" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/Transferable-Interactiveness-Network" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="http://hake-mvig.cn/" style="color: #007acc;">[project]</a>
    </p>
    <p class="publication-card__summary">Introduce transferable interactiveness knowledge to enhance human-object interaction detection.</p>
  </div>
</div>

Selected Awards
======

- Huatai Securities Technology Scholarship (2025)
- Shanghai Outstanding Graduates (2022)
- National Scholarship (2019)

