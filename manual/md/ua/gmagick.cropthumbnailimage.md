- [«Gmagick::cropimage](gmagick.cropimage.md)
- [Gmagick::current »](gmagick.current.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Створення обрізаного зменшеного зображення

# Gmagick::cropthumbnailimage

(PECL gmagick \>u003d Unknown)

Gmagick::cropthumbnailimage — Створення обрізаного зменшеного
зображення

### Опис

public **Gmagick::cropthumbnailimage**(int `$width`, int `$height`):
[Gmagick](class.gmagick.md)

Створює зменшене зображення фіксованого розміру, спочатку застосовуючи
масштабування, а потім вирізуючи необхідну область із центру.

### Список параметрів

`width`
Ширина цільового зображення.

`height`
Висота цільового зображення.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md), що вийшов.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
