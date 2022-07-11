- [«
libxml_set_streams_context](function.libxml-set-streams-context.md)
- [SimpleXML »](book.simplexml.md)

- [PHP Manual](index.md)
- [Функції libxml](ref.libxml.md)
- Відключення помилок libxml та передача повноважень щодо вибірки та
обробці інформації про помилки користувачеві

# libxml_use_internal_errors

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

libxml_use_internal_errors — Вимкнення помилок libxml та надсилання
повноважень щодо вибірки та обробки інформації про помилки користувачеві

### Опис

**libxml_use_internal_errors**(?bool `$use_errors` u003d **`null`**): bool

**libxml_use_internal_errors()** дозволяє вимкнути стандартні помилки
libxml і включити користувальницьку обробку помилок.

### Список параметрів

`use_errors`
Включає (**`true`**) користувальницьку обробку помилок або відключає її
(**`false`**). Вимкнення також очищає всі поточні помилки libxml.

### Значення, що повертаються

Ця функція повертає попереднє значення параметра `use_errors`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---|
| 8.0.0 | `use_errors` тепер припускає значення null. Раніше значенням за замовчуванням було "false". |

### Приклади

**Приклад #1 Приклад використання **libxml_use_internal_errors()****

Цей приклад демонструє основне використання помилок libxml та
значення, яке повертає ця функція.

`<?php// включення обробки помилок користувачемvar_dump(libxml_use_internal_errors(true));// завантаження документа$doc u003d new DOMDocument;if (!$doc->load('file.xml')   $error) { {        // обробка помилок тут    }    libxml_clear_errors();}?> `

Результат виконання цього прикладу:

bool(false)

### Дивіться також

- [libxml_clear_errors()](function.libxml-clear-errors.md) - Очистка
буфер помилок libxml
- [libxml_get_errors()](function.libxml-get-errors.md) - Отримання
масиву помилок, що відбулися
