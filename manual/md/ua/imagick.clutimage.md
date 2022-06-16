- [« Imagick::clone](imagick.clone.md)
- [Imagick::coalesceImages »](imagick.coalesceimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Замінює кольори у зображенні

# Imagick::clutImage

(PECL imagick 2, PECL imagick 3)

Imagick::clutImage — Замінює кольори зображення

### Опис

public **Imagick::clutImage**([Imagick](class.imagick.md)
`$lookup_table`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Замінює кольори зображення, використовуючи таблицю відповідності.
Необов'язковий другий параметр замінює кольори у вказаному каналі. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.3.6 чи старше.

### Список параметрів

`lookup_table`
Об'єкт Imagick, що містить таблицю відповідності кольорів.

`channel`
Константа
[Channeltype](imagick.constants.md#imagick.constants.channel). Якщо не
вказано, що за замовчуванням заміна відбувається у всіх каналах.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Використання **Imagick::clutImage()**:**

Заміна кольору зображення, використовуючи таблицю відповідності.

` <?php$image u003d new Imagick('test.jpg');$clut u003d new Imagick();$clut->newImage(1, 1, new ImagickPixel('black'));$image->clutImage( $clut);$image->writeImage('test_out.jpg');?> `

### Дивіться також

- [Imagick::adaptiveBlurImage()](imagick.adaptiveblurimage.md) -
Додає адаптивний фільтр розмиття до зображення
- [Imagick::motionBlurImage()](imagick.motionblurimage.md) -
Імітує розмиття у русі
- [Imagick::radialBlurImage()](imagick.radialblurimage.md) -
Радіальне розмиття зображення
