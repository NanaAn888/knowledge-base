import{_ as a,H as i,f as t,i as o}from"./chunks/framework.CGh9YNlq.js";const d=JSON.parse('{"title":"Hagging Face","description":"","frontmatter":{},"headers":[],"relativePath":"notes/HaggingFace.md","filePath":"notes/HaggingFace.md"}'),n={name:"notes/HaggingFace.md"};function s(l,e,r,g,u,c){return i(),t("div",null,[...e[0]||(e[0]=[o(`<h1 id="hagging-face" tabindex="-1">Hagging Face <a class="header-anchor" href="#hagging-face" aria-label="Permalink to &quot;Hagging Face&quot;">​</a></h1><p>Hugging Face is basically the &quot;GitHub + toolkit&quot; for machine learnning models. It is friendly to the biginers. It has huge community and model ecosystem and works with PyTorch and TensorFlow. At a high level, it gives three things:</p><ol><li>A huge model hub A public library of thousands of pre-trained models. We can search and download models for tasks like:</li></ol><ul><li>text classification</li><li>translation</li><li>summarization</li><li>chatbots</li><li>image generation</li></ul><ol start="2"><li>Easy-to-use libraries The most popular one is transformers, which lets us use powerful models with just a few lines of code. There are also others like:</li></ol><ul><li>datasets--load and process datasets</li><li>accelerate--run models faster(GPU, distributed)</li><li>diffusers--for image/video generation</li></ul><p>3.Tools for training and deployment We can fine-tune models, deploy APIs.</p><h1 id="how-to-use-hugging-face-e-g" tabindex="-1">How to use Hugging Face(e.g.) <a class="header-anchor" href="#how-to-use-hugging-face-e-g" aria-label="Permalink to &quot;How to use Hugging Face(e.g.)&quot;">​</a></h1><ol><li><p>Install the library</p><p>pip install transformers</p></li><li><p>Use a model in a few lines</p></li></ol><p>Here is a simple sentiment analysis example:</p><pre><code>python

from transformers import pipeline

classifier = pipeline(&quot;sentiment-analysis&quot;)

result = classifier(&quot;I love Hugging Face!&quot;)

print(result)
</code></pre><p>Here is an example using a specific model from the Hub</p><pre><code>python

from transformers import pipeline

summarizer = pipeline(&quot;summarization&quot;, model=&quot;facebook/bart-large-cnn&quot;)

text = &quot;Long article here...&quot;
print(summarizer(text))
</code></pre>`,13)])])}const m=a(n,[["render",s]]);export{d as __pageData,m as default};
