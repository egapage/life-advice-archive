# Project

React repo for the Life Advice Archive.

## Stack

**Frontend**
- Create React App (Typescript)
- Chakra UI
- Framer Motion

**Backend**
- Node.js
- Express
- Firebase
- Playwright
- AWS Amplify

### Automation

Using Playwright supported by NodeJS, a worker scans the Ryen Russilo podcast feed daily for new episodes. If a new episode is detected, the worker downloads the episode, trims the mp3 to the length of the discussion, uploads to S3 and creates a new entry on the frontpage.