* ✅ Responsive propre (mobile → desktop).
* ✅ Profil entreprise (nom de boîte + logo + tagline + site).
* ✅ Profil stocké (localStorage) et éditable dans l’UI.
* ✅ Branding visible dans le  **builder** , la **preview** et l’**écran final** du funnel.

Je ne réécris pas **tout** le scaffold (tu l’as déjà), je te donne **uniquement les fichiers à créer / modifier** pour ajouter tout ça.

---

## 1. Nouveau type : profil entreprise

### `src/types/profile.types.ts` (NOUVEAU)

<pre class="overflow-visible!" data-start="544" data-end="672"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>interface</span><span></span><span>CompanyProfile</span><span> {
  </span><span>companyName</span><span>: </span><span>string</span><span>;
  logoUrl?: </span><span>string</span><span>;
  tagline?: </span><span>string</span><span>;
  website?: </span><span>string</span><span>;
}
</span></span></code></div></div></pre>

### `src/types/index.ts` (À COMPLÉTER)

Ajoute l’export :

<pre class="overflow-visible!" data-start="733" data-end="883"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span> * </span><span>from</span><span></span><span>'./quiz.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./builder.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./results.types'</span><span>;
</span><span>export</span><span> * </span><span>from</span><span></span><span>'./profile.types'</span><span>; </span><span>// <= ajout</span><span>
</span></span></code></div></div></pre>

---

## 2. Extension des props du Builder & de l’App

### `src/types/builder.types.ts` (MODIF)

On ajoute le profil dans les props.

<pre class="overflow-visible!" data-start="1018" data-end="1343"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span>, </span><span>QuizStep</span><span>, </span><span>ThemeConfig</span><span> } </span><span>from</span><span></span><span>'./quiz.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'./profile.types'</span><span>;

</span><span>export</span><span></span><span>interface</span><span></span><span>BuilderProps</span><span> {
  </span><span>config</span><span>: </span><span>QuizConfig</span><span>;
  </span><span>setConfig</span><span>: </span><span>(config: QuizConfig</span><span>) => </span><span>void</span><span>;
  </span><span>companyProfile</span><span>: </span><span>CompanyProfile</span><span>;
  </span><span>setCompanyProfile</span><span>: </span><span>(profile: CompanyProfile</span><span>) => </span><span>void</span><span>;
}
</span></span></code></div></div></pre>

(les autres interfaces peuvent rester identiques, pas besoin de les toucher)

---

## 3. Stockage et gestion côté App

### `src/lib/utils/storage.ts` (MODIF LÉGÈRE)

On garde ce que tu avais, et on ajoute juste une constante pour la clé :

<pre class="overflow-visible!" data-start="1585" data-end="2189"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-ts"><span><span>export</span><span></span><span>const</span><span> saveToLocalStorage = <T>(</span><span>key</span><span>: </span><span>string</span><span>, </span><span>value</span><span>: T): </span><span>void</span><span> => {
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

</span><span>// clé réutilisable</span><span>
</span><span>export</span><span></span><span>const</span><span></span><span>PROFILE_STORAGE_KEY</span><span> = </span><span>'face2face_company_profile'</span><span>;
</span></span></code></div></div></pre>

### `src/App.tsx` (MODIF)

On ajoute l’état `companyProfile`, lecture/écriture localStorage, et on injecte partout.

<pre class="overflow-visible!" data-start="2308" data-end="4984"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useEffect, useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span> { </span><span>QuizContainer</span><span> } </span><span>from</span><span></span><span>'@components/quiz/QuizContainer'</span><span>;
</span><span>import</span><span> { </span><span>Builder</span><span> } </span><span>from</span><span></span><span>'@components/builder/Builder'</span><span>;
</span><span>import</span><span> { </span><span>ThemeManager</span><span> } </span><span>from</span><span></span><span>'@components/common/ThemeManager'</span><span>;
</span><span>import</span><span> { </span><span>DEFAULT_QUIZ_CONFIG</span><span> } </span><span>from</span><span></span><span>'@constants/quiz.constants'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;
</span><span>import</span><span> { loadFromLocalStorage, saveToLocalStorage, </span><span>PROFILE_STORAGE_KEY</span><span> } </span><span>from</span><span></span><span>'@lib/utils/storage'</span><span>;
</span><span>import</span><span> { </span><span>CompanyBranding</span><span> } </span><span>from</span><span></span><span>'@components/common/CompanyBranding'</span><span>;

</span><span>const</span><span></span><span>DEFAULT_PROFILE</span><span>: </span><span>CompanyProfile</span><span> = {
  </span><span>companyName</span><span>: </span><span>'Votre entreprise'</span><span>,
  </span><span>logoUrl</span><span>: </span><span>''</span><span>,
  </span><span>tagline</span><span>: </span><span>'Personnalisez votre funnel vidéo'</span><span>,
  </span><span>website</span><span>: </span><span>''</span><span>,
};

