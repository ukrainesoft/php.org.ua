- [« streamWrapper::stream_open](streamwrapper.stream-open.md)
- [streamWrapper::stream_seek »](streamwrapper.stream-seek.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Читає із потоку

# streamWrapper::stream_read

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_read — Читає із потоку

### Опис

public **streamWrapper::stream_read**(int `$count`): string\|false

Цей метод викликається у процесі виконання функцій
[fread()](function.fread.md) та [fgets()](function.fgets.md).

> **Примітка**:
>
> Не забувайте оновлювати позицію читання/запису в потоці (на кількість
> успішно прочитаних байт).

### Список параметрів

`count`
Скільки байт даних від поточної позиції має бути повернено.

### Значення, що повертаються

Якщо в потоці кількість доступних байт менша, ніж `count`, має бути
повернуто стільки даних, скільки доступно. Якщо доступні дані
більше ні, функція повертає **`false`**.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

> **Примітка**:
>
> Якщо значення, що повертається, буде більше, ніж `count`, то буде викликано
> помилка **`E_WARNING`**, і дані більш вказаної кількості будуть
> Втрачені.

### Примітки

> **Примітка**:
>
> [streamWrapper::stream_eof()](streamwrapper.stream-eof.md)
> викликається одразу після виклику **streamWrapper::stream_read()**, щоб
> перевірити, чи кінець файлу EOF досягнуто. Якщо метод не реалізовано, то
> вважається, що кінець файлу EOF досягнуто.

**Увага**

При читанні файлу повністю (наприклад, функцією
[file_get_contents()](function.file-get-contents.md)), PHP буде
викликати **streamWrapper::stream_read()** і разом із ним
[streamWrapper::stream_eof()](streamwrapper.stream-eof.md) у циклі,
поки **streamWrapper::stream_read()** повертає непустий рядок.
Повертається з
[streamWrapper::stream_eof()](streamwrapper.stream-eof.md) значення
у своїй ігнорується.

### Дивіться також

- [fread()](function.fread.md) - Бінарно-безпечне читання файлу
- [fgets()](function.fgets.md) - Читає рядок із файлу
