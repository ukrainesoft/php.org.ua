- [« Imagick::hasPreviousImage](imagick.haspreviousimage.md)
- [Imagick::identifyImage »](imagick.identifyimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::identifyFormat

(PECL imagick 3 \>u003d 3.3.0)

Imagick::identifyFormat — Опис

### Опис

public **Imagick::identifyFormat**(string `$embedText`): string\|false

Замінює будь-які вбудовані символи форматування відповідним
властивістю зображення та повертає інтерпретований текст. Подивіться
http://www.imagemagick.org/script/escape.php, щоб дізнатися про
послідовність екранування.

### Список параметрів

`embedText`
Рядок, що містить послідовності форматування, наприклад, "Поле
обрізка: %@ кількість унікальних кольорів: %k".

### Значення, що повертаються

Повертає формат або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::identifyFormat()****

` <?php        $output u003d "Виведення 'Поле обрізки: %@ кількість унікальних квітів: %k': <br/>"; $imagick u003d new \Imagick(realpath("./images/artifact/mask.png")); $output .u003d $imagick->identifyFormat("Поле обрізки: %@ кількість унікальних квітів: %k");?> `
