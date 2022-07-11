- [«
Imagick::adaptiveThresholdImage](imagick.adaptivethresholdimage.md)
- [Imagick::addNoiseImage »](imagick.addnoiseimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає нове зображення до списку зображень об'єкту Imagick

# Imagick::addImage

(PECL imagick 2, PECL imagick 3)

Imagick::addImage — Додає нове зображення до списку зображень
об'єкту Imagick

### Опис

public **Imagick::addImage**([Imagick](class.imagick.md) `$source`):
bool

Додає нове зображення до об'єкту Imagick із поточного положення
вихідного об'єкта. Після цієї операції переміщається позиція ітератора
кінець списку.

### Список параметрів

`source`
Вихідний об'єкт Imagick

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
