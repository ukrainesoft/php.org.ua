- [« Imagick::setSize](imagick.setsize.md)
- [Imagick::setType »](imagick.settype.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює розмір та усунення об'єкту Imagick

# Imagick::setSizeOffset

(PECL imagick 2, PECL imagick 3)

Imagick::setSizeOffset — Встановлює розмір та усунення об'єкта Imagick

### Опис

public **Imagick::setSizeOffset**(int `$columns`, int `$rows`, int
`$offset`): bool

Встановлює розмір та усунення об'єкта Imagick. Встановіть його перед
читання необробленого формату зображення, такого як RGB, GRAY або
CMYK. Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або старше.

### Список параметрів

`columns`
Ширина у пікселях.

`rows`
Висота у пікселях.

`offset`
Зміщення зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
