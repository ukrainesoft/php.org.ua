- [«imageconvolution](function.imageconvolution.md)
- [imagecopymerge»] (function.imagecopymerge.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Копіювання частини зображення

# imagecopy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecopy — Копіювання частини зображення

### Опис

**imagecopy**(
[GdImage](class.gdimage.md) `$dst_image`,
[GdImage](class.gdimage.md) `$src_image`,
int `$dst_x`,
int `$dst_y`,
int `$src_x`,
int `$src_y`,
int `$src_width`,
int `$src_height`
): bool

Копіює частину `src_image` в `dst_image`, починаючи з координат x, y
`src_x`, `src_y` з шириною `src_width` та висотою `src_h`. Скопійована
частина міститься на координати `dst_x` та `dst_y`.

### Список параметрів

`dst_image`
Ресурс цільового зображення.

`src_image`
Ресурс вихідного зображення.

`dst_x`
x-координата результуючого зображення.

`dst_y`
y-координата результуючого зображення.

`src_x`
x-координата вихідного зображення.

`src_y`
y-координата вихідного зображення.

`src_width`
Ширина вихідного зображення.

`src_height`
Висота вихідного зображення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------|
| 8.0.0 | `dst_image` і `src_image` тепер чекають на екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Обрізання логотипу PHP.net**

` <?php// Створення зображень$src u003d imagecreatefromgif('php.gif');$dest u003d imagecreatetruecolor(80, 40);// Копіюванняimagecopy($dest, $src, 0, 0, 0, 2 40);// Висновок і звільнення пам'яті header ('Content-Type: image/gif'); imagegif ($ dest); image destroy ($ dest); image destroy ($ src);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу: Обрізка логотипу
PHP.net](images/21009b70229598c6a80eef8b45bf282b-imagecopy.gif)

### Дивіться також

- [imagecrop()](function.imagecrop.md) - Обрізати зображення до
заданого прямокутника
