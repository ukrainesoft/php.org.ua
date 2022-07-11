- [«Пререквізити](wincache.win32build.prereq.md)
- [Перевірка складання »](wincache.win32build.verify.md)

- [PHP Manual](index.md)
- [Складання для Windows](wincache.win32build.md)
- Компіляція та складання

## Компіляція та складання

Наступні кроки описують, як компілювати та збирати WinCache під
Windows OS:

1. Відкрийте консоль командного рядка

2. Перейдіть до папки з вихідними кодами PHP

3. Виконайте команду:

`` cmdcode
cscript.exe win32 uild uildconf.js
````

4. Виконайте команду:

`` cmdcode
configure.bat --help
````

Висновок буде містити новий прапор `--enable-wincache`.

5. Виконайте команду:

`` cmdcode
configure.js [всі опції для складання PHP] --enable-wincache
````

`--enable-wincache` це єдина додаткова опція, яка
потрібно для правильного складання модуля WinCache. Ця опція збере
WinCache і буде статично пов'язувати його з PHP DLL. Щоб створити
модуль WinCache як автономна бібліотека DLL, використовуйте
параметр `--enable-wincacheu003dshared`.

6. Виконайте команду:

`` cmdcode
nmake
````
