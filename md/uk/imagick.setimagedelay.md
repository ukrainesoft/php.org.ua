- [«
Imagick::setImageCompressionQuality](imagick.setimagecompressionquality.md)
- [Imagick::setImageDepth »](imagick.setimagedepth.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює затримку зображення

# Imagick::setImageDelay

(PECL imagick 2, PECL imagick 3)

Imagick::setImageDelay — Встановлює затримку зображення

### Опис

public **Imagick::setImageDelay**(int `$delay`): bool

Встановлює затримку зображення. Для анімованого зображення це
кількість часу, протягом якого цей кадр зображення повинен
відображатиметься до відображення наступного кадру.

Затримка може бути встановлена індивідуально для кожного кадру
зображення.

### Список параметрів

`delay`
Кількість часу, виражене в 'тіках', для якого має
відображається зображення. Для анімованих GIF-файлів є 100 тиків у
секунду, тому значення 20 дорівнюватиме 20/100 секунди, тобто 1/5
секунди.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Змінити анімований GIF за допомогою
**Imagick::setImageDelay()****

` <?php// Измените анимированный GIF, чтобы его кадры воспроизводились с переменной скоростью,// варьируясь от показа в течение 50 мс до 0 мс,// что приведёт к пропуску фрейма в большинстве браузеров.$imagick u003d new Imagick(realpath( "Test.gif"));$imagick u003d $imagick->coalesceImages();$frameCount u003d 0;foreach ($imagick as $frame) {   $imagick->setImageDelay(($$frameCount % 1) ; $frameCount++;}$imagick u003d $imagick->deconstructImages();$imagick->writeImages("/path/to/save/output.gif", true);?> `
