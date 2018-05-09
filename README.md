# WEBSITE_TITLE website

These are the source files for [WEBSITE_TITLE's website](https://www.website.com).

## Overview

- WEBSITE_TITLE's site is built in React using [Gatsby](https://www.gatsbyjs.org).
- It is hosted through Coffeeshop Creative's [Netlify](https://www.netlify.com)
	account.

## How to add the site to your local dev environment

To modify this site, make sure you have node, npm and Gatsby installed globally (if not,
see [this
tutorial](https://www.gatsbyjs.org/tutorial/part-one/#check-your-development-environment)
to get up and running).

Then, make sure you have SSH set up on your local machine for Coffeeshop
Creative's GitLab account. If you need to set this up, see [this
link](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html) for
instructions.

Finally, create a new local folder for this project, clone this repo,
install the project dependencies, and run the 'dev' script:

```
// navigate to project folder, then run:
git clone git@gitlab.com:coffeeshop/ashley-thouret-website.git
npm install
npm run dev
```

## How to update the site's content

In general, update the source files on your computer, then push your changes to GitLab:

```
git add .
git commit -m "Description of update..."
git push
```

When you `git push` your changes, Netlify will automatically deploy the new
version of the site. (You can set up email notifications in the site's settings on Netlify to alert you when the build succeeds or fails.)

In general, add new images to `src/images` and update all text and image info in the relevant `JSON` file in `src/data/`. Confirm the build works by running `npm run build`, then `gatsby serve` before committing your changes.

### How to update text

- Update the text in the relevant `JSON` file in `src/data/`.
- To include a line-break (or any other special formatting), add inline HTML tags directly to the JSON string and then make sure the markup that outputs the string uses `dangerouslySetInnerHTML={{ __html: variable }}`.

### How to update images

- Add the new images to `src/images/`.
- Add the relevant image paths and alt text to the appropriate `JSON` file in `src/data/`.

### How to update the header and footer

- Make updates to the header directly in `src/sections/Header.js`
- Make updates to the footer directly in `src/sections/Footer.js`

## How to get paid

- Invoice (Stephen Bell? Client?) following each update
- Rate for content updates: $50/batch
- Rate for design updates: $50/hr (discuss first)

## Confused?

* Learn more about Gatsby [here](https://www.gatsbyjs.org/tutorial/) and
	[here](https://www.gatsbyjs.org/docs/).
* Learn more about Netlify [here](https://www.netlify.com/docs/).
* Learn more about GitLab
	[here](https://docs.gitlab.com/ce/gitlab-basics/README.html).
* Learn more about git [here](https://git-scm.com/doc).
* Feel free to contact me with questions at hello@michaeluloth.com.