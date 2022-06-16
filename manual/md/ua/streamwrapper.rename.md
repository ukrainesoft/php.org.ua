- [« streamWrapper::mkdir](streamwrapper.mkdir.md)
- [streamWrapper::rmdir »](streamwrapper.rmdir.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Перейменовує файл або директорію

# streamWrapper::rename

(PHP 5, PHP 7, PHP 8)

streamWrapper::rename — Перейменовує файл або директорію

### Опис

public **streamWrapper::rename**(string `$path_from`, string
`$path_to`): bool

Цей метод викликається у процесі виконання
[rename()](function.rename.md).

Повинен спробувати перейменувати `path_from` на `path_to`

> **Примітка**:
>
> Щоб повідомлення про помилки відповідали реальним помилкам, цей
> метод *не потрібно* визначати у випадках, коли обгортка не підтримує
> Перейменування файлів.

### Список параметрів

`path_from`
URL-адреса поточного файлу.

`path_to`
URL, на який `path_from` повинен перейменований.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

### Примітки

> **Примітка**:
>
> Властивість `streamWrapper::$context` буде оновлена, якщо коректна
> контекст був переданий у функцію, що викликається.

### Дивіться також

- [rename()](function.rename.md) - Перейменовує файл або
директорію
