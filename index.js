/**
 * http://usejsdoc.org/
 */
const fs = require("fs");
class I18N {
    constructor(lang = 'en_US') {
        this.lang = lang;
    }
    static config(params) {
        let {
            path,
            lang,
            apppath
        } = params;
        this.path = path;
        this.defaultLang = (lang) ? lang : "en_US";

        this.APP_PATH = apppath;
        this.localePath = [apppath, path].join('');
        this.data = {};
        I18N.loadDeta();
    }
    static loadDeta() {
        fs.readdir(I18N.localePath, (err, data) => {
            if (err) return false;
            if (data)
                data.forEach((v, i) => {
                    I18N.data[v] = require(I18N.localePath + '/' + v + "/string.json");
                });
        });

    }
    static translate(key, lang) {
        try {
            return (I18N.data[lang][key]) ? (I18N.data[lang][key]) : ((I18N.data[I18N.defaultLang][key]) ? I18N.data[I18N.defaultLang][key] : key);
        } catch (Ex) {
            return key;
        }
    }
    static getLang(acceptLanguage) {
        if (!acceptLanguage) return I18N.defaultLang;
        return (acceptLanguage.split(',')[0]);
    }
    static init(req, res, next) {
        req["app-lang"] = I18N.getLang(req.headers["accept-language"]);
        next();
    }
}
module.exports = I18N;
