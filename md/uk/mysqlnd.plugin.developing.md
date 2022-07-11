- [«API плагінів mysqlnd](mysqlnd.plugin.api.md)
- [OCI8 »](book.oci8.md)

- [PHP Manual](index.md)
- [API для плагінів до вбудованого драйвера MySQL](mysqlnd.plugin.md)
- Починаємо розробку плагіна mysqlnd

## Починаємо розробку плагіна mysqlnd

Важливо пам'ятати, що плагін `mysqlnd` сам є модулем PHP.

Наступний приклад показує базову структуру функції MINIT,
що використовується в типовому плагіні `mysqlnd`:

/* my_php_mysqlnd_plugin.c */

static PHP_MINIT_FUNCTION(mysqlnd_plugin) {
/* глобальні змінні, ini-налаштування, ресурси, класи */

/* реєструємо плагін mysqlnd */
mysqlnd_plugin_id u003d mysqlnd_plugin_register();

conn_m u003d mysqlnd_get_conn_methods();
memcpy(org_conn_m, conn_m,
sizeof(struct st_mysqlnd_conn_methods));

conn_m->query u003d MYSQLND_METHOD(mysqlnd_plugin_conn, query);
conn_m->connect u003d MYSQLND_METHOD(mysqlnd_plugin_conn, connect);
}

/* my_mysqlnd_plugin.c */

enum_func_status MYSQLND_METHOD(mysqlnd_plugin_conn, query)(/*... */) {
/* ... */
}
enum_func_status MYSQLND_METHOD(mysqlnd_plugin_conn, connect)(/*... */) {
/* ... */
}

*Аналіз задачі: від C до користувальницького простору*

class proxy extends mysqlnd_plugin_connection {
public function connect($host, ...) { .. }
}
mysqlnd_plugin_set_conn_proxy(new proxy());

Процес:

1. PHP: користувач реєструє callback-функцію плагіна

2. PHP: користувач викликає PHP MySQL API для з'єднання з MySQL

3. C: ext/\*mysql\* викликає метод mysqlnd

4. C: mysqlnd обривається в ext/mysqlnd_plugin

5. C: ext/mysqlnd_plugin

1. Викликає користувацьку callback-функцію

2. Або оригінальний метод `mysqlnd`, якщо вона не задана

Вам необхідно виконати такі дії:

1. Створіть у С клас "mysqlnd_plugin_connection"

2. Прийміть та зареєструйте проксі об'єкт за допомогою
"mysqlnd_plugin_set_conn_proxy()"

3. Викличте проксі методи простору користувача з C (оптимізація -
zend_interfaces.h)

Методи об'єкта простору користувача мають бути викликані за допомогою
`call_user_function()` або на рівень нижче, за допомогою
`zend_call_method()`.

*Оптимізація: викликайте методи З за допомогою zend_call_method*

Наступний шмат коду демонструє прототип функції `zend_call_method`,
взятий із `zend_interfaces.h`.

ZEND_API zval* zend_call_method(
zval **object_pp, zend_class_entry *obj_ce,
zend_function **fn_proxy, char *function_name,
int function_name_len, zval **retval_ptr_ptr,
int param_count, zval* arg1, zval* arg2 TSRMLS_DC
);

Zend API підтримує лише два аргументи. Вам може знадобитися
більше. Наприклад:

enum_func_status (*func_mysqlnd_conn__connect)(
MYSQLND *conn, const char *host,
const char*user, const char*passwd,
unsigned int passwd_len, const char * db,
unsigned int db_len, unsigned int port,
const char * socket, unsigned int mysql_flags TSRMLS_DC
);

Для обходу цієї проблеми вам необхідно зробити копію
`zend_call_method()` та додати необхідні параметри. Ви можете зробити
це створивши набір макросів MY_ZEND_CALL_METHOD_WRAPPER.

*Звернення до простору користувача PHP*

Цей шматок коду демонструє оптимізований метод виклику функцій
простору користувача з:

/* my_mysqlnd_plugin.c */

