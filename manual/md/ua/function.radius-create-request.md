- [«radius_config](function.radius-config.md)
- [radius_cvt_addr »](function.radius-cvt-addr.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Створює обліковий запис або запит автентифікації

#radius_create_request

(PECL radius \>u003d 1.1.0)

radius_create_request — Створює обліковий запис або запит автентифікації

### Опис

**radius_create_request**(resource `$radius_handle`, int `$type`): bool

Запит Radius складається з коду, що вказує тип запиту, і нуля або
більше атрибутів, які надають додаткову інформацію. Щоб
розпочати створення нового запиту, викличте **radius_create_request()**.

> **Примітка**: Увага: ви повинні викликати цю функцію, перш ніж ви
> зможете помістити будь-який атрибут!

### Список параметрів

`radius_handle`

`type`
Тип **`RADIUS_ACCESS_REQUEST`** або **`RADIUS_ACCOUNTING_REQUEST`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **radius_create_request()****

` <?phpif (!radius_create_request($res, RADIUS_ACCESS_REQUEST)) {    echo 'RadiusError:' . radius_strerror($res). "
<br />";   exit;}?> `

### Дивіться також

- [radius_send_request()](function.radius-send-request.md) -
Відправляє запит і чекає відповіді
