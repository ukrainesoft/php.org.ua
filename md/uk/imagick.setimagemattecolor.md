- [« Imagick::setImageMatte](imagick.setimagematte.md)
- [Imagick::setImageOpacity »](imagick.setimageopacity.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює матовий колір зображення

# Imagick::setImageMatteColor

(PECL imagick 2, PECL imagick 3)

Imagick::setImageMatteColor — Встановлює матовий колір зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public
**Imagick::setImageMatteColor**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$matte`): bool

Встановлює матовий колір зображення.

### Список параметрів

`matte`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| PECL imagick 2.1.0 Тепер дозволяє використовувати рядок, що представляє колір, як параметр. Попередні версії дозволяли використовувати лише об'єкт ImagickPixel. |
