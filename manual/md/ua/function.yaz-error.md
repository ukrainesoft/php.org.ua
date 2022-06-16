- [« yaz_errno](function.yaz-errno.md)
- [yaz_es_result »](function.yaz-es-result.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Повертає опис помилки

# yaz_error

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_error — Повертає опис помилки

### Опис

**yaz_error**(resource `$id`): string

**yaz_error()** повертає текстове повідомлення англійською мовою,
відповідне останньому номеру помилки, поверненому
[yaz_errno()](function.yaz-errno.md).

### Список параметрів

`id`
Ресурс підключення, що повертається
[yaz_connect()](function.yaz-connect.md).

### Значення, що повертаються

Повертає текстове повідомлення про помилку для сервера (останній запит),
з ідентифікатором `id`. Якщо остання операція пройшла успішно,
повертається порожній рядок.

### Дивіться також

- [yaz_errno()](function.yaz-errno.md) - Повертає номер помилки
- [yaz_addinfo()](function.yaz-addinfo.md) - Повертає
додаткову інформацію у разі виникнення помилки
