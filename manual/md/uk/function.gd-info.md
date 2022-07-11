- [« Функції GD та функції для роботи із зображеннями](ref.image.md)
- [getimagesize »](function.getimagesize.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Виведення інформації про поточну встановлену GD бібліотеку

#gd_info

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

gd_info — Виведення інформації про поточну встановлену GD бібліотеку

### Опис

**gd_info**(): array

Отримує інформацію про версію та можливості встановленої GD бібліотеки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив.

| Атрибут Змістове значення |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| GD Version | Рядок (string), що містить версію `libgd`. |
| FreeType Support | bool значення. **`true`**, якщо компонент FreeType Support встановлено. |
| FreeType Linkage | Рядок (string), що містить опис, яким чином підключений компонент FreeType. Очікувані значення: 'with freetype', 'with TTF library', 'with unknown library'. Цей елемент буде визначений тільки якщо `FreeType Support` має значення **`true`**. |
| GIF Read Support | bool значення. **`true`**, якщо включена підтримка читання (*reading*) `GIF` зображень. |
| GIF Create Support | bool значення. **`true`**, якщо включена підтримка запису (*creating*) `GIF` зображень. |
| JPEG Support | bool значення. **`true`**, якщо включена підтримка `JPEG`. |
| PNG Support | bool значення. **`true`**, якщо включена підтримка `PNG`. |
| WBMP Support | bool значення. **`true`**, якщо включена підтримка `WBMP`. |
| XBM Support | bool значення. **`true`**, якщо включена підтримка `XBM`. |
| WebP Support | bool значення. **`true`**, якщо включена підтримка `WebP`. |
| AVIF Support | bool значення. **`true`**, якщо включена підтримка `AVIF`. Доступно з PHP 8.1.0. |

**Елементи масиву, що повертається з **gd_info()****

### Приклади

**Приклад #1 Приклад використання **gd_info()****

` <?phpvar_dump(gd_info());?> `

Результатом виконання цього прикладу буде щось подібне:

array(10) {
["GD Version"]u003d>
string(24) "bundled (2.1.0 compatible)"
["FreeType Support"]u003d>
bool(false)
["GIF Read Support"]u003d>
bool(true)
["GIF Create Support"]u003d>
bool(false)
["JPEG Support"]u003d>
bool(false)
["PNG Support"]u003d>
bool(true)
["WBMP Support"]u003d>
bool(true)
["XBM Support"]u003d>
bool(false)
["WebP Support"]u003d>
bool(false)
["AVIF Support"]u003d>
bool(false)
}

### Дивіться також

- [imagepng()](function.imagepng.md) - Виведення PNG зображення в
браузер або файл
- [imagejpeg()](function.imagejpeg.md) - Виводить зображення на
браузер або пише у файл
- [imagegif()](function.imagegif.md) - Виводить зображення до браузера
або пише у файл
- [imagewbmp()](function.imagewbmp.md) - Виводить зображення на
браузер або пише у файл
- [imagewebp()](function.imagewebp.md) - Виведення зображення WebP в
браузер або файл
- [imageavif()](function.imageavif.md) - Виводить зображення на
браузер або пише у файл
- [imagetypes()](function.imagetypes.md) - Повертає список типів
зображень, підтримуваних PHP збиранням
