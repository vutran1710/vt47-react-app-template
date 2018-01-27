## **Key Understandings**
---
##### Basic React Revisit: *Props & State & Component LifeCycle, SyntheticEvent, Keys and Refs*
https://reactjs.org/
<br>

---
##### Function-binding & Class properties
Do not use function-binding on child component's props. Use class properties instead.
***Example***
```javascript
class A extends React.Component {
  // Bad-code
  doThing(e) {
    // do things
  }

  // Good-code
  doOther = e => {
    // do other things
  }

  render () {
    return (
      <div>
        <button onClick={this.doThing.bind(this)}>Click</button>
        <button onClick={this.doOther}>Click</button>
      </div>
    )
  }
}
```

<br>

---
##### Web-Components
https://reactjs.org/docs/web-components.html

<br>

---
##### High-Order-Component / High-Order-Function (HOC) and Decorator
https://reactjs.org/docs/higher-order-components.html

Production-standard React App makes heavy use of High-Order-Component and Decorators, like React-Redux, Redux-Form, React-i18next etc. So understand what are they and how to use them is very important.

<br>

---
##### Function Compose & Lodash
When using multiple wrappers/decorating functions, it can get REEEEALY ugly with nesting syntax, like the code below:

*Ugliness example*:
```javascript
export default withRouter(
  connect(mapStateToProp)(
    translate()(
      reduxForm({ 
        form: 'someForm', 
        onSubmit: submit 
      })(Component)
    )
  )
)
```

In that situation, use **lodash/fp/compose** for chaining functions:
*Beautifulness example*:
```javascript
export default compose(
  reduxForm({
    form: 'authentication',
    pure: true,
    onSubmit: e => Actions.login(e)
  }),
  translate(),
  connect(mapStateToProps),
  withRouter
)(Component)
```

Understanding function-chaining and function-composition is key to make effecient use of decorators. Read more at:
- https://vi.wikipedia.org/wiki/H%C3%A0m_h%E1%BB%A3p
- http://busypeoples.github.io/post/functional-composing-javascript/
- https://medium.com/@jason_41937/javascript-lodash-compose-and-flow-a1d9638f6f35

