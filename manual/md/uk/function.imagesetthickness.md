- [«imagesetstyle](function.imagesetstyle.md)
- [imagesettile »](function.imagesettile.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Встановлення товщини ліній

# imagesetthickness

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetthickness — Встановлення товщини ліній

### Опис

**imagesetthickness**([GdImage](class.gdimage.md) `$image`, int
`$thickness`): bool

**imagesetthickness()** визначає значення товщини ліній для малювання
відрізків, прямокутників, багатокутників, еліпсів тощо. в
`thickness` пікселів.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`thickness`
Товщина пікселів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesetthickness()****

` <?php// Створення зображення 200x100$im u003d imagecreatetruecolor(200, 100);$white u003d imagecolorallocate($im, 0xFF, 0xFF, 0xFF);$black, 0 0 0 / Установка білого фонуimagefilledrectangle($im, 0, 0, 299, 99, $white);// Установка товщини ліній 5 пікселівimagesetthickness($im, 5);// 5, $black);//Виведення зображення в броузерheader('Content-Type: image/png');imagepng($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagesetthickness()](images/21009b70229598c6a80eef8b45bf282b-imagesetthickness.png)
