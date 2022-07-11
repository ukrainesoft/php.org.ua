- [«imagecharup](function.imagecharup.md)
- [imagecolorallocatealpha »](function.imagecolorallocatealpha.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створення кольору для зображення

#imagecolorallocate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorallocate — Створення кольору зображення

### Опис

**imagecolorallocate**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`
): int\|false

Повертає ідентифікатор кольору відповідно до заданих RGB
компонентами.

**imagecolorallocate()** має викликатися для створення кожного кольору,
який буде використовуватись у зображенні `image`.

> **Примітка**:
>
> Перший виклик **imagecolorallocate()** задає колір фону в палітрових
> зображення - зображення, створені функцією
> [imagecreate()](function.imagecreate.md).

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`red`
Значення червоного компонента кольору.

`green`
Значення зеленого компонента кольору.

`blue`
Значення синього компонента кольору.

Ці аргументи можуть набувати або ціле значення в діапазоні від
0 до 255, або шістнадцяткові в діапазоні від 0x00 до 0xFF.

### Значення, що повертаються

Ідентифікатор кольору, або **`false`** у разі виникнення помилки.

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

**Приклад #1 Приклад використання **imagecolorallocate()****

` <?php$im u003d imagecreate(100, 100);// робимо фон червоним$background u003d imagecolorallocate($im, 255, 0, 0);// створимо кілька квітів$wh$5 5 , 255);$black u003d imagecolorallocate($im, 0, 0, 0);// шістнадцятковий способ$white u003d imagecolorallocate($im, 0xFF, 0xFF, 0xFF);$black u003d 0 0x00);?> `

### Дивіться також

- [imagecolorallocatealpha()](function.imagecolorallocatealpha.md) -
Створення кольору для зображення
- [imagecolordeallocate()](function.imagecolordeallocate.md) -
Розрив асоціації змінної із кольором для заданого зображення
