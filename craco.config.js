// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((one) => {
              if (one.loader && one.loader.includes("babel-loader")) {
                // Eğer one.include tanımlı değilse veya dizi değilse diziye çevirin
                if (!one.include) {
                  one.include = [];
                } else if (!Array.isArray(one.include)) {
                  one.include = [one.include];
                }
                one.include.push(/react-helmet-async/);
              }
            });
          }
        });
        return webpackConfig;
      },
    },
  };
  