- [« Imagick::setFirstIterator](imagick.setfirstiterator.md)
- [Imagick::setFormat »](imagick.setformat.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює шрифт

# Imagick::setFont

(PECL imagick 2 \>u003d 2.1.0, PECL imagick 3)

Imagick::setFont — Встановлює шрифт

### Опис

public **Imagick::setFont**(string `$font`): bool

Встановлює об'єкт властивість шрифт. Метод можна використати,
наприклад, для встановлення шрифту caption: формат псевдозображень.
Шрифт має бути настроєний у конфігурації ImageMagick або повинен
існувати файл з ім'ям `font`. Метод не слід плутати з методом
[ImagickDraw::setFont()](imagickdraw.setfont.md), який
встановлює шрифт певного об'єкта ImagickDraw. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.7 або
старше.

### Список параметрів

`font`
Ім'я шрифту чи файлу.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setFont()****

Приклад використання Imagick::setFont

` <?php/* Створення нового об'єкту Imagick */$im u003d new Imagick();/* Установка шрифту для об'єкту */$im->setFont("example.ttf");/* Створення ->newPseudoImage(100, 100, "caption:Hello");/* Робота з зображенням */?> `

### Дивіться також

- [Imagick::getFont()](imagick.getfont.md) - Повертає назву
шрифту
- [ImagickDraw::setFont()](imagickdraw.setfont.md) - Встановлює
вказаний шрифт для використання при анотуванні текстом
- [ImagickDraw::getFont()](imagickdraw.getfont.md) - Повертає
шрифт
