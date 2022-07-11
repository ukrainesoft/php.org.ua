- [«radius_put_attr](function.radius-put-attr.md)
- [radius_put_string »](function.radius-put-string.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує цілісний атрибут

# radius_put_int

(PECL radius \>u003d 1.1.0)

radius_put_int — Приєднує цілісний атрибут

### Опис

**radius_put_int**(
resource `$radius_handle`,
int `$type`,
int `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує цілий атрибут до поточного запиту RADIUS.

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

### Приклади

**Приклад #1 Приклад використання **radius_put_int()****

` <?phpif (!radius_put_int($res, RAD_FRAMED_PROTOCOL, RAD_PPP)) {  echo 'Помилка Radius:' . radius_strerror($res). "
<br>/>";  exit;}?> `

### Дивіться також

- [radius_put_string()](function.radius-put-string.md) -
Приєднує рядковий атрибут
- [radius_put_vendor_int()](function.radius-put-vendor-int.md) -
Приєднує цілий атрибут, що залежить від постачальника
- [radius_put_vendor_string()](function.radius-put-vendor-string.md) -
Приєднує рядковий атрибут, що залежить від постачальника
