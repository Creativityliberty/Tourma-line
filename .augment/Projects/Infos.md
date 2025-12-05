## 1. Principe général

Cible que tu proposes :

* Tout le front dans `src/`
* Découpage par **feature** dans `src/components/` :
  * `quiz/`
  * `builder/`
  * `results/`
  * `media/`
  * `common/`
  * `ui/`
* Logique métier / IA dans `src/lib/`
* Types dans `src/types/`
* Hooks partagés dans `src/hooks/`
* Config / constantes dans `src/constants/`

Actuellement tu as un mélange de :

* Fichiers React à la racine (`App.tsx`, `index.tsx`, `components/`, `lib/`, `styles/`, `stores/`)
* Et un `src/` déjà existant avec un début d’orga (`src/components/OptimizedImage.tsx`, `src/lib/ai.ts`, `src/stores/appStore.ts`, etc.) creativityliberty-face2face-8a5…

L’objectif :  **tout recentrer dans `src/`** , en gardant ton nouvel arbre comme vérité.

---

## 2. Mapping concret ancien → nouveau

### 2.1. Base `src/`

Création de la base (une fois dans le repo) :

<pre class="overflow-visible!" data-start="1290" data-end="1430"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mkdir</span><span> -p src/{components/{quiz,builder,results,media,common,ui/{icons,form,layout}},lib/{ai,utils},types,constants,hooks,styles}
</span></span></code></div></div></pre>

Ensuite, **déplacements** (à adapter selon ton outil : mv, refactor IDE, etc.).

### 2.2. Composants Quiz

Depuis la racine actuelle : creativityliberty-face2face-8a5…

<pre class="overflow-visible!" data-start="1608" data-end="1851"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/
  QuizContainer.tsx
  WelcomeScreen.tsx
  QuestionScreen.tsx
  MessageScreen.tsx
  LeadCaptureScreen.tsx
  screens/
    QuizCompletionScreen.tsx
    LeadConfirmationScreen.tsx
    ErrorBoundary.tsx
    MediaRecorder.tsx
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="1865" data-end="2550"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/QuizContainer.tsx           src/components/quiz/QuizContainer.tsx
</span><span>mv</span><span> components/WelcomeScreen.tsx           src/components/quiz/WelcomeScreen.tsx
</span><span>mv</span><span> components/QuestionScreen.tsx          src/components/quiz/QuestionScreen.tsx
</span><span>mv</span><span> components/MessageScreen.tsx           src/components/quiz/MessageScreen.tsx
</span><span>mv</span><span> components/LeadCaptureScreen.tsx       src/components/quiz/LeadCaptureScreen.tsx

</span><span>mv</span><span> components/screens/QuizCompletionScreen.tsx src/components/quiz/QuizCompletionScreen.tsx
</span><span>mv</span><span> components/screens/LeadConfirmationScreen.tsx src/components/quiz/LeadConfirmationScreen.tsx
</span><span>mv</span><span> components/screens/ErrorBoundary.tsx   src/components/quiz/ErrorBoundary.tsx
</span></span></code></div></div></pre>

Pour `MediaRecorder`, je te propose :

<pre class="overflow-visible!" data-start="2591" data-end="2683"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/screens/MediaRecorder.tsx   src/components/media/MediaRecorder.tsx
</span></span></code></div></div></pre>

### 2.3. Builder

<pre class="overflow-visible!" data-start="2703" data-end="2832"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/
  Builder.tsx
  builder/
    AIAssistant.tsx
    ShareAndEmbed.tsx
    StepEditor.tsx
    ThemeEditor.tsx
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="2846" data-end="3259"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/Builder.tsx                 src/components/builder/Builder.tsx
</span><span>mv</span><span> components/builder/AIAssistant.tsx     src/components/builder/AIAssistant.tsx
</span><span>mv</span><span> components/builder/ShareAndEmbed.tsx   src/components/builder/ShareAndEmbed.tsx
</span><span>mv</span><span> components/builder/StepEditor.tsx      src/components/builder/StepEditor.tsx
</span><span>mv</span><span> components/builder/ThemeEditor.tsx     src/components/builder/ThemeEditor.tsx
</span></span></code></div></div></pre>

