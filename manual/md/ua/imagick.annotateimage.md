- [« Imagick::animateImages](imagick.animateimages.md)
- [Imagick::appendImages »](imagick.appendimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає текстовий коментар на зображення

# Imagick::annotateImage

(PECL imagick 2, PECL imagick 3)

Imagick::annotateImage — Додає текстовий коментар на зображення

### Опис

public **Imagick::annotateImage**(
[ImagickDraw](class.imagickdraw.md) `$draw_settings`,
float `$x`,
float `$y`,
float `$angle`,
string `$text`
): bool

Додає текстовий коментар до зображення.

### Список параметрів

`draw_settings`
Об'єкт ImagickDraw з налаштуванням тексту

`x`
Горизонтальне зміщення в пікселях зліва від тексту

`y`
Вертикальне зміщення у пікселях до базового тексту

`angle`
Кут під яким виводиться текст. Позитивне значення: напрямок від
верхнього лівого кута до правого нижнього кута. Негативне значення: від
нижнього лівого кута до верхнього правого кута.

`text`
Рядок з текстом

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::annotateImage()**:**

Додавання тексту до порожнього зображення

` <?php/* Створюємо об'єкти */$image u003d new Imagick();$draw u003d new ImagickDraw();$pixel u003d new ImagickPixel( 'gray' );/* Нове image , 75, $pixel);/* Чорний текст */$draw->setFillColor('black');/* Настройки шрифту */$draw->setFont('Bookman-DemiItalic');$draw->setFontSize( 30 );/* Створюємо текст */$image->annotateImage($draw, 10, 45, 0, 'the quick brown fox jumps over the lazy dog');/* Встановлюємо ізображені png');/* Виводимо зображення з заголовками */header('Content-type: image/png');echo $image;?> `

### Дивіться також

- [ImagickDraw::annotation()](imagickdraw.annotation.md) - Малює
текст на зображенні
- [ImagickDraw::setFont()](imagickdraw.setfont.md) - Встановлює
вказаний шрифт для використання при анотуванні текстом
