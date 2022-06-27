- [«Gmagick::swirlimage](gmagick.swirlimage.md)
- [Gmagick::trimimage »](gmagick.trimimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Змінює розмір зображення

# Gmagick::thumbnailimage

(PECL gmagick \>u003d Unknown)

Gmagick::thumbnailimage — Змінює розмір зображення

### Опис

public **Gmagick::thumbnailimage**(int `$width`, int `$height`, bool
`$fit` u003d **`false`**): [Gmagick](class.gmagick.md)

Змінює розмір зображення до заданих розмірів та видаляє всі пов'язані
профілі. Мета полягає у створенні невеликих мініатюрних зображень,
придатні для показу в Інтернеті. Якщо як третій параметр
задано значення **`true`**, то параметри стовпців та рядків використовуються в
якість максимумів для кожної сторони. Обидві сторони буде зменшено до
збігу або менше, ніж параметр, заданий для сторони.

### Список параметрів

`width`
Ширина зображення.

`height`
Висота зображення.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
