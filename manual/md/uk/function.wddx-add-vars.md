- [« Функції WDDX](ref.wddx.md)
- [wddx_deserialize »](function.wddx-deserialize.md)

- [PHP Manual](index.md)
- [Функції WDDX](ref.wddx.md)
- Додати змінні в пакет WDDX із зазначеним ідентифікатором

#wddx_add_vars

(PHP 4, PHP 5, PHP 7)

wddx_add_vars — Додати змінні в пакет WDDX із зазначеним
ідентифікатором

**Увага**

Ця функція була *Видалена* в PHP 7.4.0.

### Опис

**wddx_add_vars**(resource `$packet_id`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var_name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$var_names`): bool

Серіалізує передані змінні та додає результат до цього
пакету.

### Список параметрів

Функція приймає кількість параметрів.

`packet_id`
Пакет WDDX, що повертається
[wddx_packet_start()](function.wddx-packet-start.md).

`var_name`
Може бути або рядком, що означає змінну, або масивом,
містить рядки з іменами змінних чи інші масиви тощо.

`var_names`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
