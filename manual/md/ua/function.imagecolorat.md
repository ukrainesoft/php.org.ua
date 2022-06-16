- [«imagecolorallocatealpha](function.imagecolorallocatealpha.md)
- [imagecolorclosest »](function.imagecolorclosest.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання індексу кольору пікселя

#imagecolorat

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorat — Отримання індексу кольору пікселя

### Опис

**imagecolorat**([GdImage](class.gdimage.md) `$image`, int `$x`, int
`$y`): int\|false

Повертає індекс кольору пікселя на заданих координатах на зображенні
`image`.

Якщо передається truecolor-зображення, функція повертає ціле чисельне
значення RGB для пікселя. Для виділення окремих компонентів червоного,
зеленого або синього каналів використовуйте бітовий зсув та маскування:

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x`
x-координату пікселя.

`y`
y-координата піксела.

### Значення, що повертаються

Повертає індекс кольору або **false** у разі виникнення помилки.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Доступ до компонентів RGB кольору**

` <?php$im u003d imagecreatefrompng("php.png");$rgb u003d imagecolorat($im, 10, 15);$r u003d ($rgb >> 16) & 0xFF;$g u003d ($rgb 8) & 0xFF;$b u003d $rgb & 0xFF;var_dump($r, $g, $b);?> `

Результатом виконання цього прикладу буде щось подібне:

int(119)
int(123)
int(180)

**Приклад #2 Додані RGB значення з використанням
[imagecolorsforindex()](function.imagecolorsforindex.md)**

` <?php$im u003d imagecreatefrompng("php.png");$rgb u003d imagecolorat($im, 10, 15);$colors u003d imagecolorsforindex($im, $rgb);var_dump($colors);?> `

Результатом виконання цього прикладу буде щось подібне:

array(4) {
["red"]u003d>
int(119)
["green"]u003d>
int(123)
["blue"]u003d>
int(180)
["alpha"]u003d>
int(127)
}

### Дивіться також

- [imagecolorset()](function.imagecolorset.md) - Встановлення набору
кольорів для заданого індексу палітри
- [imagecolorsforindex()](function.imagecolorsforindex.md) -
Отримання кольорів, що відповідають індексу
- [imagesetpixel()](function.imagesetpixel.md) - Малювання точки
