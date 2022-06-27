- [« Установка](faq.installation.md)
- [Використання PHP »](faq.using.md)

- [PHP Manual](index.md)
- [FAQ.md)
- Проблеми складання

# Проблеми складання

У цьому розділі зібрані найзагальніші помилки, що виникають на етапі
збирання.

1. [Я отримав останню версію PHP, використовуючи анонімний доступ до Git,
але в ньому немає конфігураційного скрипта!] (#faq.build.configure)
2. [У мене виникають проблеми при конфігуруванні PHP для роботи з
Apache. Він каже, що не може знайти httpd.h, хоча файл знаходиться
точно там, де я сказав!] (#faq.build.configuring)
3. [Під час конфігурації PHP (./configure) ви натрапляєте на
помилку, подібну до наступної: checking lex output file root...
./configure: lex: command not found configure: error: cannot find
output from lex; giving up](#faq.build.lex)
4. [Коли я намагаюся запустити Apache, я отримую наступне повідомлення:
fatal: relocation error: файл /path/to/libphp4.so: symbol
ap_block_alarms: referenced symbol not
found](#faq.build.apache-sharedcore)
5. [Коли я запускаю configure, він каже, що не може знайти файли
include або бібліотеку для GD, gdbm або будь-якого іншого
пакета!](#faq.build.not-found)
6. [При компіляції файлу language-parser.tab.c мені видаються помилки,
говорячі yytname undeclared.](#faq.build.yytname)
7. [Коли я запускаю make, схоже, він виконується нормально, але на
кінцевої лінківці скаржиться, що не може знайти деякі
файли.](#faq.build.link)
8. [При компонуванні PHP, він скаржиться на деякі невизначені
посилання.](#faq.build.undefined)
9. [Я слідував усім крокам по встановленню модульної версії для Apache на
Unix, але мої PHP-скрипти виводяться в браузері або я отримую запит
зберегти файл.](#faq.build.not-running)
10. [У документації рекомендується використовувати:
--activate-moduleu003dsrc/modules/php4/libphp4.a, але такий файл не
існує, тому я замінив це на
--activate-moduleu003dsrc/modules/php4/libmodphp4.a і воно не працює!?
Що відбувається?](#faq.build.activate-module)
11. [Коли я намагаюся зібрати Apache c PHP у вигляді статичного модуля,
використовуючи --activate-moduleu003dsrc/modules/php4/libphp4.a він каже,
що мій компілятор не ANSI-сумісний.](#faq.build.ansi)
12. [Коли я намагаюся зібрати PHP за допомогою --with-apxs, я отримую
дивне повідомлення про помилку.](#faq.build.apxs)
13. [Під час виконання make я дуже швидко отримую помилки та безліч
всяких RUSAGE\_.](#faq.build.microtime)
14. [При компіляції PHP з MySQL, configure виконується нормально, але у
час make я отримую помилку типу наступного:
ext/mysql/libmysqlclient/my_tempnam.o(.text+0x46): In function
my_tempnam': /php4/ext/mysql/libmysqlclient/my_tempnam.c:103: the
use of tempnam' is dangerous, better use mkstemp', у чому
справа?](#faq.build.mysql.tempnam)
15. [Я хочу оновити мій PHP. Де я можу знайти рядок ./configure,
яка була використана для моєї поточної PHP
установки?](#faq.build.upgrade)
16. [Під час складання PHP з бібліотекою GD, або видаються дивні помилки
компіляції, або помилки сегментації (segfaults) при
виконанні.](#faq.build.gdlibs)
17. [При компіляції PHP я, здається, отримую випадкові помилки, наприклад
вона зависає. Я використовую Solaris, якщо це має
значення.](#faq.installation.needgnu)

**Я отримав останню версію PHP, використовуючи анонімний доступ до Git, але немає конфігураційного скрипта!**
Вам потрібний встановлений пакет GNU autoconf для того, щоб згенерувати
конфігураційний скрипт із `configure.in`. Після отримання вихідників з
Git сервера просто запустіть **./buildconf** у директорії верхнього
рівня. (Також якщо ви запускаєте **configure** без опції
`--enable-maintainer-mode`, то конфігураційний скрипт не буде
перебудований автоматично при зміні файлу `configure.in`, тому вам
необхідно робити це вручну, коли ви помітите, що `configure.in`
змінився. Один із симптомів - поява таких речей як @VARIABLE@
вашому Makefile після виконання configure або `config.status`.)



**У мене виникають проблеми при конфігуруванні PHP для роботи з Apache. Він каже, що не може знайти `httpd.h`, хоча файл знаходиться там, де я сказав!**
Для configure/setup скрипта необхідно вказати директорію верхнього
рівня, де знаходяться вихідні коди Apache. Це означає, що вам треба
задати **--with-apacheu003d/path/to/apache**, а *не*
**--with-apacheu003d/path/to/apache/src**.

**Під час конфігурації PHP (`./configure`) ви натрапляєте на помилку,
подібну до наступної:**


checking lex output file root... ./configure: lex: command not found
configure: error: cannot find output from lex; giving up

Не забудьте уважно прочитати інструкції з
[установці](install.unix.md) та зауважте, що для компіляції PHP вам
Необхідно встановити як flex, і bison. Залежно від ваших налаштувань,
встановіть bison і flex або з вихідних джерел, або з пакетів, наприклад,
RPM.

**Коли я намагаюся запустити Apache, я отримую наступне повідомлення:**


fatal: relocation error: файл /path/to/libphp4.so:
symbol ap_block_alarms: referenced symbol not found

Ця помилка зазвичай з'являється, якщо ядро Apache було скомпільовано як
бібліотека, що розділяється DSO (Dynamic Shared Object). Спробуйте
переконфігурувати Apache, використовуючи принаймні наступні прапори:


--enable-sharedu003dmax --enable-ruleu003dSHARED_CORE

Для більш детальної інформації читайте файл `INSTALL` у директорії
верхнього рівня або [»  сторінку керівництва Apache по
DSO](http://httpd.apache.org/docs/current/dso.md).

**Коли я запускаю configure, він каже, що не може знайти файли include або бібліотеку для GD, gdbm або іншого пакета!**
Ви можете зробити так, що скрипт configure буде шукати файли
заголовків або бібліотеки у нестандартних місцях, задавши додаткові
прапори для препроцесора і компонувальника, такі як:

CPPFLAGSu003d-I/path/to/include LDFLAGSu003d-L/path/to/library ./configure

Якщо ви використовуєте csh-подібну оболонку (навіщо?), це буде:

env CPPFLAGSu003d-I/path/to/include LDFLAGSu003d-L/path/to/library ./configure



**При компіляції файлу `language-parser.tab.c` мені видаються помилки, що говорять `yytname undeclared`.**
Вам потрібно оновити вашу версію Bison. Останню версію можна знайти
на
[»http://www.gnu.org/software/bison/bison.md](http://www.gnu.org/software/bison/bison.md).



**Коли я запускаю **make**, схоже, він виконується нормально, але на кінцевому лінку скаржиться, що не може знайти деякі файли.**
Деякі старі версії make помилково не вміщують скомпіловані файли
у піддиректорії функцій у тій же директорії. Спробуйте виконати **cp
\*.o functions** і потім перезапустити **make**. Якщо це допомогло, то
Вам дійсно необхідно встановити свіжу версію GNU make.



**При компонуванні PHP, він скаржиться на деякі невизначені посилання.**
Подивіться на рядок для компонування та переконайтеся, що всі потрібні
бібліотеки додані наприкінці. Часто забувають '-ldl' та бібліотеки,
необхідні для підтримки увімкнених вручну баз даних.

Деякі люди також повідомляють, що під час компонування з Apache їм довелося
додати '-ldl' одразу після `libphp4.a`.



**Я слідував усім крокам по встановленню модульної версії для Apache на Unix, але мої PHP-скрипти виводяться в браузері або я отримую запит зберегти файл.**
Це означає, що модуль PHP з якоїсь причини не викликається. Перед
тим як звертатися за допомогою, перевірте три речі:

- Переконайтеся, що бінарник httpd, що запускається вами, дійсно новий,
щойно побудований httpd. Для цього спробуйте запустити:
`/path/to/binary/httpd -l` Якщо ви не бачите `mod_php4.c` у списку,
то ви запускаєте не той бінарник. Знайдіть та встановіть правильний
бінарник.
- Переконайтеся, що ви додали правильний Mime Type до одного з ваших
`Apache .conf` файлів. Це повинно бути:
`AddType application/x-httpd-php .php` Також переконайтесь, що ця
рядок AddType не потрапив усередину \<Virtualhost\> або \<Directory\>
блоку, так як це не дасть їй працювати з місцезнаходженням вашого
тестовий скрипт.
- Нарешті, між Apache 1.2 та Apache 1.3 розташування
конфігураційних файлів за промовчанням Apache змінилося. Вам треба
перевірити, що дійсно читається той конфігураційний файл,
який ви додали рядок AddType. Ви можете зробити очевидну
синтаксичну помилку у ваш `httpd.conf` файл або будь-яке інше
помітна зміна, яка покаже вам, що читається правильний
файл.



**У документації рекомендується використовувати: `--activate-moduleu003dsrc/modules/php4/libphp4.a`, але такий файл не існує, тому я замінив це на `--activate-moduleu003dsrc/modules/php4/libmodphp4 .a` і воно не працює!? Що відбувається?**
Зауважте, що файл libphp4.a не повинен існувати. Він буде створений у
процесі!



**Коли я намагаюся зібрати Apache з PHP у вигляді статичного модуля, використовуючи `--activate-moduleu003dsrc/modules/php4/libphp4.a` він каже, що мій компілятор не ANSI-сумісний.**
Повідомлення про помилку вводить в оману; це виправлено у свіжіших
версіях Apache.



**Коли я намагаюся зібрати PHP за допомогою **--with-apxs**, я отримую дивне повідомлення про помилку.**
Перевірте три речі. По-перше, чомусь, коли Apache створює
Perl скрипт apxs, він виходить без правильного компілятора
змінних, які задають прапори. Знайдіть ваш apxs скрипт (спробуйте команду
**which apxs**), іноді він встановлений як `/usr/local/apache/bin/apxs`
або `/usr/sbin/apxs`. Відкрийте його і знайдіть рядки, схожі на ці:

my $CFG_CFLAGS_SHLIB u003d ''; # substituted via Makefile.tmpl
my $CFG_LD_SHLIB u003d ''; # substituted via Makefile.tmpl
my $CFG_LDFLAGS_SHLIB u003d ''; # substituted via Makefile.tmpl

Якщо вони так і виглядають, ви знайшли вашу проблему. Вони можуть утримувати
тільки пробіли або інші неправильні значення, такі як q().
Змініть ці рядки на:

my $CFG_CFLAGS_SHLIB u003d '-fpic -DSHARED_MODULE'; # substituted via Makefile.tmpl
my $CFG_LD_SHLIB u003d 'gcc'; # substituted via Makefile.tmpl
my $CFG_LDFLAGS_SHLIB u003d q(-shared); # substituted via Makefile.tmpl

Друга можлива проблема виникає лише на Red Hat 6.1 та 6.2. Скрипт
apxs, що поставляється з Red Hat, зламаний. Шукайте цей рядок:

my $CFG_LIBEXECDIR u003d 'modules'; # substituted via APACI install

Якщо ви знайшли вищенаведений рядок, змініть його на наступне:

my $CFG_LIBEXECDIR u003d '/usr/lib/apache'; # substituted via APACI install

І останнє, якщо ви переконфігуруєте/перевстановлюєте Apache,
запустіть **make clean** після **./configure** та перед **make**.



**Під час виконання **make** я дуже швидко отримую помилки і безліч всяких `RUSAGE_`.**
При виконанні **make** під час встановлення, якщо ви стикаєтеся з
проблемами, схожими на таке:

microtime.c: In function `php_if_getrusage':
microtime.c:94: storage size of `usg' isn't known
microtime.c:97: `RUSAGE_SELF' undeclared (перша використання в цій функції)
microtime.c:97: (Each undeclared identifier is reported only once
microtime.c:97: for each function it appears in.)
microtime.c:103: `RUSAGE_CHILDREN' undeclared (перша використання в цій функції)
make[3]: *** [microtime.lo] Error 1
make[3]: Leaving directory `/home/master/php-4.0.1/ext/standard'
make[2]: *** [all-recursive] Error 1
make[2]: Leaving directory `/home/master/php-4.0.1/ext/standard'
make[1]: *** [all-recursive] Error 1
make[1]: Leaving directory `/home/master/php-4.0.1/ext'
make: *** [all-recursive] Error 1

Ваша система зламана. Ви повинні виправити файли `/usr/include`,
встановивши пакет glibc-devel, який відповідає вашому glibc. Це
абсолютно не залежить від PHP. Для доказу спробуйте наступний
простий тест:

$ cat >test.c <<X
#include <sys/resource.h>
X
$ gcc -E test.c >/dev/null

Якщо видаються помилки, ваші include файли зіпсовані.



**При компіляції PHP з MySQL, configure виконується нормально, але під час `make` я отримую помилку типу наступної: *ext/mysql/libmysqlclient/my_tempnam.o(.text+0x46): In function my_tempnam': /php4/ext /mysql/libmysqlclient/my_tempnam.c:103: use of tempnam' is dangerous, better use mkstemp'*, у чому справа?**
По-перше, важливо розуміти, що це `Warning` (попередження), а не
фатальна помилка. Тому що це останнє, що виводиться під час `make`,
воно може виглядати як рокова помилка, але це не так. Звичайно, якщо
ваш компілятор помирає на попередженнях (Warnings), то тоді так.
Також майте на увазі, що підтримка MySQL включена за умовчанням.

> **Примітка**:
>
> Починаючи з PHP 4.3.2 ви також будете бачити наступний текст після того
> як складання (make) завершиться:
>
>
> Build complete.
> (It is safe to ignore warnings o tempnam and tmpnam).
> (Складання завершено, можна безпечно ігнорувати
> попередження про tempnam та tmpnam.)



**Я хочу оновити мій PHP. Де я можу знайти рядок **./configure**, який був використаний для моєї поточної PHP установки?**
Або дивіться файл config.nice у дереві вихідників вашої поточної PHP
установки, або, якщо це недоступно, просто виконайте скрипт:

`<?php phpinfo(); ?> `

На початку виведення буде перебувати рядок **./configure**, який був
використана для складання поточного PHP.



**При складанні PHP з бібліотекою GD або видаються дивні помилки компіляції, або помилки сегментації (segfaults) при виконанні.**
Переконайтеся, що ваша бібліотека GD і PHP компонуються з тими самими
залежними бібліотеками (наприклад, libpng).



**При компіляції PHP я, здається, отримую випадкові помилки, наприклад, вона зависає. Я використовую Solaris, якщо це має значення.
Використання не GNU утиліт під час компіляції PHP може викликати
проблеми. Щоб бути впевненим, що компіляція PHP працюватиме,
використовуйте утиліти GNU. Наприклад, у Solaris, використання SunOS
BSD-сумісної або Solaris версії `sed` не буде працювати, а GNU або
Sun POSIX (xpg4) версії `sed` буде. Посилання: [»GNU
sed](http://www.gnu.org/software/sed/sed.md), [» GNU
flex](http://www.gnu.org/software/flex/flex.md), and [» GNU
bison](http://www.gnu.org/software/bison/bison.md).
