- [«radius_put_vendor_attr](function.radius-put-vendor-attr.md)
- [radius_put_vendor_string »](function.radius-put-vendor-string.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує цілий атрибут, що залежить від постачальника

# radius_put_vendor_int

(PECL radius \>u003d 1.1.0)

radius_put_vendor_int — Приєднує цілий атрибут, що залежить від
постачальника

### Опис

**radius_put_vendor_int**(
resource `$radius_handle`,
int `$vendor`,
int `$type`,
int `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує до поточного запиту RADIUS цілий атрибут, що залежить
від постачальника.

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
Значення атрибуту.

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

### Дивіться також

- [radius_put_vendor_string()](function.radius-put-vendor-string.md) -
Приєднує рядковий атрибут, що залежить від постачальника
