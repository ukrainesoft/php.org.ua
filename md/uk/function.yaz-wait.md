- [« yaz_syntax](function.yaz-syntax.md)
- [Обмін повідомленнями 0MQ »](book.zmq.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Очікує на виконання запитів Z39.50 серверами

# yaz_wait

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_wait — Очікує на виконання запитів Z39.50 серверами

### Опис

**yaz_wait**(array `&$options` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція виконує мережну (блокуючу) дію до завершення запиту,
підготовленого функціями [yaz_connect()](function.yaz-connect.md),
[yaz_search()](function.yaz-search.md),
[yaz_present()](function.yaz-present.md),
[yaz_scan()](function.yaz-scan.md) and
[yaz_itemorder()](function.yaz-itemorder.md).

**yaz_wait()** припиняє роботу та повертає результат після того як
всі сервери або завершать виконання всіх запитів або перервуть їх (у
у разі помилок).

### Список параметрів

`options`
Асоціативний масив параметрів:

`timeout`
Встановлює час очікування за секунди. Якщо сервер не відповідає за
через цей час, він вважається неробочим і **yaz_wait()**
припиняє роботу. За замовчуванням очікування становить 15 секунд.

`event`
Має логічний тип.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо встановлено параметр event,
повертає ресурс або **`false`** у разі виникнення помилки.
