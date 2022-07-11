- [«radius_close](function.radius-close.md)
- [radius_create_request »](function.radius-create-request.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Примушує бібліотеку читати цей файл конфігурації

# radius_config

(PECL radius \>u003d 1.1.0)

radius_config — Примушує бібліотеку читати файл конфігурації

### Опис

**radius_config**(resource `$radius_handle`, string `$file`): bool

Перед виконанням будь-яких запитів Radius, бібліотека має бути
поінформована про сервери, із якими вона може зв'язатися. Найпростіший
спосіб налаштувати бібліотеку – викликати **radius_config()**.
**radius_config()** змушує бібліотеку читати файл конфігурації,
формат якого описаний
[»radius.conf](http://www.freebsd.org/cgi/man.cgi?queryu003dradius.conf).

### Список параметрів

`radius_handle`

`file`
Шлях до файлу конфігурації передається як аргумент файлу в
**radius_config()**. Бібліотека також може бути налаштована програмно з
за допомогою дзвінка [radius_add_server()](function.radius-add-server.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [radius_add_server()](function.radius-add-server.md) - Додає
сервер
