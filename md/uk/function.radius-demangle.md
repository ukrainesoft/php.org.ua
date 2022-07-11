- [«radius_demangle_mppe_key](function.radius-demangle-mppe-key.md)
- [radius_get_attr »](function.radius-get-attr.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Розшифровує дані

# radius_demangle

(PECL radius \>u003d 1.2.0)

radius_demangle - Розшифровує дані

### Опис

**radius_demangle**(resource `$radius_handle`, string `$mangled`):
string

Деякі дані (паролі, MS-CHAPv1 MPPE-ключі) спотворені з міркувань
безпеки та їх необхідно розшифрувати, перш ніж ви зможете їх
використовувати.

### Список параметрів

`radius_handle`
Ресурс RADIUS

`mangled`
Спотворені дані, які потрібно розшифрувати.

### Значення, що повертаються

Повертає розшифрований рядок або **`false`** у разі виникнення
помилки.
