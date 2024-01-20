import plugin from 'tailwindcss/plugin.js'

export function PartPlugin () {
  return plugin(function({matchVariant}) {
    matchVariant(
      'part',
      (value) => {
        return `&::part(${value})`;
      },
    );
  })
}
