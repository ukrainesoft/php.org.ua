- [«Gmagick::thumbnailimage](gmagick.thumbnailimage.md)
- [Gmagick::write »](gmagick.write.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Видаляє краї із зображення

# Gmagick::trimimage

(PECL gmagick \>u003d Unknown)

Gmagick::trimimage — Видаляє краї зображення

### Опис

public **Gmagick::trimimage**(float `$fuzz`):
[Gmagick](class.gmagick.md)

Видаляє краї, які є кольором фону із зображенням.

### Список параметрів

`fuzz`
За замовчуванням ціль повинна точно відповідати певному кольору
пікселя. Однак у багатьох випадках два кольори можуть незначно
відрізнятиметься. Розмитий елемент зображення визначає, наскільки допустимо
визначати, щоб два кольори вважалися однаковими. Параметр репрезентує
собою зміна квантового діапазону.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
