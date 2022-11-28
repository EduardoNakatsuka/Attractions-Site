# Attractions Page

[![NodeJS](https://img.shields.io/node/v-lts/vite)](https://nodejs.org/en/blog/release/v14.18.0/)
[![ViteJS](https://img.shields.io/badge/Vite-%5E3.0.7-E74430.svg?&logo=javascript&logoColor=white)](https://vitejs.dev/)

Developed by [Eduardo Nakatsuka](https://www.linkedin.com/in/eduardo-nakatsuka) with the following [requirements](https://www.aukai.dev/apply/tech/frontend-take-home/)

# Getting started
  - [Instalation](#instalation)
  - [Routes](#routes)
  - [Improvements](#improvements)
  - [Considerations](#considerations)

# Instalation

  - Install [Node.js v14.18.0 or greater](https://nodejs.org/en/blog/release/v14.18.0/)
  - Clone the project, run `npm install`.
  - Make sure tests are ok, run `npm run test`.
  - Build the site by running `npm run build` and opening the localhost url that appears on the terminal. 

# Live site

  - I left a running live site under: https://resilient-nougat-1195dd.netlify.app/ just in case.

## Improvements

  1. Add page load.
  2. Improve tests and add more tests.
  3. Improve attractions State Management. [More on considerations](#considerations)
  4. Remove hardcoded colors from code, export them to a theme object.
  5. Have a talk with the team who did the specifications in order to have a better understanding for the whole project.
  6. TypeScript.

## Considerations

This was both challenging and really fun to code, it had been some time I hadn't coded anything without any kind of libs or frameworks to help, which is an always super fun and different thing to do.
I personally would have loved if I could have had more time to develop it, I had a very busy week and couldn't focus much on it other than the weekend. I feel like the code would have ended up way better.
When I started thinking about how to do the parsing the TSV it really reminded me of a microservice I had to do, which would create and parse CSVs that had more than 400k lines / 200mb+.
Now about the improvements part:
- I did only two tests, and I feel like this part could have gotten more love, unfortunately while doing the tests I had to spend more time refactoring some code due to some issues with vitest and the code I had previously written (which is why TDD would have saved me time debugging and fixing it) more on https://github.com/EduardoNakatsuka/aukai-gaussy/commit/d8bd63408146018a35c009a4de7285b4709032f4#diff-9bd6a60e5c0492eba8dd9e41ef4185609ac1d80f9e8196f14785e7cdb6a440f8R7-R15
- My attractions state management is not so great at the current state, there are methods creating, managing, deleting state. Which is not great, it NEEDS to be refactored in a observer/event based state management way. This is my next top priority in this code, of course having a talk with the team would be great too. I spent too much time at first optimizing the reading, mapping and merging of the files. I created in a separate gist a way of reading the files in batches/stream so we would only load one or another file based on what we needed to display in the datatable, it turned out to be slower (compared to fetching as a whole, mapping and merging) with the given files so I left it out of scope for now, it would be interesting to understand the needs and specially what sizes those TSV and JSON files would be. At larger TSV files (100k+ lines) I saw a considerable memory decrease parsing it with stream.
- Also having a talk with the team, this project would be nice if ported to TypeScript. a state management would look beautiful with it.
- I also have some questions:
  - Regarding the template data, the one provided in the test had a TAB error on the first line (between workers and updated), I corrected it, should I have done it?
  - The provided TSV and JSON attractions data look different from the template, for now there is also no "image" for any of them.
  - In the mock image provided there was a "add new attraction", and also it was mentioned, should I have done it?


Other improvements forementioned could be solved with a few more days and depending on the real need for it.

Thanks for the opportunity! Looking forward to our talk.