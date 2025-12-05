## Ordre pour intégrer ce qu’on a fait

Tu peux suivre cet ordre sans réfléchir :

1. **Types**
   * Crée `src/types/profile.types.ts` (CompanyProfile).
   * Mets à jour `src/types/index.ts` pour exporter `profile.types`.
2. **Utils**
   * Mets à jour `src/lib/utils/storage.ts` avec `PROFILE_STORAGE_KEY`.
3. **Branding & profil**
   * Crée `src/components/common/CompanyBranding.tsx`.
   * Crée `src/components/common/ProfileSettings.tsx`.
4. **App**
   * Remplace le contenu de `src/App.tsx` par la version avec :
     * `companyProfile` dans le state,
     * lecture/écriture localStorage,
     * header avec `<CompanyBranding />`,
     * `<Builder ... companyProfile={…} />`,
     * `<QuizContainer quizConfig={…} companyProfile={…} />`.
5. **Builder**
   * Mets à jour `src/types/builder.types.ts` pour ajouter `companyProfile` et `setCompanyProfile`.
   * Mets à jour `src/components/builder/Builder.tsx` pour ajouter la section :
     * `<CollapsibleSection title="Profil entreprise">`
       * `<ProfileSettings profile={companyProfile} onChange={setCompanyProfile} />`.
6. **Quiz**
   * Mets à jour `src/components/quiz/QuizContainer.tsx` pour accepter `companyProfile` et afficher la barre `quiz-branding-bar`.
   * Mets à jour `src/components/quiz/QuizCompletionScreen.tsx` pour afficher :
     * identité entreprise,
     * lien vers le site.
7. **Styles**
   * Remplace `src/styles/globals.css` par la version complète responsive que je t’ai donnée.

Après ça, `npm run dev` → tu dois avoir :

* une app full responsive,
* un header avec le logo + nom d’entreprise,
* un onglet builder où tu peux configurer le profil,
* un preview qui affiche le branding en haut + à la fin du funnel.

---

## 2. Option “vitrine client” : branding aussi dans le dashboard des résultats

Si tu veux que ton espace résultats fasse très “SaaS B2B clean”, tu peux réutiliser le profil sur cette vue.

### 2.1. Étendre `ResultsDashboard` (facultatif mais stylé)

<pre class="overflow-visible!" data-start="2462" data-end="5011"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-tsx"><span><span>// src/components/results/ResultsDashboard.tsx</span><span>
</span><span>import</span><span></span><span>type</span><span> { </span><span>Submission</span><span> } </span><span>from</span><span></span><span>'@types/results.types'</span><span>;
</span><span>import</span><span></span><span>type</span><span> { </span><span>CompanyProfile</span><span> } </span><span>from</span><span></span><span>'@types/profile.types'</span><span>;
</span><span>import</span><span> { </span><span>AnswerCard</span><span> } </span><span>from</span><span></span><span>'./AnswerCard'</span><span>;
</span><span>import</span><span> { </span><span>SubmissionDetail</span><span> } </span><span>from</span><span></span><span>'./SubmissionDetail'</span><span>;
</span><span>import</span><span> { </span><span>CompanyBranding</span><span> } </span><span>from</span><span></span><span>'@components/common/CompanyBranding'</span><span>;

</span><span>interface</span><span></span><span>ResultsDashboardProps</span><span> {
  </span><span>submissions</span><span>: </span><span>Submission</span><span>[];
  onSelectSubmission?: </span><span>(submission: Submission</span><span>) => </span><span>void</span><span>;
  selectedSubmissionId?: </span><span>string</span><span>;
  companyProfile?: </span><span>CompanyProfile</span><span>; </span><span>// <= ajout</span><span>
}