</span><span>function</span><span></span><span>App</span><span>(</span><span></span><span>) {
  </span><span>const</span><span> [quizConfig, setQuizConfig] = useState<</span><span>QuizConfig</span><span>>(</span><span>DEFAULT_QUIZ_CONFIG</span><span>);
  </span><span>const</span><span> [mode, setMode] = useState<</span><span>'builder'</span><span> | </span><span>'preview'</span><span>>(</span><span>'builder'</span><span>);
  </span><span>const</span><span> [companyProfile, setCompanyProfile] = useState<</span><span>CompanyProfile</span><span>>(</span><span>DEFAULT_PROFILE</span><span>);

  </span><span>useEffect</span><span>(</span><span>() =></span><span> {
    </span><span>const</span><span> stored = loadFromLocalStorage<</span><span>CompanyProfile</span><span>>(</span><span>PROFILE_STORAGE_KEY</span><span>, </span><span>DEFAULT_PROFILE</span><span>);
    </span><span>setCompanyProfile</span><span>(stored);
  }, []);

  </span><span>useEffect</span><span>(</span><span>() =></span><span> {
    </span><span>saveToLocalStorage</span><span>(</span><span>PROFILE_STORAGE_KEY</span><span>, companyProfile);
  }, [companyProfile]);

  </span><span>const</span><span> theme = quizConfig.</span><span>theme</span><span> || </span><span>DEFAULT_QUIZ_CONFIG</span><span>.</span><span>theme</span><span>;

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"app-root"</span><span>>
      </span><span><ThemeManager</span><span></span><span>theme</span><span>=</span><span>{theme}</span><span> />

      </span><span><header</span><span></span><span>className</span><span>=</span><span>"app-header"</span><span>>
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"app-header__left"</span><span>>
          </span><span><h1</span><span>>Face2Face – Quiz Builder</span><span></h1</span><span>>
          </span><span><span</span><span></span><span>className</span><span>=</span><span>"app-header__badge"</span><span>>Entreprise-ready</span><span></span</span><span>>
        </span><span></div</span><span>>

        </span><span><div</span><span></span><span>className</span><span>=</span><span>"app-header__center"</span><span>>
          </span><span><CompanyBranding</span><span></span><span>profile</span><span>=</span><span>{companyProfile}</span><span> />
        </span><span></div</span><span>>

        </span><span><div</span><span></span><span>className</span><span>=</span><span>"app-header__right"</span><span>>
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
        </span><span></div</span><span>>
      </span><span></header</span><span>>

      </span><span><main</span><span></span><span>className</span><span>=</span><span>"app-main"</span><span>>
        {mode === 'builder' ? (
          </span><span><Builder</span><span>
            </span><span>config</span><span>=</span><span>{quizConfig}</span><span>
            </span><span>setConfig</span><span>=</span><span>{setQuizConfig}</span><span>
            </span><span>companyProfile</span><span>=</span><span>{companyProfile}</span><span>
            </span><span>setCompanyProfile</span><span>=</span><span>{setCompanyProfile}</span><span>
          />
        ) : (
          </span><span><QuizContainer</span><span></span><span>quizConfig</span><span>=</span><span>{quizConfig}</span><span></span><span>companyProfile</span><span>=</span><span>{companyProfile}</span><span> />
        )}
      </span><span></main</span><span>>
    </span><span></div</span><span>>
  );
}

</span><span>export</span><span></span><span>default</span><span></span><span>App</span><span>;
</span></span></code></div></div></pre>

---

## 4. Branding & profil entreprise dans l’UI

### 4.1. Composant commun de branding

### `src/components/common/CompanyBranding.tsx` (NOUVEAU)

<pre class="overflow-visible!" data-start="5135" data-end="6088"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;

