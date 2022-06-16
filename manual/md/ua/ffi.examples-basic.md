- [« Приклади](ffi.examples.md)
- [Callback-функції PHP »](ffi.examples-callback.md)

- [PHP Manual](index.md)
- [Приклади](ffi.examples.md)
- Прості приклади використання FFI

## Прості приклади використання FFI

Перед зануренням у деталі FFI API, давайте розглянемо кілька
прикладів спрощеного використання FFI API у стандартних задачах.

> **Примітка**:
>
> Для деяких прикладів знадобиться бібліотека `libc.so.6`. Вони
> не працюватимуть у системах, де її немає.

**Приклад #1 Виклик функції із загальної бібліотеки**

`<?php// створюємо об'єкт FFI, завантажуємо libc і експортуємо функцію printf()$ffi u003d FFI::cdef(   "int printf(const char *format, ...)                                                                        | .so.6");// викликаємо printf()$ffi->printf("Привіт, %s!
", "світ");?> `

Результат виконання цього прикладу:

Привіт світ!

> **Примітка**:
>
> Зверніть увагу, що деякі функції C потребують певних
> угоди про дзвінки, наприклад: `__fastcall`, `__stdcall` або
> `,__vectorcall`.

**Приклад #2 Виклик функції та повернення структури через аргумент**

` <?php// создаём привязку gettimeofday()$ffi u003d FFI::cdef("    typedef unsigned int time_t;    typedef unsigned int suseconds_t;    struct timeval {        time_t      tv_sec;        suseconds_t tv_usec;    };    struct timezone {        int tz_minuteswest;        int tz_dsttime; };    int gettimeofday(struct timeval *tv, struct timezone *tz);", "libc.so.6");// створюємо структури даних C$tv u003d $ffi->new("struct timeval" u003d $ffi->new("struct timezone");// викликаємо gettimeofday()var_dump($ffi->gettimeofday(FFI::addr($tv), FFI::addr($tz)));// отримуємо доступ до поля структури даних Cvar_dump($tv->tv_sec);// друкуємо всю структуру данихvar_dump($tz);?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
int(1555946835)
object(FFI\CData:struct timezone)#3 (2) {
["tz_minuteswest"]u003d>
int(0)
["tz_dsttime"]u003d>
int(0)
}

**Приклад #3 Доступ до існуючих змінних C**

`<?php// створюємо об'єкт FFI, завантажуємо libc і експортуємо змінну errno$ffi u003d FFI::cdef(   "int errno;", // це стандартна $ffi->errno);?> `

Результат виконання цього прикладу:

int(0)

**Приклад #4 Створення та модифікація змінної C**

`<?php// створюємо змінну C типу int$x u003d FFI::new("int");var_dump($x->cdata);// просте привласнення$x->cdata u003d 5;var_dump($x- >cdata);// не просте присвоєння$x->cdata +u003d 2;var_dump($x->cdata);?> `

Результат виконання цього прикладу:

int(0)
int(5)
int(7)

**Приклад #5 Робота з масивами C**

`<?php// створюємо структуру даних$a u003d FFI::new("long[1024]");// працюємо з ній як з звичайним масивом PHPfor ($i u003d 0; $i $i $i++) {    $a[$i] u003d $i;}var_dump($a[25]);$sum u003d 0;foreach ($a as $n) {    $sum +u003d $n;}var_dump );var_dump(count($a));var_dump(FFI::sizeof($a));?> `

Результат виконання цього прикладу:

int(25)
int(523776)
int(1024)
int(8192)

**Приклад #6 Робота з перерахуваннями C**

` <?php$a u003d FFI::cdef('typedef enum _zend_ffi_symbol_kind {    ZEND_FFI_SYM_TYPE,    ZEND_FFI_SYM_CONST u003d 2,    ZEND_FFI_SYM_VAR,    ZEND_FFI_SYM_FUNC} zend_ffi_symbol_kind;');var_dump($a->ZEND_FFI_SYM_TYPE);var_dump($a->ZEND_FFI_SYM_CONST); var_dump($a->ZEND_FFI_SYM_VAR);?> `

Результат виконання цього прикладу:

int(0)
int(2)
int(3)
