# node-i18n
detect browser language and translate it ,. light locale module . depend on express js and ejs template engine.  

### use case node-i18n module.
- install express js and setup project with ejs template engine.
- download node-i18n from github.
- copy its project node_modules dir. 
-  and fallow below steps 
- create locale wise dir and string files inside you project as ###  /locale/en_US/string.json  , /locale/ja/string.json .... etc 
```sh
/* impore node-i18n *****/
 const I18N = require('node-i18n'); 
/* configure the default language and your locale directory path **/.
/* put your locale string file as /locale/en_US/string.json */

I18N.config({path:"/locale", lang:"en_US", apppath: ps.cwd()});  

var app = express(); 
/*******initialized locale module *******/
app.use(I18N.init);
app.use(express.static(path.join(__dirname, 'public')));
/********** this is fuction called  from ejs template like <p>Welcome to <%= __translate("name", lang) %></p> *//
app.locals.__translate = I18N.translate;

```