</span><span>interface</span><span></span><span>CompanyBrandingProps</span><span> {
  </span><span>profile</span><span>: </span><span>CompanyProfile</span><span>;
  variant?: </span><span>'header'</span><span> | </span><span>'quiz'</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>CompanyBranding</span><span> = (</span><span>{ profile, variant = 'header'</span><span> }: CompanyBrandingProps) => {
  </span><span>const</span><span> { companyName, logoUrl, tagline } = profile;

  </span><span>const</span><span> isHeader = variant === </span><span>'header'</span><span>;

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span>
      </span><span>className</span><span>=</span><span>{isHeader</span><span> ? '</span><span>branding-header</span><span>' </span><span>:</span><span> '</span><span>branding-quiz</span><span>'}
      </span><span>aria-label</span><span>=</span><span>"Identité entreprise"</span><span>
    >
      {logoUrl ? (
        </span><span><img</span><span>
          </span><span>src</span><span>=</span><span>{logoUrl}</span><span>
          </span><span>alt</span><span>=</span><span>{companyName}</span><span>
          </span><span>className</span><span>=</span><span>"branding-logo"</span><span>
        />
      ) : (
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"branding-logo placeholder"</span><span>>
          {companyName?.[0]?.toUpperCase() || 'E'}
        </span><span></div</span><span>>
      )}
      </span><span><div</span><span></span><span>className</span><span>=</span><span>"branding-text"</span><span>>
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"branding-name"</span><span>>{companyName}</span><span></div</span><span>>
        {tagline && </span><span><div</span><span></span><span>className</span><span>=</span><span>"branding-tagline"</span><span>>{tagline}</span><span></div</span><span>>}
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

### 4.2. Écran de profil / settings

### `src/components/common/ProfileSettings.tsx` (NOUVEAU)

<pre class="overflow-visible!" data-start="6186" data-end="7963"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;
</span><span>import</span><span> { </span><span>InputField</span><span> } </span><span>from</span><span></span><span>'@ui/form/InputField'</span><span>;
</span><span>import</span><span> { </span><span>TextareaField</span><span> } </span><span>from</span><span></span><span>'@ui/form/TextareaField'</span><span>;

</span><span>interface</span><span></span><span>ProfileSettingsProps</span><span> {
  </span><span>profile</span><span>: </span><span>CompanyProfile</span><span>;
  </span><span>onChange</span><span>: </span><span>(profile: CompanyProfile</span><span>) => </span><span>void</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>ProfileSettings</span><span> = (</span><span>{ profile, onChange }: ProfileSettingsProps</span><span>) => {
  </span><span>const</span><span></span><span>update</span><span> = (</span><span>patch: Partial<CompanyProfile></span><span>) => {
    </span><span>onChange</span><span>({ ...profile, ...patch });
  };

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"profile-settings"</span><span>>
      </span><span><div</span><span></span><span>className</span><span>=</span><span>"profile-settings__grid"</span><span>>
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"Nom de l’entreprise"</span><span>
          </span><span>value</span><span>=</span><span>{profile.companyName}</span><span>
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ companyName: e.target.value })}
          placeholder="Ex : Face2Face Studio"
        />
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"URL du logo"</span><span>
          </span><span>value</span><span>=</span><span>{profile.logoUrl</span><span> ?? ''}
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ logoUrl: e.target.value })}
          placeholder="https://…/logo.png"
        />
        </span><span><TextareaField</span><span>
          </span><span>label</span><span>=</span><span>"Baseline / tagline"</span><span>
          </span><span>value</span><span>=</span><span>{profile.tagline</span><span> ?? ''}
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ tagline: e.target.value })}
          placeholder="Ex : « Convertissez vos leads avec la vidéo interactive »"
        />
        </span><span><InputField</span><span>
          </span><span>label</span><span>=</span><span>"Site web"</span><span>
          </span><span>value</span><span>=</span><span>{profile.website</span><span> ?? ''}
          </span><span>onChange</span><span>=</span><span>{(e)</span><span> => update({ website: e.target.value })}
          placeholder="https://votre-site.com"
        />
      </span><span></div</span><span>>

      {profile.logoUrl && (
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"profile-settings__preview"</span><span>>
          </span><span><span</span><span>>Aperçu logo</span><span></span</span><span>>
          </span><span><div</span><span></span><span>className</span><span>=</span><span>"profile-settings__preview-box"</span><span>>
            </span><span><img</span><span></span><span>src</span><span>=</span><span>{profile.logoUrl}</span><span></span><span>alt</span><span>=</span><span>{profile.companyName}</span><span> />
          </span><span></div</span><span>>
        </span><span></div</span><span>>
      )}
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

---

## 5. Intégration dans le Builder

### `src/components/builder/Builder.tsx` (MODIF)

On ajoute la section “Profil entreprise”.

<pre class="overflow-visible!" data-start="8098" data-end="10177"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>BuilderProps</span><span> } </span><span>from</span><span></span><span>'@types/builder.types'</span><span>;
</span><span>import</span><span> { </span><span>CollapsibleSection</span><span> } </span><span>from</span><span></span><span>'@ui/layout/CollapsibleSection'</span><span>;
</span><span>import</span><span> { </span><span>StepEditor</span><span> } </span><span>from</span><span></span><span>'./StepEditor'</span><span>;
</span><span>import</span><span> { </span><span>ThemeEditor</span><span> } </span><span>from</span><span></span><span>'./ThemeEditor'</span><span>;
</span><span>import</span><span> { </span><span>ShareAndEmbed</span><span> } </span><span>from</span><span></span><span>'./ShareAndEmbed'</span><span>;
</span><span>import</span><span> { </span><span>AIAssistant</span><span> } </span><span>from</span><span></span><span>'./AIAssistant'</span><span>;
</span><span>import</span><span> { </span><span>Footer</span><span> } </span><span>from</span><span></span><span>'@components/common/Footer'</span><span>;
</span><span>import</span><span> { </span><span>ProfileSettings</span><span> } </span><span>from</span><span></span><span>'@components/common/ProfileSettings'</span><span>;