MYSQLND_METHOD(my_conn_class,connect)(
MYSQLND *conn, const char *host /* ... */ TSRMLS_DC) {
enum_func_status retu003dFAIL;
zval * global_user_conn_proxy u003d fetch_userspace_proxy();
if (global_user_conn_proxy) {
/* виклик проксі простору користувача */
ret u003d MY_ZEND_CALL_METHOD_WRAPPER(global_user_conn_proxy, host, /*...*/);
} else {
/* або оригінальний метод mysqlnd u003d нічого не робити, бути прозорим */
ret u003d org_methods.connect(conn, host, user, passwd,
passwd_len, db, db_len, port,
socket, mysql_flags (TSRMLS_CC);
}
return ret;
}

*Звернення до простору користувача: прості аргументи*

/* my_mysqlnd_plugin.c */

MYSQLND_METHOD(my_conn_class,connect)(
/* ... */, const char *host, /* ...*/) {
/* ... */
if (global_user_conn_proxy) {
/* ... */
zval * zv_host;
MAKE_STD_ZVAL(zv_host);
ZVAL_STRING(zv_host, host, 1);
MY_ZEND_CALL_METHOD_WRAPPER(global_user_conn_proxy, zv_retval, zv_host /*, ...*/);
zval_ptr_dtor(&zv_host);
/* ... */
}
/* ... */
}

*Звернення до простору користувача: структури як аргументи*

/* my_mysqlnd_plugin.c */

MYSQLND_METHOD(my_conn_class, connect)(
MYSQLND *conn, /* ...*/) {
/* ... */
if (global_user_conn_proxy) {
/* ... */
zval * zv_conn;
ZEND_REGISTER_RESOURCE(zv_conn, (void *)conn, le_mysqlnd_plugin_conn);
MY_ZEND_CALL_METHOD_WRAPPER(global_user_conn_proxy, zv_retval, zv_conn, zv_host /*, ...*/);
zval_ptr_dtor(&zv_conn);
/* ... */
}
/* ... */
}

Перший аргумент багатьох методів `mysqlnd` - це "об'єкти" С. Наприклад,
перший аргумент методу connect() є вказівником на MYSQLND.
Структура MYSQLND є об'єктом з'єднання `mysqlnd`.

Вказівник на об'єкт з'єднання mysqlnd можна порівняти зі стандартним
обробником файлового введення/виводу. Як і він, об'єкт з'єднання
`mysqlnd` повинен бути пов'язаний з простором користувача з
використанням PHP типом "resource".

*З C в простір користувача і назад*

class proxy extends mysqlnd_plugin_connection {
public function connect($conn, $host, ...) {
/* до впровадження */
printf("Підключення до u003d '%s'
", $ host);
debug_print_backtrace();
return parent::connect($conn);
}

public function query($conn, $query) {
/* після впровадження */
$ret u003d parent::query($conn, $query);
printf("Запит u003d '%s'
", $ Query);
return $ret;
}
}
mysqlnd_plugin_set_conn_proxy(new proxy());

Користувачі PHP повинні мати можливість викликати батьківські
реалізації перевизначених методів.

В результаті успадкування можна "уточнити" лише вибрані методи та
ви можете вибрати, коли виконувати ваш код до або після батьківського.

*Вбудований клас: mysqlnd_plugin_connection::connect()*

/* my_mysqlnd_plugin_classes.c */

PHP_METHOD("mysqlnd_plugin_connection", connect) {
/* ... спрощений! ... */
zval* mysqlnd_rsrc;
MYSQLND * conn;
char* host; int host_len;
if (zend_parse_parameters(ZEND_NUM_ARGS() TSRMLS_CC, "rs",
&mysqlnd_rsrc, &host, &host_len) u003du003d FAILURE) {
RETURN_NULL();
}
ZEND_FETCH_RESOURCE(conn, MYSQLND* conn, &mysqlnd_rsrc, -1,
"Mysqlnd Connection", le_mysqlnd_plugin_conn);
if (PASS u003du003d org_methods.connect(conn, host, /* simplified! */ TSRMLS_CC))
RETVAL_TRUE;
else
RETVAL_FALSE;
}
