## 0. `tsconfig.json` (extrait chemins)

À adapter à ton fichier existant, mais l’important c’est `baseUrl` + `paths` :

<pre class="overflow-visible!" data-start="365" data-end="1154"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-jsonc"><span>{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@lib/*": ["src/lib/*"],
      "@types/*": ["src/types/*"],
      "@constants/*": ["src/constants/*"],
      "@hooks/*": ["src/hooks/*"],
      "@ui/*": ["src/components/ui/*"]
    }
  },
  "include": ["src"]
}
</span></code></div></div></pre>

---

# 1. Fichiers racine `src/`

### `src/main.tsx`

<pre class="overflow-visible!" data-start="1210" data-end="1479"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>React</span><span></span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>ReactDOM</span><span></span><span>from</span><span></span><span>'react-dom/client'</span><span>;
</span><span>import</span><span></span><span>App</span><span></span><span>from</span><span></span><span>'./App'</span><span>;
</span><span>import</span><span></span><span>'./styles/globals.css'</span><span>;

</span><span>ReactDOM</span><span>.</span><span>createRoot</span><span>(</span><span>document</span><span>.</span><span>getElementById</span><span>(</span><span>'root'</span><span>) </span><span>as</span><span></span><span>HTMLElement</span><span>).</span><span>render</span><span>(
  </span><span><span class="language-xml"><React.StrictMode</span></span><span>>
    </span><span><App</span><span> />
  </span><span></React.StrictMode</span><span>>
);
</span></span></code></div></div></pre>

### `src/App.tsx`

<pre class="overflow-visible!" data-start="1500" data-end="2931"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span> { </span><span>QuizContainer</span><span> } </span><span>from</span><span></span><span>'@components/quiz/QuizContainer'</span><span>;
</span><span>import</span><span> { </span><span>Builder</span><span> } </span><span>from</span><span></span><span>'@components/builder/Builder'</span><span>;
</span><span>import</span><span> { </span><span>ThemeManager</span><span> } </span><span>from</span><span></span><span>'@components/common/ThemeManager'</span><span>;
</span><span>import</span><span> { </span><span>DEFAULT_QUIZ_CONFIG</span><span> } </span><span>from</span><span></span><span>'@constants/quiz.constants'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>function</span><span></span><span>App</span><span>(</span><span></span><span>) {
  </span><span>const</span><span> [quizConfig, setQuizConfig] = useState<</span><span>QuizConfig</span><span>>(</span><span>DEFAULT_QUIZ_CONFIG</span><span>);
  </span><span>const</span><span> [mode, setMode] = useState<</span><span>'builder'</span><span> | </span><span>'preview'</span><span>>(</span><span>'builder'</span><span>);

  </span><span>const</span><span> theme = quizConfig.</span><span>theme</span><span> || </span><span>DEFAULT_QUIZ_CONFIG</span><span>.</span><span>theme</span><span>;

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"app-root"</span><span>>
      </span><span><ThemeManager</span><span></span><span>theme</span><span>=</span><span>{theme}</span><span> />

      </span><span><header</span><span></span><span>className</span><span>=</span><span>"app-header"</span><span>>
        </span><span><h1</span><span>>Face2Face – Quiz Builder</span><span></h1</span><span>>
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"app-header__modes"</span><span>>
          </span><span><button</span><span>
            </span><span>className</span><span>=</span><span>{mode</span><span> === </span><span>'builder'</span><span> ? '</span><span>active</span><span>' </span><span>:</span><span> ''}
            </span><span>onClick</span><span>=</span><span>{()</span><span> => setMode('builder')}
          >
            Builder
          </span><span></button</span><span>>
          </span><span><button</span><span>
            </span><span>className</span><span>=</span><span>{mode</span><span> === </span><span>'preview'</span><span> ? '</span><span>active</span><span>' </span><span>:</span><span> ''}
            </span><span>onClick</span><span>=</span><span>{()</span><span> => setMode('preview')}
          >
            Preview
          </span><span></button</span><span>>
        </span><span></div</span><span>>
      </span><span></header</span><span>>

      </span><span><main</span><span></span><span>className</span><span>=</span><span>"app-main"</span><span>>
        {mode === 'builder' ? (
          </span><span><Builder</span><span></span><span>config</span><span>=</span><span>{quizConfig}</span><span></span><span>setConfig</span><span>=</span><span>{setQuizConfig}</span><span> />
        ) : (
          </span><span><QuizContainer</span><span></span><span>quizConfig</span><span>=</span><span>{quizConfig}</span><span> />
        )}
      </span><span></main</span><span>>
    </span><span></div</span><span>>
  );
}

</span><span>export</span><span></span><span>default</span><span></span><span>App</span><span>;
</span></span></code></div></div></pre>

### `src/vite-env.d.ts`

<pre class="overflow-visible!" data-start="2958" data-end="3005"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>/// <reference types="vite/client" /></span><span>
</span></span></code></div></div></pre>

---

# 2. Styles

### `src/styles/globals.css`

<pre class="overflow-visible!" data-start="3055" data-end="4736"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-css"><span><span>:root</span><span> {
  </span><span>--theme-bg</span><span>: </span><span>#050816</span><span>;
  </span><span>--theme-primary</span><span>: </span><span>#2b6bf2</span><span>;
  </span><span>--theme-primary-hover</span><span>: </span><span>#1c4ab3</span><span>;
  </span><span>--theme-accent</span><span>: </span><span>#f97316</span><span>;
  </span><span>--theme-text</span><span>: </span><span>#f9fafb</span><span>;
  </span><span>--theme-button-text</span><span>: </span><span>#ffffff</span><span>;
  </span><span>--theme-font</span><span>: system-ui, -apple-system, BlinkMacSystemFont, </span><span>'Segoe UI'</span><span>, sans-serif;
}

*,
*</span><span>::before</span><span>,
*</span><span>::after</span><span> {
  </span><span>box-sizing</span><span>: border-box;
}

</span><span>html</span><span>,
</span><span>body</span><span>,
</span><span>#root</span><span> {
  </span><span>margin</span><span>: </span><span>0</span><span>;
  </span><span>padding</span><span>: </span><span>0</span><span>;
  </span><span>height</span><span>: </span><span>100%</span><span>;
  </span><span>font-family</span><span>: </span><span>var</span><span>(--theme-font);
  </span><span>background</span><span>: </span><span>var</span><span>(--theme-bg);
  </span><span>color</span><span>: </span><span>var</span><span>(--theme-text);
}

</span><span>body</span><span> {
  </span><span>background</span><span>: </span><span>radial-gradient</span><span>(circle at top, </span><span>#111827</span><span>, </span><span>#020617</span><span></span><span>60%</span><span>);
}

</span><span>.app-root</span><span> {
  </span><span>min-height</span><span>: </span><span>100vh</span><span>;
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
}

</span><span>.app-header</span><span> {
  </span><span>padding</span><span>: </span><span>1rem</span><span></span><span>1.5rem</span><span>;
  </span><span>border-bottom</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.3</span><span>);
  </span><span>display</span><span>: flex;
  </span><span>align-items</span><span>: center;
  </span><span>justify-content</span><span>: space-between;
  backdrop-</span><span>filter</span><span>: </span><span>blur</span><span>(</span><span>12px</span><span>);
  </span><span>position</span><span>: sticky;
  </span><span>top</span><span>: </span><span>0</span><span>;
  </span><span>z-index</span><span>: </span><span>10</span><span>;
}

</span><span>.app-header</span><span></span><span>h1</span><span> {
  </span><span>font-size</span><span>: </span><span>1.3rem</span><span>;
  </span><span>margin</span><span>: </span><span>0</span><span>;
}

</span><span>.app-header__modes</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>gap</span><span>: </span><span>0.5rem</span><span>;
}

</span><span>.app-header__modes</span><span></span><span>button</span><span> {
  </span><span>border-radius</span><span>: </span><span>999px</span><span>;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.5</span><span>);
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.8</span><span>);
  </span><span>color</span><span>: </span><span>#e5e7eb</span><span>;
  </span><span>padding</span><span>: </span><span>0.3rem</span><span></span><span>0.9rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.85rem</span><span>;
  </span><span>cursor</span><span>: pointer;
}

</span><span>.app-header__modes</span><span></span><span>button</span><span>.active</span><span> {
  </span><span>background</span><span>: </span><span>var</span><span>(--theme-primary);
  </span><span>border-color</span><span>: transparent;
  </span><span>color</span><span>: </span><span>var</span><span>(--theme-button-text);
}

</span><span>.app-main</span><span> {
  </span><span>flex</span><span>: </span><span>1</span><span>;
  </span><span>display</span><span>: grid;
  place-items: stretch;
  </span><span>padding</span><span>: </span><span>1rem</span><span>;
}

</span><span>/* Layout simple pour le builder / quiz */</span><span>
</span><span>.builder-root</span><span>,
</span><span>.quiz-root</span><span> {
  </span><span>max-width</span><span>: </span><span>1100px</span><span>;
  </span><span>margin</span><span>: </span><span>0</span><span> auto;
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
  </span><span>border-radius</span><span>: </span><span>18px</span><span>;
  </span><span>padding</span><span>: </span><span>1rem</span><span>;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.35</span><span>);
}
</span></span></code></div></div></pre>

---

# 3. Types

## `src/types/quiz.types.ts`

<pre class="overflow-visible!" data-start="4785" data-end="5668"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>enum</span><span></span><span>StepType</span><span> {
  </span><span>WELCOME</span><span> = </span><span>'WELCOME'</span><span>,
  </span><span>QUESTION</span><span> = </span><span>'QUESTION'</span><span>,
  </span><span>MESSAGE</span><span> = </span><span>'MESSAGE'</span><span>,
  </span><span>LEAD_CAPTURE</span><span> = </span><span>'LEAD_CAPTURE'</span><span>,
  </span><span>COMPLETION</span><span> = </span><span>'COMPLETION'</span><span>,
}

</span><span>export</span><span></span><span>type</span><span></span><span>MediaType</span><span> = </span><span>'image'</span><span> | </span><span>'video'</span><span> | </span><span>'audio'</span><span> | </span><span>'youtube'</span><span> | </span><span>'none'</span><span>;

