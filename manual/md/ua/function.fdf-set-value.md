- [«fdf_set_target_frame](function.fdf-set-target-frame.md)
- [fdf_set_version »](function.fdf-set-version.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює значення поля

#fdf_set_value

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_value — Встановлює значення поля

### Опис

**fdf_set_value**(
resource `$fdf_document`,
string `$fieldname`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$isName` u003d ?
): bool

Встановлює `value` для заданого поля.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`value`
Цей параметр буде зберігатися у вигляді рядка, якщо він не є
масивом. У цьому випадку всі елементи масиву будуть збережені як масив
значень.

`isName`
> **Примітка**:
>
> У старіших версіях набору інструментів FDF останній параметр
> визначав, чи має значення поля бути перетворено на PDF Name (u003d 1)
> або встановлено PDF String (u003d 0).
>
> Це значення не використовується у поточній версії 5.0. Для
> сумісності воно, як і раніше, підтримується як необов'язковий
> параметр, але внутрішньо ігнорується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_get_value()](function.fdf-get-value.md) - Отримує значення
поля
- [fdf_remove_item()](function.fdf-remove-item.md) - Встановлює
цільовий кадр для форми
