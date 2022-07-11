- [« Imagick::getImageProfile](imagick.getimageprofile.md)
- [Imagick::getImageProperties »](imagick.getimageproperties.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає профілі зображень

# Imagick::getImageProfiles

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProfiles — Повертає профілі зображень

### Опис

public **Imagick::getImageProfiles**(string `$pattern` u003d "\*", bool
`$include_values` u003d **`true`**): array

Повертає всі пов'язані профілі, які відповідають шаблону. Якщо в
як другий параметр передається **`false`**, повертаються тільки
імена профілів. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.3.6 чи старшою.

### Список параметрів

`pattern`
Шаблон для назв профілів.

`include_values`
Визначає, чи потрібно повертати лише імена профілів. Якщо передано
значення **`false`** то будуть повернуті лише імена профілів.

### Значення, що повертаються

Повертає масив, який містить профілі зображень або імена профілів.