</span><span>export</span><span></span><span>interface</span><span></span><span>StepMedia</span><span> {
  </span><span>type</span><span>: </span><span>MediaType</span><span>;
  url?: </span><span>string</span><span>;
  thumbnailUrl?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>QuizOption</span><span> {
  </span><span>id</span><span>: </span><span>string</span><span>;
  </span><span>label</span><span>: </span><span>string</span><span>;
  nextStepId?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>QuizStep</span><span> {
  </span><span>id</span><span>: </span><span>string</span><span>;
  </span><span>type</span><span>: </span><span>StepType</span><span>;
  </span><span>title</span><span>: </span><span>string</span><span>;
  description?: </span><span>string</span><span>;
  media?: </span><span>StepMedia</span><span>;
  options?: </span><span>QuizOption</span><span>[];
}

</span><span>export</span><span></span><span>interface</span><span></span><span>ThemeColors</span><span> {
  </span><span>background</span><span>: </span><span>string</span><span>;
  </span><span>primary</span><span>: </span><span>string</span><span>;
  </span><span>accent</span><span>: </span><span>string</span><span>;
  </span><span>text</span><span>: </span><span>string</span><span>;
  </span><span>buttonText</span><span>: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>ThemeConfig</span><span> {
  </span><span>colors</span><span>: </span><span>ThemeColors</span><span>;
  </span><span>font</span><span>: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>QuizConfig</span><span> {
  id?: </span><span>string</span><span>;
  </span><span>name</span><span>: </span><span>string</span><span>;
  </span><span>steps</span><span>: </span><span>QuizStep</span><span>[];
  </span><span>theme</span><span>: </span><span>ThemeConfig</span><span>;
}
</span></span></code></div></div></pre>

## `src/types/builder.types.ts`

<pre class="overflow-visible!" data-start="5703" data-end="6273"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span>, </span><span>QuizStep</span><span>, </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'./quiz.types'</span><span>;

</span><span>export</span><span></span><span>interface</span><span></span><span>BuilderProps</span><span> {
  </span><span>config</span><span>: </span><span>QuizConfig</span><span>;
  </span><span>setConfig</span><span>: </span><span>(config: QuizConfig</span><span>) => </span><span>void</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>StepEditorProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onChange</span><span>: </span><span>(step: QuizStep</span><span>) => </span><span>void</span><span>;
  </span><span>onDelete</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>ThemeEditorProps</span><span> {
  </span><span>theme</span><span>: </span><span>ThemeConfig</span><span>;
  </span><span>onChange</span><span>: </span><span>(theme: ThemeConfig</span><span>) => </span><span>void</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>ShareAndEmbedProps</span><span> {
  quizId?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>AIAssistantProps</span><span> {
  </span><span>config</span><span>: </span><span>QuizConfig</span><span>;
  </span><span>onConfigChange</span><span>: </span><span>(config: QuizConfig</span><span>) => </span><span>void</span><span>;
}
</span></span></code></div></div></pre>

## `src/types/results.types.ts`

<pre class="overflow-visible!" data-start="6308" data-end="6764"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>interface</span><span></span><span>AnswerRecord</span><span> {
  </span><span>questionId</span><span>: </span><span>string</span><span>;
  </span><span>answer</span><span>: </span><span>string</span><span> | </span><span>string</span><span>[] | </span><span>null</span><span>;
  mediaUrl?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>Submission</span><span> {
  </span><span>id</span><span>: </span><span>string</span><span>;
  </span><span>createdAt</span><span>: </span><span>string</span><span>;
  leadEmail?: </span><span>string</span><span>;
  leadName?: </span><span>string</span><span>;
  </span><span>answers</span><span>: </span><span>AnswerRecord</span><span>[];
  metadata?: </span><span>Record</span><span><</span><span>string</span><span>, </span><span>unknown</span><span>>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>AnalysisResult</span><span> {
  </span><span>sentiment</span><span>: </span><span>'positive'</span><span> | </span><span>'neutral'</span><span> | </span><span>'negative'</span><span>;
  </span><span>keyPoints</span><span>: </span><span>string</span><span>[];
  recommendations?: </span><span>string</span><span>[];
  score?: </span><span>number</span><span>;
}
</span></span></code></div></div></pre>

## `src/types/index.ts`

<pre class="overflow-visible!" data-start="6791" data-end="6896"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span> * </span><span>from</span><span></span><span>'./quiz.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./builder.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./results.types'</span><span>;
</span></span></code></div></div></pre>

---

# 4. Constants

## `src/constants/quiz.constants.ts`

<pre class="overflow-visible!" data-start="6957" data-end="8480"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span>, </span><span>StepType</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>DEFAULT_QUIZ_CONFIG</span><span>: </span><span>QuizConfig</span><span> = {
  </span><span>id</span><span>: </span><span>'demo-quiz'</span><span>,
  </span><span>name</span><span>: </span><span>'Quiz de démonstration'</span><span>,
  </span><span>theme</span><span>: {
    </span><span>colors</span><span>: {
      </span><span>background</span><span>: </span><span>'#020617'</span><span>,
      </span><span>primary</span><span>: </span><span>'#2563eb'</span><span>,
      </span><span>accent</span><span>: </span><span>'#f97316'</span><span>,
      </span><span>text</span><span>: </span><span>'#f9fafb'</span><span>,
      </span><span>buttonText</span><span>: </span><span>'#ffffff'</span><span>,
    },
    </span><span>font</span><span>: </span><span>'Inter'</span><span>,
  },
  </span><span>steps</span><span>: [
    {
      </span><span>id</span><span>: </span><span>'welcome'</span><span>,
      </span><span>type</span><span>: </span><span>'WELCOME'</span><span></span><span>as</span><span></span><span>StepType</span><span>,
      </span><span>title</span><span>: </span><span>'Bienvenue dans le Quiz'</span><span>,
      </span><span>description</span><span>: </span><span>'Une démo rapide de ton funnel Face2Face.'</span><span>,
    },
    {
      </span><span>id</span><span>: </span><span>'q1'</span><span>,
      </span><span>type</span><span>: </span><span>'QUESTION'</span><span></span><span>as</span><span></span><span>StepType</span><span>,
      </span><span>title</span><span>: </span><span>'Première question'</span><span>,
      </span><span>description</span><span>: </span><span>'Comment utilises-tu actuellement la vidéo dans ton acquisition ?'</span><span>,
      </span><span>options</span><span>: [
        { </span><span>id</span><span>: </span><span>'opt1'</span><span>, </span><span>label</span><span>: </span><span>'Je ne l’utilise pas encore'</span><span> },
        { </span><span>id</span><span>: </span><span>'opt2'</span><span>, </span><span>label</span><span>: </span><span>'Quelques vidéos mais pas structurées'</span><span> },
        { </span><span>id</span><span>: </span><span>'opt3'</span><span>, </span><span>label</span><span>: </span><span>'Funnel vidéo déjà en place'</span><span> },
      ],
    },
    {
      </span><span>id</span><span>: </span><span>'message-1'</span><span>,
      </span><span>type</span><span>: </span><span>'MESSAGE'</span><span></span><span>as</span><span></span><span>StepType</span><span>,
      </span><span>title</span><span>: </span><span>'Merci pour ta réponse'</span><span>,
      </span><span>description</span><span>: </span><span>'Tu verras à quel point un quiz vidéo peut qualifier tes leads.'</span><span>,
    },
    {
      </span><span>id</span><span>: </span><span>'lead-capture'</span><span>,
      </span><span>type</span><span>: </span><span>'LEAD_CAPTURE'</span><span></span><span>as</span><span></span><span>StepType</span><span>,
      </span><span>title</span><span>: </span><span>'Pour recevoir ton analyse'</span><span>,
      </span><span>description</span><span>: </span><span>'Laisse ton e-mail pour recevoir un plan d’action adapté.'</span><span>,
    },
    {
      </span><span>id</span><span>: </span><span>'completion'</span><span>,
      </span><span>type</span><span>: </span><span>'COMPLETION'</span><span></span><span>as</span><span></span><span>StepType</span><span>,
      </span><span>title</span><span>: </span><span>'Merci !'</span><span>,
      </span><span>description</span><span>: </span><span>'Ton plan d’action sera bientôt dans ta boîte mail.'</span><span>,
    },
  ],
};
</span></span></code></div></div></pre>

## `src/constants/theme.constants.ts`

<pre class="overflow-visible!" data-start="8521" data-end="8892"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>DEFAULT_THEME</span><span>: </span><span>ThemeConfig</span><span> = {
  </span><span>colors</span><span>: {
    </span><span>background</span><span>: </span><span>'#020617'</span><span>,
    </span><span>primary</span><span>: </span><span>'#2563eb'</span><span>,
    </span><span>accent</span><span>: </span><span>'#f97316'</span><span>,
    </span><span>text</span><span>: </span><span>'#f9fafb'</span><span>,
    </span><span>buttonText</span><span>: </span><span>'#ffffff'</span><span>,
  },
  </span><span>font</span><span>: </span><span>'Inter'</span><span>,
};

</span><span>export</span><span></span><span>const</span><span></span><span>AVAILABLE_FONTS</span><span> = [
  </span><span>'Inter'</span><span>,
  </span><span>'Roboto'</span><span>,
  </span><span>'Poppins'</span><span>,
  </span><span>'Montserrat'</span><span>,
  </span><span>'Open Sans'</span><span>,
];
</span></span></code></div></div></pre>

## `src/constants/index.ts`

<pre class="overflow-visible!" data-start="8923" data-end="9001"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span> * </span><span>from</span><span></span><span>'./quiz.constants'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./theme.constants'</span><span>;
</span></span></code></div></div></pre>

---

# 5. Hooks

## `src/hooks/useQuizNavigation.ts`

<pre class="overflow-visible!" data-start="9057" data-end="9995"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span> { useCallback, useMemo } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>useQuizNavigation</span><span> = (</span><span>steps: QuizStep[], currentStepId: string</span><span> | </span><span>null</span><span>) => {
  </span><span>const</span><span> currentIndex = </span><span>useMemo</span><span>(
    </span><span>() =></span><span> steps.</span><span>findIndex</span><span>(</span><span>(s</span><span>) => s.</span><span>id</span><span> === currentStepId),
    [steps, currentStepId]
  );

  </span><span>const</span><span> currentStep = currentIndex >= </span><span>0</span><span> ? steps[currentIndex] : </span><span>null</span><span>;

  </span><span>const</span><span> canGoBack = currentIndex > </span><span>0</span><span>;
  </span><span>const</span><span> canGoNext = currentIndex >= </span><span>0</span><span> && currentIndex < steps.</span><span>length</span><span> - </span><span>1</span><span>;

  </span><span>const</span><span> getNextStepId = </span><span>useCallback</span><span>(</span><span>() =></span><span> {
    </span><span>if</span><span> (!canGoNext) </span><span>return</span><span></span><span>null</span><span>;
    </span><span>return</span><span> steps[currentIndex + </span><span>1</span><span>].</span><span>id</span><span>;
  }, [steps, currentIndex, canGoNext]);

  </span><span>const</span><span> getPrevStepId = </span><span>useCallback</span><span>(</span><span>() =></span><span> {
    </span><span>if</span><span> (!canGoBack) </span><span>return</span><span></span><span>null</span><span>;
    </span><span>return</span><span> steps[currentIndex - </span><span>1</span><span>].</span><span>id</span><span>;
  }, [steps, currentIndex, canGoBack]);

  </span><span>return</span><span> {
    currentStep,
    currentIndex,
    canGoBack,
    canGoNext,
    getNextStepId,
    getPrevStepId,
  };
};
</span></span></code></div></div></pre>

## `src/hooks/useTheme.ts`

<pre class="overflow-visible!" data-start="10025" data-end="10293"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span> { useMemo } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { </span><span>DEFAULT_THEME</span><span> } </span><span>from</span><span></span><span>'@constants/theme.constants'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>useTheme</span><span> = (</span><span>theme?: ThemeConfig</span><span>) => {
  </span><span>return</span><span></span><span>useMemo</span><span>(</span><span>() =></span><span> theme ?? </span><span>DEFAULT_THEME</span><span>, [theme]);
};
</span></span></code></div></div></pre>

## `src/hooks/useMediaRecorder.ts`

<pre class="overflow-visible!" data-start="10331" data-end="12287"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span> { useEffect, useRef, useState } </span><span>from</span><span></span><span>'react'</span><span>;

</span><span>type</span><span></span><span>MediaType</span><span> = </span><span>'audio'</span><span> | </span><span>'video'</span><span>;

</span><span>interface</span><span></span><span>UseMediaRecorderOptions</span><span> {
  </span><span>type</span><span>: </span><span>MediaType</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>useMediaRecorder</span><span> = (</span><span>{ type</span><span> }: UseMediaRecorderOptions) => {
  </span><span>const</span><span> [isRecording, setIsRecording] = </span><span>useState</span><span>(</span><span>false</span><span>);
  </span><span>const</span><span> [blob, setBlob] = useState<</span><span>Blob</span><span> | </span><span>null</span><span>>(</span><span>null</span><span>);
  </span><span>const</span><span> [error, setError] = useState<</span><span>string</span><span> | </span><span>null</span><span>>(</span><span>null</span><span>);
  </span><span>const</span><span> mediaRecorderRef = useRef<</span><span>MediaRecorder</span><span> | </span><span>null</span><span>>(</span><span>null</span><span>);
  </span><span>const</span><span> chunksRef = useRef<</span><span>BlobPart</span><span>[]>([]);

  </span><span>useEffect</span><span>(</span><span>() =></span><span> {
    </span><span>return</span><span></span><span>() =></span><span> {
      </span><span>if</span><span> (mediaRecorderRef.</span><span>current</span><span> && mediaRecorderRef.</span><span>current</span><span>.</span><span>state</span><span> !== </span><span>'inactive'</span><span>) {
        mediaRecorderRef.</span><span>current</span><span>.</span><span>stop</span><span>();
      }
    };
  }, []);

  </span><span>const</span><span></span><span>start</span><span> = </span><span>async</span><span> (</span><span></span><span>) => {
    </span><span>try</span><span> {
      </span><span>const</span><span></span><span>constraints</span><span>: </span><span>MediaStreamConstraints</span><span> =
        </span><span>type</span><span> === </span><span>'audio'</span><span>
          ? { </span><span>audio</span><span>: </span><span>true</span><span> }
          : { </span><span>audio</span><span>: </span><span>true</span><span>, </span><span>video</span><span>: </span><span>true</span><span> };

      </span><span>const</span><span> stream = </span><span>await</span><span> navigator.</span><span>mediaDevices</span><span>.</span><span>getUserMedia</span><span>(constraints);
      </span><span>const</span><span> recorder = </span><span>new</span><span></span><span>MediaRecorder</span><span>(stream);

      chunksRef.</span><span>current</span><span> = [];
      recorder.</span><span>ondataavailable</span><span> = </span><span>(e</span><span>) => chunksRef.</span><span>current</span><span>.</span><span>push</span><span>(e.</span><span>data</span><span>);
      recorder.</span><span>onstop</span><span> = </span><span>() =></span><span> {
        </span><span>const</span><span> recordedBlob = </span><span>new</span><span></span><span>Blob</span><span>(chunksRef.</span><span>current</span><span>, {
          </span><span>type</span><span>: </span><span>type</span><span> === </span><span>'audio'</span><span> ? </span><span>'audio/webm'</span><span> : </span><span>'video/webm'</span><span>,
        });
        </span><span>setBlob</span><span>(recordedBlob);
        stream.</span><span>getTracks</span><span>().</span><span>forEach</span><span>(</span><span>(track</span><span>) => track.</span><span>stop</span><span>());
      };

      mediaRecorderRef.</span><span>current</span><span> = recorder;
      recorder.</span><span>start</span><span>();
      </span><span>setIsRecording</span><span>(</span><span>true</span><span>);
      </span><span>setError</span><span>(</span><span>null</span><span>);
    } </span><span>catch</span><span> (err) {
      </span><span>console</span><span>.</span><span>error</span><span>(err);
      </span><span>setError</span><span>(</span><span>'Impossible de démarrer l’enregistrement média.'</span><span>);
    }
  };

  </span><span>const</span><span></span><span>stop</span><span> = (</span><span></span><span>) => {
    </span><span>if</span><span> (mediaRecorderRef.</span><span>current</span><span> && mediaRecorderRef.</span><span>current</span><span>.</span><span>state</span><span> !== </span><span>'inactive'</span><span>) {
      mediaRecorderRef.</span><span>current</span><span>.</span><span>stop</span><span>();
      </span><span>setIsRecording</span><span>(</span><span>false</span><span>);
    }
  };

  </span><span>const</span><span></span><span>reset</span><span> = (</span><span></span><span>) => {
    </span><span>setBlob</span><span>(</span><span>null</span><span>);
    chunksRef.</span><span>current</span><span> = [];
  };

  </span><span>return</span><span> { isRecording, blob, error, start, stop, reset };
};
</span></span></code></div></div></pre>

---

# 6. Utils

## `src/lib/utils/color.ts`

<pre class="overflow-visible!" data-start="12335" data-end="12874"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>const</span><span> darkenColor = (</span><span>hex</span><span>: </span><span>string</span><span>, </span><span>percent</span><span>: </span><span>number</span><span>): </span><span>string</span><span> => {
  </span><span>if</span><span> (!hex || !hex.</span><span>startsWith</span><span>(</span><span>'#'</span><span>)) </span><span>return</span><span> hex;

  </span><span>const</span><span> f = </span><span>parseInt</span><span>(hex.</span><span>slice</span><span>(</span><span>1</span><span>), </span><span>16</span><span>);
  </span><span>const</span><span> t = percent < </span><span>0</span><span> ? </span><span>0</span><span> : </span><span>255</span><span>;
  </span><span>const</span><span> p = </span><span>Math</span><span>.</span><span>abs</span><span>(percent);
  </span><span>const</span><span> R = f >> </span><span>16</span><span>;
  </span><span>const</span><span> G = (f >> </span><span>8</span><span>) & </span><span>0x00ff</span><span>;
  </span><span>const</span><span> B = f & </span><span>0x0000ff</span><span>;

  </span><span>return</span><span> (
    </span><span>'#'</span><span> +
    (
      </span><span>0x1000000</span><span> +
      (</span><span>Math</span><span>.</span><span>round</span><span>((t - R) * p) + R) * </span><span>0x10000</span><span> +
      (</span><span>Math</span><span>.</span><span>round</span><span>((t - G) * p) + G) * </span><span>0x100</span><span> +
      (</span><span>Math</span><span>.</span><span>round</span><span>((t - B) * p) + B)
    )
      .</span><span>toString</span><span>(</span><span>16</span><span>)
      .</span><span>slice</span><span>(</span><span>1</span><span>)
  );
};
</span></span></code></div></div></pre>

## `src/lib/utils/storage.ts`

<pre class="overflow-visible!" data-start="12907" data-end="13426"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>const</span><span> saveToLocalStorage = <T>(</span><span>key</span><span>: </span><span>string</span><span>, </span><span>value</span><span>: T): </span><span>void</span><span> => {
  </span><span>try</span><span> {
    </span><span>localStorage</span><span>.</span><span>setItem</span><span>(key, </span><span>JSON</span><span>.</span><span>stringify</span><span>(value));
  } </span><span>catch</span><span> (err) {
    </span><span>console</span><span>.</span><span>error</span><span>(</span><span>'Error saving to localStorage'</span><span>, err);
  }
};

</span><span>export</span><span></span><span>const</span><span> loadFromLocalStorage = <T>(</span><span>key</span><span>: </span><span>string</span><span>, </span><span>fallback</span><span>: T): </span><span>T</span><span> => {
  </span><span>try</span><span> {
    </span><span>const</span><span> raw = </span><span>localStorage</span><span>.</span><span>getItem</span><span>(key);
    </span><span>if</span><span> (!raw) </span><span>return</span><span> fallback;
    </span><span>return</span><span></span><span>JSON</span><span>.</span><span>parse</span><span>(raw) </span><span>as</span><span> T;
  } </span><span>catch</span><span> (err) {
    </span><span>console</span><span>.</span><span>error</span><span>(</span><span>'Error loading from localStorage'</span><span>, err);
    </span><span>return</span><span> fallback;
  }
};
</span></span></code></div></div></pre>

## `src/lib/utils/media.ts`

<pre class="overflow-visible!" data-start="13457" data-end="13639"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>const</span><span></span><span>URL_REGEX</span><span> = </span><span>/^https?:\/\/[^\s/$.?#].[^\s]*$/i</span><span>;

</span><span>export</span><span></span><span>const</span><span> validateMediaUrl = (</span><span>url</span><span>: </span><span>string</span><span>): </span><span>boolean</span><span> => {
  </span><span>if</span><span> (!url) </span><span>return</span><span></span><span>false</span><span>;
  </span><span>return</span><span></span><span>URL_REGEX</span><span>.</span><span>test</span><span>(url);
};
</span></span></code></div></div></pre>

---

# 7. IA

## `src/lib/ai/index.ts`

<pre class="overflow-visible!" data-start="13681" data-end="13793"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span> * </span><span>from</span><span></span><span>'./funnel-generation'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./content-generation'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./analysis'</span><span>;
</span></span></code></div></div></pre>

## `src/lib/ai/funnel-generation.ts`

<pre class="overflow-visible!" data-start="13833" data-end="14471"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>generateFunnelFromPrompt</span><span>(</span><span>prompt: string</span><span>): </span><span>Promise</span><span><</span><span>QuizConfig</span><span>> {
  </span><span>// Stub : ici tu branches ton appel réel (OpenAI / Gemini / autre)</span><span>
  </span><span>console</span><span>.</span><span>info</span><span>(</span><span>'[AI] generateFunnelFromPrompt'</span><span>, { prompt });

  </span><span>// Pour l’instant : renvoie juste une structure vide / placeholder</span><span>
  </span><span>return</span><span> {
    </span><span>id</span><span>: </span><span>'generated'</span><span>,
    </span><span>name</span><span>: </span><span>'Funnel généré'</span><span>,
    </span><span>theme</span><span>: {
      </span><span>colors</span><span>: {
        </span><span>background</span><span>: </span><span>'#020617'</span><span>,
        </span><span>primary</span><span>: </span><span>'#2563eb'</span><span>,
        </span><span>accent</span><span>: </span><span>'#f97316'</span><span>,
        </span><span>text</span><span>: </span><span>'#f9fafb'</span><span>,
        </span><span>buttonText</span><span>: </span><span>'#ffffff'</span><span>,
      },
      </span><span>font</span><span>: </span><span>'Inter'</span><span>,
    },
    </span><span>steps</span><span>: [],
  };
}
</span></span></code></div></div></pre>

## `src/lib/ai/content-generation.ts`

<pre class="overflow-visible!" data-start="14512" data-end="14916"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>interface</span><span></span><span>GeneratedContent</span><span> {
  </span><span>title</span><span>: </span><span>string</span><span>;
  </span><span>script</span><span>: </span><span>string</span><span>;
  </span><span>suggestions</span><span>: </span><span>string</span><span>[];
}

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>generateMediaContent</span><span>(</span><span>prompt: string</span><span>): </span><span>Promise</span><span><</span><span>GeneratedContent</span><span>> {
  </span><span>console</span><span>.</span><span>info</span><span>(</span><span>'[AI] generateMediaContent'</span><span>, { prompt });

  </span><span>return</span><span> {
    </span><span>title</span><span>: </span><span>'Titre généré'</span><span>,
    </span><span>script</span><span>: </span><span>'Script vidéo généré en fonction du prompt.'</span><span>,
    </span><span>suggestions</span><span>: [</span><span>'Variante 1'</span><span>, </span><span>'Variante 2'</span><span>],
  };
}
</span></span></code></div></div></pre>

## `src/lib/ai/analysis.ts`

<pre class="overflow-visible!" data-start="14947" data-end="15409"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>AnalysisResult</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>analyzeAnswer</span><span>(
  answer: </span><span>string</span><span>,
  questionContext: </span><span>string</span><span>
): </span><span>Promise</span><span><</span><span>AnalysisResult</span><span>> {
  </span><span>console</span><span>.</span><span>info</span><span>(</span><span>'[AI] analyzeAnswer'</span><span>, { answer, questionContext });

  </span><span>// Stub d’analyse : à remplacer par un vrai appel</span><span>
  </span><span>return</span><span> {
    </span><span>sentiment</span><span>: </span><span>'neutral'</span><span>,
    </span><span>keyPoints</span><span>: [</span><span>'Point clé 1'</span><span>, </span><span>'Point clé 2'</span><span>],
    </span><span>recommendations</span><span>: [</span><span>'Suggestion 1'</span><span>, </span><span>'Suggestion 2'</span><span>],
    </span><span>score</span><span>: </span><span>0.5</span><span>,
  };
}
</span></span></code></div></div></pre>

---

# 8. UI

## `src/components/ui/icons/index.tsx`

<pre class="overflow-visible!" data-start="15465" data-end="16232"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>SVGProps</span><span> } </span><span>from</span><span></span><span>'react'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>PlayIcon</span><span> = (</span><span>props: SVGProps<SVGSVGElement></span><span>) => (
  </span><span><span class="language-xml"><svg</span></span><span></span><span>viewBox</span><span>=</span><span>"0 0 24 24"</span><span></span><span>aria-hidden</span><span>=</span><span>"true"</span><span> {</span><span>...props</span><span>}>
    </span><span><path</span><span>
      </span><span>d</span><span>=</span><span>"M8 5v14l11-7z"</span><span>
      </span><span>fill</span><span>=</span><span>"currentColor"</span><span>
    />
  </span><span></svg</span><span>>
);

</span><span>export</span><span></span><span>const</span><span></span><span>PauseIcon</span><span> = (</span><span>props: SVGProps<SVGSVGElement></span><span>) => (
  </span><span><span class="language-xml"><svg</span></span><span></span><span>viewBox</span><span>=</span><span>"0 0 24 24"</span><span></span><span>aria-hidden</span><span>=</span><span>"true"</span><span> {</span><span>...props</span><span>}>
    </span><span><path</span><span>
      </span><span>d</span><span>=</span><span>"M7 5h4v14H7zm6 0h4v14h-4z"</span><span>
      </span><span>fill</span><span>=</span><span>"currentColor"</span><span>
    />
  </span><span></svg</span><span>>
);

</span><span>export</span><span></span><span>const</span><span></span><span>ChevronDownIcon</span><span> = (</span><span>props: SVGProps<SVGSVGElement></span><span>) => (
  </span><span><span class="language-xml"><svg</span></span><span></span><span>viewBox</span><span>=</span><span>"0 0 24 24"</span><span></span><span>aria-hidden</span><span>=</span><span>"true"</span><span> {</span><span>...props</span><span>}>
    </span><span><path</span><span>
      </span><span>d</span><span>=</span><span>"M6 9l6 6 6-6"</span><span>
      </span><span>fill</span><span>=</span><span>"none"</span><span>
      </span><span>stroke</span><span>=</span><span>"currentColor"</span><span>
      </span><span>strokeWidth</span><span>=</span><span>"2"</span><span>
      </span><span>strokeLinecap</span><span>=</span><span>"round"</span><span>
      </span><span>strokeLinejoin</span><span>=</span><span>"round"</span><span>
    />
  </span><span></svg</span><span>>
);
</span></span></code></div></div></pre>

## `src/components/ui/form/InputField.tsx`

<pre class="overflow-visible!" data-start="16278" data-end="16771"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>InputHTMLAttributes</span><span> } </span><span>from</span><span></span><span>'react'</span><span>;

</span><span>interface</span><span></span><span>InputFieldProps</span><span></span><span>extends</span><span></span><span>InputHTMLAttributes</span><span><</span><span>HTMLInputElement</span><span>> {
  </span><span>label</span><span>: </span><span>string</span><span>;
  error?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>InputField</span><span> = (</span><span>{ label, error, ...props }: InputFieldProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"ui-field"</span><span>>
      </span><span><label</span><span></span><span>className</span><span>=</span><span>"ui-label"</span><span>>
        </span><span><span</span><span>>{label}</span><span></span</span><span>>
        </span><span><input</span><span></span><span>className</span><span>=</span><span>"ui-input"</span><span> {</span><span>...props</span><span>} />
      </span><span></label</span><span>>
      {error && </span><span><p</span><span></span><span>className</span><span>=</span><span>"ui-error"</span><span>>{error}</span><span></p</span><span>>}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/ui/form/TextareaField.tsx`

<pre class="overflow-visible!" data-start="16820" data-end="17346"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>TextareaHTMLAttributes</span><span> } </span><span>from</span><span></span><span>'react'</span><span>;

</span><span>interface</span><span></span><span>TextareaFieldProps</span><span></span><span>extends</span><span></span><span>TextareaHTMLAttributes</span><span><</span><span>HTMLTextAreaElement</span><span>> {
  </span><span>label</span><span>: </span><span>string</span><span>;
  error?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>TextareaField</span><span> = (</span><span>{ label, error, ...props }: TextareaFieldProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"ui-field"</span><span>>
      </span><span><label</span><span></span><span>className</span><span>=</span><span>"ui-label"</span><span>>
        </span><span><span</span><span>>{label}</span><span></span</span><span>>
        </span><span><textarea</span><span></span><span>className</span><span>=</span><span>"ui-textarea"</span><span></span><span>rows</span><span>=</span><span>{4}</span><span> {</span><span>...props</span><span>} />
      </span><span></label</span><span>>
      {error && </span><span><p</span><span></span><span>className</span><span>=</span><span>"ui-error"</span><span>>{error}</span><span></p</span><span>>}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/ui/form/SelectField.tsx`

<pre class="overflow-visible!" data-start="17393" data-end="18113"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>interface</span><span></span><span>SelectOption</span><span> {
  </span><span>value</span><span>: </span><span>string</span><span>;
  </span><span>label</span><span>: </span><span>string</span><span>;
}

</span><span>interface</span><span></span><span>SelectFieldProps</span><span></span><span>extends</span><span></span><span>React</span><span>.</span><span>SelectHTMLAttributes</span><span><</span><span>HTMLSelectElement</span><span>> {
  </span><span>label</span><span>: </span><span>string</span><span>;
  </span><span>options</span><span>: </span><span>SelectOption</span><span>[];
  error?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>SelectField</span><span> = (</span><span>{ label, options, error, ...props }: SelectFieldProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"ui-field"</span><span>>
      </span><span><label</span><span></span><span>className</span><span>=</span><span>"ui-label"</span><span>>
        </span><span><span</span><span>>{label}</span><span></span</span><span>>
        </span><span><select</span><span></span><span>className</span><span>=</span><span>"ui-select"</span><span> {</span><span>...props</span><span>}>
          {options.map((opt) => (
            </span><span><option</span><span></span><span>key</span><span>=</span><span>{opt.value}</span><span></span><span>value</span><span>=</span><span>{opt.value}</span><span>>
              {opt.label}
            </span><span></option</span><span>>
          ))}
        </span><span></select</span><span>>
      </span><span></label</span><span>>
      {error && </span><span><p</span><span></span><span>className</span><span>=</span><span>"ui-error"</span><span>>{error}</span><span></p</span><span>>}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/ui/form/ColorPickerField.tsx`

<pre class="overflow-visible!" data-start="18165" data-end="18566"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>interface</span><span></span><span>ColorPickerFieldProps</span><span></span><span>extends</span><span></span><span>React</span><span>.</span><span>InputHTMLAttributes</span><span><</span><span>HTMLInputElement</span><span>> {
  </span><span>label</span><span>: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>ColorPickerField</span><span> = (</span><span>{ label, ...props }: ColorPickerFieldProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"ui-field"</span><span>>
      </span><span><label</span><span></span><span>className</span><span>=</span><span>"ui-label"</span><span>>
        </span><span><span</span><span>>{label}</span><span></span</span><span>>
        </span><span><input</span><span></span><span>className</span><span>=</span><span>"ui-color"</span><span></span><span>type</span><span>=</span><span>"color"</span><span> {</span><span>...props</span><span>} />
      </span><span></label</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/ui/layout/CollapsibleSection.tsx`

<pre class="overflow-visible!" data-start="18622" data-end="19432"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState, </span><span>type</span><span></span><span>ReactNode</span><span> } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span> { </span><span>ChevronDownIcon</span><span> } </span><span>from</span><span></span><span>'@components/ui/icons'</span><span>;

</span><span>interface</span><span></span><span>CollapsibleSectionProps</span><span> {
  </span><span>title</span><span>: </span><span>string</span><span>;
  defaultOpen?: </span><span>boolean</span><span>;
  </span><span>children</span><span>: </span><span>ReactNode</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>CollapsibleSection</span><span> = ({
  title,
  defaultOpen = </span><span>true</span><span>,
  children,
}: CollapsibleSectionProps) => {
  </span><span>const</span><span> [open, setOpen] = </span><span>useState</span><span>(defaultOpen);

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><section</span></span><span></span><span>className</span><span>=</span><span>"collapsible"</span><span>>
      </span><span><header</span><span>
        </span><span>className</span><span>=</span><span>"collapsible-header"</span><span>
        </span><span>onClick</span><span>=</span><span>{()</span><span> => setOpen((o) => !o)}
      >
        </span><span><h3</span><span>>{title}</span><span></h3</span><span>>
        </span><span><ChevronDownIcon</span><span>
          </span><span>className</span><span>=</span><span>{</span><span>`</span><span>collapsible-icon</span><span> ${</span><span>open</span><span> ? '</span><span>open</span><span>' </span><span>:</span><span> ''}`}
          </span><span>width</span><span>=</span><span>{18}</span><span>
          </span><span>height</span><span>=</span><span>{18}</span><span>
        />
      </span><span></header</span><span>>
      {open && </span><span><div</span><span></span><span>className</span><span>=</span><span>"collapsible-body"</span><span>>{children}</span><span></div</span><span>>}
    </span><span></section</span><span>>
  );
};
</span></span></code></div></div></pre>

*(tu pourras ajouter les classes CSS pour `.ui-*` et `.collapsible-*` plus tard)*

---

# 9. Common

## `src/components/common/Footer.tsx`

<pre class="overflow-visible!" data-start="19574" data-end="19870"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>export</span><span></span><span>const</span><span></span><span>Footer</span><span> = (</span><span></span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><footer</span></span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>padding:</span><span> '</span><span>0.75rem</span><span></span><span>1rem</span><span>',
        </span><span>fontSize:</span><span> '</span><span>0.8rem</span><span>',
        </span><span>color:</span><span> '</span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.9</span><span>)',
        </span><span>textAlign:</span><span> '</span><span>right</span><span>',
      }}
    >
      Face2Face · Crafted for interactive funnels ✦
    </span><span></footer</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/common/ThemeManager.tsx`

<pre class="overflow-visible!" data-start="19917" data-end="21213"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useEffect } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { darkenColor } </span><span>from</span><span></span><span>'@lib/utils/color'</span><span>;

</span><span>interface</span><span></span><span>ThemeManagerProps</span><span> {
  </span><span>theme</span><span>: </span><span>ThemeConfig</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>ThemeManager</span><span> = (</span><span>{ theme }: ThemeManagerProps</span><span>) => {
  </span><span>useEffect</span><span>(</span><span>() =></span><span> {
    </span><span>const</span><span> root = </span><span>document</span><span>.</span><span>documentElement</span><span>;
    </span><span>const</span><span> { colors, font } = theme;

    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-bg'</span><span>, colors.</span><span>background</span><span>);
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-primary'</span><span>, colors.</span><span>primary</span><span>);
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-accent'</span><span>, colors.</span><span>accent</span><span>);
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-primary-hover'</span><span>, </span><span>darkenColor</span><span>(colors.</span><span>primary</span><span>, </span><span>0.1</span><span>));
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-text'</span><span>, colors.</span><span>text</span><span>);
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-button-text'</span><span>, colors.</span><span>buttonText</span><span>);
    root.</span><span>style</span><span>.</span><span>setProperty</span><span>(</span><span>'--theme-font'</span><span>, font);

    </span><span>const</span><span> oldFontLink = </span><span>document</span><span>.</span><span>getElementById</span><span>(</span><span>'dynamic-google-font'</span><span>);
    </span><span>if</span><span> (oldFontLink) oldFontLink.</span><span>remove</span><span>();

    </span><span>if</span><span> (font) {
      </span><span>const</span><span> link = </span><span>document</span><span>.</span><span>createElement</span><span>(</span><span>'link'</span><span>);
      link.</span><span>id</span><span> = </span><span>'dynamic-google-font'</span><span>;
      link.</span><span>rel</span><span> = </span><span>'stylesheet'</span><span>;
      link.</span><span>href</span><span> = `https://fonts.googleapis.com/css2?family=${font.replace(
        / /g,
        </span><span>'+'</span><span>
      )}:wght@400;500;600;700&display=swap`;
      </span><span>document</span><span>.</span><span>head</span><span>.</span><span>appendChild</span><span>(link);
    }
  }, [theme]);

  </span><span>return</span><span></span><span>null</span><span>;
};
</span></span></code></div></div></pre>

---

# 10. Quiz

## `src/components/quiz/QuizContainer.tsx`

<pre class="overflow-visible!" data-start="21276" data-end="23149"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { useQuizNavigation } </span><span>from</span><span></span><span>'@hooks/useQuizNavigation'</span><span>;
</span><span>import</span><span> { </span><span>WelcomeScreen</span><span> } </span><span>from</span><span></span><span>'./WelcomeScreen'</span><span>;
</span><span>import</span><span> { </span><span>QuestionScreen</span><span> } </span><span>from</span><span></span><span>'./QuestionScreen'</span><span>;
</span><span>import</span><span> { </span><span>MessageScreen</span><span> } </span><span>from</span><span></span><span>'./MessageScreen'</span><span>;
</span><span>import</span><span> { </span><span>LeadCaptureScreen</span><span> } </span><span>from</span><span></span><span>'./LeadCaptureScreen'</span><span>;
</span><span>import</span><span> { </span><span>QuizCompletionScreen</span><span> } </span><span>from</span><span></span><span>'./QuizCompletionScreen'</span><span>;
</span><span>import</span><span> { </span><span>ErrorBoundary</span><span> } </span><span>from</span><span></span><span>'./ErrorBoundary'</span><span>;

</span><span>interface</span><span></span><span>QuizContainerProps</span><span> {
  </span><span>quizConfig</span><span>: </span><span>QuizConfig</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>QuizContainer</span><span> = (</span><span>{ quizConfig }: QuizContainerProps</span><span>) => {
  </span><span>const</span><span> [currentStepId, setCurrentStepId] = useState<</span><span>string</span><span> | </span><span>null</span><span>>(
    quizConfig.</span><span>steps</span><span>[</span><span>0</span><span>]?.</span><span>id</span><span> ?? </span><span>null</span><span>
  );

  </span><span>const</span><span> { currentStep, canGoNext, canGoBack, getNextStepId, getPrevStepId } =
    </span><span>useQuizNavigation</span><span>(quizConfig.</span><span>steps</span><span>, currentStepId);

  </span><span>const</span><span></span><span>handleNext</span><span> = (</span><span></span><span>) => {
    </span><span>const</span><span> nextId = </span><span>getNextStepId</span><span>();
    </span><span>if</span><span> (nextId) </span><span>setCurrentStepId</span><span>(nextId);
  };

  </span><span>const</span><span></span><span>handleBack</span><span> = (</span><span></span><span>) => {
    </span><span>const</span><span> prevId = </span><span>getPrevStepId</span><span>();
    </span><span>if</span><span> (prevId) </span><span>setCurrentStepId</span><span>(prevId);
  };

  </span><span>if</span><span> (!currentStep) {
    </span><span>return</span><span></span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"quiz-root"</span><span>>Aucune étape définie.</span><span></div</span><span>>;
  }

  </span><span>const</span><span> screenProps = {
    </span><span>step</span><span>: currentStep,
    </span><span>onNext</span><span>: handleNext,
    </span><span>onBack</span><span>: handleBack,
    canGoNext,
    canGoBack,
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"quiz-root"</span><span>>
      </span><span><ErrorBoundary</span><span>>
        {currentStep.type === 'WELCOME' && </span><span><WelcomeScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'QUESTION' && </span><span><QuestionScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'MESSAGE' && </span><span><MessageScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'LEAD_CAPTURE' && (
          </span><span><LeadCaptureScreen</span><span> {</span><span>...screenProps</span><span>} />
        )}
        {currentStep.type === 'COMPLETION' && (
          </span><span><QuizCompletionScreen</span><span> {</span><span>...screenProps</span><span>} />
        )}
      </span><span></ErrorBoundary</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

### Props utilitaires

Pour éviter de répéter, on va créer un type local utilisé par toutes les screens :

<pre class="overflow-visible!" data-start="23258" data-end="23412"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>// src/components/quiz/types.ts (optionnel) – mais tu avais prévu seulement dans /types</span><span>
</span><span>// pour garder simple, on inline dans chaque screen ici</span><span>
</span></span></code></div></div></pre>

Je fais des props simples dans chaque screen.

## `src/components/quiz/WelcomeScreen.tsx`

<pre class="overflow-visible!" data-start="23505" data-end="24032"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>interface</span><span></span><span>WelcomeScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>WelcomeScreen</span><span> = ({
  step,
  onNext,
  canGoNext,
}: WelcomeScreenProps) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}

      </span><span><button</span><span>
        </span><span>disabled</span><span>=</span><span>{!canGoNext}</span><span>
        </span><span>onClick</span><span>=</span><span>{onNext}</span><span>
      >
        Commencer
      </span><span></button</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/quiz/QuestionScreen.tsx`

<pre class="overflow-visible!" data-start="24079" data-end="25384"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span>, </span><span>QuizOption</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>interface</span><span></span><span>QuestionScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>QuestionScreen</span><span> = ({
  step,
  onNext,
  onBack,
  canGoNext,
  canGoBack,
}: QuestionScreenProps) => {
  </span><span>const</span><span> options = step.</span><span>options</span><span> ?? [];

  </span><span>const</span><span></span><span>handleOptionClick</span><span> = (</span><span>option: QuizOption</span><span>) => {
    </span><span>// plus tard : stocker la réponse / navigation conditionnelle</span><span>
    </span><span>console</span><span>.</span><span>info</span><span>(</span><span>'answer selected'</span><span>, option);
    </span><span>onNext</span><span>();
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.5rem</span><span>', </span><span>marginTop:</span><span> '</span><span>1rem</span><span>' }}>
        {options.map((opt) => (
          </span><span><button</span><span>
            </span><span>key</span><span>=</span><span>{opt.id}</span><span>
            </span><span>onClick</span><span>=</span><span>{()</span><span> => handleOptionClick(opt)}
          >
            {opt.label}
          </span><span></button</span><span>>
        ))}
      </span><span></div</span><span>>

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>1rem</span><span>' }}>
        {canGoBack && (
          </span><span><button</span><span>
            </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginRight:</span><span> '</span><span>0.5rem</span><span>' }}
            </span><span>onClick</span><span>=</span><span>{onBack}</span><span>
          >
            Retour
          </span><span></button</span><span>>
        )}
        {canGoNext && (
          </span><span><button</span><span></span><span>onClick</span><span>=</span><span>{onNext}</span><span>>
            Suivant
          </span><span></button</span><span>>
        )}
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/quiz/MessageScreen.tsx`

<pre class="overflow-visible!" data-start="25430" data-end="26216"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>interface</span><span></span><span>MessageScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>MessageScreen</span><span> = ({
  step,
  onNext,
  onBack,
  canGoNext,
  canGoBack,
}: MessageScreenProps) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>1rem</span><span>' }}>
        {canGoBack && (
          </span><span><button</span><span>
            </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginRight:</span><span> '</span><span>0.5rem</span><span>' }}
            </span><span>onClick</span><span>=</span><span>{onBack}</span><span>
          >
            Retour
          </span><span></button</span><span>>
        )}
        {canGoNext && (
          </span><span><button</span><span></span><span>onClick</span><span>=</span><span>{onNext}</span><span>>
            Continuer
          </span><span></button</span><span>>
        )}
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/quiz/LeadCaptureScreen.tsx`

<pre class="overflow-visible!" data-start="26266" data-end="27864"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { </span><span>InputField</span><span> } </span><span>from</span><span></span><span>'@ui/form/InputField'</span><span>;

</span><span>interface</span><span></span><span>LeadCaptureScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>LeadCaptureScreen</span><span> = ({
  step,
  onNext,
  onBack,
  canGoBack,
}: LeadCaptureScreenProps) => {
  </span><span>const</span><span> [email, setEmail] = </span><span>useState</span><span>(</span><span>''</span><span>);
  </span><span>const</span><span> [name, setName] = </span><span>useState</span><span>(</span><span>''</span><span>);

  </span><span>const</span><span></span><span>handleSubmit</span><span> = (</span><span>e: React.FormEvent</span><span>) => {
    e.</span><span>preventDefault</span><span>();
    </span><span>console</span><span>.</span><span>info</span><span>(</span><span>'lead'</span><span>, { name, email });
    </span><span>onNext</span><span>();
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}

      </span><span><form</span><span>
        </span><span>onSubmit</span><span>=</span><span>{handleSubmit}</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>1rem</span><span>', </span><span>maxWidth:</span><span> '</span><span>400px</span><span>' }}
      >
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"Prénom"</span><span>
          </span><span>value</span><span>=</span><span>{name}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => setName(e.target.value)}
          placeholder="Ton prénom"
        />
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"Email"</span><span>
          </span><span>type</span><span>=</span><span>"email"</span><span>
          </span><span>value</span><span>=</span><span>{email}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => setEmail(e.target.value)}
          placeholder="ton@email.com"
          required
        />

        </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>1rem</span><span>' }}>
          {canGoBack && (
            </span><span><button</span><span>
              </span><span>type</span><span>=</span><span>"button"</span><span>
              </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginRight:</span><span> '</span><span>0.5rem</span><span>' }}
              </span><span>onClick</span><span>=</span><span>{onBack}</span><span>
            >
              Retour
            </span><span></button</span><span>>
          )}
          </span><span><button</span><span></span><span>type</span><span>=</span><span>"submit"</span><span>>
            Envoyer
          </span><span></button</span><span>>
        </span><span></div</span><span>>
      </span><span></form</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/quiz/QuizCompletionScreen.tsx`

<pre class="overflow-visible!" data-start="27917" data-end="28481"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>interface</span><span></span><span>QuizCompletionScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>QuizCompletionScreen</span><span> = (</span><span>{ step }: QuizCompletionScreenProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}
      </span><span><p</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>1rem</span><span>', </span><span>opacity:</span><span></span><span>0.8</span><span> }}>
        Tu peux maintenant fermer la page ou revenir au builder pour ajuster ton funnel.
      </span><span></p</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/quiz/ErrorBoundary.tsx`

<pre class="overflow-visible!" data-start="28527" data-end="29232"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { </span><span>Component</span><span>, </span><span>type</span><span></span><span>ErrorInfo</span><span>, </span><span>type</span><span></span><span>ReactNode</span><span> } </span><span>from</span><span></span><span>'react'</span><span>;

</span><span>interface</span><span></span><span>ErrorBoundaryProps</span><span> {
  </span><span>children</span><span>: </span><span>ReactNode</span><span>;
}

</span><span>interface</span><span></span><span>ErrorBoundaryState</span><span> {
  </span><span>hasError</span><span>: </span><span>boolean</span><span>;
}

</span><span>export</span><span></span><span>class</span><span></span><span>ErrorBoundary</span><span></span><span>extends</span><span></span><span>Component</span><span><
  </span><span>ErrorBoundaryProps</span><span>,
  </span><span>ErrorBoundaryState</span><span>
> {
  </span><span>state</span><span>: </span><span>ErrorBoundaryState</span><span> = {
    </span><span>hasError</span><span>: </span><span>false</span><span>,
  };

  </span><span>static</span><span></span><span>getDerivedStateFromError</span><span>(): </span><span>ErrorBoundaryState</span><span> {
    </span><span>return</span><span> { </span><span>hasError</span><span>: </span><span>true</span><span> };
  }

  </span><span>componentDidCatch</span><span>(</span><span>error: Error</span><span>, info: ErrorInfo) {
    </span><span>console</span><span>.</span><span>error</span><span>(</span><span>'[Quiz ErrorBoundary]'</span><span>, error, info);
  }

  </span><span>render</span><span>(</span><span></span><span>) {
    </span><span>if</span><span> (</span><span>this</span><span>.</span><span>state</span><span>.</span><span>hasError</span><span>) {
      </span><span>return</span><span></span><span><span class="language-xml"><div</span></span><span>>Une erreur est survenue pendant le quiz.</span><span></div</span><span>>;
    }

    </span><span>return</span><span></span><span>this</span><span>.</span><span>props</span><span>.</span><span>children</span><span>;
  }
}
</span></span></code></div></div></pre>

---

# 11. Media

## `src/components/media/MediaViewer.tsx`

<pre class="overflow-visible!" data-start="29295" data-end="30494"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>StepMedia</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { </span><span>VideoPlayer</span><span> } </span><span>from</span><span></span><span>'./VideoPlayer'</span><span>;

</span><span>interface</span><span></span><span>MediaViewerProps</span><span> {
  media?: </span><span>StepMedia</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>MediaViewer</span><span> = (</span><span>{ media }: MediaViewerProps</span><span>) => {
  </span><span>if</span><span> (!media || media.</span><span>type</span><span> === </span><span>'none'</span><span>) </span><span>return</span><span></span><span>null</span><span>;

  </span><span>if</span><span> (media.</span><span>type</span><span> === </span><span>'image'</span><span> && media.</span><span>url</span><span>) {
    </span><span>return</span><span> (
      </span><span><span class="language-xml"><img</span></span><span>
        </span><span>src</span><span>=</span><span>{media.url}</span><span>
        </span><span>alt</span><span>=</span><span>""</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span></span><span>width:</span><span> '</span><span>100</span><span>%', </span><span>borderRadius:</span><span></span><span>12</span><span>, </span><span>marginBottom:</span><span> '</span><span>1rem</span><span>' }}
      />
    );
  }

  </span><span>if</span><span> (media.</span><span>type</span><span> === </span><span>'video'</span><span> && media.</span><span>url</span><span>) {
    </span><span>return</span><span></span><span><span class="language-xml"><VideoPlayer</span></span><span></span><span>src</span><span>=</span><span>{media.url}</span><span> />;
  }

  </span><span>if</span><span> (media.</span><span>type</span><span> === </span><span>'audio'</span><span> && media.</span><span>url</span><span>) {
    </span><span>return</span><span> (
      </span><span><span class="language-xml"><audio</span></span><span>
        </span><span>controls</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span></span><span>width:</span><span> '</span><span>100</span><span>%', </span><span>marginBottom:</span><span> '</span><span>1rem</span><span>' }}
      >
        </span><span><source</span><span></span><span>src</span><span>=</span><span>{media.url}</span><span> />
      </span><span></audio</span><span>>
    );
  }

  </span><span>if</span><span> (media.</span><span>type</span><span> === </span><span>'youtube'</span><span> && media.</span><span>url</span><span>) {
    </span><span>return</span><span> (
      </span><span><span class="language-xml"><div</span></span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginBottom:</span><span> '</span><span>1rem</span><span>' }}>
        </span><span><iframe</span><span>
          </span><span>width</span><span>=</span><span>"100%"</span><span>
          </span><span>height</span><span>=</span><span>"315"</span><span>
          </span><span>src</span><span>=</span><span>{media.url}</span><span>
          </span><span>title</span><span>=</span><span>"YouTube video"</span><span>
          </span><span>allow</span><span>=</span><span>"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"</span><span>
          </span><span>allowFullScreen</span><span>
        />
      </span><span></div</span><span>>
    );
  }

  </span><span>return</span><span></span><span>null</span><span>;
};
</span></span></code></div></div></pre>

## `src/components/media/VideoPlayer.tsx`

<pre class="overflow-visible!" data-start="30539" data-end="32117"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useRef, useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span> { </span><span>PlayIcon</span><span>, </span><span>PauseIcon</span><span> } </span><span>from</span><span></span><span>'@components/ui/icons'</span><span>;

</span><span>interface</span><span></span><span>VideoPlayerProps</span><span> {
  </span><span>src</span><span>: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>VideoPlayer</span><span> = (</span><span>{ src }: VideoPlayerProps</span><span>) => {
  </span><span>const</span><span> videoRef = useRef<</span><span>HTMLVideoElement</span><span> | </span><span>null</span><span>>(</span><span>null</span><span>);
  </span><span>const</span><span> [playing, setPlaying] = </span><span>useState</span><span>(</span><span>false</span><span>);

  </span><span>const</span><span></span><span>toggle</span><span> = (</span><span></span><span>) => {
    </span><span>const</span><span> video = videoRef.</span><span>current</span><span>;
    </span><span>if</span><span> (!video) </span><span>return</span><span>;
    </span><span>if</span><span> (video.</span><span>paused</span><span>) {
      video.</span><span>play</span><span>();
      </span><span>setPlaying</span><span>(</span><span>true</span><span>);
    } </span><span>else</span><span> {
      video.</span><span>pause</span><span>();
      </span><span>setPlaying</span><span>(</span><span>false</span><span>);
    }
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>position:</span><span> '</span><span>relative</span><span>',
        </span><span>borderRadius:</span><span></span><span>12</span><span>,
        </span><span>overflow:</span><span> '</span><span>hidden</span><span>',
        </span><span>marginBottom:</span><span> '</span><span>1rem</span><span>',
        </span><span>background:</span><span> '#</span><span>020617</span><span>',
      }}
    >
      </span><span><video</span><span>
        </span><span>ref</span><span>=</span><span>{videoRef}</span><span>
        </span><span>src</span><span>=</span><span>{src}</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span></span><span>width:</span><span> '</span><span>100</span><span>%', </span><span>display:</span><span> '</span><span>block</span><span>' }}
      />
      </span><span><button</span><span>
        </span><span>type</span><span>=</span><span>"button"</span><span>
        </span><span>onClick</span><span>=</span><span>{toggle}</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span>
          </span><span>position:</span><span> '</span><span>absolute</span><span>',
          </span><span>bottom:</span><span> '</span><span>0.75rem</span><span>',
          </span><span>left:</span><span> '</span><span>0.75rem</span><span>',
          </span><span>borderRadius:</span><span> '</span><span>999px</span><span>',
          </span><span>border:</span><span> '</span><span>none</span><span>',
          </span><span>padding:</span><span> '</span><span>0.4rem</span><span></span><span>0.7rem</span><span>',
          </span><span>display:</span><span> '</span><span>inline-flex</span><span>',
          </span><span>alignItems:</span><span> '</span><span>center</span><span>',
          </span><span>gap:</span><span> '</span><span>0.3rem</span><span>',
          </span><span>cursor:</span><span> '</span><span>pointer</span><span>',
          </span><span>background:</span><span> '</span><span>rgba</span><span>(</span><span>15</span><span>,</span><span>23</span><span>,</span><span>42</span><span>,</span><span>0.9</span><span>)',
          </span><span>color:</span><span> '</span><span>white</span><span>',
        }}
      >
        {playing ? (
          </span><span><></span><span>
            </span><span><PauseIcon</span><span></span><span>width</span><span>=</span><span>{16}</span><span></span><span>height</span><span>=</span><span>{16}</span><span> /> Pause
          </span><span></></span><span>
        ) : (
          </span><span><></span><span>
            </span><span><PlayIcon</span><span></span><span>width</span><span>=</span><span>{16}</span><span></span><span>height</span><span>=</span><span>{16}</span><span> /> Lecture
          </span><span></></span><span>
        )}
      </button>
    </div>
  );
};
</span></span></code></div></div></pre>

