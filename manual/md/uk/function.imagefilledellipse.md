- [«imagefilledarc](function.imagefilledarc.md)
- [imagefilledpolygon »](function.imagefilledpolygon.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання зафарбованого еліпса

#imagefilledellipse

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagefilledellipse - Малювання зафарбованого еліпса

### Опис

**imagefilledellipse**(
[GdImage](class.gdimage.md) `$image`,
int `$center_x`,
int `$center_y`,
int `$width`,
int `$height`,
int `$color`
): bool

Малює еліпс із центром у заданих координатах зображення `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`center_x`
x-координат центру.

`center_y`
y-координат центру.

`width`
Ширина еліпсу.

`height`
Висота еліпсу.

`col`
Колір заливки. Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagefilledellipse()****

` <?php// створення пустого зображення$image u003d imagecreatetruecolor(400, 300);// заливка фону$bg u003d imagecolorallocate($image, 0, 0, 0);// вибор image, 255, 255, 255); );?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagefilledellipse()](images/21009b70229598c6a80eef8b45bf282b-imagefilledellipse.png)

### Примітки

> **Примітка**:
>
> **imagefilledellipse()** ігнорує
> [imagesetthickness()](function.imagesetthickness.md).

### Дивіться також

- [imageellipse()](function.imageellipse.md) - Малювання еліпса
- [imagefilledarc()](function.imagefilledarc.md) - Малювання та
заливка дуги
