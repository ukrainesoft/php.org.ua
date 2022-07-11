- [«fdf_get_status](function.fdf-get-status.md)
- [fdf_get_version »](function.fdf-get-version.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Отримує значення поля

#fdf_get_value

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_value — Отримує значення поля

### Опис

**fdf_get_value**(resource `$fdf_document`, string `$fieldname`, int
`$which` u003d -1):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує значення запрошеного поля.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`which`
Елементи поля масиву можна отримати, передавши цей необов'язковий
параметр, починаючи з нуля. Для полів без масиву цей параметр буде
проігноровано.

### Значення, що повертаються

Повертає значення поля.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------|
| 4.3.0 | Додана підтримка масивів та параметра `which`. |

### Дивіться також

- [fdf_set_value()](function.fdf-set-value.md) - Встановлює
значення поля