## `src/components/media/MediaRecorder.tsx`

<pre class="overflow-visible!" data-start="32164" data-end="33506"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useMediaRecorder } </span><span>from</span><span></span><span>'@hooks/useMediaRecorder'</span><span>;

</span><span>interface</span><span></span><span>MediaRecorderProps</span><span> {
  </span><span>type</span><span>?: </span><span>'audio'</span><span> | </span><span>'video'</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>MediaRecorder</span><span> = (</span><span>{ type</span><span> = </span><span>'video'</span><span> }: MediaRecorderProps) => {
  </span><span>const</span><span> { isRecording, blob, error, start, stop, reset } = </span><span>useMediaRecorder</span><span>({ </span><span>type</span><span> });

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><h3</span><span>>Enregistrement {type}</span><span></h3</span><span>>
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>flex</span><span>', </span><span>gap:</span><span> '</span><span>0.5rem</span><span>', </span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>' }}>
        {!isRecording && (
          </span><span><button</span><span></span><span>type</span><span>=</span><span>"button"</span><span></span><span>onClick</span><span>=</span><span>{start}</span><span>>
            Démarrer
          </span><span></button</span><span>>
        )}
        {isRecording && (
          </span><span><button</span><span></span><span>type</span><span>=</span><span>"button"</span><span></span><span>onClick</span><span>=</span><span>{stop}</span><span>>
            Stop
          </span><span></button</span><span>>
        )}
        {blob && (
          </span><span><button</span><span></span><span>type</span><span>=</span><span>"button"</span><span></span><span>onClick</span><span>=</span><span>{reset}</span><span>>
            Réinitialiser
          </span><span></button</span><span>>
        )}
      </span><span></div</span><span>>

      {error && </span><span><p</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>color:</span><span> '</span><span>red</span><span>', </span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>' }}>{error}</span><span></p</span><span>>}

      {blob && type === 'audio' && (
        </span><span><audio</span><span>
          </span><span>controls</span><span>
          </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>0.75rem</span><span>' }}
        >
          </span><span><source</span><span></span><span>src</span><span>=</span><span>{URL.createObjectURL(blob)}</span><span> />
        </span><span></audio</span><span>>
      )}

      {blob && type === 'video' && (
        </span><span><video</span><span>
          </span><span>controls</span><span>
          </span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>0.75rem</span><span>', </span><span>maxWidth:</span><span> '</span><span>100</span><span>%' }}
        >
          </span><span><source</span><span></span><span>src</span><span>=</span><span>{URL.createObjectURL(blob)}</span><span> />
        </span><span></video</span><span>>
      )}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

---

# 12. Builder

## `src/components/builder/Builder.tsx`

<pre class="overflow-visible!" data-start="33569" data-end="35545"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>BuilderProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;
</span><span>import</span><span> { </span><span>CollapsibleSection</span><span> } </span><span>from</span><span></span><span>'@ui/layout/CollapsibleSection'</span><span>;
</span><span>import</span><span> { </span><span>StepEditor</span><span> } </span><span>from</span><span></span><span>'./StepEditor'</span><span>;
</span><span>import</span><span> { </span><span>ThemeEditor</span><span> } </span><span>from</span><span></span><span>'./ThemeEditor'</span><span>;
</span><span>import</span><span> { </span><span>ShareAndEmbed</span><span> } </span><span>from</span><span></span><span>'./ShareAndEmbed'</span><span>;
</span><span>import</span><span> { </span><span>AIAssistant</span><span> } </span><span>from</span><span></span><span>'./AIAssistant'</span><span>;
</span><span>import</span><span> { </span><span>Footer</span><span> } </span><span>from</span><span></span><span>'@components/common/Footer'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>Builder</span><span> = (</span><span>{ config, setConfig }: BuilderProps</span><span>) => {
  </span><span>const</span><span></span><span>handleStepChange</span><span> = (</span><span>index: number</span><span>, updatedStep: </span><span>any</span><span>) => {
    </span><span>const</span><span> next = [...config.</span><span>steps</span><span>];
    next[index] = updatedStep;
    </span><span>setConfig</span><span>({ ...config, </span><span>steps</span><span>: next });
  };

  </span><span>const</span><span></span><span>handleDeleteStep</span><span> = (</span><span>index: number</span><span>) => {
    </span><span>const</span><span> next = config.</span><span>steps</span><span>.</span><span>filter</span><span>(</span><span>(_, i</span><span>) => i !== index);
    </span><span>setConfig</span><span>({ ...config, </span><span>steps</span><span>: next });
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"builder-root"</span><span>>
      </span><span><h2</span><span>>Builder – {config.name}</span><span></h2</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Étapes du quiz"</span><span>>
        {config.steps.map((step, index) => (
          </span><span><div</span><span>
            </span><span>key</span><span>=</span><span>{step.id}</span><span>
            </span><span>style</span><span>=</span><span>{{</span><span>
              </span><span>border:</span><span> '</span><span>1px</span><span></span><span>solid</span><span></span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.4</span><span>)',
              </span><span>borderRadius:</span><span></span><span>10</span><span>,
              </span><span>padding:</span><span> '</span><span>0.75rem</span><span>',
              </span><span>marginBottom:</span><span> '</span><span>0.75rem</span><span>',
            }}
          >
            </span><span><StepEditor</span><span>
              </span><span>step</span><span>=</span><span>{step}</span><span>
              </span><span>onChange</span><span>=</span><span>{(s)</span><span> => handleStepChange(index, s)}
              onDelete={() => handleDeleteStep(index)}
            />
          </span><span></div</span><span>>
        ))}
      </span><span></CollapsibleSection</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Thème"</span><span>>
        </span><span><ThemeEditor</span><span>
          </span><span>theme</span><span>=</span><span>{config.theme}</span><span>
          </span><span>onChange</span><span>=</span><span>{(theme)</span><span> => setConfig({ ...config, theme })}
        />
      </span><span></CollapsibleSection</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Partage & embed"</span><span>>
        </span><span><ShareAndEmbed</span><span></span><span>quizId</span><span>=</span><span>{config.id}</span><span> />
      </span><span></CollapsibleSection</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Assistant IA"</span><span>>
        </span><span><AIAssistant</span><span>
          </span><span>config</span><span>=</span><span>{config}</span><span>
          </span><span>onConfigChange</span><span>=</span><span>{setConfig}</span><span>
        />
      </span><span></CollapsibleSection</span><span>>

      </span><span><Footer</span><span> />
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/builder/StepEditor.tsx`

<pre class="overflow-visible!" data-start="35591" data-end="37351"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>StepEditorProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;
</span><span>import</span><span> { </span><span>InputField</span><span> } </span><span>from</span><span></span><span>'@ui/form/InputField'</span><span>;
</span><span>import</span><span> { </span><span>TextareaField</span><span> } </span><span>from</span><span></span><span>'@ui/form/TextareaField'</span><span>;
</span><span>import</span><span> { </span><span>SelectField</span><span> } </span><span>from</span><span></span><span>'@ui/form/SelectField'</span><span>;

</span><span>const</span><span></span><span>STEP_OPTIONS</span><span> = [
  { </span><span>value</span><span>: </span><span>'WELCOME'</span><span>, </span><span>label</span><span>: </span><span>'Bienvenue'</span><span> },
  { </span><span>value</span><span>: </span><span>'QUESTION'</span><span>, </span><span>label</span><span>: </span><span>'Question'</span><span> },
  { </span><span>value</span><span>: </span><span>'MESSAGE'</span><span>, </span><span>label</span><span>: </span><span>'Message'</span><span> },
  { </span><span>value</span><span>: </span><span>'LEAD_CAPTURE'</span><span>, </span><span>label</span><span>: </span><span>'Capture de lead'</span><span> },
  { </span><span>value</span><span>: </span><span>'COMPLETION'</span><span>, </span><span>label</span><span>: </span><span>'Fin'</span><span> },
];

</span><span>export</span><span></span><span>const</span><span></span><span>StepEditor</span><span> = (</span><span>{ step, onChange, onDelete }: StepEditorProps</span><span>) => {
  </span><span>const</span><span></span><span>update</span><span> = (</span><span>patch: Partial<QuizStep></span><span>) => {
    </span><span>onChange</span><span>({ ...step, ...patch });
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.5rem</span><span>' }}>
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"ID de l’étape"</span><span>
          </span><span>value</span><span>=</span><span>{step.id}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ id: e.target.value })}
        />

        </span><span><SelectField</span><span>
          </span><span>label</span><span>=</span><span>"Type d’étape"</span><span>
          </span><span>value</span><span>=</span><span>{step.type}</span><span>
          </span><span>options</span><span>=</span><span>{STEP_OPTIONS}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ type: e.target.value as any })}
        />

        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"Titre"</span><span>
          </span><span>value</span><span>=</span><span>{step.title}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ title: e.target.value })}
        />

        </span><span><TextareaField</span><span>
          </span><span>label</span><span>=</span><span>"Description"</span><span>
          </span><span>value</span><span>=</span><span>{step.description</span><span> ?? ''}
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ description: e.target.value })}
        />
      </span><span></div</span><span>>

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>', </span><span>textAlign:</span><span> '</span><span>right</span><span>' }}>
        </span><span><button</span><span>
          </span><span>type</span><span>=</span><span>"button"</span><span>
          </span><span>onClick</span><span>=</span><span>{onDelete}</span><span>
          </span><span>style</span><span>=</span><span>{{</span><span></span><span>color:</span><span> '#</span><span>f97316</span><span>', </span><span>background:</span><span> '</span><span>transparent</span><span>', </span><span>border:</span><span> '</span><span>none</span><span>' }}
        >
          Supprimer l’étape
        </span><span></button</span><span>>
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/builder/ThemeEditor.tsx`

<pre class="overflow-visible!" data-start="37398" data-end="39106"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeEditorProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;
</span><span>import</span><span> { </span><span>ColorPickerField</span><span> } </span><span>from</span><span></span><span>'@ui/form/ColorPickerField'</span><span>;
</span><span>import</span><span> { </span><span>SelectField</span><span> } </span><span>from</span><span></span><span>'@ui/form/SelectField'</span><span>;
</span><span>import</span><span> { </span><span>AVAILABLE_FONTS</span><span> } </span><span>from</span><span></span><span>'@constants/theme.constants'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>ThemeEditor</span><span> = (</span><span>{ theme, onChange }: ThemeEditorProps</span><span>) => {
  </span><span>const</span><span></span><span>update</span><span> = (</span><span>patch: any</span><span>) => {
    </span><span>onChange</span><span>({ ...theme, ...patch });
  };

  </span><span>const</span><span></span><span>updateColors</span><span> = (</span><span>patch: Partial<typeof</span><span> theme.colors>) => {
    </span><span>onChange</span><span>({ ...theme, </span><span>colors</span><span>: { ...theme.</span><span>colors</span><span>, ...patch } });
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.75rem</span><span>', </span><span>maxWidth:</span><span></span><span>480</span><span> }}>
      </span><span><ColorPickerField</span><span>
        </span><span>label</span><span>=</span><span>"Fond"</span><span>
        </span><span>value</span><span>=</span><span>{theme.colors.background}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => updateColors({ background: e.target.value })}
      />
      </span><span><ColorPickerField</span><span>
        </span><span>label</span><span>=</span><span>"Couleur primaire"</span><span>
        </span><span>value</span><span>=</span><span>{theme.colors.primary}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => updateColors({ primary: e.target.value })}
      />
      </span><span><ColorPickerField</span><span>
        </span><span>label</span><span>=</span><span>"Accent"</span><span>
        </span><span>value</span><span>=</span><span>{theme.colors.accent}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => updateColors({ accent: e.target.value })}
      />
      </span><span><ColorPickerField</span><span>
        </span><span>label</span><span>=</span><span>"Texte"</span><span>
        </span><span>value</span><span>=</span><span>{theme.colors.text}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => updateColors({ text: e.target.value })}
      />
      </span><span><ColorPickerField</span><span>
        </span><span>label</span><span>=</span><span>"Texte boutons"</span><span>
        </span><span>value</span><span>=</span><span>{theme.colors.buttonText}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => updateColors({ buttonText: e.target.value })}
      />

      </span><span><SelectField</span><span>
        </span><span>label</span><span>=</span><span>"Police"</span><span>
        </span><span>value</span><span>=</span><span>{theme.font}</span><span>
        </span><span>options</span><span>=</span><span>{AVAILABLE_FONTS.map((font)</span><span> => ({
          value: font,
          label: font,
        }))}
        onChange={(e) => update({ font: e.target.value })}
      />
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/builder/ShareAndEmbed.tsx`

<pre class="overflow-visible!" data-start="39155" data-end="40485"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>ShareAndEmbedProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>ShareAndEmbed</span><span> = (</span><span>{ quizId }: ShareAndEmbedProps</span><span>) => {
  </span><span>const</span><span> baseUrl = </span><span>window</span><span>.</span><span>location</span><span>.</span><span>origin</span><span>;
  </span><span>const</span><span> link = quizId ? </span><span>`${baseUrl}</span><span>/quiz/</span><span>${quizId}</span><span>` : </span><span>`${baseUrl}</span><span>/quiz/demo`;

  </span><span>const</span><span> embedCode = </span><span>`<iframe src="${link}</span><span>" width="100%" height="600" frameborder="0"></iframe>`;

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.75rem</span><span>' }}>
      </span><span><div</span><span>>
        </span><span><label</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>', </span><span>opacity:</span><span></span><span>0.8</span><span> }}>Lien de partage</span><span></label</span><span>>
        </span><span><div</span><span>
          </span><span>style</span><span>=</span><span>{{</span><span>
            </span><span>marginTop:</span><span> '</span><span>0.25rem</span><span>',
            </span><span>padding:</span><span> '</span><span>0.5rem</span><span></span><span>0.75rem</span><span>',
            </span><span>borderRadius:</span><span></span><span>8</span><span>,
            </span><span>border:</span><span> '</span><span>1px</span><span></span><span>solid</span><span></span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.6</span><span>)',
            </span><span>fontSize:</span><span> '</span><span>0.9rem</span><span>',
          }}
        >
          {link}
        </span><span></div</span><span>>
      </span><span></div</span><span>>

      </span><span><div</span><span>>
        </span><span><label</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>', </span><span>opacity:</span><span></span><span>0.8</span><span> }}>Code embed</span><span></label</span><span>>
        </span><span><textarea</span><span>
          </span><span>readOnly</span><span>
          </span><span>value</span><span>=</span><span>{embedCode}</span><span>
          </span><span>style</span><span>=</span><span>{{</span><span>
            </span><span>width:</span><span> '</span><span>100</span><span>%',
            </span><span>marginTop:</span><span> '</span><span>0.25rem</span><span>',
            </span><span>padding:</span><span> '</span><span>0.5rem</span><span></span><span>0.75rem</span><span>',
            </span><span>borderRadius:</span><span></span><span>8</span><span>,
            </span><span>border:</span><span> '</span><span>1px</span><span></span><span>solid</span><span></span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.6</span><span>)',
            </span><span>fontFamily:</span><span> '</span><span>monospace</span><span>',
            </span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>',
            </span><span>minHeight:</span><span> '</span><span>80px</span><span>',
          }}
        />
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/builder/AIAssistant.tsx`

