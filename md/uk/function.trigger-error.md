- [«set_exception_handler](function.set-exception-handler.md)
- [user_error »](function.user-error.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Викликає помилку користувача/попередження/повідомлення

#trigger_error

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

trigger_error — Викликає користувача
помилку/попередження/сповіщення

### Опис

**trigger_error**(string `$message`, int `$error_level` u003d
**`E_USER_NOTICE`**): bool

Використовується для виклику помилок користувача. Можна використовувати в
зв'язці з вбудованим обробником помилок, а також з користувальницьким
обробником, заданим функцією
[set_error_handler()](function.set-error-handler.md).

Ця функція може бути корисною, якщо потрібно згенерувати
певну реакцію виняток під час виконання.

### Список параметрів

`message`
Повідомлення, що відповідає цій помилці. Обмежено 1024 байтами у довжину.
Символи далі 1024 будуть обрізані.

`error_level`
Визначений тип помилки. Працює лише з сімейством констант E_USER. за
замовчуванням **`E_USER_NOTICE`**.

### Значення, що повертаються

Функція повертає **`false`**, якщо заданий неправильний `error_level`, та
**`true`** в інших випадках.

### Приклади

**Приклад #1 Приклад використання **trigger_error()****

Докладніший приклад наведено в описі функції
[set_error_handler()](function.set-error-handler.md).

` <?phpif ($divisor u003du003du003d0) {    trigger_error("Не можу поділити на нуль", E_USER_ERROR);}?> `

### Примітки

**Увага**

HTML-сутності в `message` не екрановані. Щоб повідомлення можна було
відобразити у браузері, перетворіть його функцією
[htmlentities()](function.mdentities.md).

### Дивіться також

- [error_reporting()](function.error-reporting.md) - Задає, які
помилки PHP потраплять у звіт
- [set_error_handler()](function.set-error-handler.md) - Задає
користувальницький обробник помилок
- [restore_error_handler()](function.restore-error-handler.md) -
Відновлює попередній обробник помилок
- [Константи рівнів помилок](errorfunc.constants.md)
