- [«wddx_deserialize](function.wddx-deserialize.md)
- [wddx_packet_start »](function.wddx-packet-start.md)

- [PHP Manual](index.md)
- [Функції WDDX](ref.wddx.md)
- Завершує пакет WDDX із зазначеним ідентифікатором

#wddx_packet_end

(PHP 4, PHP 5, PHP 7)

wddx_packet_end — Завершує пакет WDDX із зазначеним ідентифікатором

**Увага**

Ця функція була *Видалена* в PHP 7.4.0.

### Опис

**wddx_packet_end**(resource `$packet_id`): string

Завершує та повертає заданий пакет WDDX.

### Список параметрів

`packet_id`
Пакет WDDX, що повертається
[wddx_packet_start()](function.wddx-packet-start.md).

### Значення, що повертаються

Повертає рядок, який містить пакет WDDX.
