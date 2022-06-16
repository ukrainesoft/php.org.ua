- [«radius_put_vendor_int](function.radius-put-vendor-int.md)
- [radius_request_authenticator
»](function.radius-request-authenticator.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує рядковий атрибут, що залежить від постачальника

#radius_put_vendor_string

(PECL radius \>u003d 1.1.0)

radius_put_vendor_string — Приєднує рядковий атрибут, що залежить від
постачальника

### Опис

**radius_put_vendor_string**(
resource `$radius_handle`,
int `$vendor`,
int `$type`,
string `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує до поточного запиту рядковий атрибут RADIUS, що залежить від
постачальника. В загальному,
[radius_put_vendor_attr()](function.radius-put-vendor-attr.md) - більше
корисна функція для приєднання рядкових атрибутів, оскільки вона
бінарно безпечна.

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
Значення атрибуту. Базова бібліотека очікує, що це значення буде
мати нульовий символ в кінці, тому цей параметр небезпечний для
двійкового коду.

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

- [radius_put_vendor_int()](function.radius-put-vendor-int.md) -
Приєднує цілий атрибут, що залежить від постачальника
