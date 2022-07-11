- [« Imagick::pingImage](imagick.pingimage.md)
- [Imagick::pingImageFile »](imagick.pingimagefile.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Швидко витягує атрибути

# Imagick::pingImageBlob

(PECL imagick 2, PECL imagick 3)

Imagick::pingImageBlob — Швидко витягує атрибути

### Опис

public **Imagick::pingImageBlob**(string `$image`): bool

Метод можна використовувати для запиту ширини, висоти, розміру та формату
зображення без зчитування всього зображення на згадку. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.2.9 або
старше.

### Список параметрів

`image`
Рядок, що містить зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::pingImageBlob()****

Отримання зображення з рядка

` <?php/* читання вмісту зображення */$image u003d file_get_contents("test.jpg");/* створення нового об'єкту imagick */$im u003d new іmagick();/*  >pingImageBlob($image);/* виведення ширини і висоти зображення */echo $im->getImageWidth() . 'x' . $im->getImageHeight();?> `

### Дивіться також

- [Imagick::pingImage()](imagick.pingimage.md) - Отримує основні
атрибути зображення
- [Imagick::pingImageFile()](imagick.pingimagefile.md) - Отримує
базові атрибути зображення спрощеним способом
- [Imagick::readImage()](imagick.readimage.md) - Читає зображення
з файлу
- [Imagick::readImageBlob()](imagick.readimageblob.md) - Зчитує
зображення з двійкового рядка
- [Imagick::readImageFile()](imagick.readimagefile.md) - Читає
зображення з відкритого дескриптора файлу
