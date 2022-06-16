- [« Imagick::pingImageBlob](imagick.pingimageblob.md)
- [Imagick::polaroidImage »](imagick.polaroidimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Отримує базові атрибути зображення спрощеним способом

# Imagick::pingImageFile

(PECL imagick 2, PECL imagick 3)

Imagick::pingImageFile — Отримує базові атрибути зображення
спрощеним способом

### Опис

public **Imagick::pingImageFile**(resource `$filehandle`, string
`$fileName` u003d ?): bool

Метод можна використовувати для запиту ширини, висоти, розміру та формату
зображення без зчитування всього зображення на згадку. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.2.9 або
старше.

### Список параметрів

`filehandle`
Відкритий дескриптор файлу зображення.

`fileName`
Необов'язкове ім'я файлу для цього зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::pingImageFile()****

Відкриття віддаленої локації

` <?php/* Відкриття віддаленої локації з допомогою fopen */$fp u003d fopen("http://example.com/test.jpg");/* Створення нового об'єкту Imagick */$im u003d ick /* Передача дескриптора об'єкту Imagick */$im->pingImageFile($fp);?> `

### Дивіться також

- [Imagick::pingImage()](imagick.pingimage.md) - Отримує основні
атрибути зображення
- [Imagick::pingImageBlob()](imagick.pingimageblob.md) - Швидко
витягує атрибути
- [Imagick::readImage()](imagick.readimage.md) - Читає зображення
з файлу
- [Imagick::readImageBlob()](imagick.readimageblob.md) - Зчитує
зображення з двійкового рядка
- [Imagick::readImageFile()](imagick.readimagefile.md) - Читає
зображення з відкритого дескриптора файлу