</span><span>export</span><span></span><span>const</span><span></span><span>Builder</span><span> = ({
  config,
  setConfig,
  companyProfile,
  setCompanyProfile,
}: BuilderProps) => {
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
      </span><span><h2</span><span></span><span>className</span><span>=</span><span>"builder-title"</span><span>>{config.name}</span><span></h2</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Profil entreprise"</span><span>>
        </span><span><ProfileSettings</span><span></span><span>profile</span><span>=</span><span>{companyProfile}</span><span></span><span>onChange</span><span>=</span><span>{setCompanyProfile}</span><span> />
      </span><span></CollapsibleSection</span><span>>

      </span><span><CollapsibleSection</span><span></span><span>title</span><span>=</span><span>"Étapes du quiz"</span><span>>
        {config.steps.map((step, index) => (
          </span><span><div</span><span></span><span>key</span><span>=</span><span>{step.id}</span><span></span><span>className</span><span>=</span><span>"builder-step-card"</span><span>>
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

---

## 6. Branding dans le quiz (preview & écran final)

### `src/components/quiz/QuizContainer.tsx` (MODIF)

On fait remonter `companyProfile` en prop, et on le passe aux screens.

<pre class="overflow-visible!" data-start="10362" data-end="12648"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span> { useState } </span><span>from</span><span></span><span>'react'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>QuizConfig</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;
</span><span>import</span><span> { useQuizNavigation } </span><span>from</span><span></span><span>'@hooks/useQuizNavigation'</span><span>;
</span><span>import</span><span> { </span><span>WelcomeScreen</span><span> } </span><span>from</span><span></span><span>'./WelcomeScreen'</span><span>;
</span><span>import</span><span> { </span><span>QuestionScreen</span><span> } </span><span>from</span><span></span><span>'./QuestionScreen'</span><span>;
</span><span>import</span><span> { </span><span>MessageScreen</span><span> } </span><span>from</span><span></span><span>'./MessageScreen'</span><span>;
</span><span>import</span><span> { </span><span>LeadCaptureScreen</span><span> } </span><span>from</span><span></span><span>'./LeadCaptureScreen'</span><span>;
</span><span>import</span><span> { </span><span>QuizCompletionScreen</span><span> } </span><span>from</span><span></span><span>'./QuizCompletionScreen'</span><span>;
</span><span>import</span><span> { </span><span>ErrorBoundary</span><span> } </span><span>from</span><span></span><span>'./ErrorBoundary'</span><span>;
</span><span>import</span><span> { </span><span>CompanyBranding</span><span> } </span><span>from</span><span></span><span>'@components/common/CompanyBranding'</span><span>;

</span><span>interface</span><span></span><span>QuizContainerProps</span><span> {
  </span><span>quizConfig</span><span>: </span><span>QuizConfig</span><span>;
  companyProfile?: </span><span>CompanyProfile</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>QuizContainer</span><span> = (</span><span>{ quizConfig, companyProfile }: QuizContainerProps</span><span>) => {
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
      {companyProfile && (
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"quiz-branding-bar"</span><span>>
          </span><span><CompanyBranding</span><span></span><span>profile</span><span>=</span><span>{companyProfile}</span><span></span><span>variant</span><span>=</span><span>"quiz"</span><span> />
        </span><span></div</span><span>>
      )}

      </span><span><ErrorBoundary</span><span>>
        {currentStep.type === 'WELCOME' && </span><span><WelcomeScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'QUESTION' && </span><span><QuestionScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'MESSAGE' && </span><span><MessageScreen</span><span> {</span><span>...screenProps</span><span>} />}
        {currentStep.type === 'LEAD_CAPTURE' && (
          </span><span><LeadCaptureScreen</span><span> {</span><span>...screenProps</span><span>} />
        )}
        {currentStep.type === 'COMPLETION' && (
          </span><span><QuizCompletionScreen</span><span>
            {</span><span>...screenProps</span><span>}
            </span><span>companyProfile</span><span>=</span><span>{companyProfile}</span><span>
          />
        )}
      </span><span></ErrorBoundary</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

### `src/components/quiz/QuizCompletionScreen.tsx` (MODIF)

On affiche clairement la boîte, logo, etc.

<pre class="overflow-visible!" data-start="12754" data-end="14111"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>import</span><span></span><span>type</span><span> { </span><span>QuizStep</span><span> } </span><span>from</span><span></span><span>'@types/quiz.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;
</span><span>import</span><span> { </span><span>CompanyBranding</span><span> } </span><span>from</span><span></span><span>'@components/common/CompanyBranding'</span><span>;

</span><span>interface</span><span></span><span>QuizCompletionScreenProps</span><span> {
  </span><span>step</span><span>: </span><span>QuizStep</span><span>;
  </span><span>onNext</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>onBack</span><span>: </span><span>() =></span><span></span><span>void</span><span>;
  </span><span>canGoNext</span><span>: </span><span>boolean</span><span>;
  </span><span>canGoBack</span><span>: </span><span>boolean</span><span>;
  companyProfile?: </span><span>CompanyProfile</span><span>;
}

</span><span>export</span><span></span><span>const</span><span></span><span>QuizCompletionScreen</span><span> = ({
  step,
  companyProfile,
}: QuizCompletionScreenProps) => {
  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"quiz-completion"</span><span>>
      </span><span><h2</span><span>>{step.title}</span><span></h2</span><span>>
      {step.description && </span><span><p</span><span>>{step.description}</span><span></p</span><span>>}

      {companyProfile && (
        </span><span><div</span><span></span><span>className</span><span>=</span><span>"quiz-completion__branding"</span><span>>
          </span><span><p</span><span></span><span>className</span><span>=</span><span>"quiz-completion__label"</span><span>>Ce diagnostic est proposé par :</span><span></p</span><span>>
          </span><span><CompanyBranding</span><span></span><span>profile</span><span>=</span><span>{companyProfile}</span><span></span><span>variant</span><span>=</span><span>"quiz"</span><span> />
          {companyProfile.website && (
            </span><span><a</span><span>
              </span><span>href</span><span>=</span><span>{companyProfile.website}</span><span>
              </span><span>target</span><span>=</span><span>"_blank"</span><span>
              </span><span>rel</span><span>=</span><span>"noreferrer"</span><span>
              </span><span>className</span><span>=</span><span>"quiz-completion__link"</span><span>
            >
              Visiter le site
            </span><span></a</span><span>>
          )}
        </span><span></div</span><span>>
      )}

      </span><span><p</span><span></span><span>className</span><span>=</span><span>"quiz-completion__thanks"</span><span>>
        Merci pour tes réponses. Tu peux maintenant revenir à ton espace ou
        consulter les prochaines étapes envoyées par email.
      </span><span></p</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

---

## 7. Responsive & styles “vendables”

On renforce le responsive dans ton `globals.css`.

Je donne une version **complète** à remplacer (en gardant si besoin tes ajouts perso).

### `src/styles/globals.css` (REMPLACE)

<pre class="overflow-visible!" data-start="14338" data-end="21130"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-css"><span><span>:root</span><span> {
  </span><span>--theme-bg</span><span>: </span><span>#050816</span><span>;
  </span><span>--theme-primary</span><span>: </span><span>#2b6bf2</span><span>;
  </span><span>--theme-primary-hover</span><span>: </span><span>#1c4ab3</span><span>;
  </span><span>--theme-accent</span><span>: </span><span>#f97316</span><span>;
  </span><span>--theme-text</span><span>: </span><span>#f9fafb</span><span>;
  </span><span>--theme-button-text</span><span>: </span><span>#ffffff</span><span>;
  </span><span>--theme-font</span><span>: system-ui, -apple-system, BlinkMacSystemFont, </span><span>'Segoe UI'</span><span>,
    sans-serif;

  </span><span>--border-soft</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.35</span><span>);
  </span><span>--card-bg</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.95</span><span>);
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
  </span><span>background</span><span>:
    </span><span>radial-gradient</span><span>(circle at top, </span><span>#111827</span><span>, </span><span>#020617</span><span></span><span>58%</span><span>),
    </span><span>radial-gradient</span><span>(circle at bottom, </span><span>#000000</span><span>, </span><span>#020617</span><span></span><span>70%</span><span>);
}

</span><span>.app-root</span><span> {
  </span><span>min-height</span><span>: </span><span>100vh</span><span>;
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
}

</span><span>/* HEADER */</span><span>

</span><span>.app-header</span><span> {
  </span><span>padding</span><span>: </span><span>0.75rem</span><span></span><span>1rem</span><span>;
  </span><span>border-bottom</span><span>: </span><span>var</span><span>(--border-soft);
  </span><span>display</span><span>: grid;
  </span><span>grid-template-columns</span><span>: </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>1.5</span><span>fr) </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>2</span><span>fr) </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>1.5</span><span>fr);
  </span><span>align-items</span><span>: center;
  </span><span>gap</span><span>: </span><span>0.75rem</span><span>;
  backdrop-</span><span>filter</span><span>: </span><span>blur</span><span>(</span><span>16px</span><span>);
  </span><span>background</span><span>: </span><span>linear-gradient</span><span>(
    to bottom,
    </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>),
    </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.7</span><span>)
  );
  </span><span>position</span><span>: sticky;
  </span><span>top</span><span>: </span><span>0</span><span>;
  </span><span>z-index</span><span>: </span><span>10</span><span>;
}

</span><span>.app-header__left</span><span></span><span>h1</span><span> {
  </span><span>font-size</span><span>: </span><span>1.1rem</span><span>;
  </span><span>margin</span><span>: </span><span>0</span><span>;
}

</span><span>.app-header__badge</span><span> {
  </span><span>display</span><span>: inline-flex;
  </span><span>margin-top</span><span>: </span><span>0.15rem</span><span>;
  </span><span>padding</span><span>: </span><span>0.15rem</span><span></span><span>0.5rem</span><span>;
  </span><span>border-radius</span><span>: </span><span>999px</span><span>;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>94</span><span>, </span><span>234</span><span>, </span><span>212</span><span>, </span><span>0.6</span><span>);
  </span><span>font-size</span><span>: </span><span>0.7rem</span><span>;
  </span><span>color</span><span>: </span><span>#a5f3fc</span><span>;
}

