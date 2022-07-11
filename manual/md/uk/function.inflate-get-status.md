- [« inflate_get_read_len](function.inflate-get-read-len.md)
- [inflate_init »](function.inflate-init.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- набуває статусу декомпресії

# inflate_get_status

(PHP 7 \>u003d 7.2.0, PHP 8)

inflate_get_status — Отримує статус декомпресії

### Опис

**inflate_get_status**([InflateContext](class.inflatecontext.md)
`$context`): int

Зазвичай повертає **`ZLIB_OK`** або **`ZLIB_STREAM_END`**.

### Список параметрів

`context`

### Значення, що повертаються

Повертає статус декомпресії або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------|
| 8.0.0 | `context` чекає екземпляр [InflateContext](class.inflatecontext.md); раніше, очікувався ресурс (resource). |
