- [« streamWrapper::stream_cast](streamwrapper.stream-cast.md)
- [streamWrapper::stream_eof »](streamwrapper.stream-eof.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Закриває ресурс

# streamWrapper::stream_close

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_close — Закриває ресурс

### Опис

public **streamWrapper::stream_close**(): void

Цей метод викликається у процесі виконання
[fclose()](function.fclose.md).

Усі ресурси, виділені або заблоковані обгорткою, мають бути
звільнено.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [fclose()](function.fclose.md) - Закриває відкритий дескриптор
файлу
- [streamWrapper::dir_closedir()](streamwrapper.dir-closedir.md) -
Закрити дескриптор директорії
