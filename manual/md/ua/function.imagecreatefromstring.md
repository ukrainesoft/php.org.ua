- [«imagecreatefrompng](function.imagecreatefrompng.md)
- [imagecreatefromtga »] (function.imagecreatefromtga.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створення нового зображення з потоку, представленого рядком

#imagecreatefromstring

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

imagecreatefromstring — Створення нового зображення з потоку
представленого рядком

### Опис

**imagecreatefromstring**(string `$data`):
[GdImage](class.gdimage.md)\|false

**imagecreatefromstring()** повертає ідентифікатор зображення,
представляє зображення, отримане з потоку `data`. Ці типи будуть
автоматично визначатися, якщо збирання PHP їх підтримує: JPEG, PNG,
GIF, BMP, WBMP, GD2 та WEBP.

### Список параметрів

`data`
Рядок містить дані зображення.

### Значення, що повертаються

У разі успішного виконання буде повернено об'єкт ресурсу,
**`false`**, якщо тип зображення не підтримується, дані не
розпізнаються або дані порушені та не можуть бути завантажені.

### Помилки

**imagecreatefromstring()** викликає помилку рівня E_WARNING, якщо
дані у форматі, що не підтримується.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс (resource). |
| 7.3.0 | Додана підтримка WEBP (якщо підтримується використовуваною libgd). |

### Приклади

**Приклад #1 Приклад використання **imagecreatefromstring()****

` <?php$datau003du003d'iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAMAAAB/2U7WAAAABl'       . 'BMVEUAAAD///+l2Z/dAAAASUlEQVR4XqWQUQoAIAxC2/0vXZDr'       . 'EX4IJTRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r'       . '8a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5ErkJgggu003du003d';$data u003d base64_decode($data);$im u003d imagecreatefromstring($data);if ($im !u003d imagepng($im); imagedestroy($im);}else {    echo 'Відбулася помилка.';}?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagecreatefromstring()](images/21009b70229598c6a80eef8b45bf282b-imagecreatefromstring.png)

### Дивіться також

- [imagecreatefromjpeg()](function.imagecreatefromjpeg.md) - Створює
нове зображення з файлу або URL
- [imagecreatefrompng()](function.imagecreatefrompng.md) - Створює
нове зображення з файлу або URL
- [imagecreatefromgif()](function.imagecreatefromgif.md) - Створює
нове зображення з файлу або URL
- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
