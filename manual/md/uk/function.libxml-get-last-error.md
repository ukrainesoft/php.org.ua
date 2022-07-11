- [«libxml_get_errors](function.libxml-get-errors.md)
- [libxml_set_external_entity_loader
»](function.libxml-set-external-entity-loader.md)

- [PHP Manual](index.md)
- [Функції libxml](ref.libxml.md)
- Вилучення останньої помилки з libxml

#libxml_get_last_error

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

libxml_get_last_error — Вилучення останньої помилки з libxml

### Опис

**libxml_get_last_error**():
[LibXMLError](class.libxmlerror.md)\|false

Вилучення останньої помилки з libxml.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [LibXMLError](class.libxmlerror.md), якщо у буфері
є помилки, або **`false`** інакше.

### Дивіться також

- [libxml_get_errors()](function.libxml-get-errors.md) - Отримання
масиву помилок, що відбулися
- [libxml_clear_errors()](function.libxml-clear-errors.md) - Очистка
буфер помилок libxml
