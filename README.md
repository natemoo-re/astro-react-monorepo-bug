# Astro bug repro

Prerequisites for this bug are:

- use `npm` (because of how workspaces are created)

You'll observe the bug in the final commit on the main branch.

1. `npm i`
2. `npm build` -- fails
3. `npm dev` -- fails to render the component, but the site works
