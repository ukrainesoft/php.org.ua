- [« streamWrapper::dir_readdir](streamwrapper.dir-readdir.md)
- [streamWrapper::mkdir »](streamwrapper.mkdir.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Дескриптор директорії переміщення на її початку

# streamWrapper::dir_rewinddir

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_rewinddir - Дескриптор директорії переміщення на її в
початок

### Опис

public **streamWrapper::dir_rewinddir**(): bool

Цей метод викликається у процесі виконання
[rewinddir()](function.rewinddir.md).

Повинен скидати поточний висновок, що генерується методом
[streamWrapper::dir_readdir()](streamwrapper.dir-readdir.md). Тобто. при
наступний виклик метод
[streamWrapper::dir_readdir()](streamwrapper.dir-readdir.md) повинен
повертати перший запис у директорії, визначеній методом
[streamWrapper::dir_opendir()](streamwrapper.dir-opendir.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [rewinddir()](function.rewinddir.md) - Скинути дескриптор
каталогу
- [streamWrapper::dir_readdir()](streamwrapper.dir-readdir.md) -
Читання запису з дескриптора директорії
