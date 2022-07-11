- [« Складання з вихідних кодів](install.windows.building.md)
- [Apache 2.x Microsoft Windows »](install.windows.apache2.md)

- [PHP Manual](index.md)
- [Установка Windows](install.windows.md)
- Командний рядок PHP у Microsoft Windows

## Командний рядок PHP у Microsoft Windows

Цей розділ містить примітки та підказки щодо запуску PHP
з командного рядка для Windows.

> **Примітка**:
>
> Спочатку слід прочитати [кроки ручний
> установки](install.windows.manual.md)!

Запуск PHP з командного рядка можна виконати без внесення будь-яких
змін у Windows.

C:\php\php.exe -f "C:\PHP Scripts\script.php" -- -arg1 -arg2 -arg3

Але є кілька кроків, які допоможуть спростити цей процес.
Деякі з цих кроків вже повинні були бути, але вони
повторюються тут, щоб мати можливість надати повну покрокову
послідовність.

- Додайте розташування файлу PHP (`php.exe`,
`php-win.exe` або `php-cli.exe` залежно від вашої версії PHP та
переваг відображення) в змінну оточення `PATH`. Докладніше про
тому, як додати каталог PHP в `PATH`, читайте в [відповідній
записи часто задаваних
вопросов](faq.installation.md#faq.installation.addtopath).

- Додайте розширення `.PHP` до змінного оточення `PATHEXT`. Це
можна зробити одночасно із зміною змінної оточення `PATH`.
Виконайте ті ж дії, що і в
[FAQ](faq.installation.md#faq.installation.addtopath), але
змініть змінну оточення `PATHEXT`, а не `PATH`.

> **Примітка**:
>
> Позиція, в яку ви поміщаєте `.PHP`, визначатиме, якою
> скрипт або програма буде виконуватись при збігу імен файлів.
> Наприклад, розміщення `.PHP` перед `.BAT` призведе до запуску вашого
> скрипта, а не пакетного файлу, якщо існує пакетний файл з тим
> А ім'ям.

- Зв'яжіть розширення `.PHP` з типом файлу. Це робиться за допомогою
наступної команди:

assoc .phpu003dphpfile

- Зв'яжіть тип файлу `phpfile` з відповідним виконуваним файлом
PHP. Це робиться за допомогою наступної команди:

ftype phpfileu003d"C:\php\php.exe" -f "%1" -- %~2

Виконання цих кроків дозволить запускати скрипти PHP з будь-якого каталогу
без необхідності вводити виконуваний файл PHP або розширення `.PHP`, та
всі параметри будуть передані скрипту для обробки.

У наведеному нижче прикладі описані подробиці про деякі зміни
реєстр, який можна зробити вручну.

**Приклад #1 Зміни у реєстрі**

Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.php]
@u003d"phpfile"
"Content Type"u003d"application/php"

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\phpfile]
@u003d"PHP Script"
"EditFlags"u003ddword:00000000
"BrowserFlags"u003ddword:00000008
"AlwaysShowExt"u003d""

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\phpfile\DefaultIcon]
@u003d"C:\php\php-win.exe,0"

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\phpfile\shell]
@u003d"Open"

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\phpfile\shell\Open]
@u003d"&Open"

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\phpfile\shell\Ope
@u003d"\"C:\php\php.exe\" -f "%1" -- %~2"

З цими змінами цю ж команду можна записати як:

"C:\PHP Scripts\script" -arg1 -arg2 -arg3

або, якщо ваш шлях ``C:\PHP Scripts'` знаходиться в змінному оточенні
`PATH`:

script -arg1 -arg2 -arg3

> **Примітка**:
>
> Є невелика проблема, якщо ви збираєтеся використати цю техніку
> і використовувати свої скрипти PHP як фільтр командного рядка,
> як у прикладі нижче:
>
> dir | "C:\PHP Scripts\script" -arg1 -arg2 -arg3
>
> або
>
> dir | script -arg1 -arg2 -arg3
>
> Ви можете виявити, що сценарій просто зависає і нічого не
> Виводиться. Щоб це запрацювало, необхідно внести ще одну зміну
> у реєстр.
>
> Windows Registry Editor Version 5.00
>
> [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\policies\Explorer]
> "InheritConsoleHandles"u003ddword:00000001
>
> Додаткову інформацію щодо цієї проблеми можна знайти в цій [»
> статті бази знань Microsoft:
> 321788](http://support.microsoft.com/default.aspx?scidu003dkb;en-us;321788).
> У Windows 10 цей параметр змінено на протилежний і стандартний
> інсталяція Windows 10 підтримує успадковані дескриптори консолі.
> Це [»  повідомлення на форумі
> Microsoft](https://social.msdn.microsoft.com/Forums/en-US/f19d740d-21c8-4dc2-a9ab-d5c0527e932b/nasty-file-association-regression-bug-in-windows-10-console? forum u003d windowssdk)
> надає пояснення.
