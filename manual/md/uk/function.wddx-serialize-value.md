- [«wddx_packet_start](function.wddx-packet-start.md)
- [wddx_serialize_vars »](function.wddx-serialize-vars.md)

- [PHP Manual](index.md)
- [Функції WDDX](ref.wddx.md)
- Серіалізує одне значення всередині пакету WDDX

#wddx_serialize_value

(PHP 4, PHP 5, PHP 7)

wddx_serialize_value — Серіалізує одне значення всередині пакету WDDX

**Увага**

Ця функція була *Видалена* в PHP 7.4.0.

### Опис

**wddx_serialize_value**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`, string `$comment` u003d ?): string

Створює пакет WDDX з заданого значення.

### Список параметрів

`var`
Значення для серіалізації

`comment`
Необов'язковий рядок із коментарем, який відображається в заголовку
пакету.

### Значення, що повертаються

Повертає пакет WDDX або **`false`** у разі виникнення помилки.
