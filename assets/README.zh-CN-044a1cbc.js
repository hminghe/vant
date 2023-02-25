import{o as a,a as t,z as n}from"./vue-libs-be453a05.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Sticky 粘性布局</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Sticky 组件与 CSS 中 <code>position: sticky</code> 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sticky</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sticky</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>将内容包裹在 <code>Sticky</code> 组件内即可。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>基础用法<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xi-ding-ju-chi" tabindex="-1">吸顶距离</h3><p>通过 <code>offset-top</code> 属性可以设置组件在吸顶时与顶部的距离。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>吸顶距离<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-rong-qi" tabindex="-1">指定容器</h3><p>通过 <code>container</code> 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:container</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>指定容器<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> container = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">return</span> { container };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xi-di-ju-chi" tabindex="-1">吸底距离</h3><p>将 <code>position</code> 设置为 <code>bottom</code> 可以让组件吸附在底部。通过 <code>offset-bottom</code> 属性可以设置组件在吸底时与底部的距离。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-bottom</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>吸底距离<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>position</td><td>吸附位置，可选值为 <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>offset-top</td><td>吸顶时与顶部的距离，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>offset-bottom</td><td>吸底时与底部的距离，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>z-index</td><td>吸顶时的 z-index</td><td><em>number | string</em></td><td><code>99</code></td></tr><tr><td>container</td><td>容器对应的 HTML 节点</td><td><em>Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当吸顶状态改变时触发</td><td><em>isFixed: boolean</em></td></tr><tr><td>scroll</td><td>滚动时触发</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StickyProps</span>, <span class="hljs-title class_">StickyPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-sticky-z-index</td><td><em>99</em></td><td>-</td></tr></tbody></table></div>`,14),p=[e],r={__name:"README.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),t("div",l,p))}};export{r as default};
