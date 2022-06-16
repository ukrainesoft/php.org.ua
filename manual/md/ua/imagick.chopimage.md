- [«Imagick::charcoalImage](imagick.charcoalimage.md)
- [Imagick::clampImage »](imagick.clampimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Видаляє область зображення та обрізає його

# Imagick::chopImage

(PECL imagick 2, PECL imagick 3)

Imagick::chopImage — Видаляє область зображення та обрізає його.

### Опис

public **Imagick::chopImage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

Видаляє вибрану область з реструктуризацією зображення.

### Список параметрів

`width`
Ширина області, що обрізається

`height`
Висота області, що обрізається

`x`
Початок області, що обрізається, по осі X

`y`
Початок області, що обрізається, по осі Y

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Використання **Imagick::chopImage()**:**

Приклад використання Imagick::chopImage

` <?php/* Створюємо об'єкти */$image u003d new Imagick();$pixel u003d new ImagickPixel( 'gray' );/* Нове зображення */$image->newImage(400, 20 * Обрізка зображення */$image->chopImage(200, 200, 0, 0);/* Установка формату зображення */$image->setImageFormat('png');/* Висновок зображення з заголовками -type: image/png');echo $image;?> `

### Дивіться також

- [Imagick::cropImage()](imagick.cropimage.md) - Витягує область
зображення
