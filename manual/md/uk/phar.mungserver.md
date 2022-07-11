- [« Phar::mount](phar.mount.md)
- [Phar::offsetExists »](phar.offsetexists.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Визначити список до чотирьох $\_SERVER-змінних, які мають
бути змінені для запуску

# Phar::mungServer

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::mungServer — Визначити список до чотирьох $\_SERVER-змінних,
які мають бути змінені для запуску

### Опис

final public static **Phar::mungServer**(array $variables): void

Функція **Phar::mungServer()** має викликатися лише у завантажувачі.

Визначає список до чотирьох $-SERVER-змінних, які необхідно
модифікувати для запуску. Модифікація полягає у видаленні слідів
запуску з phar-архіву для змінних `REQUEST_URI`, `PHP_SELF`,
`SCRIPT_NAME` та `SCRIPT_FILENAME`.

Сам собою цей метод нічого не робить. Ефект досягається тільки в
комбінації з [Phar::webPhar()](phar.webphar.md) і тільки якщо
Запитаний файл є PHP-файлом для аналізу. Зверніть увагу, що
змінні `PATH_INFO` та `PATH_TRANSLATED` завжди модифіковані.

Оригінальні значення змінних змінних будуть збережені в масиві
SERVER із префіксами `PHAR_`. Наприклад, оригінальне значення
`SCRIPT_NAME` буде записано в `PHAR_SCRIPT_NAME`.

### Список параметрів

`variables`
Масив, що містить комбінацію з: `REQUEST_URI`, `PHP_SELF`,
`SCRIPT_NAME` та `SCRIPT_FILENAME`. Будь-які інші значення викликають
виняток. Зверніть увагу, що функція **Phar::mungServer()**
чутлива до регістру символів.

### Значення, що повертаються

Нічого не вертає.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
вхідні дані некоректні.

### Приклади

**Приклад #1 Приклад використання **Phar::mungServer()****

` <?php// приклад завантажувачаPhar::mungServer(array('REQUEST_URI'));Phar::webPhar();__HALT_COMPILER();?> `

### Дивіться також

- [Phar::webPhar()](phar.webphar.md) - Надсилає запит із браузера
у внутрішній файл у phar-архіві
- [Phar::setStub()](phar.setstub.md) - Встановити завантажувач або
завантажувальну заглушку в Phar-архів
