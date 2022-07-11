- [«
GmagickDraw::settextdecoration](gmagickdraw.settextdecoration.md)
- [GmagickPixel »](class.gmagickpixel.md)

- [PHP Manual](index.md)
- [GmagickDraw](class.gmagickdraw.md)
- Задає кодовий набір тексту

# GmagickDraw::settextencoding

(PECL gmagick \>u003d Unknown)

GmagickDraw::settextencoding — Задає кодовий набір тексту

### Опис

public **GmagickDraw::settextencoding**(string `$encoding`):
[GmagickDraw](class.gmagickdraw.md)

Задає кодовий набір, який використовуватиметься для текстових
анотацій. Єдине кодування символів, яке може бути вказане в
В даний час - це "UTF-8" для представлення Unicode як
послідовність байтів. Вкажіть порожній рядок, щоб встановити
кодування тексту за промовчанням у системі. Для успішного анотування
тексту з використанням Unicode можуть знадобитися шрифти,
підтримують Unicode.

### Список параметрів

`encoding`
Рядок символів, що визначає кодування тексту.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).
