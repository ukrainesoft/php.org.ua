- [« Установка](mail.installation.md)
- [Типи ресурсів»] (mail.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mail.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------------------|---------- ------------------|------------------------------- -|------------------|
| [mail.add_x\_header](mail.configuration.md#ini.mail.add-x-header) | "0" | PHP_INI_PERDIR | |
| [mail.log](mail.configuration.md#ini.mail.log) | NULL | PHP_INI_SYSTEM\|PHP_INI_PERDIR | |
| [mail.force_extra_parameters](mail.configuration.md#ini.mail.force_extra_parameters) | NULL | PHP_INI_SYSTEM\|PHP_INI_PERDIR | |
| [SMTP](mail.configuration.md#ini.smtp) | "localhost" | PHP_INI_ALL | |
| [smtp_port](mail.configuration.md#ini.smtp-port) | "25" | PHP_INI_ALL | |
| [sendmail_from](mail.configuration.md#ini.sendmail-from) | NULL | PHP_INI_ALL | |
| [sendmail_path](mail.configuration.md#ini.sendmail-path) | "/usr/sbin/sendmail-t-i" | PHP_INI_SYSTEM | |

**Конфігураційні опції надсилання листів**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`mail.add_x_header` bool
Додає заголовок `X-PHP-Originating-Script`, який міститиме
UID скрипта та ім'я файлу.

`mail.log` string
Шлях до лог-файлу, в який будуть записуватись всі виклики функції
[mail()](function.mail.md). Записи в лозі містять повний шлях до
скрипта, номер рядка, адреса одержувача `To` та заголовки.

`mail.force_extra_parameters` string
Примусово додати зазначені параметри для надсилання до sendmail. Ці
параметри завжди замінюють значення п'ятого параметра
[mail()](function.mail.md), навіть у безпечному режимі.

`SMTP` string
Використовується тільки в Windows: домен або IP-адреса SMTP-сервера
якому буде звертатися PHP під час надсилання пошти функцією
[mail()](function.mail.md).

`smtp_port` int
Використовується тільки в Windows: порт SMTP-сервера, до якого буде
звертатися до PHP при надсиланні пошти функцією [mail()](function.mail.md);
за замовчуванням 25.

`sendmail_from` string
Адреса, яка буде використовуватися в заголовку ``From:'` у листах,
що надсилаються безпосередньо через SMTP (лише для Windows). Ця директива
також встановлює заголовок `Return-Path:`.

`sendmail_path` string
Шлях до програми **sendmail**, зазвичай `/usr/sbin/sendmail` або
`/usr/lib/sendmail`. **configure** намагається знайти sendmail автоматично
і встановити значення за замовчуванням самостійно, але якщо це не
вдалося, ви можете встановити шлях тут.

Системи, що не використовують **sendmail**, повинні встановити цю директиву в
шлях до обгортки/замінника sendmail. Наприклад, користувачі
[» Qmail](http://cr.yp.to/qmail.md) зазвичай встановлюють значення
`/var/qmail/bin/sendmail` або ` /var/qmail/bin/qmail-inject`.

**qmail-inject** не вимагає додаткових опцій для надсилання листів.

Ця директива також працює у Windows. Якщо вона встановлена, `smtp`,
`smtp_port` та `sendmail_from` будуть проігноровані та виконається
зазначена програма.
