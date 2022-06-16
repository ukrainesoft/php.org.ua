- [« Imagick::transverseImage](imagick.transverseimage.md)
- [Imagick::uniqueImageColors »](imagick.uniqueimagecolors.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Видаляє краї із зображення

# Imagick::trimImage

(PECL imagick 2, PECL imagick 3)

Imagick::trimImage — Видаляє краї зображення

### Опис

public **Imagick::trimImage**(float `$fuzz`): bool

Видаляє краї, які є кольором фону із зображенням. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.2.9 або
старше.

### Список параметрів

`fuzz`
За замовчуванням ціль повинна точно відповідати певному кольору
пікселя. Однак у багатьох випадках два кольори можуть незначно
відрізнятиметься. Розмитий елемент зображення визначає, наскільки
допустимо, щоб два кольори вважалися однаковими. Цей параметр
є зміною квантового діапазону.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::trimImage()**:**

Обріжте зображення, а потім відобразіть у браузері.

` <?php/* Створіть об'єкт і прочитайте зображення в */$im u003d new Imagick("image.jpg");/* Обріжте зображення. */$im->trimImage(0);/* Виведіть зображення */header("Content-Type: image/" . $im->getImageFormat());echo $im;?> `

### Дивіться також

- [Imagick::getQuantumDepth()](imagick.getquantumdepth.md) -
Повертає величину глибини
- [Imagick::getQuantumRange()](imagick.getquantumrange.md) -
Повертає величину розміру спектру Imagick
- [imagecropauto()](function.imagecropauto.md) - Обрізає
зображення автоматично, використовуючи один із доступних режимів
