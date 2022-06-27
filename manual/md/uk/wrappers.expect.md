- [«ogg://](wrappers.audio.md)
- [Безпека »](security.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- Потоки для взаємодії з процесами

# expect://

expect:// - Потоки для взаємодії з процесами

### Опис

Потоки, відкриті за допомогою обгортки `expect://`, надають доступ до
процесів stdio, stdout та stderr через PTY.

> **Примітка**: **Ця обгортка вимкнена за замовчуванням**
> Для того щоб використовувати обгортку `expect://`, необхідно
> встановити модуль [» Expect](https://pecl.php.net/package/expect),
> доступний у [»PECL](https://pecl.php.net/).

`expect://` (PECL)

### Використання

- `expect://command`

### Опції

| Атрибут Підтримка
|------------------------------------------------- ------------------------------------|-----------|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Ні |
| Читання | Так |
| Запис | Так |
| Додавання | Так |
| Одночасне читання та запис | Ні |
| Підтримка [stat()](function.stat.md) | Ні |
| Підтримка [unlink()](function.unlink.md) | Ні |
| Підтримка [rename()](function.rename.md) | Ні |
| Підтримка [mkdir()](function.mkdir.md) | Ні |
| Підтримка [rmdir()](function.rmdir.md) | Ні |

**Основна інформація**

### Приклади
