- [« Приклади](expect.examples.md)
- [Функції Expect»] (ref.expect.md)

- [PHP Manual](index.md)
- [Приклади](expect.examples.md)
- Приклади використання Expect

## Приклади використання Expect

**Приклад #1 Приклад використання Expect**

У цьому прикладі ми з'єднаємося з віддаленим хостом SSH, і надрукуємо
час безперервної роботи сервера.

` <?phpini_set("expect.loguser", "Off");$streamu003du003dfopen("expect://ssh root@remotehost uptime", "r");$cases u003d array (    array (0 u003d> ) :", 1 u003d> PASSWORD));switch (expect_expectl ($stream, $cases)) {    case PASSWORD:         fwrite ($stream, 
");        break;    default:        die ("Помилка з'єднання з віддаленим сервером!
");}while ($line u003d fgets($stream)) {      print $line;}fclose ($stream);?> `

У наступному прикладі ми з'єднаємося з віддаленим сервером, дізнаємось
розрядність його операційної системи та запустимо оновлення зазначеного
пакету.

**Приклад #2 Ще один приклад використання Expect**

` <?phpini_set("expect.timeout", -1);ini_set("expect.loguser", "Off");$stream u003d expect_popen("ssh root@remotehost");while (true) {    switch $stream, array (            array ("password:", PASSWORD), // SSH запрашивает пароль            array ("yes/no)?", YESNO), // SSH спрашивает, сохранять ли запись хоста            array ("~$ ", SHELL , EXP_EXACT), // Ми отримали доступ до командної оболонці!    ))) {       case PASSWORD:    f f     
");             break;         case YESNO:            fwrite ($stream, "yes
");              break;         case SHELL:            fwrite ($stream, "uname -a
");            while (true) {                    switch (expect_expectl ($stream, array (                            array ("~$ ", SHELL, EXP_EXACT), // Мы получили доступ к коммандной оболочке!                            array ("^Linux.*$", UNAME, EXP_REGEXP), // вывод uname -a                    ), $match)) {                        case UNAME:                            $uname .u003d $match[0];                            break;                        case SHELL:                            // Run update:                            if (strstr ($uname, "x86_64") ) {                                      fwrite ($stream, "rpm me
");                            } else {                                    fwrite ($stream, "rpm -Uhv http://mirrorsite/somepath/some_32bit.rpm
");                                                                     ‹
");                            break 2;                        case EXP_TIMEOUT:                        case EXP_EOF:                            break 2;                        default:                            die ("Случилась ошибка!
");                    }            }            break 2;        case EXP_TIMEOUT:        case EXP_EOF:            break 2;        default:            die ("Случилась ошибка!
");    }}fclose ($stream);?> `
