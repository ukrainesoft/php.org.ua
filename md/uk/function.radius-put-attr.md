- [«radius_put_addr](function.radius-put-addr.md)
- [radius_put_int »](function.radius-put-int.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Приєднує бінарний атрибут

#radius_put_attr

(PECL radius \>u003d 1.1.0)

radius_put_attr — Приєднує бінарний атрибут

### Опис

**radius_put_attr**(
resource `$radius_handle`,
int `$type`,
string `$value`,
int `$options` u003d 0,
int `$tag` u003d ?
): bool

Приєднує бінарний атрибут до запиту RADIUS.

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

**Приклад #1 Приклад використання **radius_put_attr()****

` <?phpmt_srand(time());$chall u003d mt_rand();$chapval u003d md5(pack('Ca*',1 , 'sepp' . $chall));$pass u003d pack('CH*', 1, $chapval);if (!radius_put_attr($res, RADIUS_CHAP_PASSWORD, $pass)) {    echo 'Помилка Radius:' . radius_strerror($res). "
<br />";   exit;}?> `

### Дивіться також

- [radius_get_attr()](function.radius-get-attr.md) - Витягує
атрибут
- [radius_get_vendor_attr()](function.radius-get-vendor-attr.md) -
Виймає атрибут, що залежить від постачальника
- [radius_put_vendor_attr()](function.radius-put-vendor-attr.md) -
Приєднує бінарний атрибут, що залежить від постачальника
