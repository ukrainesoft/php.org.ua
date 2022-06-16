- [«Зумовлені константи](gmagick.constants.md)
- [Gmagick »](class.gmagick.md)

- [PHP Manual](index.md)
- [Gmagick](book.gmagick.md)
- Приклади

# Приклади

Наступний код демонструє часто використовувані операції Gmagick над
зображення.

**Приклад #1 Приклади використання Gmagick**

` <?php// Створюємо новий об'єкт Gmagick$image u003d new Gmagick('example.jpg');// Створюємо зменшену копію зображення. 0 для збереження пропорцій. , 8, 8)->oilpaintimage(0.3);// Записуємо отримане зображення в файл$image->write('example_thumbnail.jpg');?> `
