### **ISSUES**
- Dev-server hot-reload & Tree-shaking bug

The development server we are using is in fact is a customized **json-server** instead of using Brunch's default dev-server. Hot-reload is still working well but the bug with Tree-shaking remains.

###### **Tree-shaking bug**
TL;DR: in the brunch-config, have a look at this code block:
```javascript
exports.files = {
  javascripts: {
    // entryPoints: { 'app/initialize.js': 'app.js' },
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: 'app.css'
  }
}
```
- When development, use **jointTo**.
- But when ready for production, remove **joinTo** and use **entryPoints** instead


### **TODOS**
##### Phase 1
[] Learn Markdown syntax
[] Decide an official css development strategy and document it
[] Replace banner and add a proper favicon
[] Make aliases/shorten the ugly "../../.." path-patterns
[] Develop strategy of using redux-form for question screen
[] Fix Brunch dev-server hot-reload with tree-shaking enabled

##### Phase 2: if api endpoints are available
[] Document api endpoints
[] Write json-server routes
[] Make proper question template
