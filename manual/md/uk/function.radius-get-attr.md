- [«radius_demangle](function.radius-demangle.md)
- [radius_get_tagged_attr_data
»](function.radius-get-tagged-attr-data.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Витягує атрибут

#radius_get_attr

(PECL radius \>u003d 1.1.0)

radius_get_attr — Витягує атрибут

### Опис

**radius_get_attr**(resource `$radius_handle`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Як і запити Radius, кожна відповідь може містити нуль або більше
атрибутів. Після того, як відповідь була успішно отримана від
[radius_send_request()](function.radius-send-request.md), його атрибути
можуть бути витягнуті один за одним за допомогою **radius_get_attr()**.
Щоразу, коли викликається **radius_get_attr()**, функція отримує
наступний атрибут із поточної відповіді.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Повертає асоціативний масив, що містить тип атрибуту та дані або
номер помилки \<u003d0.

### Приклади

**Приклад #1 Приклад використання **radius_get_attr()****

` <?phpwhile ($resa u003d radius_get_attr($res)) {    if (!is_array($resa)) {        printf("Помилка при отриманні атрибуту: |
",  radius_strerror($res));         exit;    }   $attr u003d $resa['attr'];    $data u003d $resa['data']   |
", $attr, strlen($data), bin2hex($data));}?> `

### Дивіться також

- [radius_put_attr()](function.radius-put-attr.md) - Приєднує
бінарний атрибут
- [radius_get_vendor_attr()](function.radius-get-vendor-attr.md) -
Виймає атрибут, що залежить від постачальника
- [radius_put_vendor_attr()](function.radius-put-vendor-attr.md) -
Приєднує бінарний атрибут, що залежить від постачальника
- [radius_send_request()](function.radius-send-request.md) -
Відправляє запит і чекає відповіді
