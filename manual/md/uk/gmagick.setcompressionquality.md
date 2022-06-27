- [« Gmagick::separateimagechannel](gmagick.separateimagechannel.md)
- [Gmagick::setfilename »](gmagick.setfilename.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Встановлює якість стиснення об'єкта за замовчуванням

# Gmagick::setCompressionQuality

(No version information available, might only be in Git)

Gmagick::setCompressionQuality — Встановлює якість стиснення об'єкта
за замовчуванням

### Опис

**Gmagick::setCompressionQuality**( int `$quality` u003d 75 ):
[Gmagick](class.gmagick.md)

Встановлює якість стандартного стиснення об'єкта.

### Список параметрів

`quality`

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Gmagick::setCompressionQuality()****

` <?php$gm u003d new Gmagick();$gm->read("magick:rose");$gm->setCompressionQuality(2);?> `
