- [« Imagick::combineImages](imagick.combineimages.md)
- [Imagick::compareImageChannels »](imagick.compareimagechannels.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає коментар до вашого зображення

# Imagick::commentImage

(PECL imagick 2, PECL imagick 3)

Imagick::commentImage — Додає коментар до вашого зображення

### Опис

public **Imagick::commentImage**(string `$comment`): bool

Додає коментар до зображення.

### Список параметрів

`comment`
Коментар для додавання

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::commentImage()**:**

Коментування зображення та отримання коментаря:

` <?php/* Створити новий об'єкт Imagick */$im u003d new imagick();/* Створити порожнє зображення */$im->newImage(100, 100, new ImagickPixel; до зображення */$im->commentImage("Привіт, Світ!");/* Показати коментар */echo $im->getImageProperty("comment");?> `
