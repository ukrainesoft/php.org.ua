- [«
radius_get_tagged_attr_data](function.radius-get-tagged-attr-data.md)
- [radius_get_vendor_attr »](function.radius-get-vendor-attr.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Витягує тег із позначеного атрибуту

#radius_get_tagged_attr_tag

(PECL radius \>u003d 1.3.0)

radius_get_tagged_attr_tag — Витягує тег із позначеного атрибута

### Опис

**radius_get_tagged_attr_tag**(string `$data`): int\|false

Якщо [radius_get_attr()](function.radius-get-attr.md) був повернутий
тегований атрибут,
[radius_get_tagged_attr_data()](function.radius-get-tagged-attr-data.md)
поверне тег із атрибута.

### Список параметрів

`data`
Тегований атрибут, який потрібно розкодувати.

### Значення, що повертаються

Повертає тег із тегованого атрибуту або **`false`** у випадку
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **radius_get_tagged_attr_tag()****

` <?phpwhile ($resa u003d radius_get_attr($res)) {    if (!is_array($resa)) {       printf ("Помилка при отриманні атрибу
",  radius_strerror($res));        exit;    }    $attr u003d $resa['attr'];    $data u003d $resa['data'];    $tag u003d radius_get_tagged_attr_tag($data);    $value u003d radius_get_tagged_attr_data($data );    printf("Отриманий тегований атрибут з тегом %d і значенням %s
", $tag, $value);}?> `

### Дивіться також

- [radius_get_attr()](function.radius-get-attr.md) - Витягує
атрибут
- [radius_get_tagged_attr_data()](function.radius-get-tagged-attr-data.md) -
Витягує дані із позначеного атрибуту
