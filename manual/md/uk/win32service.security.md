- [« Типи ресурсів](win32service.resources.md)
- [Предвизначені константи »](win32service.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](win32service.setup.md)
- Питання безпеки

## Питання безпеки

Цьому модулю необхідні права адміністратора для здійснення таких
дій як: [create](function.win32-create-service.md),
[delete](function.win32-delete-service.md),
[start](function.win32-start-service.md),
[stop](function.win32-stop-service.md),
[pause](function.win32-pause-service.md) та
[continue](function.win32-continue-service.md). Ця вимога може
викликати підвищення привілеїв, якщо управління службами доступне через
веб-інтерфейс або дистанційне керування.

Ви можете встановити ACL для сервісу після його додавання до SCM для
делегування адміністративних завдань не адміністраторського облікового запису,
або акаунту сервісу. Докладніше читайте в [» Microsoft Knowledge
Base](https://support.microsoft.com/en-us/help/914392/best-practices-and-guidance-for-writers-of-service-discretionary-acces).
