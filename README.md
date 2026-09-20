# Networking Vocabulary — Phase 0

A separate English-only vocabulary website for Section 2, **Basics of Layers 2, 3, and 4**, of *Introduction to Computer Networking – Beginner Crash Course*.

## Included

- 80 original, concise flashcards across 8 topics.
- Term → meaning and meaning → term directions.
- Five-pair matching, up to ten multiple-choice questions, and up to ten short term-recall questions per round.
- Topic filters, shuffle, review ratings, and a searchable vocabulary reference.
- Browser-local card ratings; no account, API key, installation, or build step.
- Keyboard controls, responsive layouts, and reduced-motion support.

The site is inspired by Ellen Nagasawa's Fast Portuguese Vocabulary interface. This is a new networking site; it does not modify or reuse that site's vocabulary. The study definitions and activities were freshly written from the eight supplied networking guides. Course PDFs and slides are not included.

## Preview on your computer

Unzip the package, then open **index.html** in a normal browser. Keep **styles.css**, **terms.js**, and **app.js** beside it. Some managed browsers block local-file pages; the published GitHub Pages address is the most reliable way to use the site. Card ratings on a local-file preview may be handled differently by different browsers.

## Publish to a new GitHub repository

1. Unzip **phase-0-networking-vocabulary.zip**. Open the extracted folder so you can see **index.html**.
2. Create a **new** repository on GitHub, for example **networking-vocabulary**. Do not upload these files into the Portuguese vocabulary repository. A public repository is the straightforward option for GitHub Pages on GitHub Free; other plans and organization policies may differ.
3. Use **Add file → Upload files** (or **uploading an existing file** for an empty repository). Upload the extracted files, not the ZIP. **index.html must be at the repository's top level**, beside app.js, terms.js, and styles.css. Do not upload an extra enclosing folder.
4. Commit the uploaded files to **main**.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/ (root)**, then **Save**.
6. Wait for GitHub to finish the deployment. The Pages settings screen will show the website link. For the suggested repository name, its usual address is `https://YOUR-USERNAME.github.io/networking-vocabulary/`.

The included `.nojekyll` file tells GitHub to serve the files directly. It may be hidden in your file manager; showing hidden files lets you upload it too. The visible site files contain no special Jekyll folders or build requirements.

For current GitHub details, see [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## File list

| File | Purpose |
| --- | --- |
| index.html | Main study page |
| styles.css | Responsive visual design |
| terms.js | All 80 terms and their original definitions |
| app.js | Flashcards, exercises, filters, and local ratings |
| setup.html | Browser-readable setup instructions |
| sources.html | Browser-readable scope and corrections |
| README.md | This guide |
| SOURCES.md | Source and fact-check notes |
| .nojekyll | Optional GitHub Pages static-file marker |

All site assets use relative paths, so the site works below a repository path. There are no required downloads from CDNs, analytics services, external fonts, or APIs.

## Using the deck

Choose a topic. Try to remember a term's meaning before revealing it. After revealing, mark **Review again** or **I know this**. Use the card filter to study those groups later. Reverse the direction to recall a term from its meaning.

Practice activities use the selected **topic**, not the flashcard rating filter. Each new round is randomized. Matching uses five pairs; the two quizzes use up to ten unique terms, depending on the topic size. Recall accepts the listed term, an applicable acronym expansion, and common aliases. Case and ordinary punctuation are ignored; plus signs remain significant for **PoE**, **PoE+**, and **PoE++**.

Keyboard: Tab moves through controls; Enter or Space activates a focused button. Left and right arrow keys move between flashcards when focus is outside a form field. In the study-mode tab bar, arrow keys switch modes. Matching does not require dragging.

## Progress and privacy

Card ratings stay in this browser's local storage, separated by the website path. They are not uploaded, synchronized between devices, or connected to the Master Roadmap Tracker. Quizzes show results for the current round only. Using a different browser, changing the site path, or clearing browser data can remove or separate ratings. Resetting ratings asks for confirmation.

These activities help memorize vocabulary. They do not count as a knowledge assessment, applied lab, or Mastered checkpoint in the career roadmap.

## Scope and maintenance

The eight topics are LAN & Ethernet; OSI model & layers; hubs, bridges & switches; switch MAC tables; BUM traffic & ARP; routers & networks; TCP & UDP; and Power over Ethernet. Introductory names such as DNS and FTP appear because they are present in the supplied OSI slides. Later course sections are not included.

Read **SOURCES.md** for important corrections and source context. To change a definition later, edit its entry in **terms.js** and upload that file again. Preserve each term's `id` if its meaning is unchanged so existing card ratings continue to match.

No website has been published and no repository has been created by delivering this package.
