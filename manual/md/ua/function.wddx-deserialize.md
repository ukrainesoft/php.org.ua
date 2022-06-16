- [«wddx_add_vars](function.wddx-add-vars.md)
- [wddx_packet_end »](function.wddx-packet-end.md)

- [PHP Manual](index.md)
- [Функції WDDX](ref.wddx.md)
- Десеріалізує пакет WDDX

#wddx_deserialize

(PHP 4, PHP 5, PHP 7)

wddx_deserialize — Десеріалізує пакет WDDX

**Увага**

Ця функція була *Видалена* в PHP 7.4.0.

### Опис

**wddx_deserialize**(string `$packet`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Десеріалізує пакет `packet` WDDX.

**Увага**

Не передавайте неперевірене введення користувача в
**wddx_deserialize()**. Десеріалізація може призвести до того, що коли
код завантажується та виконується під час ініціалізації та автозавантаження, та
зловмисник може скористатися цим. Використовуйте безпечний
стандартний формат обміну даними, такий як JSON (через
[json_decode()](function.json-decode.md) та
[json_encode()](function.json-encode.md)), якщо вам потрібно
передати серіалізовані дані користувачеві.

### Список параметрів

`packet`
Пакет WDDX у вигляді рядка чи потоку.

### Значення, що повертаються

Повертає десеріалізоване значення, яке може бути рядком,
числом чи масивом. Зверніть увагу, що структури десеріалізуються в
асоціативні масиви.
