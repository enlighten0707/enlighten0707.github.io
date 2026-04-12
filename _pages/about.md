---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a Ph.D student in Shanghai Jiao Tong University (SJTU), under the supervision of Prof. [Cewu Lu](https://www.mvig.org/) and [Yong-Lu Li](https://dirtyharrylyl.github.io/). Prior to that, I received my Bachelor's degree from SJTU in 2022. 

My research focuses on how agents interact with objects. 
Prior to 2024, I concentrated on **Human-Object Interaction (HOI)** — detecting and recognizing interaction semantics between humans and objects, with representative works including [PartMap](https://arxiv.org/pdf/2207.14192), [Symbol-LLM](https://proceedings.neurips.cc/paper_files/paper/2023/file/5edb57c05c81d04beb716ef1d542fe9e-Paper-Conference.pdf), and [Pangea](https://openaccess.thecvf.com/content/CVPR2024/papers/Li_From_Isolated_Islands_to_Pangea_Unifying_Semantic_Space_for_Human_CVPR_2024_paper.pdf). Since then, I have expanded my research toward **transferring HOI knowledge to robotic systems**, and [GPS](https://enlighten0707.github.io/gps/) represents an initial outcome of this ongoing effort.

Publications
======

<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 1 200px; max-width: 200px; width: 100%; margin-right: 20px; display: flex; gap: 8px;">
    <video id="gps-video-1" autoplay muted loop playsinline preload="metadata" style="width: calc(50% - 4px); height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block;">
      <source src="/images/gps1_cropped.mp4?v=3" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video id="gps-video-2" autoplay muted loop playsinline preload="metadata" style="width: calc(50% - 4px); height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block;">
      <source src="/images/gps2_cropped.mp4?v=3" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">GPS: Geometric Primary Structure for Articulated Parts Perception in Robot Manipulation</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;"><strong>Xiaoqian Wu</strong>, Yejie Guo, Xiaoyang Chen, Lixin Yang, Cewu Lu, Yong-Lu Li</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>CVPR 2026 (findings)</strong>
      <a href="https://enlighten0707.github.io/" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://enlighten0707.github.io/" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://enlighten0707.github.io/gps/" style="color: #007acc;">[project]</a>
      (coming soon)
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">VR-based data collection system for articulated objects in real-world, which balances scalability and data quality.</p>
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


<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 0 200px; margin-right: 20px;">
    <img src="/images/pangea.jpg" alt="Pangea Framework" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">From Isolated Islands to Pangea: Unifying Semantic Space for Human Action Understanding</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">Yong-Lu Li*, <strong>Xiaoqian Wu*</strong>, Xinpeng Liu, Yiming Dou, Yikun Ji, Junyi Zhang, Yixing Li, Jingru Tan, Xudong Lu, Cewu Lu</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>CVPR 2024 (highlight)</strong>
      <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Li_From_Isolated_Islands_to_Pangea_Unifying_Semantic_Space_for_Human_CVPR_2024_paper.pdf" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/Sandwich" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://mvig-rhos.com/pangea" style="color: #007acc;">[project]</a>
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">A unified framework that bridges isolated action datasets by learning shared semantic representations across different human activity domains.</p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 0 200px; margin-right: 20px;">
    <img src="/images/symbol_llm.jpg" alt="Symbol-LLM Framework" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">Symbol-LLM: Leverage Language Models for Symbolic System in Visual Human Activity Reasoning</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;"><strong>Xiaoqian Wu</strong>, Yong-Lu Li, Jianhua Sun, Cewu Lu</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>NeurIPS 2023</strong>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/5edb57c05c81d04beb716ef1d542fe9e-Paper-Conference.pdf" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/enlighten0707/Symbol-LLM" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="https://mvig-rhos.com/symbol_llm" style="color: #007acc;">[project]</a>
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">Leverage Large Language Models and neuro-symbolic computation to generate human part primitives, thus improving activity reasoning.</p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 0 200px; margin-right: 20px;">
    <img src="/images/partmap.jpg" alt="Body-Part HOI Detection" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">Mining Cross-Person Cues for Body-Part Interactiveness Learning in HOI Detection</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;"><strong>Xiaoqian Wu*</strong>, Yong-Lu Li*, Xinpeng Liu, Junyi Zhang, Yuzhe Wu, Cewu Lu</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>ECCV 2022</strong>
      <a href="https://arxiv.org/pdf/2207.14192" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/enlighten0707/Body-Part-Map-for-Interactiveness" style="color: #007acc;">[code]</a>
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">Human-Object Interaction learning from a global, scene-level perspective.</p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 0 200px; margin-right: 20px;">
    <img src="/images/hake.jpg" alt="HAKE Knowledge Engine" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">HAKE: A Knowledge Engine Foundation for Human Activity Understanding</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">Yong-Lu Li, Xinpeng Liu, <strong>Xiaoqian Wu</strong>, Yizhuo Li, Zuoyu Qiu, Liang Xu, Yue Xu, Hao-Shu Fang, Cewu Lu</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>TPAMI 2022</strong>
      <a href="https://arxiv.org/pdf/2202.06851" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/HAKE-Action-Torch/tree/HAKE-Reason" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="http://hake-mvig.cn/" style="color: #007acc;">[project]</a>
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">Program interpretable logic rules to infer human activity semantics.</p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-bottom: 30px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="flex: 0 0 200px; margin-right: 20px;">
    <img src="/images/tin_teaser.jpg" alt="Transferable Interactiveness Network" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0; color: #333;">Transferable Interactiveness Knowledge for Human-Object Interaction Detection</h3>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">Yong-Lu Li, Xinpeng Liu, <strong>Xiaoqian Wu</strong>, Xijie Huang, Liang Xu, Cewu Lu</p>
    <p style="margin: 0 0 8px 0; color: #666; font-size: 15px;">
      <strong>TPAMI 2021</strong>
      <a href="https://arxiv.org/pdf/2101.10292" style="margin-left: 8px; margin-right: 5px; color: #007acc;">[paper]</a>
      <a href="https://github.com/DirtyHarryLYL/Transferable-Interactiveness-Network" style="margin-right: 5px; color: #007acc;">[code]</a>
      <a href="http://hake-mvig.cn/" style="color: #007acc;">[project]</a>
    </p>
    <p style="margin: 0; color: #888; font-size: 14px; font-style: italic; line-height: 1.4;">Introduce transferable interactiveness knowledge to enhance human-object interaction detection.</p>
  </div>
</div>