</span><span>.app-header__modes</span><span> {
  </span><span>display</span><span>: inline-flex;
  </span><span>justify-content</span><span>: flex-end;
  </span><span>gap</span><span>: </span><span>0.4rem</span><span>;
}

</span><span>.app-header__modes</span><span></span><span>button</span><span> {
  </span><span>border-radius</span><span>: </span><span>999px</span><span>;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.6</span><span>);
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.8</span><span>);
  </span><span>color</span><span>: </span><span>#e5e7eb</span><span>;
  </span><span>padding</span><span>: </span><span>0.3rem</span><span></span><span>0.9rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.8rem</span><span>;
  </span><span>cursor</span><span>: pointer;
  </span><span>transition</span><span>:
    background </span><span>0.2s</span><span> ease,
    border-color </span><span>0.2s</span><span> ease,
    transform </span><span>0.08s</span><span> ease;
}

</span><span>.app-header__modes</span><span></span><span>button</span><span>:hover</span><span> {
  </span><span>transform</span><span>: </span><span>translateY</span><span>(-</span><span>1px</span><span>);
  </span><span>border-color</span><span>: </span><span>rgba</span><span>(</span><span>129</span><span>, </span><span>140</span><span>, </span><span>248</span><span>, </span><span>0.9</span><span>);
}

