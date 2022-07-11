- [«Gmagick](class.gmagick.md)
- [Gmagick::addnoiseimage »](gmagick.addnoiseimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Додавання нового зображення до списку зображень об'єкта Gmagick

# Gmagick::addimage

(PECL gmagick \>u003d Unknown)

Gmagick::addimage — Додавання нового зображення до списку зображень
об'єкту Gmagick

### Опис

public **Gmagick::addimage**([Gmagick](class.gmagick.md) `$source`):
[Gmagick](class.gmagick.md)

Додавання нового зображення до об'єкта Gmagick з поточної позиції об'єкта
джерела. Після додавання позиції ітератор зміщується в кінець списку.

### Список параметрів

`source`
Об'єкт джерело Gmagick

### Значення, що повертаються

Об'єкт Gmagick із доданим зображенням

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
