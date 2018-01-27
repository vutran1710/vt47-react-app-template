## **Key Understandings**
---
##### ESLint & Airbnb & Babel
**TL;DR** *You can skip this part, as it is meant for beginners only*
Code conventions extend Airbnb's javascript style-guide, with some modifications. All the rules and conventions are covered in the Airbnb's official document (https://github.com/airbnb/javascript).

The tweaks & modifications are setup in the **.eslintrc.json**.

Babel is a code-transpiler - meaning, it will take the original source-code and transform/translate it into the vanilla Javascript which node/browser can understand. With babel and its plugins/config, developers can use the experimental, or unreleased features of the future Javascript.
<br>

---
##### Writing component
**TL;DR** *All base components should be stateless. Containers without any life-cycle hooks should be stateless too.*

- Functional/Stateless Component:
Since the app uses a lot of libraries where functional composition and decorations get promoted, it is very natural that most of the component should be stateless functional component. Stateless Components are **ALWAYS** easier to test and maintain. They are easy to implement with decorators/wrappers like redux/redux-form/react-i18n for state control & injection:
***Example***:
```javascript
const LanguageSelector = ({ t, locales, onChange }) => (
  <div>
    <label className="label label-enhanced" htmlFor="locales" >
      {t('changeLanguage')}
    </label>
    <select value={locales} onChange={onChange} id="locales">
      <option value="en">EN</option>
      <option value="jp">JP</option>
    </select>
  </div>
)

const mapStateToProps = state => ({
  locales: state.common.locales
})

export default connect(mapStateToProps)(LanguageSelector)
```

If there are more than one wrappers, use **compose** from **lodash** instead of nesting syntax:
```javascript
export default compose(
  connect(mapStateToProps),
  translate()
)(LanguageSelector)
```
<br>

- Stateful Component:
Side-effects exist, so not all the time Stateless Functional Component can work the way we want, and falling back to Stateful Component is not an option anymore. So we will write a stateful component when we..:
--*Need some LifeCycle Hooks*
--*Listen to some events*
--*Invoke/Binding something manually*


```javascript
class Main extends Component {
  state = { allowSomething: false }
  
  componentDidMount = () => this.setState({ allowSomething: true })

  render = () => (
    <Container>
      {this.props.children}
    </Container>
  )
}
```

<br>

---
##### Importing/Exporting Component
**TL;DR** *Check the app dir ande sample codes for convention*
A component shall be written in an **index.js** file and placed inside the folder that has been named after the component itself. Other files included in this folder also shall be the Component's scoping css file, its test file and the snapshot folder.
***Example:***
```javascript
[base]
  |--[Button]
  |   |- [__snapshot__]
  |   |- index.js
  |   |- button.scss
  |   |- button.test.js
  |
  |--[Radio]
  |   |- [__snapshot__]
  |   |- index.js
  |   |- radio.scss
  |   |- radio.test.js
  |  
```

With this structure, you can import the component with path like this:
```javascript
import Button from 'some-path-here/base/Button'
```
 
 <br>
 <br>

***@vutran47***
*Dec 18, 2017*
