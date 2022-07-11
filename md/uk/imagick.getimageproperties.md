- [« Imagick::getImageProfiles](imagick.getimageprofiles.md)
- [Imagick::getImageProperty »](imagick.getimageproperty.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає властивості зображення

# Imagick::getImageProperties

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProperties — Повертає властивості зображення

### Опис

public **Imagick::getImageProperties**(string `$pattern` u003d "\*", bool
`$include_values` u003d **`true`**): array

Повертає всі властивості, що задовольняють шаблон. Якщо як
другого параметра передано **`false`**, то повертаються лише назви
властивостей. Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або старше.

### Список параметрів

`pattern`
Шаблон для пошуку властивостей.

`include_values`
Повернути лише імена властивостей. Якщо передано **`false`**, то повертаються
лише імена властивостей.

### Значення, що повертаються

Повертає масив, який містить властивості зображення або їх імена.

### Приклади

**Приклад #1 Використання **Imagick::getImageProperties()**:**

Приклад отримання EXIF-інформації.

` <?php/* Створення об'єкта */$im u003d new imagick("/path/to/example.jpg");/* Отримання EXIF-інформації */$exifArray u003d $im->getImageProperties("exif:*" );/* Цикл по EXIF-властивостей */foreach ($exifArray as $name u003d> $property){    echo "{$name} u003d> {$property}<br />
";}?> `