<pre class="overflow-visible!" data-start="40532" data-end="41721"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>AIAssistantProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;
</span><span>import</span><span> { </span><span>TextareaField</span><span> } </span><span>from</span><span></span><span>'@ui/form/TextareaField'</span><span>;
</span><span>import</span><span> { generateFunnelFromPrompt } </span><span>from</span><span></span><span>'@lib/ai'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>AIAssistant</span><span> = (</span><span>{ config, onConfigChange }: AIAssistantProps</span><span>) => {
  </span><span>const</span><span> [prompt, setPrompt] = </span><span>useState</span><span>(</span><span>''</span><span>);
  </span><span>const</span><span> [loading, setLoading] = </span><span>useState</span><span>(</span><span>false</span><span>);

  </span><span>const</span><span></span><span>handleGenerate</span><span> = </span><span>async</span><span> (</span><span></span><span>) => {
    </span><span>if</span><span> (!prompt.</span><span>trim</span><span>()) </span><span>return</span><span>;
    </span><span>setLoading</span><span>(</span><span>true</span><span>);
    </span><span>try</span><span> {
      </span><span>const</span><span> generated = </span><span>await</span><span></span><span>generateFunnelFromPrompt</span><span>(prompt);
      </span><span>onConfigChange</span><span>({ ...generated, </span><span>id</span><span>: config.</span><span>id</span><span> });
    } </span><span>finally</span><span> {
      </span><span>setLoading</span><span>(</span><span>false</span><span>);
    }
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.75rem</span><span>' }}>
      </span><span><TextareaField</span><span>
        </span><span>label</span><span>=</span><span>"Décris le funnel que tu veux créer"</span><span>
        </span><span>value</span><span>=</span><span>{prompt}</span><span>
        </span><span>onChange</span><span>=</span><span>{(e)</span><span> => setPrompt(e.target.value)}
        placeholder="Ex : quiz vidéo de 5 questions pour qualifier des leads en B2B..."
      />

      </span><span><button</span><span>
        </span><span>type</span><span>=</span><span>"button"</span><span>
        </span><span>onClick</span><span>=</span><span>{handleGenerate}</span><span>
        </span><span>disabled</span><span>=</span><span>{loading}</span><span>
      >
        {loading ? 'Génération en cours...' : 'Générer un funnel avec l’IA'}
      </span><span></button</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

---

# 13. Results

## `src/components/results/ResultsDashboard.tsx`

<pre class="overflow-visible!" data-start="41793" data-end="43152"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>Submission</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;
</span><span>import</span><span> { </span><span>AnswerCard</span><span> } </span><span>from</span><span></span><span>'./AnswerCard'</span><span>;
</span><span>import</span><span> { </span><span>SubmissionDetail</span><span> } </span><span>from</span><span></span><span>'./SubmissionDetail'</span><span>;

</span><span>interface</span><span></span><span>ResultsDashboardProps</span><span> {
  </span><span>submissions</span><span>: </span><span>Submission</span><span>[];
  onSelectSubmission?: </span><span>(submission: Submission</span><span>) => </span><span>void</span><span>;
  selectedSubmissionId?: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>ResultsDashboard</span><span> = ({
  submissions,
  onSelectSubmission,
  selectedSubmissionId,
}: ResultsDashboardProps) => {
  </span><span>const</span><span> selected =
    submissions.</span><span>find</span><span>(</span><span>(s</span><span>) => s.</span><span>id</span><span> === selectedSubmissionId) ?? submissions[</span><span>0</span><span>];

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>display:</span><span> '</span><span>grid</span><span>',
        </span><span>gridTemplateColumns:</span><span> '</span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>2fr</span><span>) </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>3fr</span><span>)',
        </span><span>gap:</span><span> '</span><span>1rem</span><span>',
      }}
    >
      </span><span><div</span><span>>
        </span><span><h3</span><span>>Soumissions</span><span></h3</span><span>>
        </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.5rem</span><span>', </span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>' }}>
          {submissions.map((submission) => (
            </span><span><AnswerCard</span><span>
              </span><span>key</span><span>=</span><span>{submission.id}</span><span>
              </span><span>submission</span><span>=</span><span>{submission}</span><span>
              </span><span>selected</span><span>=</span><span>{submission.id</span><span> === </span><span>selected?.id}</span><span>
              </span><span>onClick</span><span>=</span><span>{()</span><span> => onSelectSubmission?.(submission)}
            />
          ))}
        </span><span></div</span><span>>
      </span><span></div</span><span>>

      </span><span><div</span><span>>
        </span><span><h3</span><span>>Détails</span><span></h3</span><span>>
        {selected ? (
          </span><span><SubmissionDetail</span><span></span><span>submission</span><span>=</span><span>{selected}</span><span> />
        ) : (
          </span><span><p</span><span>>Aucune soumission sélectionnée.</span><span></p</span><span>>
        )}
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/results/AnswerCard.tsx`

<pre class="overflow-visible!" data-start="43198" data-end="44270"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>Submission</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;

</span><span>interface</span><span></span><span>AnswerCardProps</span><span> {
  </span><span>submission</span><span>: </span><span>Submission</span><span>;
  selected?: </span><span>boolean</span><span>;
  onClick?: </span><span>() =></span><span></span><span>void</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>AnswerCard</span><span> = (</span><span>{ submission, selected, onClick }: AnswerCardProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><button</span></span><span>
      </span><span>type</span><span>=</span><span>"button"</span><span>
      </span><span>onClick</span><span>=</span><span>{onClick}</span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>textAlign:</span><span> '</span><span>left</span><span>',
        </span><span>padding:</span><span> '</span><span>0.6rem</span><span></span><span>0.75rem</span><span>',
        </span><span>borderRadius:</span><span></span><span>10</span><span>,
        </span><span>border:</span><span></span><span>selected</span><span>
          ? '</span><span>1px</span><span></span><span>solid</span><span></span><span>var</span><span>(</span><span>--theme-primary</span><span>)'
          </span><span>:</span><span> '</span><span>1px</span><span></span><span>solid</span><span></span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.4</span><span>)',
        </span><span>background:</span><span></span><span>selected</span><span> ? '</span><span>rgba</span><span>(</span><span>37</span><span>,</span><span>99</span><span>,</span><span>235</span><span>,</span><span>0.12</span><span>)' </span><span>:</span><span> '</span><span>rgba</span><span>(</span><span>15</span><span>,</span><span>23</span><span>,</span><span>42</span><span>,</span><span>0.8</span><span>)',
        </span><span>cursor:</span><span> '</span><span>pointer</span><span>',
      }}
    >
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.9rem</span><span>', </span><span>fontWeight:</span><span></span><span>500</span><span> }}>
        {submission.leadName || 'Lead anonyme'}
      </span><span></div</span><span>>
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.8rem</span><span>', </span><span>opacity:</span><span></span><span>0.8</span><span> }}>
        {submission.leadEmail || 'Pas d’email'}
      </span><span></div</span><span>>
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.7rem</span><span>', </span><span>opacity:</span><span></span><span>0.6</span><span>, </span><span>marginTop:</span><span> '</span><span>0.25rem</span><span>' }}>
        {new Date(submission.createdAt).toLocaleString()}
      </span><span></div</span><span>>
    </span><span></button</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/results/SubmissionDetail.tsx`

