- [« Imagick::reduceNoiseImage](imagick.reducenoiseimage.md)
- [Imagick::removeImage »](imagick.removeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перезначає кольори зображення

# Imagick::remapImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::remapImage — Перезначення кольору зображення

### Опис

public **Imagick::remapImage**([Imagick](class.imagick.md)
`$replacement`, int `$DITHER`): bool

Замінює кольори зображення на ті, що визначені параметром
`replacement`. Кольори замінюються найближчим із можливих. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.4.5 чи старше.

### Список параметрів

`replacement`
Об'єкт Imagick, що містить кольори, що замінюють.

`DITHER`
Зверніться до списку [констант
DITHERMETHOD](imagick.constants.md#imagick.constants.dithermethod).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