Ensuite, **phase 2** de refacto : découper `StepEditor` en sous-composants, mais on verrouille l’orga d’abord.

### 2.4. Results / Dashboard

<pre class="overflow-visible!" data-start="3403" data-end="3543"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/dashboard/
  ResultsDashboard.tsx
  SubmissionDetail.tsx
  AnswerCard.tsx
  AnswerAnalysis.tsx
  SentimentDisplay.tsx
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="3557" data-end="4005"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/dashboard/ResultsDashboard.tsx src/components/results/ResultsDashboard.tsx
</span><span>mv</span><span> components/dashboard/SubmissionDetail.tsx src/components/results/SubmissionDetail.tsx
</span><span>mv</span><span> components/dashboard/AnswerCard.tsx       src/components/results/AnswerCard.tsx
</span><span>mv</span><span> components/dashboard/AnswerAnalysis.tsx   src/components/results/AnswerAnalysis.tsx
</span><span>mv</span><span> components/dashboard/SentimentDisplay.tsx src/components/results/SentimentDisplay.tsx
</span></span></code></div></div></pre>

### 2.5. Media

<pre class="overflow-visible!" data-start="4023" data-end="4082"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/
  MediaViewer.tsx
  VideoPlayer.tsx
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="4096" data-end="4263"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/MediaViewer.tsx            src/components/media/MediaViewer.tsx
</span><span>mv</span><span> components/VideoPlayer.tsx            src/components/media/VideoPlayer.tsx
</span></span></code></div></div></pre>

(+ `MediaRecorder` déjà déplacé plus haut)

### 2.6. UI réutilisable

Actuel : creativityliberty-face2face-8a5…

<pre class="overflow-visible!" data-start="4385" data-end="4698"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/ui/
  BackButton.tsx
  Button.tsx
  ButtonImproved.tsx
  Card.tsx
  CollapsibleSection.tsx
  ColorPicker.tsx
  FloatingBuilderButton.tsx
  index.ts
  Input.tsx
  InputWithIcon.tsx
  LoadingSpinner.tsx
  Modal.tsx
  Select.tsx
  SocialIcon.tsx
  Textarea.tsx
  Toast.tsx
