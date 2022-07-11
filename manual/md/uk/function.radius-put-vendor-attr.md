- [«radius_put_vendor_addr](function.radius-put-vendor-addr.md)
- [radius_put_vendor_int »](function.radius-put-vendor-int.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує бінарний атрибут, що залежить від постачальника

#radius_put_vendor_attr

(PECL radius \>u003d 1.1.0)

radius_put_vendor_attr — Приєднує бінарний атрибут, що залежить від
постачальника

### Опис

**radius_put_vendor_attr**(
resource `$radius_handle`,
int `$vendor`,
int `$type`,
string `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує до поточного запиту RADIUS бінарний атрибут, що залежить від
постачальника.

> **Примітка**:
>
> Перед викликом цієї функції необхідно створити запит за допомогою
> функції
> [radius_create_request()](function.radius-create-request.md).

### Список параметрів

`radius_handle`
Ресурс RADIUS

`vendor`
ID виробника (Vendor).

`type`
Тип атрибуту.

`value`
Значення атрибуту, яке розглядатиметься як необроблене
двійковий рядок.

`options`
Бітова маска опцій атрибуту. Як значення можна використовувати
[**`RADIUS_OPTION_TAGGED`**](radius.constants.options.md#constant.radius-option-tagged)
і
[**`RADIUS_OPTION_SALT`**](radius.constants.options.md#constant.radius-option-salt).

`tag`
Тег атрибут. Цей параметр ігнорується, якщо не встановлено опцію
[**`RADIUS_OPTION_TAGGED`**](radius.constants.options.md#constant.radius-option-tagged).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------------|----------------------------- -----------|
| PECL radius 1.3.0 Додані параметри `options` та `tag`. |

### Приклади

**Приклад #1 Приклад використання **radius_put_vendor_attr()****

` <?phpif (!radius_put_vendor_attr($res, RADIUS_VENDOR_MICROSOFT, RAD_MICROSOFT_MS_CHAP_CHALLENGE, $challenge)) {    echo 'Помилка Radius:' . radius_strerror($res). "
<br />";   exit;}?> `

### Дивіться також

- [radius_get_vendor_attr()](function.radius-get-vendor-attr.md) -
Виймає атрибут, що залежить від постачальника
