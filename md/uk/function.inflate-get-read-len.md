- [«inflate_add](function.inflate-add.md)
- [inflate_get_status »](function.inflate-get-status.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Отримує кількість прочитаних байт

# inflate_get_read_len

(PHP 7 \>u003d 7.2.0, PHP 8)

inflate_get_read_len — Отримує кількість прочитаних байт

### Опис

**inflate_get_read_len**([InflateContext](class.inflatecontext.md)
`$context`): int

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`context`

### Значення, що повертаються

Повертає кількість прочитаних байт або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------|
| 8.0.0 | `context` чекає екземпляр [InflateContext](class.inflatecontext.md); раніше, очікувався ресурс (resource). |