</span><span>.app-header__modes</span><span></span><span>button</span><span>.active</span><span> {
  </span><span>background</span><span>: </span><span>var</span><span>(--theme-primary);
  </span><span>border-color</span><span>: transparent;
  </span><span>color</span><span>: </span><span>var</span><span>(--theme-button-text);
}

</span><span>/* BRANDING */</span><span>

</span><span>.branding-header</span><span>,
</span><span>.branding-quiz</span><span> {
  </span><span>display</span><span>: inline-flex;
  </span><span>align-items</span><span>: center;
  </span><span>gap</span><span>: </span><span>0.5rem</span><span>;
}

</span><span>.branding-header</span><span> {
  </span><span>justify-content</span><span>: center;
}

</span><span>.branding-quiz</span><span> {
  </span><span>justify-content</span><span>: flex-start;
}

</span><span>.branding-logo</span><span> {
  </span><span>width</span><span>: </span><span>34px</span><span>;
  </span><span>height</span><span>: </span><span>34px</span><span>;
  </span><span>border-radius</span><span>: </span><span>999px</span><span>;
  </span><span>object-fit</span><span>: cover;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.7</span><span>);
  </span><span>background</span><span>: </span><span>#020617</span><span>;
}

</span><span>.branding-logo</span><span>.placeholder</span><span> {
  </span><span>display</span><span>: inline-flex;
  </span><span>align-items</span><span>: center;
  </span><span>justify-content</span><span>: center;
  </span><span>font-size</span><span>: </span><span>0.9rem</span><span>;
  </span><span>font-weight</span><span>: </span><span>600</span><span>;
}

</span><span>.branding-text</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
}

</span><span>.branding-name</span><span> {
  </span><span>font-size</span><span>: </span><span>0.9rem</span><span>;
  </span><span>font-weight</span><span>: </span><span>600</span><span>;
}

</span><span>.branding-tagline</span><span> {
  </span><span>font-size</span><span>: </span><span>0.75rem</span><span>;
  </span><span>opacity</span><span>: </span><span>0.75</span><span>;
}

</span><span>/* MAIN LAYOUT */</span><span>

</span><span>.app-main</span><span> {
  </span><span>flex</span><span>: </span><span>1</span><span>;
  </span><span>display</span><span>: flex;
  </span><span>padding</span><span>: </span><span>1rem</span><span>;
}

</span><span>.builder-root</span><span>,
</span><span>.quiz-root</span><span> {
  </span><span>width</span><span>: </span><span>100%</span><span>;
  </span><span>max-width</span><span>: </span><span>1200px</span><span>;
  </span><span>margin</span><span>: </span><span>0</span><span> auto;
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
  </span><span>border-radius</span><span>: </span><span>18px</span><span>;
  </span><span>padding</span><span>: </span><span>1rem</span><span>;
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
  </span><span>box-shadow</span><span>:
    </span><span>0</span><span></span><span>22px</span><span></span><span>60px</span><span></span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.8</span><span>),
    </span><span>0</span><span></span><span>0</span><span></span><span>0</span><span></span><span>1px</span><span></span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
}

</span><span>/* BUILDER */</span><span>

</span><span>.builder-title</span><span> {
  </span><span>margin</span><span>: </span><span>0</span><span></span><span>0</span><span></span><span>0.75rem</span><span>;
  </span><span>font-size</span><span>: </span><span>1.1rem</span><span>;
}