</span><span>export</span><span></span><span>const</span><span></span><span>ResultsDashboard</span><span> = ({
  submissions,
  onSelectSubmission,
  selectedSubmissionId,
  companyProfile,
}: ResultsDashboardProps) => {
  </span><span>const</span><span> selected =
    submissions.</span><span>find</span><span>(</span><span>(s</span><span>) => s.</span><span>id</span><span> === selectedSubmissionId) ?? submissions[</span><span>0</span><span>];

  </span><span>return</span><span> (
    </span><span><span class="language-xml"><div</span></span><span></span><span>className</span><span>=</span><span>"builder-root"</span><span>>
      </span><span><header</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span>
          </span><span>display:</span><span> '</span><span>flex</span><span>',
          </span><span>flexWrap:</span><span> '</span><span>wrap</span><span>',
          </span><span>justifyContent:</span><span> '</span><span>space-between</span><span>',
          </span><span>alignItems:</span><span> '</span><span>center</span><span>',
          </span><span>gap:</span><span> '</span><span>0.75rem</span><span>',
          </span><span>marginBottom:</span><span> '</span><span>0.75rem</span><span>',
        }}
      >
        </span><span><div</span><span>>
          </span><span><h2</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>margin:</span><span></span><span>0</span><span> }}>Résultats du funnel</span><span></h2</span><span>>
          </span><span><p</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>margin:</span><span></span><span>0</span><span>, </span><span>fontSize:</span><span> '</span><span>0.8rem</span><span>', </span><span>opacity:</span><span></span><span>0.7</span><span> }}>
            Vue consolidée des réponses et leads.
          </span><span></p</span><span>>
        </span><span></div</span><span>>

        {companyProfile && (
          </span><span><div</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>fontSize:</span><span> '</span><span>0.8rem</span><span>', </span><span>textAlign:</span><span> '</span><span>right</span><span>' }}>
            </span><span><span</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>opacity:</span><span></span><span>0.7</span><span>, </span><span>display:</span><span> '</span><span>block</span><span>' }}>
              Compte entreprise
            </span><span></span</span><span>>
            </span><span><CompanyBranding</span><span></span><span>profile</span><span>=</span><span>{companyProfile}</span><span></span><span>variant</span><span>=</span><span>"quiz"</span><span> />
          </span><span></div</span><span>>
        )}
      </span><span></header</span><span>>

      </span><span><div</span><span>
        </span><span>style</span><span>=</span><span>{{</span><span>
          </span><span>display:</span><span> '</span><span>grid</span><span>',
          </span><span>gridTemplateColumns:</span><span> '</span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>2fr</span><span>) </span><span>minmax</span><span>(</span><span>0</span><span>, </span><span>3fr</span><span>)',
          </span><span>gap:</span><span> '</span><span>1rem</span><span>',
        }}
      >
        </span><span><div</span><span>>
          </span><span><h3</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span></span><span>0</span><span> }}>Soumissions</span><span></h3</span><span>>
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
          </span><span><h3</span><span></span><span>style</span><span>=</span><span>{{</span><span></span><span>marginTop:</span><span></span><span>0</span><span> }}>Détails</span><span></h3</span><span>>
          {selected ? (
            </span><span><SubmissionDetail</span><span></span><span>submission</span><span>=</span><span>{selected}</span><span> />
          ) : (
            </span><span><p</span><span>>Aucune soumission sélectionnée.</span><span></p</span><span>>
          )}
        </span><span></div</span><span>>
      </span><span></div</span><span>>
    </span><span></div</span><span>>
  );
};
</span></span></code></div></div></pre>

Ensuite, là où tu utilises déjà `ResultsDashboard` (route, page, onglet), tu passes juste `companyProfile={companyProfile}` de la même façon que pour `QuizContainer`.

---

## 3. Ce que tu as “en vrai” maintenant

En l’état, ton produit ressemble déjà à un **SaaS B2B vendable** :

* Onboarding simple : tu remplis ton **profil entreprise** et ton **quiz** dans le builder.
* Logo + nom + baseline : visibles partout (header, preview, écran final, dashboard).
* Responsive prêt pour :
  * téléphone (<= 640px),
  * tablette,
  * desktop large (max-width 1200px bien centré).
* Architecture propre : `components/`, `lib/`, `hooks/`, `types/`, `constants/` → prêt pour grossir.
