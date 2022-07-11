- [«Gmagick::drawimage](gmagick.drawimage.md)
- [Gmagick::embossimage »](gmagick.embossimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Збільшує краї зображення.

# Gmagick::edgeimage

(PECL gmagick \>u003d Unknown)

Gmagick::edgeimage — Збільшує краї зображення.

### Опис

public **Gmagick::edgeimage**(float `$radius`):
[Gmagick](class.gmagick.md)

Збільшує краї зображення за допомогою фільтра згортки даного
радіусу. Використовуйте радіус 0, і його буде обрано автоматично.

### Список параметрів

`radius`
Радіус операції.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) із збільшеними краями.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
