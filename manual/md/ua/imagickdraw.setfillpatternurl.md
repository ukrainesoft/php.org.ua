- [« ImagickDraw::setFillOpacity](imagickdraw.setfillopacity.md)
- [ImagickDraw::setFillRule »](imagickdraw.setfillrule.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює URL-адресу для використання як зразок заливки
для заливання об'єктів

# ImagickDraw::setFillPatternURL

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillPatternURL — Встановлює URL-адресу
використання як зразка заливки для заливки об'єктів

### Опис

public **ImagickDraw::setFillPatternURL**(string `$fill_url`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює URL-адресу для використання як зразок заливки для
об'єктів. В даний час підтримуються лише локальні URL-адреси
("#identifier"). Ці локальні URL-адреси зазвичай створюються шляхом
визначення іменованого зразка заливки за допомогою
DrawPushPattern/DrawPopPattern.

### Список параметрів

`fill_url`
URL-адреса, яка використовується для отримання зразка заливки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
