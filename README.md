ember-cleave
==============================================================================

The addon is a wrapper on [Cleave.js](https://github.com/nosir/cleave.js) package made with Ember.js

Preview
------------------------------------------------------------------------------
![alt text](https://raw.githubusercontent.com/Rxbsxn/Ember-cleave/master/addon-preview.png "Addon preview")


Installation
------------------------------------------------------------------------------

```
ember install ember-cleave
```


Usage
------------------------------------------------------------------------------
Define a options object in your component:
```js
// component.js
dateOptions: computed(function() {
  return {
    date: true,
    datePattern: ['Y', 'm', 'd']
  }
}),
```

Then in your template:

```hbs
<Ember-Cleave
  @options={{dateOptions}}
  @placeholder="Custom placeholder"
  @value={{value}}
/>
```

Check documentation of [Cleave.js](https://nosir.github.io/cleave.js/) to see more usage options


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
