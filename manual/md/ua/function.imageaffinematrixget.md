- [«imageaffinematrixconcat](function.imageaffinematrixconcat.md)
- [imagealphablending »](function.imagealphablending.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримує матрицю афінного перетворення

#imageaffinematrixget

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

imageaffinematrixget — Отримує матрицю афінного перетворення

### Опис

**imageaffinematrixget**(int `$type`, array\|float `$options`):
array\|false

Повертає матрицю афінного перетворення.

### Список параметрів

`type`
Одна із констант **`IMG_AFFINE_*`**.

`options`
Якщо `type` дорівнює **`IMG_AFFINE_TRANSLATE`** або **`IMG_AFFINE_SCALE`**,
`options` має бути масивом (array) з ключами `x` та `y`, обидва мають
значення типу float.

Якщо `type` дорівнює **`IMG_AFFINE_ROTATE`**,
**`IMG_AFFINE_SHEAR_HORIZONTAL`** або **`IMG_AFFINE_SHEAR_VERTICAL`**,
`options` має бути числом з плаваючою точкою (float), визначальним
кут.

### Значення, що повертаються

Матриця афінного перетворення (масив з ключами від `0` до `5` і
значеннями з плаваючою точкою) або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **imageaffinematrixget()****

` <?php$matrix u003d imageaffinematrixget(IMG_AFFINE_TRANSLATE, array('x' u003d> 2, 'y' u003d> 3));print_r($matrix);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> 1
[1] u003d> 0
[2] u003d> 0
[3] u003d> 1
[4] u003d> 2
[5] u003d> 3
)

### Дивіться також

- [imageaffine()](function.imageaffine.md) - Повернути зображення,
що містить афінно-перетворене зображення src, використовуючи
додаткову область обмеження
- [imageaffinematrixconcat()](function.imageaffinematrixconcat.md) -
Конкатенує дві афінні матриці перетворення
