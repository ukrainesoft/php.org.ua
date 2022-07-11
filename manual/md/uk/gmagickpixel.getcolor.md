- [« GmagickPixel::\_\_construct](gmagickpixel.construct.md)
- [GmagickPixel::getcolorcount »](gmagickpixel.getcolorcount.md)

- [PHP Manual](index.md)
- [GmagickPixel](class.gmagickpixel.md)
- Повертає колір

# GmagickPixel::getcolor

(PECL gmagick \>u003d Unknown)

GmagickPixel::getcolor — Повертає колір

### Опис

public **GmagickPixel::getcolor**(bool `$as_array` u003d **`false`**, bool
`$normalize_array` u003d **`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає колір об'єкта [GmagickPixel](class.gmagickpixel.md) у вигляді
масиву (array) чи рядки (string). Якщо для кольору встановлено
прозорість, її значення повертається в четвертому елементі списку.

### Список параметрів

`as_array`
**`true`** для типу повертається значення array, а не string.

`normalize_array`
Значення кольорів будуть нормовані, якщо **`true`**.

### Значення, що повертаються

string або array зі значеннями кольорів, нормованими, якщо параметр
`normalize_array` встановлено в **`true`**. Кидає виняток
**GmagickPixelException** у разі виникнення помилки.