components/icons.tsx
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="4712" data-end="4852"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/ui/*                    src/components/ui/
</span><span>mv</span><span> components/icons.tsx               src/components/ui/icons/index.tsx
</span></span></code></div></div></pre>

Et répartition secondaire (quand tu auras deux minutes) :

* `Input`, `Textarea`, `Select`, `ColorPicker` → `src/components/ui/form/`
* `CollapsibleSection` → `src/components/ui/layout/CollapsibleSection.tsx`

### 2.7. Common / Layout

<pre class="overflow-visible!" data-start="5090" data-end="5238"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>components/
  Header.tsx
  Header.improved.tsx
  Footer.tsx
  ProgressBar.tsx
  UserSettings.tsx
  AuthModal.tsx (dans components/auth/)
</span></span></code></div></div></pre>

➡️ cible :

<pre class="overflow-visible!" data-start="5252" data-end="5784"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> components/Header.tsx              src/components/common/Header.tsx
</span><span>mv</span><span> components/Footer.tsx              src/components/common/Footer.tsx
</span><span>mv</span><span> components/ProgressBar.tsx         src/components/common/ProgressBar.tsx
</span><span>mv</span><span> components/UserSettings.tsx        src/components/common/UserSettings.tsx

</span><span>mv</span><span> components/auth/AuthModal.tsx      src/components/common/AuthModal.tsx
</span><span>mv</span><span> components/auth/LoginForm.tsx      src/components/common/LoginForm.tsx
</span><span>mv</span><span> components/auth/RegisterForm.tsx   src/components/common/RegisterForm.tsx
</span></span></code></div></div></pre>

Et tu peux **supprimer** `Header.improved.tsx` une fois que tu as fusionné les améliorations (le rapport conseille déjà de le faire). creativityliberty-face2face-8a5…

### 2.8. Stores, lib, types, constants

Actuel :

* `stores/appStore.ts`
* `src/stores/appStore.ts` (doublon, à garder  **un seul** )
* `lib/ai.ts`, `src/lib/ai.ts`, `lib/api.ts`
* `types.ts`
* `constants.ts`

➡️ cible :

<pre class="overflow-visible!" data-start="6181" data-end="6612"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>mv</span><span> stores/appStore.ts           src/stores/appStore.ts        </span><span># puis supprimer l'autre doublon</span><span>
</span><span>mv</span><span> lib/api.ts                   src/lib/api.ts
</span><span>mv</span><span> lib/ai.ts                    src/lib/ai/index.ts           </span><span># point d’entrée IA</span><span>
</span><span>mv</span><span> src/lib/ai.ts                src/lib/ai/analysis.ts        </span><span># par ex. (voir section 4)</span><span>

</span><span>mv</span><span> types.ts                     src/types/index.ts
</span><span>mv</span><span> constants.ts                 src/constants/index.ts
</span></span></code></div></div></pre>

---

## 3. Extraction de ThemeManager & nettoyage de App.tsx

Aujourd’hui, tu as un `ThemeManager` inline dans `App.tsx`. creativityliberty-face2face-8a5…

👉 On l’extrait dans `src/components/common/ThemeManager.tsx` :

<pre class="overflow-visible!" data-start="6842" data-end="8631"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/components/common/ThemeManager.tsx</span><span>
</span><span>import</span><span></span><span>React</span><span>, { useEffect } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>; </span><span>// ou @types/index si tu préfères</span><span>

</span><span>const</span><span> darkenColor = (</span><span>hex</span><span>: </span><span>string</span><span>, </span><span>percent</span><span>: </span><span>number</span><span>): </span><span>string</span><span> => {
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

</span><span>export</span><span></span><span>const</span><span></span><span>ThemeManager</span><span>: </span><span>React</span><span>.</span><span>FC</span><span><{ </span><span>theme</span><span>: </span><span>ThemeConfig</span><span> }> = </span><span>({ theme }</span><span>) => {
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
      link.</span><span>href</span><span> = </span><span>`https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+'</span><span>)}:wght@400;500;600;700&display=swap`;
      </span><span>document</span><span>.</span><span>head</span><span>.</span><span>appendChild</span><span>(link);
    }
  }, [theme]);

  </span><span>return</span><span></span><span>null</span><span>;
};
</span></span></code></div></div></pre>

Puis dans `App.tsx` (nouvelle version dans `src/App.tsx`) :

<pre class="overflow-visible!" data-start="8694" data-end="8848"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { </span><span>ThemeManager</span><span> } </span><span>from</span><span></span><span>'@components/common/ThemeManager'</span><span>;

</span><span>// ...</span><span>

</span><span><span class="language-xml"><ThemeManager</span></span><span></span><span>theme</span><span>=</span><span>{quizConfig.theme</span><span> || </span><span>DEFAULT_QUIZ_CONFIG.theme</span><span>} />
</span></span></code></div></div></pre>

---

## 4. Hooks personnalisés (version plus “réelle”)

### 4.1. `useQuizNavigation`

<pre class="overflow-visible!" data-start="8936" data-end="10198"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/hooks/useQuizNavigation.ts</span><span>
</span><span>import</span><span> { useCallback, useMemo } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>useQuizNavigation</span><span> = (</span><span>steps: QuizStep[], currentStepId: string</span><span> | </span><span>null</span><span>) => {
  </span><span>const</span><span> currentIndex = </span><span>useMemo</span><span>(
    </span><span>() =></span><span> steps.</span><span>findIndex</span><span>(</span><span>(s</span><span>) => s.</span><span>id</span><span> === currentStepId),
    [steps, currentStepId]
  );

  </span><span>const</span><span> currentStep = currentIndex >= </span><span>0</span><span> ? steps[currentIndex] : </span><span>null</span><span>;

  </span><span>const</span><span> canGoBack = currentIndex > </span><span>0</span><span>;
  </span><span>const</span><span> canGoNext = currentIndex >= </span><span>0</span><span> && currentIndex < steps.</span><span>length</span><span> - </span><span>1</span><span>;

  </span><span>const</span><span> navigateToStep = </span><span>useCallback</span><span>(
    </span><span>(id: string</span><span>) => {
      </span><span>const</span><span> exists = steps.</span><span>some</span><span>(</span><span>(s</span><span>) => s.</span><span>id</span><span> === id);
      </span><span>if</span><span> (!exists) {
        </span><span>console</span><span>.</span><span>warn</span><span>(</span><span>'[useQuizNavigation] step not found:'</span><span>, id);
        </span><span>return</span><span></span><span>null</span><span>;
      }
      </span><span>return</span><span> id;
    },
    [steps]
  );

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
    navigateToStep,
    getNextStepId,
    getPrevStepId,
  };
};
</span></span></code></div></div></pre>

Tu peux ensuite l’utiliser dans `QuizContainer` plutôt que de réimplémenter la logique de navigation.

### 4.2. `useTheme`

<pre class="overflow-visible!" data-start="10324" data-end="10646"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/hooks/useTheme.ts</span><span>
</span><span>import</span><span> { useMemo } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { </span><span>DEFAULT_QUIZ_CONFIG</span><span> } </span><span>from</span><span></span><span>'@constants/quiz.constants'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>useTheme</span><span> = (</span><span>theme?: ThemeConfig</span><span>) => {
  </span><span>return</span><span></span><span>useMemo</span><span>(
    </span><span>() =></span><span> theme || </span><span>DEFAULT_QUIZ_CONFIG</span><span>.</span><span>theme</span><span>,
    [theme]
  );
};
</span></span></code></div></div></pre>

### 4.3. `useMediaRecorder`

<pre class="overflow-visible!" data-start="10677" data-end="12659"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/hooks/useMediaRecorder.ts</span><span>
</span><span>import</span><span> { useEffect, useRef, useState } </span><span>from</span><span></span><span>'react'</span><span>;

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
      </span><span>setError</span><span>(</span><span>'Impossible de démarrer l’enregistrement'</span><span>);
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

Tu peux ensuite brancher ça dans `MediaRecorder.tsx` en mode propre.

---

## 5. `lib/ai` structuré

Cible que tu as décrite :

* `lib/ai/index.ts`
* `lib/ai/funnel-generation.ts`
* `lib/ai/content-generation.ts`
* `lib/ai/analysis.ts`

Exemple minimal :

<pre class="overflow-visible!" data-start="12917" data-end="13373"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/lib/ai/funnel-generation.ts</span><span>
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span> { callGemini } </span><span>from</span><span></span><span>'./shared'</span><span>;

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>generateFunnelFromPrompt</span><span>(</span><span>prompt: string</span><span>): </span><span>Promise</span><span><</span><span>QuizConfig</span><span>> {
  </span><span>const</span><span> response = </span><span>await</span><span></span><span>callGemini</span><span>({
    </span><span>systemInstruction</span><span>: </span><span>'Tu es un assistant spécialisé en funnels vidéo.'</span><span>,
    </span><span>userPrompt</span><span>: prompt,
  });

  </span><span>// Ici tu parse la sortie pour construire un QuizConfig</span><span>
  </span><span>return</span><span> response.</span><span>quizConfig</span><span>;
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="13375" data-end="13580"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/lib/ai/content-generation.ts</span><span>
</span><span>import</span><span> { callGemini } </span><span>from</span><span></span><span>'./shared'</span><span>;

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>generateMediaContent</span><span>(</span><span>prompt: string</span><span>) {
  </span><span>// génération de texte, scripts, idées de vidéos, etc.</span><span>
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="13582" data-end="14148"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/lib/ai/analysis.ts</span><span>
</span><span>import</span><span> { callGemini } </span><span>from</span><span></span><span>'./shared'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>AnalysisResult</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;

</span><span>export</span><span></span><span>async</span><span></span><span>function</span><span></span><span>analyzeAnswer</span><span>(
  answer: </span><span>string</span><span>,
  questionContext: </span><span>string</span><span>
): </span><span>Promise</span><span><</span><span>AnalysisResult</span><span>> {
  </span><span>const</span><span> res = </span><span>await</span><span></span><span>callGemini</span><span>({
    </span><span>systemInstruction</span><span>: </span><span>'Tu analyses des réponses à un quiz vidéo.'</span><span>,
    </span><span>userPrompt</span><span>: </span><span>`Question: ${questionContext}</span><span>\nRéponse: </span><span>${answer}</span><span>`,
  });

  </span><span>// Parse vers ton type</span><span>
  </span><span>return</span><span> {
    </span><span>sentiment</span><span>: res.</span><span>sentiment</span><span>,
    </span><span>keyPoints</span><span>: res.</span><span>keyPoints</span><span>,
    </span><span>recommendations</span><span>: res.</span><span>recommendations</span><span>,
  };
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="14150" data-end="14285"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/lib/ai/index.ts</span><span>
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./funnel-generation'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./content-generation'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./analysis'</span><span>;
</span></span></code></div></div></pre>

---

## 6. Types & constants

Exemple très simple pour matérialiser ton découpage :

<pre class="overflow-visible!" data-start="14372" data-end="15073"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/types/quiz.types.ts</span><span>
</span><span>export</span><span></span><span>enum</span><span></span><span>StepType</span><span> {
  </span><span>WELCOME</span><span> = </span><span>0</span><span>,
  </span><span>QUESTION</span><span> = </span><span>1</span><span>,
  </span><span>MESSAGE</span><span> = </span><span>2</span><span>,
  </span><span>LEAD_CAPTURE</span><span> = </span><span>3</span><span>,
  </span><span>COMPLETION</span><span> = </span><span>4</span><span>,
}

</span><span>export</span><span></span><span>interface</span><span></span><span>QuizStep</span><span> {
  </span><span>id</span><span>: </span><span>string</span><span>;
  </span><span>type</span><span>: </span><span>StepType</span><span>;
  </span><span>title</span><span>: </span><span>string</span><span>;
  description?: </span><span>string</span><span>;
  media?: {
    </span><span>type</span><span>: </span><span>'image'</span><span> | </span><span>'video'</span><span> | </span><span>'audio'</span><span> | </span><span>'youtube'</span><span>;
    </span><span>url</span><span>: </span><span>string</span><span>;
  };
  options?: </span><span>Array</span><span><{
    </span><span>id</span><span>: </span><span>string</span><span>;
    </span><span>label</span><span>: </span><span>string</span><span>;
    nextStepId?: </span><span>string</span><span>;
  }>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>ThemeConfig</span><span> {
  </span><span>colors</span><span>: {
    </span><span>background</span><span>: </span><span>string</span><span>;
    </span><span>primary</span><span>: </span><span>string</span><span>;
    </span><span>accent</span><span>: </span><span>string</span><span>;
    </span><span>text</span><span>: </span><span>string</span><span>;
    </span><span>buttonText</span><span>: </span><span>string</span><span>;
  };
  </span><span>font</span><span>: </span><span>string</span><span>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>QuizConfig</span><span> {
  id?: </span><span>string</span><span>;
  </span><span>name</span><span>: </span><span>string</span><span>;
  </span><span>steps</span><span>: </span><span>QuizStep</span><span>[];
  </span><span>theme</span><span>: </span><span>ThemeConfig</span><span>;
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="15075" data-end="15342"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/types/builder.types.ts</span><span>
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'./quiz.types'</span><span>;

</span><span>export</span><span></span><span>interface</span><span></span><span>BuilderProps</span><span> {
  </span><span>config</span><span>: </span><span>QuizConfig</span><span>;
  </span><span>setConfig</span><span>: </span><span>(config: QuizConfig</span><span>) => </span><span>void</span><span>;
  onSave?: </span><span>(config: QuizConfig</span><span>) => </span><span>Promise</span><span><</span><span>void</span><span>> | </span><span>void</span><span>;
  onLoad?: </span><span>() =></span><span></span><span>void</span><span>;
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="15344" data-end="15678"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/types/results.types.ts</span><span>
</span><span>export</span><span></span><span>interface</span><span></span><span>Submission</span><span> {
  </span><span>id</span><span>: </span><span>string</span><span>;
  </span><span>createdAt</span><span>: </span><span>string</span><span>;
  </span><span>answers</span><span>: </span><span>Record</span><span><</span><span>string</span><span>, </span><span>any</span><span>>;
  leadEmail?: </span><span>string</span><span>;
  metadata?: </span><span>Record</span><span><</span><span>string</span><span>, </span><span>any</span><span>>;
}

</span><span>export</span><span></span><span>interface</span><span></span><span>AnalysisResult</span><span> {
  </span><span>sentiment</span><span>: </span><span>'positive'</span><span> | </span><span>'neutral'</span><span> | </span><span>'negative'</span><span>;
  </span><span>keyPoints</span><span>: </span><span>string</span><span>[];
  recommendations?: </span><span>string</span><span>[];
}
</span></span></code></div></div></pre>

<pre class="overflow-visible!" data-start="15680" data-end="15807"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// src/types/index.ts</span><span>
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./quiz.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./builder.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./results.types'</span><span>;
</span></span></code></div></div></pre>

---

## 7. tsconfig paths & imports propres

Ton idée de `paths` est bonne. Dans `tsconfig.json` :

<pre class="overflow-visible!" data-start="15909" data-end="16257"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"compilerOptions"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"baseUrl"</span><span>:</span><span></span><span>"."</span><span>,</span><span>
    </span><span>"paths"</span><span>:</span><span></span><span>{</span><span>
      </span><span>"@components/*"</span><span>:</span><span></span><span>[</span><span>"src/components/*"</span><span>]</span><span>,</span><span>
      </span><span>"@lib/*"</span><span>:</span><span></span><span>[</span><span>"src/lib/*"</span><span>]</span><span>,</span><span>
      </span><span>"@types/*"</span><span>:</span><span></span><span>[</span><span>"src/types/*"</span><span>]</span><span>,</span><span>
      </span><span>"@constants/*"</span><span>:</span><span></span><span>[</span><span>"src/constants/*"</span><span>]</span><span>,</span><span>
      </span><span>"@hooks/*"</span><span>:</span><span></span><span>[</span><span>"src/hooks/*"</span><span>]</span><span>,</span><span>
      </span><span>"@ui/*"</span><span>:</span><span></span><span>[</span><span>"src/components/ui/*"</span><span>]</span><span>,</span><span>
      </span><span>"@stores/*"</span><span>:</span><span></span><span>[</span><span>"src/stores/*"</span><span>]</span><span>
    </span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

Après ça, tu peux remplacer par exemple dans `App.tsx` :

<pre class="overflow-visible!" data-start="16317" data-end="16689"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>// Avant</span><span>
</span><span>import</span><span> { </span><span>QuizContainer</span><span> } </span><span>from</span><span></span><span>'./components/QuizContainer'</span><span>;
</span><span>import</span><span> { </span><span>Builder</span><span> } </span><span>from</span><span></span><span>'./components/Builder'</span><span>;

</span><span>// Après</span><span>
</span><span>import</span><span> { </span><span>QuizContainer</span><span> } </span><span>from</span><span></span><span>'@components/quiz/QuizContainer'</span><span>;
</span><span>import</span><span> { </span><span>Builder</span><span> } </span><span>from</span><span></span><span>'@components/builder/Builder'</span><span>;
</span><span>import</span><span> { </span><span>ThemeManager</span><span> } </span><span>from</span><span></span><span>'@components/common/ThemeManager'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span></span></code></div></div></pre>

---

## 8. Ordre de bataille (pour pas tout casser)

1. **Créer les dossiers `src/...`** (comme défini).
2. **Déplacer les fichiers** selon le mapping ci-dessus, sans changer le code.
3. **Mettre à jour `tsconfig.json`** avec les `paths`.
4. Fixer tous les imports cassés (TypeScript t’aidera).
5. Déplacer/extraire `ThemeManager` et nettoyer `App.tsx`.
6. Introduire doucement les hooks (`useQuizNavigation`, `useMediaRecorder`) sans changer la logique métier.
7. Scinder `lib/ai.ts` en modules comme décrit.
8. **Lancer la suite de tests** (tu as déjà Jest + une base de tests `ResultsDashboard.test.tsx`). creativityliberty-face2face-8a5…
9. Quand tout passe : **supprimer les doublons** (`Header.improved.tsx`, ancien `lib/ai.ts` non utilisé, vieux `components` à la racine s’il en reste).

---

Si tu veux, au prochain message, on peut prendre **un seul fichier clé** (par ex. `QuizContainer` ou `Builder`) et le réécrire **entièrement** dans la nouvelle arbo, import
