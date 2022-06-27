- [« Imagick::montageImage](imagick.montageimage.md)
- [Imagick::morphology »](imagick.morphology.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перетворює набір зображень

# Imagick::morphImages

(PECL imagick 2, PECL imagick 3)

Imagick::morphImages — Перетворює набір зображень

### Опис

public **Imagick::morphImages**(int `$number_frames`):
[Imagick](class.imagick.md)

Перетворює набір зображень. І пікселі зображення, і розмір лінійно
інтерполуються, щоб створити видимість метаморфози від одного
зображення до іншого.

### Список параметрів

`number_frames`
Кількість створюваних проміжних зображень.

### Значення, що повертаються

Метод повертає новий об'єкт Imagick у разі успішного виконання.
Викликає **ImagickException** у разі виникнення помилки.
