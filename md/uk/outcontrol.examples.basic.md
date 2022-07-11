- [« Приклади](outcontrol.examples.md)
- [Використання перезапису виводу
»](outcontrol.examples.rewrite.md)

- [PHP Manual](index.md)
- [Приклади](outcontrol.examples.md)
- Базове використання

## Базове використання

**Приклад #1 Приклад контролю виведення**

` <?phpob_start();echo "Привіт
";setcookie("cookiename", "cookiedata");ob_end_flush();?> `

У наведеному вище прикладі висновок із [echo](function.echo.md) буде
зберігатися у буфері виводу до виклику
[ob_end_flush()](function.ob-end-flush.md). Водночас виклик
[setcookie()](function.setcookie.md) успішно збережеться у cookie
браузера, не викликаючи помилки (заголовки не можуть бути надіслані в
браузер після того, як дані вже були надіслані).