</span><span>.builder-step-card</span><span> {
  </span><span>border-radius</span><span>: </span><span>10px</span><span>;
  </span><span>padding</span><span>: </span><span>0.75rem</span><span>;
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.85</span><span>);
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
}

</span><span>/* PROFILE SETTINGS */</span><span>

</span><span>.profile-settings</span><span> {
  </span><span>display</span><span>: grid;
  </span><span>gap</span><span>: </span><span>0.75rem</span><span>;
}

</span><span>.profile-settings__grid</span><span> {
  </span><span>display</span><span>: grid;
  </span><span>gap</span><span>: </span><span>0.6rem</span><span>;
}

</span><span>.profile-settings__preview</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
  </span><span>gap</span><span>: </span><span>0.35rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.8rem</span><span>;
  </span><span>opacity</span><span>: </span><span>0.85</span><span>;
}

</span><span>.profile-settings__preview-box</span><span> {
  </span><span>width</span><span>: </span><span>80px</span><span>;
  </span><span>height</span><span>: </span><span>80px</span><span>;
  </span><span>border-radius</span><span>: </span><span>18px</span><span>;
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
  </span><span>background</span><span>: </span><span>#020617</span><span>;
  </span><span>display</span><span>: flex;
  </span><span>align-items</span><span>: center;
  </span><span>justify-content</span><span>: center;
}

</span><span>.profile-settings__preview-box</span><span></span><span>img</span><span> {
  </span><span>max-width</span><span>: </span><span>70px</span><span>;
  </span><span>max-height</span><span>: </span><span>70px</span><span>;
  </span><span>object-fit</span><span>: contain;
}

</span><span>/* QUIZ */</span><span>

</span><span>.quiz-branding-bar</span><span> {
  </span><span>margin-bottom</span><span>: </span><span>0.75rem</span><span>;
  </span><span>padding</span><span>: </span><span>0.45rem</span><span></span><span>0.75rem</span><span>;
  </span><span>border-radius</span><span>: </span><span>12px</span><span>;
  </span><span>background</span><span>: </span><span>radial-gradient</span><span>(circle at top left, </span><span>rgba</span><span>(</span><span>37</span><span>, </span><span>99</span><span>, </span><span>235</span><span>, </span><span>0.25</span><span>), transparent),
    </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
}

</span><span>.quiz-completion</span><span> {
  </span><span>display</span><span>: grid;
  </span><span>gap</span><span>: </span><span>0.5rem</span><span>;
}

</span><span>.quiz-completion__branding</span><span> {
  </span><span>margin-top</span><span>: </span><span>0.75rem</span><span>;
  </span><span>padding</span><span>: </span><span>0.65rem</span><span></span><span>0.8rem</span><span>;
  </span><span>border-radius</span><span>: </span><span>12px</span><span>;
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
}

</span><span>.quiz-completion__label</span><span> {
  </span><span>font-size</span><span>: </span><span>0.8rem</span><span>;
  </span><span>opacity</span><span>: </span><span>0.8</span><span>;
  </span><span>margin</span><span>: </span><span>0</span><span></span><span>0</span><span></span><span>0.3rem</span><span>;
}

</span><span>.quiz-completion__link</span><span> {
  </span><span>display</span><span>: inline-block;
  </span><span>margin-top</span><span>: </span><span>0.4rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.8rem</span><span>;
  </span><span>color</span><span>: </span><span>#93c5fd</span><span>;
  </span><span>text-decoration</span><span>: none;
}

</span><span>.quiz-completion__link</span><span>:hover</span><span> {
  </span><span>text-decoration</span><span>: underline;
}

</span><span>.quiz-completion__thanks</span><span> {
  </span><span>margin-top</span><span>: </span><span>0.75rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.9rem</span><span>;
  </span><span>opacity</span><span>: </span><span>0.85</span><span>;
}

</span><span>/* UI FIELDS */</span><span>

</span><span>.ui-field</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
  </span><span>gap</span><span>: </span><span>0.25rem</span><span>;
}

</span><span>.ui-label</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>flex-direction</span><span>: column;
  </span><span>gap</span><span>: </span><span>0.25rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.8rem</span><span>;
  </span><span>opacity</span><span>: </span><span>0.9</span><span>;
}

</span><span>.ui-input</span><span>,
</span><span>.ui-textarea</span><span>,
</span><span>.ui-select</span><span>,
</span><span>.ui-color</span><span> {
  </span><span>width</span><span>: </span><span>100%</span><span>;
  </span><span>border-radius</span><span>: </span><span>10px</span><span>;
  </span><span>border</span><span>: </span><span>1px</span><span> solid </span><span>rgba</span><span>(</span><span>148</span><span>, </span><span>163</span><span>, </span><span>184</span><span>, </span><span>0.65</span><span>);
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.9</span><span>);
  </span><span>color</span><span>: </span><span>#e5e7eb</span><span>;
  </span><span>padding</span><span>: </span><span>0.45rem</span><span></span><span>0.6rem</span><span>;
  </span><span>font-size</span><span>: </span><span>0.85rem</span><span>;
}

