- [« dngettext](function.dngettext.md)
- [ngettext»] (function.ngettext.md)

- [PHP Manual](index.md)
- [Функції gettext](ref.gettext.md)
- Шукає повідомлення у поточному домені

# gettext

(PHP 4, PHP 5, PHP 7, PHP 8)

gettext — Шукає повідомлення у поточному домені

### Опис

**gettext**(string `$message`): string

Шукає повідомлення у поточному домені.

### Список параметрів

`message`
Повідомлення, що перекладається.

### Значення, що повертаються

Повертає переведений рядок (string), якщо він знайдений у таблиці
перекладу, інакше – передане повідомлення.

### Приклади

**Приклад #1 **gettext()**-check**

` <?php// Встановлюємо російську мовуputenv('LC_ALLu003dru_RU');setlocale(LC_ALL, 'ru_RU');// Вказуємо шлях к таблицям перекладівbindtextdomain("myPHPApp", "; ". ". "myPHPApp");// Тепер пошук перекладів буде йти в ./locale/ua_RU/LC_MESSAGES/myPHPApp.mo// Виводимо тестове повідомленняecho gettext("Welcome to M  _("Have a nice day");?> `

### Примітки

> **Примітка**:
>
> Можна використовувати символ підкреслення '\_' як псевдонім.
> цієї функції.

> **Примітка**:
>
> На деяких системах може бути недостатньо вказівки мови, таких
> Використовуйте [putenv()](function.putenv.md) для вказівки
> поточної локалі.

### Дивіться також

- [setlocale()](function.setlocale.md) - Встановлює налаштування
локалі
