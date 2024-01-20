import plugin from 'tailwindcss/plugin.js'

export function StatePlugin () {
  return plugin(function({matchVariant}) {
    matchVariant(
      'state',
      (value) => {
        return `&:state(${value})`;
      },
    );
  })
}