</span><span>.ui-textarea</span><span> {
  </span><span>resize</span><span>: vertical;
  </span><span>min-height</span><span>: </span><span>70px</span><span>;
}

</span><span>.ui-error</span><span> {
  </span><span>font-size</span><span>: </span><span>0.75rem</span><span>;
  </span><span>color</span><span>: </span><span>#f97373</span><span>;
}

</span><span>/* COLLAPSIBLE */</span><span>

</span><span>.collapsible</span><span> {
  </span><span>border-radius</span><span>: </span><span>12px</span><span>;
  </span><span>border</span><span>: </span><span>var</span><span>(--border-soft);
  </span><span>margin-bottom</span><span>: </span><span>0.75rem</span><span>;
  </span><span>background</span><span>: </span><span>rgba</span><span>(</span><span>15</span><span>, </span><span>23</span><span>, </span><span>42</span><span>, </span><span>0.95</span><span>);
}

</span><span>.collapsible-header</span><span> {
  </span><span>display</span><span>: flex;
  </span><span>justify-content</span><span>: space-between;
  </span><span>align-items</span><span>: center;
  </span><span>padding</span><span>: </span><span>0.55rem</span><span></span><span>0.8rem</span><span>;
  </span><span>cursor</span><span>: pointer;
}

</span><span>.collapsible-header</span><span></span><span>h3</span><span> {
  </span><span>margin</span><span>: </span><span>0</span><span>;
  </span><span>font-size</span><span>: </span><span>0.9rem</span><span>;
}

</span><span>.collapsible-icon</span><span> {
  </span><span>transition</span><span>: transform </span><span>0.16s</span><span> ease;
}

</span><span>.collapsible-icon</span><span>.open</span><span> {
  </span><span>transform</span><span>: </span><span>rotate</span><span>(</span><span>180deg</span><span>);
}

</span><span>.collapsible-body</span><span> {
  </span><span>padding</span><span>: </span><span>0.55rem</span><span></span><span>0.8rem</span><span></span><span>0.75rem</span><span>;
}

</span><span>/* FOOTER */</span><span>

</span><span>footer</span><span> {
  </span><span>margin-top</span><span>: </span><span>0.75rem</span><span>;
}

</span><span>/* RESPONSIVE */</span><span>

</span><span>@media</span><span> (</span><span>max-width</span><span>: </span><span>960px</span><span>) {
  </span><span>.app-header</span><span> {
    </span><span>grid-template-columns</span><span>: </span><span>1</span><span>fr;
    </span><span>text-align</span><span>: left;
  }

  </span><span>.app-header__center</span><span> {
    justify-self: flex-start;
  }

  </span><span>.app-header__right</span><span> {
    justify-self: flex-start;
  }

  </span><span>.builder-root</span><span>,
  </span><span>.quiz-root</span><span> {
    </span><span>padding</span><span>: </span><span>0.75rem</span><span>;
  }
}

</span><span>@media</span><span> (</span><span>max-width</span><span>: </span><span>640px</span><span>) {
  </span><span>.app-main</span><span> {
    </span><span>padding</span><span>: </span><span>0.5rem</span><span>;
  }

  </span><span>.builder-root</span><span>,
  </span><span>.quiz-root</span><span> {
    </span><span>border-radius</span><span>: </span><span>0.75rem</span><span>;
  }

  </span><span>.branding-header</span><span>,
  </span><span>.branding-quiz</span><span> {
    </span><span>justify-content</span><span>: flex-start;
  }

  </span><span>.app-header__modes</span><span></span><span>button</span><span> {
    </span><span>font-size</span><span>: </span><span>0.75rem</span><span>;
    </span><span>padding</span><span>: </span><span>0.25rem</span><span></span><span>0.65rem</span><span>;
  }

  </span><span>.profile-settings__grid</span><span> {
    </span><span>grid-template-columns</span><span>: </span><span>1</span><span>fr;
  }
}

</span><span>@media</span><span> (</span><span>min-width</span><span>: </span><span>961px</span><span>) {
  </span><span>.profile-settings__grid</span><span> {
    </span><span>grid-template-columns</span><span>: </span><span>repeat</span><span>(</span><span>2</span><span>, </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>1</span><span>fr));
  }
}
</span></span></code></div></div></pre>

---

## 8. Résumé opérationnel

En appliquant ces fichiers / modifications :

* Tu as un **profil entreprise complet** (nom, logo, tagline, site), persistant.
* Le profil est visible dans :
  * le **header** de l’app,
  * la barre en haut du  **quiz preview** ,
  * l’**écran final** du funnel.
* Tu as un écran **ProfileSettings** bien intégré dans le **Builder** (section “Profil entreprise”).
*
