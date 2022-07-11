- [« zend_thread_id](function.zend-thread-id.md)
- [phpdbg »] (book.phpdbg.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримує версію двигуна Zend

# zend_version

(PHP 4, PHP 5, PHP 7, PHP 8)

zend_version — Отримує версію двигуна Zend

### Опис

**zend_version**(): string

Повертає рядок з номером версії ядра, що працює в даний момент.
Engine.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер версії Zend Engine у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **zend_version()****

`<?phpecho "Версія движка Zend: " . zend_version();?> `

Результатом виконання цього прикладу буде щось подібне:

Версія двигуна Zend: 2.2.0

### Дивіться також

- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
- [phpcredits()](function.phpcredits.md) - Виводить список
розробників PHP
- [phpversion()](function.phpversion.md) - Отримує поточну версію
PHP
