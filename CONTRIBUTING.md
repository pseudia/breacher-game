# Contributing to Breached

Thanks for your interest in **Breached**, the data pandemic simulation game by
[Pseudia](https://www.pseudia.eu/breached/). The game is not perfect and we
welcome suggestions, bug reports and improvements from everyone.

## Ways to contribute

- **Report a bug** – open an issue describing what happened, what you expected,
  your browser/OS, and the steps to reproduce.
- **Suggest an improvement** – gameplay balance, new scenarios, better
  explanations of data-protection concepts, translations, accessibility…
  Open an issue first for significant changes so we can discuss them.
- **Submit code** – fix a bug or implement an accepted idea through a pull
  request.

## Development setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev      # start the dev server
npm run lint     # run oxlint
npm run build    # type-check and build into dist/
```

## Pull request rules

1. Fork the repository and create a branch from `main`
   (e.g. `fix/score-overflow`, `feat/new-scenario`).
2. Keep pull requests focused: one topic per PR.
3. Follow the existing code style (TypeScript, React, Tailwind) and make sure
   `npm run lint` and `npm run build` pass.
4. Describe *what* you changed and *why* in the PR description, and link the
   related issue.
5. Do not commit build output (`dist/`), `node_modules/`, editor settings,
   `.env` files, credentials, tokens, or any personal data.
6. Only add assets (images, sounds, fonts, code) that you created yourself or
   whose license explicitly allows their inclusion; mention the source and
   license in the PR and in the "Third-party assets" section of `README.md`.
7. A maintainer from Pseudia will review the PR. We may ask for changes, and
   we may decline contributions that do not fit the educational goal of the
   game.

## Licensing of contributions

The project is distributed under the [Breached Community License](LICENSE):
anyone can use, modify, share and contribute to it free of charge, but it
cannot be sold or resold without a written agreement from Pseudia SRL.

By submitting a contribution (code, text, graphics or any other material) you
confirm that:

- you wrote it yourself, or you have the right to submit it;
- you grant Pseudia SRL a perpetual, worldwide, non-exclusive, royalty-free,
  irrevocable license to use, modify, distribute and sublicense your
  contribution, including under other license terms (commercial ones
  included), as part of the project;
- your contribution is made available to everyone else under the project
  [LICENSE](LICENSE).

You keep the copyright on your contribution. Please sign off your commits
(`git commit -s`) to certify this.

## Code of conduct

Be respectful, constructive and inclusive. Harassment, discrimination or
personal attacks are not tolerated in issues, pull requests or any other
project space. Maintainers may remove content or block participants who do not
follow these rules.

## Security

Please do **not** open a public issue for security vulnerabilities. See
[SECURITY.md](SECURITY.md).

## Contact

Pseudia SRL – <info@pseudia.eu> – <https://www.pseudia.eu/breached/>
