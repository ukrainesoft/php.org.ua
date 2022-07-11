- [«
ImagickDraw::setTextDecoration](imagickdraw.settextdecoration.md)
- [ImagickDraw::setTextInterlineSpacing
»](imagickdraw.settextinterlinespacing.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Задає кодовий набір тексту

# ImagickDraw::setTextEncoding

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextEncoding — Задає кодовий набір тексту

### Опис

public **ImagickDraw::setTextEncoding**(string `$encoding`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Задає кодовий набір, який використовуватиметься для текстових
анотацій. Єдине кодування символів, яке може бути вказане в
В даний час - це "UTF-8" для представлення Unicode як
послідовність байтів. Вкажіть порожній рядок, щоб встановити
кодування тексту за промовчанням у системі. Для успішного анотування
тексту з використанням Unicode можуть знадобитися шрифти,
підтримують Unicode.

### Список параметрів

`encoding`
Ім'я кодування.

### Значення, що повертаються

Функція не повертає значення після виконання.
