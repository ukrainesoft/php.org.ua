- [«$\_POST](reserved.variables.post.md)
- [$\_REQUEST »](reserved.variables.request.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Змінні файли, завантажені за HTTP

# $\_FILES

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

$\_FILES — Змінні файли, завантажені за HTTP

### Опис

Асоціативний масив (array) елементів, завантажених у поточний скрипт
через метод HTTP POST. Структура цього масиву описана у розділі
[Завантаження файлів методом POST](features.file-upload.post-method.md).

### Примітки

> **Примітка**:
>
> Це 'суперглобальна' або автоматична глобальна змінна. Це
> просто означає, що вона є у всіх контекстах скрипта. Ні
> необхідності виконувати **global $variable;** для доступу до неї всередині
> методу чи функції.

### Дивіться також

- [move_uploaded_file()](function.move-uploaded-file.md) -
Переміщує завантажений файл у нове місце
- [Завантаження файлів на сервер](features.file-upload.md)
