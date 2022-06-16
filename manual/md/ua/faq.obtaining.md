- [« Списки розсилки](faq.mailinglist.md)
- [Питання з баз даних »](faq.databases.md)

- [PHP Manual](index.md)
- [FAQ.md)
- Отримання PHP

# Отримання PHP

Цей розділ містить інформацію про те, де отримати PHP та питання,
що стосуються OC.

1. [Де я можу взяти PHP?](#faq.obtaining.where)
2. [Доступні прекомпільована бінарна
версія?](#faq.obtaining.precompiled)
3. [Де я можу дістати бібліотеки, необхідні для компіляції деяких
додаткових модулів PHP?](#faq.obtaining.optional)
4. [Як підключити ці бібліотеки?](#faq.obtaining.how)
5. [Я завантажив останню версію вихідних кодів PHP з Git-репозиторію на
мою машину Windows, як мені їх
скомпілювати?](#faq.obtaining.compilent)
6. [Де знайти файл сумісності браузерів?](#faq.obtaining.browscap)
7. [Що означає потокобезпека під час завантаження
PHP?](#faq.obtaining.threadsafety)

**Де я можу взяти PHP?**
Ви можете завантажити PHP з будь-якого сайту із мережі сайтів PHP. Сайти мережі
можна знайти на [»https://www.php.net/](https://www.php.net/). Ви також
можете скористатися анонімним Git для отримання останньої
версії вихідних джерел. За подробицями звертайтесь до
[»https://www.php.net/git.php](https://www.php.net/git.php).



** Чи доступні прекомпільована бінарна версія? **
Ми розповсюджуємо прекомпільовані бінарники тільки для Windows, так
як ми не в змозі компілювати PHP з усіма можливими комбінаціями
модулів, навіть найголовніших платформ Linux/Unix. Також зауважте,
що на сьогодні багато дистрибутивів Linux поставляються з PHP. Бінарники
для Windows можна завантажити з нашої сторінки
[» Downloads](https://www.php.net/downloads.php), для бінарників під
Linux, будь ласка, завітайте на сайт вашого дистрибутива.



**Де я можу отримати бібліотеки, необхідні для компіляції деяких додаткових модулів PHP?**
> **Примітка**: Зірочка (\*) позначені бібліотеки, які виходячи з
> нашого досвіду є потоково-небезпечними; ці бібліотеки не
> рекомендується використовувати у багатопотоковому середовищі.

- [»LDAP (Unix)](https://www.openldap.org/software/download/).
- [»LDAP (Unix/Win)](https://wiki.mozilla.org/LDAP_C_SDK) : Mozilla
Directory (LDAP) SDK
- [» безкоштовний LDAP
сервер](http://www.bind9.net/download-openldap/).
- [»Berkeley DB2 (Unix/Win)](http://www.sleepycat.com/) :
http://www.sleepycat.com/.
- [»SNMP* (Unix):](http://www.net-snmp.org/) .
- [»GD (Unix/Win)](http://www.libgd.org/).
- [»mSQL\* (Unix)](https://hughestech.com.au/products/msql/).
- [»PostgreSQL (Unix)](http://www.postgresql.org/).
- [»IMAP\* (Win/Unix)](https://github.com/uw-imap/imap).
- [» Sybase-CT\* (Linux, libc5)](http://www.sybase.com/) : Available
locally.
- [» FreeType (libttf):](http://www.freetype.org/).
- [»ZLib (Unix/Win32)](http://www.zlib.net/).
- [» expat XML parser
(Unix/Win32)](http://www.jclark.com/xml/expat.md).
- [»PDFLib](http://www.pdflib.com/products/pdflib-family/).
- [»mcrypt](http://mcrypt.sourceforge.net/).
- [»mhash](http://mhash.sourceforge.net/).
- [»t1lib](http://www.ibiblio.org/pub/Linux/libs/graphics/).
- [»dmalloc](http://dmalloc.com/).
- [»aspell](http://aspell.net/).
- [» readline](http://cnswww.cns.cwru.edu/~chet/readline/rltop.md).



**Як підключити ці бібліотеки?**
Вам необхідно дотримуватись інструкцій, що супроводжують бібліотеку. При
запуску скрипта 'configure', деякі бібліотеки (такі як бібліотека
GD) знаходяться автоматично, інші повинні бути включені за допомогою опції
''--with-EXTENSION'' у ''configure''. Запустіть ''configure --help'' для
отримання списку всіх опцій.



**Я завантажив останню версію вихідних кодів PHP з Git-репозиторію на мою машину Windows, як мені їх скомпілювати?**
Вивчіть розділ керівництва, що містить актуальне [»
керівництво по
складання](https://wiki.php.net/internals/windows/stepbystepbuild)



**Де знайти файл сумісності браузерів ?**
Файл `browscap.ini` можна завантажити з
[»http://browscap.org/](http://browscap.org/).



**Що означає потокобезпека під час завантаження PHP?**
Потокобезпека означає, що цей бінарний файл може працювати з
багатопотоковим веб-сервером, наприклад таким, як Apache 2 під Windows.
Потокобезпека забезпечується зберіганням локальних копій у кожному
потоці, так що дані не суперечать іншим потокам.

То що ж вибрати? Якщо ви хочете використовувати PHP як бінарний
файлу CGI, то вам не потрібна потокобезпека, оскільки бінарний файл
буде запускатись при кожному запиті. Для багатопотокових веб-серверів,
таких як IIS5 та IIS6, вам знадобиться поточна версія PHP.
