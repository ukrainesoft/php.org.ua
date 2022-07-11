- [«imagecreatefromgd](function.imagecreatefromgd.md)
- [imagecreatefromjpeg »](function.imagecreatefromjpeg.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створює нове зображення із файлу або URL

#imagecreatefromgif

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecreatefromgif — Створення нового зображення з файлу або URL

### Опис

**imagecreatefromgif**(string `$filename`):
[GdImage](class.gdimage.md)\|false

**imagecreatefromgif()** повертає об'єкт зображення, що представляє
зображення, отримане з файлу із заданим ім'ям.

**Застереження**

При читанні анімованих файлів GIF на згадку, повертається покажчик на
ресурс зображення лише для першого кадру. Розмір зображення не
обов'язково буде відповідає тому, що поверне функція
[getimagesize()](function.getimagesize.md).

**Підказка**

Для цієї функції ви можете використовувати URL як ім'я файлу, якщо
була включена опція [fopen
wrappers](filesystem.configuration.md#ini.allow-url-fopen). Дивіться
докладнішу інформацію про визначення імені файлу в описі функції
[fopen()](function.fopen.md). Дивіться також список підтримуваних
оберток URL, їх можливості, зауваження щодо використання та список
визначених констант у розділі [Підтримувані протоколи та
обертки](wrappers.md).

### Список параметрів

`filename`
Шлях до GIF картинки.

### Значення, що повертаються

Повертає об'єкт зображення у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс (resource). |

### Приклади

**Приклад #1 Приклад обробки помилки під час завантаження GIF**

`<?phpfunction LoadGif($imgname){    /* Намагаємося відкрити */    $im u003d @imagecreatefromgif($imgname); /* Якщо не удалося */    if(!$im)    {        /* Створюємо пусте зображення */         $im               ¦ $bgc u003d imagecolorallocate ($im, 255, 255, 255); $tc u003d imagecolorallocate ($im, 0, 0, 0); imagefilledrectangle ($im, 0, 0, 150, 30, $bgc); /* Виводимо повідомлення про помилки */        imagestring ($im, 1, 5, 5, 'Помилка завантаження ' . $imgname, $tc); }   return $im;}header('Content-Type: image/gif');$img u003d LoadGif('bogus.image');imagegif($img);imagedestroy($img);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок приклад: Приклад обробки помилки під час завантаження
GIF](images/21009b70229598c6a80eef8b45bf282b-imagecreatefromgif.gif)