<pre class="overflow-visible!" data-start="44322" data-end="45913"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>Submission</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;
</span><span>import</span><span> { </span><span>AnswerAnalysis</span><span> } </span><span>from</span><span></span><span>'./AnswerAnalysis'</span><span>;

</span><span>interface</span><span></span><span>SubmissionDetailProps</span><span> {
  </span><span>submission</span><span>: </span><span>Submission</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>SubmissionDetail</span><span> = (</span><span>{ submission }: SubmissionDetailProps</span><span>) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>borderRadius:</span><span></span><span>12</span><span>,
        </span><span>border:</span><span> '</span><span>1px</span><span></span><span>solid</span><span></span><span>rgba</span><span>(</span><span>148</span><span>,</span><span>163</span><span>,</span><span>184</span><span>,</span><span>0.4</span><span>)',
        </span><span>padding:</span><span> '</span><span>0.75rem</span><span>',
      }}
    >
      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginBottom:</span><span> '</span><span>0.75rem</span><span>' }}>
        </span><span><strong</span><span>>{submission.leadName || 'Lead anonyme'}</span><span></strong</span><span>>
        </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>', </span><span>opacity:</span><span></span><span>0.8</span><span> }}>
          {submission.leadEmail || 'Pas d’email'}
        </span><span></div</span><span>>
      </span><span></div</span><span>>

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>display:</span><span> '</span><span>grid</span><span>', </span><span>gap:</span><span> '</span><span>0.5rem</span><span>' }}>
        {submission.answers.map((answer) => (
          </span><span><div</span><span>
            </span><span>key</span><span>=</span><span>{answer.questionId}</span><span>
            </span><span>style</span><span>=</span><span>{{</span><span>
              </span><span>borderRadius:</span><span></span><span>10</span><span>,
              </span><span>padding:</span><span> '</span><span>0.5rem</span><span></span><span>0.6rem</span><span>',
              </span><span>background:</span><span> '</span><span>rgba</span><span>(</span><span>15</span><span>,</span><span>23</span><span>,</span><span>42</span><span>,</span><span>0.85</span><span>)',
            }}
          >
            </span><span><div</span><span>
              </span><span>style</span><span>=</span><span>{{</span><span>
                </span><span>fontSize:</span><span> '</span><span>0.82rem</span><span>',
                </span><span>opacity:</span><span></span><span>0.85</span><span>,
                </span><span>marginBottom:</span><span> '</span><span>0.25rem</span><span>',
              }}
            >
              Question ID: {answer.questionId}
            </span><span></div</span><span>>
            </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.9rem</span><span>' }}>
              {Array.isArray(answer.answer)
                ? answer.answer.join(', ')
                : answer.answer}
            </span><span></div</span><span>>
          </span><span></div</span><span>>
        ))}
      </span><span></div</span><span>>

      </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>0.75rem</span><span>' }}>
        </span><span><AnswerAnalysis</span><span></span><span>submission</span><span>=</span><span>{submission}</span><span> />
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/results/AnswerAnalysis.tsx`

<pre class="overflow-visible!" data-start="45963" data-end="47317"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useEffect, useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>Submission</span><span>, </span><span>AnalysisResult</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;
</span><span>import</span><span> { analyzeAnswer } </span><span>from</span><span></span><span>'@lib/ai'</span><span>;
</span><span>import</span><span> { </span><span>SentimentDisplay</span><span> } </span><span>from</span><span></span><span>'./SentimentDisplay'</span><span>;

</span><span>interface</span><span></span><span>AnswerAnalysisProps</span><span> {
  </span><span>submission</span><span>: </span><span>Submission</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>AnswerAnalysis</span><span> = (</span><span>{ submission }: AnswerAnalysisProps</span><span>) => {
  </span><span>const</span><span> [result, setResult] = useState<</span><span>AnalysisResult</span><span> | </span><span>null</span><span>>(</span><span>null</span><span>);

  </span><span>useEffect</span><span>(</span><span>() =></span><span> {
    </span><span>const</span><span> firstAnswer = submission.</span><span>answers</span><span>[</span><span>0</span><span>]?.</span><span>answer</span><span>;
    </span><span>if</span><span> (!firstAnswer || </span><span>Array</span><span>.</span><span>isArray</span><span>(firstAnswer)) </span><span>return</span><span>;

    </span><span>analyzeAnswer</span><span>(firstAnswer, </span><span>'Premier écran du quiz'</span><span>).</span><span>then</span><span>(setResult);
  }, [submission]);

  </span><span>if</span><span> (!result) {
    </span><span>return</span><span></span><span><span class="language-xml"><p</span></span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>' }}>Analyse en cours…</span><span></p</span><span>>;
  }

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>>
      </span><span><SentimentDisplay</span><span></span><span>sentiment</span><span>=</span><span>{result.sentiment}</span><span></span><span>score</span><span>=</span><span>{result.score}</span><span> />

      </span><span><ul</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>', </span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>' }}>
        {result.keyPoints.map((point, idx) => (
          </span><span><li</span><span></span><span>key</span><span>=</span><span>{idx}</span><span>>{point}</span><span></li</span><span>>
        ))}
      </span><span></ul</span><span>>

      {result.recommendations && (
        </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span> '</span><span>0.5rem</span><span>', </span><span>fontSize:</span><span> '</span><span>0.85rem</span><span>' }}>
          </span><span><strong</span><span>>Recommandations :</span><span></strong</span><span>>
          </span><span><ul</span><span>>
            {result.recommendations.map((rec, idx) => (
              </span><span><li</span><span></span><span>key</span><span>=</span><span>{idx}</span><span>>{rec}</span><span></li</span><span>>
            ))}
          </span><span></ul</span><span>>
        </span><span></div</span><span>>
      )}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

## `src/components/results/SentimentDisplay.tsx`

<pre class="overflow-visible!" data-start="47369" data-end="48418"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>interface</span><span></span><span>SentimentDisplayProps</span><span> {
  </span><span>sentiment</span><span>: </span><span>'positive'</span><span> | </span><span>'neutral'</span><span> | </span><span>'negative'</span><span>;
  score?: </span><span>number</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>SentimentDisplay</span><span> = (</span><span>{ sentiment, score }: SentimentDisplayProps</span><span>) => {
  </span><span>const</span><span> label =
    sentiment === </span><span>'positive'</span><span>
      ? </span><span>'Positif'</span><span>
      : sentiment === </span><span>'negative'</span><span>
      ? </span><span>'Négatif'</span><span>
      : </span><span>'Neutre'</span><span>;

  </span><span>const</span><span> color =
    sentiment === </span><span>'positive'</span><span>
      ? </span><span>'#22c55e'</span><span>
      : sentiment === </span><span>'negative'</span><span>
      ? </span><span>'#ef4444'</span><span>
      : </span><span>'#eab308'</span><span>;

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>
      </span><span>style</span><span>=</span><span>{{</span><span>
        </span><span>display:</span><span> '</span><span>inline-flex</span><span>',
        </span><span>alignItems:</span><span> '</span><span>center</span><span>',
        </span><span>gap:</span><span> '</span><span>0.35rem</span><span>',
        </span><span>padding:</span><span> '</span><span>0.25rem</span><span></span><span>0.6rem</span><span>',
        </span><span>borderRadius:</span><span></span><span>999</span><span>,
        </span><span>border:</span><span> `</span><span>1px</span><span></span><span>solid</span><span> ${</span><span>color</span><span>}`,
        </span><span>fontSize:</span><span> '</span><span>0.8rem</span><span>',
      }}
    >
      </span><span><span</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span>
          </span><span>width:</span><span></span><span>8</span><span>,
          </span><span>height:</span><span></span><span>8</span><span>,
          </span><span>borderRadius:</span><span> '</span><span>999px</span><span>',
          </span><span>background:</span><span></span><span>color</span><span>,
        }}
      />
      </span><span><span</span><span>>{label}</span><span></span</span><span>>
      {typeof score === 'number' && (
        </span><span><span</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>opacity:</span><span></span><span>0.8</span><span> }}>({Math.round(score * 100)}%)</span><span></span</span><span>>
      )}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

---

Ça te donne  **toute la structure refactorisée** , avec **un fichier concret par entrée de ton arbre** :

* `src/` : `App.tsx`, `main.tsx`, `vite-env.d.ts`
* `components/` : `quiz/`, `builder/`, `results/`, `media/`, `common/`, `ui/…`
* `lib/ai` + `lib/utils`
* `types/*`
* `constants/*`
* `hooks/*`
* `styles/globals.css`

Tu peux maintenant :

1. Coller ces fichiers dans ton repo,
2. Lancer `npm run dev`,
3. Et ensuite raffiner la logique métier (stockage de réponses, navigation conditionnelle, appels IA réels, etc.).

Si tu veux, on peut faire ensuite un **pass de durcissement** sur un fichier en particulier (par ex. `QuizContainer` ou `Builder`) pour le rapprocher de ton comportement actuel en production.
