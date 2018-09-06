# Botão

## Intro

All markdown files are compiled into Vue components and processed by webpack, therefore you can and **should prefer** referencing any asset using relative URLs:

``` html
<v-buttom/>
```

## Uso

Sometimes you may need to provide static assets that are not directly referenced in any of your markdown or theme components - for example, favicons and PWA icons. In such cases you can put them inside `.vuepress/public` and they will be copied to the root of the generated directory.

::: warning
This is a warning
:::

## Propriedades

| Propriedade        |Descrição                                         | Valor default                           | Tipo          |
| -------------------|:------------------------------------------------:|:---------------------------------------:| -------------:|
| color              | Lorem ipson lorem ipson Lorem ipson lorem ipson  | <Badge text="#FFAFAF" type="default"/>  | string        |

