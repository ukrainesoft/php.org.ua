- [« Imagick::tintImage](imagick.tintimage.md)
- [Imagick::transformImage »](imagick.transformimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає зображення у вигляді рядка

# Imagick::\_\_toString

(PECL imagick 2, PECL imagick 3)

Imagick::\_\_toString — Повертає зображення у вигляді рядка

### Опис

public **Imagick::\_\_toString**(): string

Повертає поточне зображення у вигляді рядка. Поверне лише одне
зображення; Метод не повинен використовуватися для об'єктів Imagick,
які містять кілька зображень, наприклад анімований GIF або
PDF із кількома сторінками.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст рядка у разі успішного виконання або порожній
рядок у разі виникнення помилки.

### Дивіться також

- [Imagick::getImageBlob()](imagick.getimageblob.md) - Повертає
послідовність зображень у вигляді BLOB
- [Imagick::getImagesBlob()](imagick.getimagesblob.md) - Повертає
всі послідовності зображень у вигляді великого двійкового об'єкта
