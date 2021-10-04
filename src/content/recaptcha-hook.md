---
title: 'Create Custom Google Recaptcha React Hook'
date: '2021-10-04'
draft: false
path: '/blog/create-custom-recaptcha-react-hook'
---

Recently, I had implemented [Google reCAPTCHA](https://developers.google.com/recaptcha/docs/v3) v3 using a third party library for a website to protect public facing webforms from spam without an user friction. reCAPTCHA v3 is "invisible" so it does not show those "I am not a robot" checkboxes or picture clicking games, this does not disrupt the user flow by the client fetching a token from Google then verifying it later with a score. So when the user submits the request, the client fetches a token from Google which is then sent to the API. This token in the API request is then sent to Google again to return a score 1.0 being very likely a good interaction and 0.0 is very likely a bot. Based on the score you then do what you like e.g. return an error to the user.

This was working well to protect the site against bots until you run a Google lighthouse test and the performance score tanks because of reCAPTCHA network requests when the page initially loads (when not cached). Having a survey popup on many pages user hit added to the initial load times by multiple seconds. The solution was to lazy load the initial reCAPTCHA request until the user focuses on the form itself which is when I created this custom React hook that I will show you below.

```js
import React from 'react';

const sitekey = process.env.GATSBY_RECAPTCHA_KEY;

export function useRecaptcha() {
  const [recaptcha, setRecaptcha] = React.useState();

  const handleRecaptchaFocus = () => {
    if (!window.grecaptcha) {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.defer = true;
      script.onload = function () {
        window.grecaptcha.ready(() => {
          setRecaptcha(window.grecaptcha);
        });
      };
      script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
      head.appendChild(script);
    }
  };

  return [
    (action) => {
      return new Promise((resolve, reject) => {
        if (recaptcha) {
          resolve(recaptcha.execute(sitekey, { action }));
        } else {
          reject(new Error('Recaptcha script not available'));
        }
      });
    },
    handleRecaptchaFocus,
  ];
}
```

Lets go through this hook...

`handleRecaptchaFocus` function creates a HTML script with the Google recaptcha API source then appends it in the head. When the script is loaded it will
add the function to retrieve the token in the React state of the hook. We also don't want to keep creating a script tag if one exists already so we put a check before
doing anything.

We then return two things:

1. A promise that will execute the request to retrieve a new reCAPTCHA token that will be verified later on.
2. The function to create the script tag in the head of the page.

Now that we have the hook create we have to put it to use.

```js
function exampleForm() {
  const [executeRecaptcha, handleRecaptchaFocus] = useRecaptcha();

  // executeRecaptcha in handleSubmit function

  return (
    <form onSubmit={handleSubmit} onFocus={handleRecaptchaFocus}>
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        id="email"
        autoComplete="off"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </form>
  );
}
```

Here we add the `handleRecaptchaFocus` function from the hook to be called when the form gets focused on and then the executeRecaptcha request to get a token will be called
in the handleSubmit. Thats it!

This code reduced the load times of each page with a form by sending the reCAPTCHA requests until it was actually needed (if at all) when the form has been focused on. Now pages will
load faster for users visiting your website and giving you an improved lighthouse score.
