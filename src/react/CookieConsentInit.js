function CookieConsentInit(locales, cssPath) {
  locales = locales || null;
  cssPath = cssPath || "";

  const callCC = (locales, cssPath) => {
    cssPath = cssPath || "";

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    var cc;
    try {
      cc = window.initCookieConsent();
    } catch (error) {
      console.error(error);
    }
    if (cc) {
      cc.run({
        current_lang: "cs",
        autoclear_cookies: true, // default: false
        theme_css: cssPath, // 🚨 replace with a valid path
        page_scripts: true, // default: false

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: null                     // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function (user_preferences, cookie) {
          // callback triggered only once
        },

        onAccept: function (cookie) {
          if (cc.allowedCategory("ad_storage")) {
            gtag("consent", "update", {
              ad_storage: "granted",
            });
            dataLayer.push({ ad_storage: true });
          } else {
            gtag("consent", "update", {
              ad_storage: "denied",
            });
            dataLayer.push({ ad_storage: false });
          }
          dataLayer.push({ event: "cookie_consent_update" });

          if (cc.allowedCategory("ad_user_data")) {
            gtag("consent", "update", {
              ad_user_data: "granted",
            });
            dataLayer.push({ ad_user_data: true });
          } else {
            gtag("consent", "update", {
              ad_user_data: "denied",
            });
            dataLayer.push({ ad_user_data: false });
          }

          if (cc.allowedCategory("ad_personalization")) {
            gtag("consent", "update", {
              ad_personalization: "granted",
            });
            dataLayer.push({ ad_personalization: true });
          } else {
            gtag("consent", "update", {
              ad_personalization: "denied",
            });
            dataLayer.push({ ad_personalization: false });
          }

          if (cc.allowedCategory("analytics_storage")) {
            gtag("consent", "update", {
              analytics_storage: "granted",
            });
            dataLayer.push({ analytics_storage: true });
          } else {
            gtag("consent", "update", {
              analytics_storage: "denied",
            });
            dataLayer.push({ analytics_storage: false });
          }
          dataLayer.push({ event: "cookie_consent_update" });
        },

        onChange: function (cookie, changed_preferences) {
          if (cc.allowedCategory("ad_storage")) {
            gtag("consent", "update", {
              ad_storage: "granted",
            });
            dataLayer.push({ ad_storage: true });
          } else {
            gtag("consent", "update", {
              ad_storage: "denied",
            });
            dataLayer.push({ ad_storage: false });
          }
          dataLayer.push({ event: "cookie_consent_update" });

          if (cc.allowedCategory("ad_user_data")) {
            gtag("consent", "update", {
              ad_user_data: "granted",
            });
            dataLayer.push({ ad_user_data: true });
          } else {
            gtag("consent", "update", {
              ad_user_data: "denied",
            });
            dataLayer.push({ ad_user_data: false });
          }

          if (cc.allowedCategory("ad_personalization")) {
            gtag("consent", "update", {
              ad_personalization: "granted",
            });
            dataLayer.push({ ad_personalization: true });
          } else {
            gtag("consent", "update", {
              ad_personalization: "denied",
            });
            dataLayer.push({ ad_personalization: false });
          }

          if (cc.allowedCategory("analytics_storage")) {
            gtag("consent", "update", {
              analytics_storage: "granted",
            });
            dataLayer.push({ analytics_storage: true });
          } else {
            gtag("consent", "update", {
              analytics_storage: "denied",
            });
            dataLayer.push({ analytics_storage: false });
          }
          dataLayer.push({ event: "cookie_consent_update" });
        },

        languages: {
          ...locales,
        },
      });
    }
  };

  const JSScript = document.createElement("script");
  JSScript.src =
    "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js";
  JSScript.type = "application/javascript";
  document.body.appendChild(JSScript);

  const CSSLink = document.createElement("link");
  CSSLink.href =
    "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css";
  CSSLink.rel = "stylesheet";
  document.head.appendChild(CSSLink);

  const timer = setTimeout(() => {
    callCC(locales, cssPath);
  }, 1000);
}

export default CookieConsentInit;
