- [«foreach](control-structures.foreach.md)
- [continue »](control-structures.continue.md)

- [PHP Manual](index.md)
- [Керування конструкції](language.control-structures.md)
- break

## break

(PHP 4, PHP 5, PHP 7, PHP 8)

`break` перериває виконання поточної структури `for`, `foreach`,
`while`, `do-while` або `switch`.

break приймає необов'язковий числовий аргумент, який повідомляє йому
Виконання якої кількості вкладених структур необхідно перервати.
Значення за замовчуванням `1`, лише найближчу структуру буде перервано.

` <?php$arr u003d array('один', 'два', 'три', 'чотири', 'стоп', 'п'ять');foreach ($arr as $val) {    if ($val u003du003du003d ' стоп') {        break; /* Тут можна було написати 'break 1;'. */    }    echo "$val<br />
";}/* Використання додаткового аргументу. */$i u003d 0;while (++$i) {    switch ($i) {         case 5:   |
";  |                                                                                          виходимо<br />
;;                                  
