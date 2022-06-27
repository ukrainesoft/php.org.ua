- [«ob_get_status](function.ob-get-status.md)
- [ob_implicit_flush »](function.ob-implicit-flush.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- callback-функція, що використовується для gzip-стиснення буфера виводу при
виклик ob_start

#ob_gzhandler

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

ob_gzhandler - callback-функція, що використовується для gzip-стиснення буфера
виводу під час виклику ob_start

### Опис

**ob_gzhandler**(string `$data`, int `$flags`): string\|false

Функція **ob_gzhandler()** призначена для використання як
callback-функції для [ob_start()](function.ob-start.md), щоб
полегшити відправлення gz-кодованих даних браузерам, які підтримують
Стиснення веб-сторінок. Перш ніж **ob_gzhandler()** відправить стислі
дані, вона визначає, який тип кодування вмісту зможе прийняти
браузер ("gzip", "deflate" або взагалі ніякий) і поверне його вміст
відповідним чином. Підтримуються всі браузери, що надсилають
коректні заголовки про те, що вони беруть стислі веб-сторінки. Якщо
браузер не підтримує стиснення сторінок, ця функція поверне **`false`**.

### Список параметрів

`data`

`flags`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання функції **ob_gzhandler()****

` <?phpob_start("ob_gzhandler");?><html><body><p>Це мабуть стиснутий сторінкою.</p></body></html>`

### Примітки

> **Примітка**:
>
> **ob_gzhandler()** вимагає наявність модуля [zlib](ref.zlib.md).

> **Примітка**:
>
> Ви не можете використовувати одночасно **ob_gzhandler()** та
> [zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression).
> Також зверніть увагу, що використання
> [zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression)
> краще, ніж **ob_gzhandler()**.

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
