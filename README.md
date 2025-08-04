# Purpose

Make the `::part()` and `::state()` CSS selectors for Shadow DOM easier to work with.

`::part()`: <https://developer.mozilla.org/en-US/docs/Web/CSS/::part>

`:state()`: <https://html.spec.whatwg.org/multipage/custom-elements.html#exposing-custom-element-states>

Here's a primer as to why this is nice:

<https://konnorrogers.com/posts/2023/web-components-tailwind-and-ssr/#consuming-web-components-with-tailwind>

## Installation

```bash
npm install tailwindcss-plugin-custom-elements
```

## Adding the plugin

```js
import {
  PartPlugin,
  StatePlugin
} from 'tailwindcss-plugin-custom-elements'

export default {
  plugins: [
    PartPlugin(), // Adds `part-[name]:` pseudo-selector
    StatePlugin(), // Adds `state-[name]:` pseudo-selector
  ]
}
```

## Syntax

The basic syntaxes are:

`part-[{{ partName }}]:{{ otherStuff }}`

`state-[{{ stateName }}]:{{ otherStuff }}`

## Example

Here's an example where we set the background-color to `red-500` on a shadow root part with the name of `"base"`,
and then on `:state(valid)`, we change the background color to `green-500`

```html
<my-web-component class="part-[base]:bg-red-500 state-[valid]:bg-green-500">
  <ShadowRoot>
    <div part="base"></div>
  </ShadowRoot>
</my-web-component>
```

Generated selectors:

```css
&::part(base).bg-red-500 { background-color: theme("colors.red.500"); }
&:state(valid):bg-green-500 { background-color: theme("colors.green.600"); }
```

## Additional notes

Order matters. If for some reason a part isn't being applied as expected, make sure things are in the correct order.
`::state()` and `::part()` is a pseudo-element and does not accept all possible pseudo-selectors / pseudo-elements.
