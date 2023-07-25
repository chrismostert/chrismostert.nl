---
title: Pathé overview
tags:
  - SvelteJS
  - Web scraping
  - Movies
link: https://pathe.chrismostert.nl
code: https://github.com/chrismostert/pathe-overview-sveltekit
---

Webapplicatie waarmee je gemakkelijk kunt zien welke films er bij jouw lokale [Pathé bioscoop](https://www.pathe.nl/) ingepland zijn. Inclusief draaitijden én [Rotten tomatoes](https://www.rottentomatoes.com/) score. Wordt dagelijks automatisch geüpdate door middel van een [Github workflow](https://github.com/chrismostert/pathe-overview-sveltekit/blob/main/.github/workflows/scheduled-builds.yml) welke een [Vercel](https://vercel.com/) deployment triggert die hieruit statische webpagina's genereert zodat alles snel laadt.
