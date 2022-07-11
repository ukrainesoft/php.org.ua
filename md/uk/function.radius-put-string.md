- [«radius_put_int](function.radius-put-int.md)
- [radius_put_vendor_addr »](function.radius-put-vendor-addr.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує рядковий атрибут

# radius_put_string

(PECL radius \>u003d 1.1.0)

radius_put_string — Приєднує рядковий атрибут

### Опис

**radius_put_string**(
resource `$radius_handle`,
int `$type`,
string `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує рядковий атрибут до запиту RADIUS. В загальному,
[radius_put_attr()](function.radius-put-attr.md) - корисніша
функція для приєднання рядкових атрибутів, оскільки вона бінарно
безпечна.

> **Примітка**:
>
> Перед викликом цієї функції необхідно створити запит за допомогою
> функції
> [radius_create_request()](function.radius-create-request.md).

### Список параметрів

`radius_handle`
Ресурс RADIUS

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

### Приклади

**Приклад #1 Приклад використання **radius_put_string()****

` <?phpif (!radius_put_string($res, RADIUS_USER_NAME, 'billy')) {   echo 'Помилка Radius:' . radius_strerror($res). "
<br />";   exit;}?> `

### Дивіться також

- [radius_put_int()](function.radius-put-int.md) - Приєднує
цілісний атрибут
- [radius_put_vendor_int()](function.radius-put-vendor-int.md) -
Приєднує цілий атрибут, що залежить від постачальника
- [radius_put_vendor_string()](function.radius-put-vendor-string.md) -
Приєднує рядковий атрибут, що залежить від постачальника
