- [« Директиви php.ini](ini.md)
- [Список розділів php.ini »](ini.sections.md)

- [PHP Manual](index.md)
- [Директиви php.ini](ini.md)
- Список директив php.ini

## Список директив `php.ini`

Цей список включає директиви `php.ini`, які можна використовувати
для налаштування PHP.

Стовпець "Місце зміни" показує коли і де може бути встановлена
директиви. Для отримання інформації про значення цих директив дивіться
розділ ["Де може бути встановлена
директива?"](configuration.changes.modes.md).

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- ------------|------------------------------------- ---------|------------------|--------------------- -------------------------------------------------- -----------------------|
| [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | "1" | PHP_INI_SYSTEM | |
| [allow_url_include](filesystem.configuration.md#ini.allow-url-include) | "0" | PHP_INI_SYSTEM | Оголошено застарілим у PHP 7.4.0. |
| [arg_separator.input](ini.core.md#ini.arg-separator.input) | "&" | PHP_INI_PERDIR | |
| [arg_separator.output](ini.core.md#ini.arg-separator.output) | "&" | PHP_INI_ALL | |
| [assert.active](info.configuration.md#ini.assert.active) | "1" | PHP_INI_ALL | |
| [assert.bail](info.configuration.md#ini.assert.bail) | "0" | PHP_INI_ALL | |
| [assert.callback](info.configuration.md#ini.assert.callback) | NULL | PHP_INI_ALL | |
| [assert.exception](info.configuration.md#ini.assert.exception) | "0" | PHP_INI_ALL | |
| [assert.quiet_eval](info.configuration.md#ini.assert.quiet-eval) | "0" | PHP_INI_ALL | Видалено з PHP 8.0.0 |
| [assert.warning](info.configuration.md#ini.assert.warning) | "1" | PHP_INI_ALL | |
| [auto_append_file](ini.core.md#ini.auto-append-file) | NULL | PHP_INI_PERDIR | |
| [auto_detect_line_endings](filesystem.configuration.md#ini.auto-detect-line-endings) | "0" | PHP_INI_ALL | |
| [auto_globals_jit](ini.core.md#ini.auto-globals-jit) | "1" | PHP_INI_PERDIR | |
| [auto_prepend_file](ini.core.md#ini.auto-prepend-file) | NULL | PHP_INI_PERDIR | |
| [bcmath.scale](bc.configuration.md#ini.bcmath.scale) | "0" | PHP_INI_ALL | |
| [browscap](misc.configuration.md#ini.browscap) | NULL | PHP_INI_SYSTEM | |
| [cgi.check_shebang_line](ini.core.md#ini.cgi.check-shebang-line) | "1" | PHP_INI_SYSTEM | |
| [cgi.discard_path](ini.core.md#ini.cgi.discard-path) | "0" | PHP_INI_SYSTEM | |
| [cgi.fix_pathinfo](ini.core.md#ini.cgi.fix-pathinfo) | "1" | PHP_INI_SYSTEM | |
| [cgi.force_redirect](ini.core.md#ini.cgi.force-redirect) | "1" | PHP_INI_SYSTEM | |
| [cgi.nph](ini.core.md#ini.cgi.nph) | "0" | PHP_INI_ALL | |
| [cgi.redirect_status_env](ini.core.md#ini.cgi.redirect-status-env) | NULL | PHP_INI_SYSTEM | |
| [cgi.rfc2616_headers](ini.core.md#ini.cgi.rfc2616-headers) | "0" | PHP_INI_ALL | |
| [child_terminate](apache.configuration.md#ini.child-terminate) | "0" | PHP_INI_ALL | |
| [cli.pager](readline.configuration.md#ini.cli.pager) | "" | PHP_INI_ALL | |
| [cli.prompt](readline.configuration.md#ini.cli.prompt) | "\\\>" | PHP_INI_ALL | |
| [cli_server.color](features.commandline.ini.md#ini.cli-server.color) | "0" | PHP_INI_ALL | |
| [com.allow_dcom](com.configuration.md#ini.com.allow-dcom) | "0" | PHP_INI_SYSTEM | |
| [com.autoregister_typelib](com.configuration.md#ini.com.autoregister-typelib) | "0" | PHP_INI_ALL | |
| [com.autoregister_verbose](com.configuration.md#ini.com.autoregister-verbose) | "0" | PHP_INI_ALL | |
| [com.autoregister_casesensitive](com.configuration.md#ini.com.autoregister-casesensitive) | "1" | PHP_INI_ALL | |
| [com.code_page](com.configuration.md#ini.com.code-page) | "" | PHP_INI_ALL | |
| [com.dotnet_version](com.configuration.md#ini.com.dotnet-version) | "" | PHP_INI_SYSTEM | Починаючи з PHP 8.0.0
| [com.typelib_file](com.configuration.md#ini.com.typelib-file) | "" | PHP_INI_SYSTEM | |
| [curl.cainfo](curl.configuration.md#ini.curl.cainfo) | NULL | PHP_INI_SYSTEM | |
| [date.default_latitude](datetime.configuration.md#ini.date.default-latitude) | "31.7667" | PHP_INI_ALL | |
| [date.default_longitude](datetime.configuration.md#ini.date.default-longitude) | "35.2333" | PHP_INI_ALL | |
| [date.sunrise_zenith](datetime.configuration.md#ini.date.sunrise-zenith) | "90.583333" | PHP_INI_ALL | |
| [date.sunset_zenith](datetime.configuration.md#ini.date.sunset-zenith) | "90.583333" | PHP_INI_ALL | |
| [date.timezone](datetime.configuration.md#ini.date.timezone) | "UTC" | PHP_INI_ALL | |
| [dba.default_handler](dba.configuration.md#ini.dba.default_handler) | DBA_DEFAULT | PHP_INI_ALL | |
| [default_charset](ini.core.md#ini.default-charset) | "UTF-8" | PHP_INI_ALL | За замовчуванням "UTF-8". |
| [input_encoding](ini.core.md#ini.input-encoding) | "" | PHP_INI_ALL | |
| [output_encoding](ini.core.md#ini.output-encoding) | "" | PHP_INI_ALL | |
| [internal_encoding](ini.core.md#ini.internal-encoding) | "" | PHP_INI_ALL | |
| [default_mimetype](ini.core.md#ini.default-mimetype) | "text/html" | PHP_INI_ALL | |
| [default_socket_timeout](filesystem.configuration.md#ini.default-socket-timeout) | "60" | PHP_INI_ALL | |
| [disable_classes](ini.core.md#ini.disable-classes) | "" | Тільки `php.ini` |
| [disable_functions](ini.core.md#ini.disable-functions) | "" | Тільки `php.ini` |
| [display_errors](errorfunc.configuration.md#ini.display-errors) | "1" | PHP_INI_ALL | |
| [display_startup_errors](errorfunc.configuration.md#ini.display-startup-errors) | "1" | PHP_INI_ALL | До PHP 8.0.0 значення за промовчанням було "0". |
| [docref_ext](errorfunc.configuration.md#ini.docref-ext) | "" | PHP_INI_ALL | |
| [docref_root](errorfunc.configuration.md#ini.docref-root) | "" | PHP_INI_ALL | |
| [doc_root](ini.core.md#ini.doc-root) NULL | PHP_INI_SYSTEM | |
| [enable_dl](info.configuration.md#ini.enable-dl) | "1" | PHP_INI_SYSTEM | Ця можливість застаріла і буде обов'язково віддалена в майбутньому. |
| [enable_post_data_reading](ini.core.md#ini.enable-post-data-reading) | On | PHP_INI_PERDIR | |
| [engine](apache.configuration.md#ini.engine) | "1" | PHP_INI_ALL | |
| [error_append_string](errorfunc.configuration.md#ini.error-append-string) | NULL | PHP_INI_ALL | |
| [error_log](errorfunc.configuration.md#ini.error-log) | NULL | PHP_INI_ALL | |
| [error_prepend_string](errorfunc.configuration.md#ini.error-prepend-string) | NULL | PHP_INI_ALL | |
| [error_reporting](errorfunc.configuration.md#ini.error-reporting) | NULL | PHP_INI_ALL | |
| [exif.encode_unicode](exif.configuration.md#ini.exif.encode-unicode) | "ISO-8859-15" | PHP_INI_ALL | |
| [exif.decode_unicode_motorola](exif.configuration.md#ini.exif.decode-unicode-motorola) | "UCS-2BE" | PHP_INI_ALL | |
| [exif.decode_unicode_intel](exif.configuration.md#ini.exif.decode-unicode-intel) | "UCS-2LE" | PHP_INI_ALL | |
| [exif.encode_jis](exif.configuration.md#ini.exif.encode-jis) | "" | PHP_INI_ALL | |
| [exif.decode_jis_motorola](exif.configuration.md#ini.exif.decode-jis-motorola) | "JIS" | PHP_INI_ALL | |
| [exif.decode_jis_intel](exif.configuration.md#ini.exif.decode-jis-intel) | "JIS" | PHP_INI_ALL | |
| [exit_on_timeout](ini.core.md#ini.exit-on-timeout) | "" | PHP_INI_ALL | |
| [expect.timeout](expect.configuration.md#ini.expect.timeout) | "10" | PHP_INI_ALL | |
| [expect.loguser](expect.configuration.md#ini.expect.loguser) | "1" | PHP_INI_ALL | |
| [expect.logfile](expect.configuration.md#ini.expect.logfile) | "" | PHP_INI_ALL | |
| [expect.match_max](expect.configuration.md#ini.expect.match-max) | "" | PHP_INI_ALL | |
| [expose_php](ini.core.md#ini.expose-php) | "1" | Тільки `php.ini` |
| [extension](ini.core.md#ini.extension) | NULL | Тільки `php.ini` |
| [extension_dir](ini.core.md#ini.extension-dir) | "/path/to/php" | PHP_INI_SYSTEM | |
| [fastcgi.impersonate](ini.core.md#ini.fastcgi.impersonate) | "0" | PHP_INI_SYSTEM | |
| [fastcgi.logging](ini.core.md#ini.fastcgi.logging) | "1" | PHP_INI_SYSTEM | |
| [file_uploads](ini.core.md#ini.file-uploads) | "1" | PHP_INI_SYSTEM | |
| [filter.default](filter.configuration.md#ini.filter.default) | "unsafe_raw" | PHP_INI_PERDIR | Параметр застарів, починаючи з PHP 8.1.0. |
| [filter.default_flags](filter.configuration.md#ini.filter.default-flags) | NULL | PHP_INI_PERDIR | |
| [from](filesystem.configuration.md#ini.from) | "" | PHP_INI_ALL | |
| [gd.jpeg_ignore_warning](image.configuration.md#ini.gd.jpeg-ignore-warning) | "1" | PHP_INI_ALL | |
| [geoip.custom_directory](geoip.configuration.md#ini.geoip.custom-directory) | "" | PHP_INI_ALL | |
| hard_timeout | "2" | PHP_INI_SYSTEM | Доступно з PHP 7.1.0. |
| [highlight.comment](misc.configuration.md#ini.syntax-highlighting) | "#FF8000" | PHP_INI_ALL | |
| [highlight.default](misc.configuration.md#ini.syntax-highlighting) | "#0000BB" | PHP_INI_ALL | |
| [highlight.md](misc.configuration.md#ini.syntax-highlighting) | "#000000" | PHP_INI_ALL | |
| [highlight.keyword](misc.configuration.md#ini.syntax-highlighting) | "#007700" | PHP_INI_ALL | |
| [highlight.string](misc.configuration.md#ini.syntax-highlighting) | "#DD0000" | PHP_INI_ALL | |
| [html_errors](errorfunc.configuration.md#ini.md-errors) | "1" | PHP_INI_ALL | |
| [ibase.allow_persistent](ibase.configuration.md#ini.ibase.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [ibase.max_persistent](ibase.configuration.md#ini.ibase.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [ibase.max_links](ibase.configuration.md#ini.ibase.max-links) | "-1" | PHP_INI_SYSTEM | |
| [ibase.default_db](ibase.configuration.md#ini.ibase.default-db) | NULL | PHP_INI_SYSTEM | |
| [ibase.default_user](ibase.configuration.md#ini.ibase.default-user) | NULL | PHP_INI_ALL | |
| [ibase.default_password](ibase.configuration.md#ini.ibase.default-password) | NULL | PHP_INI_ALL | |
| [ibase.default_charset](ibase.configuration.md#ini.ibase.default-charset) | NULL | PHP_INI_ALL | |
| [ibase.timestampformat](ibase.configuration.md#ini.ibase.timestampformat) | "%Y-%m-%d %H:%M:%S" | PHP_INI_ALL | |
| [ibase.dateformat](ibase.configuration.md#ini.ibase.dateformat) | "%Y-%m-%d" | PHP_INI_ALL | |
| [ibase.timeformat](ibase.configuration.md#ini.ibase.timeformat) | "%H:%M:%S" | PHP_INI_ALL | |
| [ibm_db2.binmode](ibm-db2.configuration.md#ini.ibm-db2.binmode) | "1" | PHP_INI_ALL | |
| [ibm_db2.i5_all_pconnect](ibm-db2.configuration.md#ini.ibm-db2.i5-all-pconnect) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.6.5. |
| [ibm_db2.i5_allow_commit](ibm-db2.configuration.md#ini.ibm-db2.i5-allow-commit) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.4.9. |
| [ibm_db2.i5_dbcs_alloc](ibm-db2.configuration.md#ini.ibm-db2.i5-dbcs-alloc) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.5.0. |
| [ibm_db2.instance_name](ibm-db2.configuration.md#ini.ibm-db2.instance-name) | NULL | PHP_INI_SYSTEM | Доступно з ibm_db2 1.0.2. |
| [ibm_db2.i5_ignore_userid](ibm-db2.configuration.md#ini.ibm-db2.i5-ignore-userid) | "0" | PHP_INI_SYSTEM | Доступно з ibm_db2 1.8.0. |
| [iconv.input_encoding](iconv.configuration.md#ini.iconv.input-encoding) | "" | PHP_INI_ALL | Застаріло з PHP 5.6.0. |
| [iconv.output_encoding](iconv.configuration.md#ini.iconv.output-encoding) | "" | PHP_INI_ALL | Застаріло з PHP 5.6.0. |
| [iconv.internal_encoding](iconv.configuration.md#ini.iconv.internal-encoding) | "" | PHP_INI_ALL | Застаріло з PHP 5.6.0. |
| [ignore_repeated_errors](errorfunc.configuration.md#ini.ignore-repeated-errors) | "0" | PHP_INI_ALL | |
| [ignore_repeated_source](errorfunc.configuration.md#ini.ignore-repeated-source) | "0" | PHP_INI_ALL | |
| [ignore_user_abort](misc.configuration.md#ini.ignore-user-abort) | "0" | PHP_INI_ALL | |
| [implicit_flush](outcontrol.configuration.md#ini.implicit-flush) | "0" | PHP_INI_ALL | |
| [include_path](ini.core.md#ini.include-path) | ".:/path/to/php/pear" | PHP_INI_ALL | |
| [intl.default_locale](intl.configuration.md#ini.intl.default-locale) | | PHP_INI_ALL | |
| [intl.error_level](intl.configuration.md#ini.intl.error-level) | 0 | PHP_INI_ALL | |
| [intl.use_exceptions](intl.configuration.md#ini.intl.use-exceptions) | 0 | PHP_INI_ALL | Доступно з PECL 3.0.0a1 |
| [last_modified](apache.configuration.md#ini.last-modified) | "0" | PHP_INI_ALL | |
| [ldap.max_links](ldap.configuration.md#ini.ldap.max_links) | "-1" | PHP_INI_SYSTEM | |
| [log_errors](errorfunc.configuration.md#ini.log-errors) | "0" | PHP_INI_ALL | |
| [log_errors_max_len](errorfunc.configuration.md#ini.log-errors-max-len) | "1024" | PHP_INI_ALL | |
| [mail.add_x\_header](mail.configuration.md#ini.mail.add-x-header) | "0" | PHP_INI_PERDIR | |
| mail.force_extra_parameters | NULL | Тільки `php.ini` |
| [mail.log](mail.configuration.md#ini.mail.log) | "" | PHP_INI_PERDIR | |
| [max_execution_time](info.configuration.md#ini.max-execution-time) | "30" | PHP_INI_ALL | |
| [max_input_nesting_level](info.configuration.md#ini.max-input-nesting-level) | "64" | PHP_INI_PERDIR | |
| [max_input_vars](info.configuration.md#ini.max-input-vars) | 1000 | PHP_INI_PERDIR | |
| [max_input_time](info.configuration.md#ini.max-input-time) | "-1" | PHP_INI_PERDIR | |
| [mbstring.language](mbstring.configuration.md#ini.mbstring.language) | "neutral" | PHP_INI_ALL | |
| [mbstring.detect_order](mbstring.configuration.md#ini.mbstring.detect-order) | NULL | PHP_INI_ALL | |
| [mbstring.http_input](mbstring.configuration.md#ini.mbstring.http-input) | "pass" | PHP_INI_ALL | Застаріла |
| [mbstring.http_output](mbstring.configuration.md#ini.mbstring.http-output) | "pass" | PHP_INI_ALL | Застаріла |
| [mbstring.internal_encoding](mbstring.configuration.md#ini.mbstring.internal-encoding) | NULL | PHP_INI_ALL | Застаріла |
| [mbstring.substitute_character](mbstring.configuration.md#ini.mbstring.substitute-character) | NULL | PHP_INI_ALL | |
| [mbstring.func_overload](mbstring.configuration.md#ini.mbstring.func-overload) | "0" | PHP_INI_SYSTEM | Оголошено застарілим у PHP 7.2.0; видалено з PHP 8.0.0. |
| [mbstring.encoding_translation](mbstring.configuration.md#ini.mbstring.encoding-translation) | "0" | PHP_INI_PERDIR | |
| [mbstring.http_output_conv_mimetypes](mbstring.configuration.md#ini.mbstring.http-output-conv-mimetypes) | "^(text/\|application/xhtml\+xml)" | PHP_INI_ALL | |
| [mbstring.strict_detection](mbstring.configuration.md#ini.mbstring.strict-detection) | "0" | PHP_INI_ALL | |
| [mcrypt.algorithms_dir](mcrypt.configuration.md#ini.mcrypt.algorithms-dir) | **`null`** | PHP_INI_ALL | |
| [mcrypt.modes_dir](mcrypt.configuration.md#ini.mcrypt.modes-dir) | **`null`** | PHP_INI_ALL | |
| [memcache.allow_failover](memcache.ini.md#ini.memcache.allow-failover) | "1" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.max_failover_attempts](memcache.ini.md#ini.memcache.max-failover-attempts) | "20" | PHP_INI_ALL | Доступно з memcache 2.1.0. |
| [memcache.chunk_size](memcache.ini.md#ini.memcache.chunk-size) | "8192" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.default_port](memcache.ini.md#ini.memcache.default-port) | "11211" | PHP_INI_ALL | Доступно з memcache 2.0.2. |
| [memcache.hash_strategy](memcache.ini.md#ini.memcache.hash-strategy) | "standard" | PHP_INI_ALL | Доступно з memcache 2.2.0. |
| [memcache.hash_function](memcache.ini.md#ini.memcache.hash-function) | "crc32" | PHP_INI_ALL | Доступно з memcache 2.2.0. |
| [memcache.protocol](memcache.ini.md#ini.memcache.protocol) | Ascii | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.redundancy](memcache.ini.md#ini.memcache.redundancy) | 1 | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.session_redundancy](memcache.ini.md#ini.memcache.session-redundancy) | 2 | \>PHP_INI_ALL | Підтримується з Memcache 3.0.0 |
| [memcache.compress_threshold](memcache.ini.md#ini.memcache.compress-threshold) | 20000 | \>PHP_INI_ALL | Підтримується з memcache 3.0.3
| [memcache.lock_timeout](memcache.ini.md#ini.memcache.lock-timeout) | 15 | \>PHP_INI_ALL | Підтримується з memcache 3.0.4
| [memory_limit](ini.core.md#ini.memory-limit) | "128M" | PHP_INI_ALL | |
| [mysql.allow_local_infile](mysql.configuration.md#ini.mysql.allow-local-infile) | "1" | PHP_INI_SYSTEM | |
| [mysql.allow_persistent](mysql.configuration.md#ini.mysql.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [mysql.max_persistent](mysql.configuration.md#ini.mysql.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [mysql.max_links](mysql.configuration.md#ini.mysql.max-links) | "-1" | PHP_INI_SYSTEM | |
| [mysql.trace_mode](mysql.configuration.md#ini.mysql.trace-mode) | "0" | PHP_INI_ALL | |
| [mysql.default_port](mysql.configuration.md#ini.mysql.default-port) | NULL | PHP_INI_ALL | |
| [mysql.default_socket](mysql.configuration.md#ini.mysql.default-socket) | NULL | PHP_INI_ALL | |
| [mysql.default_host](mysql.configuration.md#ini.mysql.default-host) | NULL | PHP_INI_ALL | |
| [mysql.default_user](mysql.configuration.md#ini.mysql.default-user) | NULL | PHP_INI_ALL | |
| [mysql.default_password](mysql.configuration.md#ini.mysql.default-password) | NULL | PHP_INI_ALL | |
| [mysql.connect_timeout](mysql.configuration.md#ini.mysql.connect-timeout) | "60" | PHP_INI_ALL | |
| [mysqli.allow_local_infile](mysqli.configuration.md#ini.mysqli.allow-local-infile) | "0" | PHP_INI_SYSTEM | До PHP 7.2.16 та 7.3.3 значенням за замовчуванням було "1". |
| [mysqli.local_infile_directory](mysqli.configuration.md#ini.mysqli.local-infile-directory) | | PHP_INI_SYSTEM | Доступно з PHP 8.1.0. |
| [mysqli.allow_persistent](mysqli.configuration.md#ini.mysqli.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [mysqli.max_persistent](mysqli.configuration.md#ini.mysqli.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [mysqli.max_links](mysqli.configuration.md#ini.mysqli.max-links) | "-1" | PHP_INI_SYSTEM | |
| [mysqli.default_port](mysqli.configuration.md#ini.mysqli.default-port) | "3306" | PHP_INI_ALL | |
| [mysqli.default_socket](mysqli.configuration.md#ini.mysqli.default-socket) | NULL | PHP_INI_ALL | |
| [mysqli.default_host](mysqli.configuration.md#ini.mysqli.default-host) | NULL | PHP_INI_ALL | |
| [mysqli.default_user](mysqli.configuration.md#ini.mysqli.default-user) | NULL | PHP_INI_ALL | |
| [mysqli.default_pw](mysqli.configuration.md#ini.mysqli.default-pw) | NULL | PHP_INI_ALL | |
| [mysqli.reconnect](mysqli.configuration.md#ini.mysqli.reconnect) | "0" | PHP_INI_SYSTEM | |
| [mysqli.rollback_on_cached_plink](mysqli.configuration.md#ini.mysqli.rollback-on-cached-plink) | "0" | PHP_INI_SYSTEM | |
| [mysqlnd.collect_statistics](mysqlnd.config.md#ini.mysqlnd.collect-statistics) | "1" | PHP_INI_SYSTEM | |
| [mysqlnd.collect_memory_statistics](mysqlnd.config.md#ini.mysqlnd.collect-memory-statistics) | "0" | PHP_INI_SYSTEM | |
| [mysqlnd.debug](mysqlnd.config.md#ini.mysqlnd.debug) | "" | PHP_INI_SYSTEM | |
| [mysqlnd.log_mask](mysqlnd.config.md#ini.mysqlnd.log-mask) | 0 | PHP_INI_ALL | |
| [mysqlnd.mempool_default_size](mysqlnd.config.md#ini.mysqlnd.mempool-default-size) | 16000 | PHP_INI_ALL | |
| [mysqlnd.net_read_timeout](mysqlnd.config.md#ini.mysqlnd.net-read-timeout) | "86400" | PHP_INI_ALL | До PHP 7.2.0 значенням "31536000", а місцем зміни було **`PHP_INI_SYSTEM`** |
| [mysqlnd.net_cmd_buffer_size](mysqlnd.config.md#ini.mysqlnd.net-cmd-buffer-size) | 5.3.0 – "2048", 5.3.1 – "4096" | PHP_INI_SYSTEM | |
| [mysqlnd.net_read_buffer_size](mysqlnd.config.md#ini.mysqlnd.net-read-buffer-size) | "32768" | PHP_INI_SYSTEM | |
| [mysqlnd.sha256_server_public_key](mysqlnd.config.md#ini.mysqlnd.sha256-server-public-key) | "" | PHP_INI_PERDIR | |
| [mysqlnd.trace_alloc](mysqlnd.config.md#ini.mysqlnd.trace-alloc) | "" | PHP_INI_SYSTEM | |
| [mysqlnd.fetch_data_copy](mysqlnd.config.md#ini.mysqlnd.fetch_data_copy) | 0 | PHP_INI_ALL | |
| [oci8.connection_class](oci8.configuration.md#ini.oci8.connection-class) | "" | PHP_INI_ALL | Доступна з версії PECL OCI8 1.3. |
| [oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch) | "100" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [oci8.events](oci8.configuration.md#ini.oci8.events) | Off | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.3. |
| [oci8.max_persistent](oci8.configuration.md#ini.oci8.max-persistent) | "-1" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. Оголошена застарілою починаючи з PHP 8.1.0. |
| [oci8.old_oci_close_semantics](oci8.configuration.md#ini.oci8.old-oci-close-semantics) | Off | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [oci8.persistent_timeout](oci8.configuration.md#ini.oci8.persistent-timeout) | "-1" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [oci8.ping_interval](oci8.configuration.md#ini.oci8.ping-interval) | "60" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [oci8.prefetch_lob_size](oci8.configuration.md#ini.oci8.prefetch-lob-size) | "0" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 3.2. |
| [oci8.privileged_connect](oci8.configuration.md#ini.oci8.privileged-connect) | Off | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [oci8.statement_cache_size](oci8.configuration.md#ini.oci8.statement-cache-size) | "20" | PHP_INI_SYSTEM | Доступна з версії PECL OCI8 1.1. |
| [odbc.default_db](odbc.configuration.md#ini.uodbc.default-db) \* | NULL | PHP_INI_ALL | |
| [odbc.default_user](odbc.configuration.md#ini.uodbc.default-user) \* | NULL | PHP_INI_ALL | |
| [odbc.default_pw](odbc.configuration.md#ini.uodbc.default-pw) \* | NULL | PHP_INI_ALL | |
| [odbc.allow_persistent](odbc.configuration.md#ini.uodbc.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [odbc.check_persistent](odbc.configuration.md#ini.uodbc.check-persistent) | "1" | PHP_INI_SYSTEM | |
| [odbc.max_persistent](odbc.configuration.md#ini.uodbc.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [odbc.max_links](odbc.configuration.md#ini.uodbc.max-links) | "-1" | PHP_INI_SYSTEM | |
| [odbc.defaultlrl](odbc.configuration.md#ini.uodbc.defaultlrl) | "4096" | PHP_INI_ALL | |
| [odbc.defaultbinmode](odbc.configuration.md#ini.uodbc.defaultbinmode) | "1" | PHP_INI_ALL | |
| [odbc.default_cursortype](odbc.configuration.md#ini.uodbc.defaultcursortype) | "3" | PHP_INI_ALL | |
| [opcache.enable](opcache.configuration.md#ini.opcache.enable) | "1" | PHP_INI_ALL | |
| [opcache.enable_cli](opcache.configuration.md#ini.opcache.enable-cli) | "0" | PHP_INI_SYSTEM | У версіях з PHP 7.1.2 до 7.1.6 включно, значення за замовчуванням "1" (включено) |
| [opcache.memory_consumption](opcache.configuration.md#ini.opcache.memory-consumption) | "128" | PHP_INI_SYSTEM | |
| [opcache.interned_strings_buffer](opcache.configuration.md#ini.opcache.interned-strings-buffer) | "8" | PHP_INI_SYSTEM | |
| [opcache.max_accelerated_files](opcache.configuration.md#ini.opcache.max-accelerated-files) | "10000" | PHP_INI_SYSTEM | |
| [opcache.max_wasted_percentage](opcache.configuration.md#ini.opcache.max-wasted-percentage) | "5" | PHP_INI_SYSTEM | |
| [opcache.use_cwd](opcache.configuration.md#ini.opcache.use-cwd) | "1" | PHP_INI_SYSTEM | |
| [opcache.validate_timestamps](opcache.configuration.md#ini.opcache.validate-timestamps) | "1" | PHP_INI_ALL | |
| [opcache.revalidate_freq](opcache.configuration.md#ini.opcache.revalidate-freq) | "2" | PHP_INI_ALL | |
| [opcache.revalidate_path](opcache.configuration.md#ini.opcache.revalidate-path) | "0" | PHP_INI_ALL | |
| [opcache.save_comments](opcache.configuration.md#ini.opcache.save-comments) | "1" | PHP_INI_SYSTEM | |
| [opcache.fast_shutdown](opcache.configuration.md#ini.opcache.fast-shutdown) | "0" | PHP_INI_SYSTEM | |
| [opcache.enable_file_override](opcache.configuration.md#ini.opcache.enable-file-override) | "0" | PHP_INI_SYSTEM | |
| [opcache.optimization_level](opcache.configuration.md#ini.opcache.optimization-level) | "0x7FFEBFFF" | PHP_INI_SYSTEM | До PHP 7.3.0 було 0x7FFFBFFF |
| [opcache.inherited_hack](opcache.configuration.md#ini.opcache.inherited-hack) | "1" | PHP_INI_SYSTEM | Видалено у PHP 7.3.0 |
| [opcache.dups_fix](opcache.configuration.md#ini.opcache.dups-fix) | "0" | PHP_INI_ALL | |
| [opcache.blacklist_filename](opcache.configuration.md#ini.opcache.blacklist-filename) | "" | PHP_INI_SYSTEM | |
| [opcache.max_file_size](opcache.configuration.md#ini.opcache.max-file-size) | "0" | PHP_INI_SYSTEM | |
| [opcache.consistency_checks](opcache.configuration.md#ini.opcache.consistency-checks) | "0" | PHP_INI_ALL | |
| [opcache.force_restart_timeout](opcache.configuration.md#ini.opcache.force-restart-timeout) | "180" | PHP_INI_SYSTEM | |
| [opcache.error_log](opcache.configuration.md#ini.opcache.error-log) | "" | PHP_INI_SYSTEM | |
| [opcache.log_verbosity_level](opcache.configuration.md#ini.opcache.log-verbosity-level) | "1" | PHP_INI_SYSTEM | |
| [opcache.record_warnings](opcache.configuration.md#ini.opcache.record-warnings) | "0" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0. |
| [opcache.preferred_memory_model](opcache.configuration.md#ini.opcache.preferred-memory-model) | "" | PHP_INI_SYSTEM | |
| [opcache.protect_memory](opcache.configuration.md#ini.opcache.protect-memory) | "0" | PHP_INI_SYSTEM | |
| [opcache.mmap_base](opcache.configuration.md#ini.opcache.mmap-base) | **`null`** | PHP_INI_SYSTEM | |
| [opcache.restrict_api](opcache.configuration.md#ini.opcache.restrict-api) | "" | PHP_INI_SYSTEM | |
| [opcache.file_update_protection](opcache.configuration.md#ini.opcache.file_update_protection) | "2" | PHP_INI_ALL | |
| [opcache.huge_code_pages](opcache.configuration.md#ini.opcache.huge_code_pages) | "0" | PHP_INI_SYSTEM | |
| [opcache.lockfile_path](opcache.configuration.md#ini.opcache.lockfile_path) | "/tmp" | PHP_INI_SYSTEM | |
| [opcache.opt_debug_level](opcache.configuration.md#ini.opcache.opt_debug_level) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.1.0 |
| [opcache.file_cache](opcache.configuration.md#ini.opcache.file-cache) | NULL | PHP_INI_SYSTEM | |
| [opcache.file_cache_only](opcache.configuration.md#ini.opcache.file-cache-only) | "0" | PHP_INI_SYSTEM | |
| [opcache.file_cache_consistency_checks](opcache.configuration.md#ini.opcache.file-cache-consistency-checks) | "1" | PHP_INI_SYSTEM | |
| [opcache.file_cache_fallback](opcache.configuration.md#ini.opcache.file-cache-fallback) | "1" | PHP_INI_SYSTEM | |
| [opcache.validate_permission](opcache.configuration.md#ini.opcache.validate-permission) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.0.14 |
| [opcache.validate_root](opcache.configuration.md#ini.opcache.validate-root) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.0.14 |
| [opcache.preload](opcache.configuration.md#ini.opcache.preload) | "" | PHP_INI_SYSTEM | Доступно з PHP 7.4.0 |
| [opcache.preload_user](opcache.configuration.md#ini.opcache.preload-user) | "" | PHP_INI_SYSTEM | Доступно з PHP 7.4.0 |
| [opcache.cache_id](opcache.configuration.md#ini.opcache.cache-id) | "" | PHP_INI_SYSTEM | Тільки Windows. Доступно з PHP 7.4.0 |
| [opcache.jit](opcache.configuration.md#ini.opcache.jit) | "tracing" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_buffer_size](opcache.configuration.md#ini.opcache.jit-buffer-size) | "0" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_debug](opcache.configuration.md#ini.opcache.jit-debug) | "0" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_bisect_limit](opcache.configuration.md#ini.opcache.jit-bisect-limit) | "0" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_prof_threshold](opcache.configuration.md#ini.opcache.jit-prof-threshold) | "0.005" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_root_traces](opcache.configuration.md#ini.opcache.jit-max-root-traces) | "1024" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_max_side_traces](opcache.configuration.md#ini.opcache.jit-max-side-traces) | "128" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_max_exit_counters](opcache.configuration.md#ini.opcache.jit-max-exit-counters) | "8192" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_loop](opcache.configuration.md#ini.opcache.jit-hot-loop) | "64" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_func](opcache.configuration.md#ini.opcache.jit-hot-func) | "127" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_return](opcache.configuration.md#ini.opcache.jit-hot-return) | "8" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_side_exit](opcache.configuration.md#ini.opcache.jit-hot-side-exit) | "8" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_blacklist_root_trace](opcache.configuration.md#ini.opcache.jit-blacklist-root-trace) | "16" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_blacklist_side_trace](opcache.configuration.md#ini.opcache.jit-blacklist-side-trace) | "8" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_loop_unrolls](opcache.configuration.md#ini.opcache.jit-max-loop-unrolls) | "8" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_recursive_calls](opcache.configuration.md#ini.opcache.jit-max-recursive-calls) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_recursive_returns](opcache.configuration.md#ini.opcache.jit-max-recursive-return) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_polymorphic_calls](opcache.configuration.md#ini.opcache.jit-max-polymorphic-calls) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [open_basedir](ini.core.md#ini.open-basedir) | NULL | PHP_INI_ALL | |
| [output_buffering](outcontrol.configuration.md#ini.output-buffering) | "0" | PHP_INI_PERDIR | |
| [output_handler](outcontrol.configuration.md#ini.output-handler) | NULL | PHP_INI_PERDIR | |
| [pcre.backtrack_limit](pcre.configuration.md#ini.pcre.backtrack-limit) | "1000000" | PHP_INI_ALL | |
| [pcre.recursion_limit](pcre.configuration.md#ini.pcre.recursion-limit) | "100000" | PHP_INI_ALL | |
| [pcre.jit](pcre.configuration.md#ini.pcre.jit) | "1" | PHP_INI_ALL | |
| [pdo.dsn.\*](pdo.configuration.md#ini.pdo.dsn) | | тільки `php.ini` | |
| [pdo_odbc.connection_pooling](ref.pdo-odbc.md#ini.pdo-odbc.connection-pooling) | "Strict" | PHP_INI_ALL | |
| [pdo_odbc.db2_instance_name](ref.pdo-odbc.md#ini.pdo-odbc.db2-instance-name) | NULL | PHP_INI_SYSTEM | Ця можливість застаріла і буде обов'язково віддалена в майбутньому. |
| [pgsql.allow_persistent](pgsql.configuration.md#ini.pgsql.allow-persistent) | "1" | PHP_INI_SYSTEM | |
| [pgsql.max_persistent](pgsql.configuration.md#ini.pgsql.max-persistent) | "-1" | PHP_INI_SYSTEM | |
| [pgsql.max_links](pgsql.configuration.md#ini.pgsql.max-links) | "-1" | PHP_INI_SYSTEM | |
| [pgsql.auto_reset_persistent](pgsql.configuration.md#ini.pgsql.auto-reset-persistent) | "0" | PHP_INI_SYSTEM | |
| [pgsql.ignore_notice](pgsql.configuration.md#ini.pgsql.ignore-notice) | "0" | PHP_INI_ALL | |
| [pgsql.log_notice](pgsql.configuration.md#ini.pgsql.log-notice) | "0" | PHP_INI_ALL | |
| [phar.readonly](phar.configuration.md#ini.phar.readonly) | "1" | PHP_INI_ALL | |
| [phar.require_hash](phar.configuration.md#ini.phar.require-hash) | "1" | PHP_INI_ALL | |
| [phar.cache_list](phar.configuration.md#ini.phar.cache-list) | "" | PHP_INI_SYSTEM | |
| [post_max_size](ini.core.md#ini.post-max-size) | "8M" | PHP_INI_PERDIR | |
| [precision](ini.core.md#ini.precision) | "14" | PHP_INI_ALL | |
| [realpath_cache_size](ini.core.md#ini.realpath-cache-size) | "16K" | PHP_INI_SYSTEM | |
| [realpath_cache_ttl](ini.core.md#ini.realpath-cache-ttl) | "120" | PHP_INI_SYSTEM | |
| [register_argc_argv](ini.core.md#ini.register-argc-argv) | "1" | PHP_INI_PERDIR | |
| [report_memleaks](errorfunc.configuration.md#ini.report-memleaks) | "1" | PHP_INI_ALL | |
| report_zend_debug | "1" | PHP_INI_ALL | |
| [request_order](ini.core.md#ini.request-order) | "" | PHP_INI_PERDIR | |
| [runkit.superglobal](runkit7.configuration.md#ini.runkit7.superglobal) | "" | PHP_INI_PERDIR | |
| [runkit.internal_override](runkit7.configuration.md#ini.runkit7.internal-override) | "0" | PHP_INI_SYSTEM | |
| [sendmail_from](mail.configuration.md#ini.sendmail-from) | NULL | PHP_INI_ALL | |
| [sendmail_path](mail.configuration.md#ini.sendmail-path) | "/usr/sbin/sendmail-t-i" | PHP_INI_SYSTEM | |
| [serialize_precision](ini.core.md#ini.serialize-precision) | "-1" | PHP_INI_ALL | До PHP 7.1.0 значення за замовчуванням 17. |
| [session.save_path](session.configuration.md#ini.session.save-path) | "" | PHP_INI_ALL | |
| [session.name](session.configuration.md#ini.session.name) | "PHPSESSID" | PHP_INI_ALL | |
| [session.save_handler](session.configuration.md#ini.session.save-handler) | "files" | PHP_INI_ALL | |
| [session.auto_start](session.configuration.md#ini.session.auto-start) | "0" | PHP_INI_PERDIR | |
| [session.gc_probability](session.configuration.md#ini.session.gc-probability) | "1" | PHP_INI_ALL | |
| [session.gc_divisor](session.configuration.md#ini.session.gc-divisor) | "100" | PHP_INI_ALL | |
| [session.gc_maxlifetime](session.configuration.md#ini.session.gc-maxlifetime) | "1440" | PHP_INI_ALL | |
| [session.serialize_handler](session.configuration.md#ini.session.serialize-handler) | "PHP" | PHP_INI_ALL | |
| [session.cookie_lifetime](session.configuration.md#ini.session.cookie-lifetime) | "0" | PHP_INI_ALL | |
| [session.cookie_path](session.configuration.md#ini.session.cookie-path) | "/" | PHP_INI_ALL | |
| [session.cookie_domain](session.configuration.md#ini.session.cookie-domain) | "" | PHP_INI_ALL | |
| [session.cookie_secure](session.configuration.md#ini.session.cookie-secure) | "0" | PHP_INI_ALL | До PHP 7.2.0 значення за промовчанням було """. |
| [session.cookie_httponly](session.configuration.md#ini.session.cookie-httponly) | "0" | PHP_INI_ALL | До PHP 7.2.0 значення за промовчанням було """. |
| [session.cookie_samesite](session.configuration.md#ini.session.cookie-samesite) | "" | PHP_INI_ALL | Доступна з PHP 7.3.0. |
| [session.use_strict_mode](session.configuration.md#ini.session.use-strict-mode) | "0" | PHP_INI_ALL | |
| [session.use_cookies](session.configuration.md#ini.session.use-cookies) | "1" | PHP_INI_ALL | |
| [session.use_only_cookies](session.configuration.md#ini.session.use-only-cookies) | "1" | PHP_INI_ALL | |
| [session.referer_check](session.configuration.md#ini.session.referer-check) | "" | PHP_INI_ALL | |
| [session.cache_limiter](session.configuration.md#ini.session.cache-limiter) | "nocache" | PHP_INI_ALL | |
| [session.cache_expire](session.configuration.md#ini.session.cache-expire) | "180" | PHP_INI_ALL | |
| [session.use_trans_sid](session.configuration.md#ini.session.use-trans-sid) | "0" | PHP_INI_ALL | |
| [session.trans_sid_tags](session.configuration.md#ini.session.trans-sid-tags) | "au003dhref,areau003dhref,frameu003dsrc,formu003d" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.trans_sid_hosts](session.configuration.md#ini.session.trans-sid-hosts) | `$_SERVER['HTTP_HOST']` | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.sid_length](session.configuration.md#ini.session.sid-length) | "32" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.sid_bits_per_character](session.configuration.md#ini.session.sid-bits-per-character) | "4" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.upload_progress.enabled](session.configuration.md#ini.session.upload-progress.enabled) | "1" | PHP_INI_PERDIR | |
| [session.upload_progress.cleanup](session.configuration.md#ini.session.upload-progress.cleanup) | "1" | PHP_INI_PERDIR | |
| [session.upload_progress.prefix](session.configuration.md#ini.session.upload-progress.prefix) | "upload_progress\_" | PHP_INI_PERDIR | |
| [session.upload_progress.name](session.configuration.md#ini.session.upload-progress.name) | "PHP_SESSION_UPLOAD_PROGRESS" | PHP_INI_PERDIR | |
| [session.upload_progress.freq](session.configuration.md#ini.session.upload-progress.freq) | "1%" | PHP_INI_PERDIR | |
| [session.upload_progress.min_freq](session.configuration.md#ini.session.upload-progress.min-freq) | "1" | PHP_INI_PERDIR | |
| [session.lazy_write](session.configuration.md#ini.session.lazy-write) | "1" | PHP_INI_ALL | |
| [session.hash_function](session.configuration.md#ini.session.hash-function) | "0" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.hash_bits_per_character](session.configuration.md#ini.session.hash-bits-per-character) | "4" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.entropy_file](session.configuration.md#ini.session.entropy-file) | "" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.entropy_length](session.configuration.md#ini.session.entropy-length) | "0" | PHP_INI_ALL | Видалено в PHP 7.1.0 |
| [short_open_tag](ini.core.md#ini.short-open-tag) | "1" | PHP_INI_PERDIR | |
| [SMTP](mail.configuration.md#ini.smtp) | "localhost" | PHP_INI_ALL | |
| [smtp_port](mail.configuration.md#ini.smtp-port) | "25" | PHP_INI_ALL | |
| [soap.wsdl_cache_enabled](soap.configuration.md#ini.soap.wsdl-cache-enabled) | 1 | PHP_INI_ALL | |
| [soap.wsdl_cache_dir](soap.configuration.md#ini.soap.wsdl-cache-dir) | /tmp | PHP_INI_ALL | |
| [soap.wsdl_cache_ttl](soap.configuration.md#ini.soap.wsdl-cache-ttl) | 86400 | PHP_INI_ALL | |
| [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) | 1 | PHP_INI_ALL | |
| [soap.wsdl_cache_limit](soap.configuration.md#ini.soap.wsdl-cache-limit) | 5 | PHP_INI_ALL | |
| [sql.safe_mode](ini.core.md#ini.sql.safe-mode) | "0" | PHP_INI_SYSTEM | |
| [sqlite3.extension_dir](sqlite3.configuration.md#ini.sqlite3.extension-dir) | "" | PHP_INI_SYSTEM | |
| [sqlite3.defensive](sqlite3.configuration.md#ini.sqlite3.defensive) | 1 | PHP_INI_SYSTEM | Доступно з PHP 7.2.17 та 7.3.4 для libsqlite ≥ 3.26.0. |
| [syslog.facility](errorfunc.configuration.md#ini.syslog.facility) | "LOG_USER" | PHP_INI_SYSTEM | Доступно з PHP 7.3.0. |
| [syslog.filter](errorfunc.configuration.md#ini.syslog.filter) | "no-ctrl" | PHP_INI_ALL | Доступно з PHP 7.3.0. |
| [syslog.ident](errorfunc.configuration.md#ini.syslog.ident) | "PHP" | PHP_INI_SYSTEM | Доступно з PHP 7.3.0. |
| sys_temp_dir | "" | PHP_INI_SYSTEM | |
| [sysvshm.init_mem](sem.configuration.md#ini.sysvshm.init-mem) | 10000 | PHP_INI_SYSTEM | |
| [tidy.default_config](tidy.configuration.md#ini.tidy.default-config) | "" | PHP_INI_SYSTEM | |
| [tidy.clean_output](tidy.configuration.md#ini.tidy.clean-output) | "0" | PHP_INI_USER | |
| [track_errors](errorfunc.configuration.md#ini.track-errors) | "0" | PHP_INI_ALL | Оголошено застарілим у PHP 7.2.0, видалено у PHP 8.0.0. |
| [unserialize_callback_func](var.configuration.md#ini.unserialize-callback-func) | NULL | PHP_INI_ALL | |
| uploadprogress.file.filename_template | "/tmp/upt\_%s.txt" | PHP_INI_ALL | |
| [upload_max_filesize](ini.core.md#ini.upload-max-filesize) | "2M" | PHP_INI_PERDIR | |
| [max_file_uploads](ini.core.md#ini.max-file-uploads) | 20 | PHP_INI_SYSTEM | |
| [upload_tmp_dir](ini.core.md#ini.upload-tmp-dir) | NULL | PHP_INI_SYSTEM | |
| [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags) | "au003dhref,areau003dhref,frameu003dsrc,formu003d,fieldsetu003d" | PHP_INI_ALL | |
| [user_agent](filesystem.configuration.md#ini.user-agent) | NULL | PHP_INI_ALL | |
| [user_dir](ini.core.md#ini.user-dir) | NULL | PHP_INI_SYSTEM | |
| [user_ini.cache_ttl](ini.core.md#ini.user-ini.cache-ttl) | "300" | PHP_INI_SYSTEM | |
| [user_ini.filename](ini.core.md#ini.user-ini.filename) | ".user.ini" | PHP_INI_SYSTEM | |
| [uopz.disable](uopz.configuration.md#ini.uopz.disable) | "0" | PHP_INI_SYSTEM | Доступно з uopz 5.0.2 |
| [uopz.exit](uopz.configuration.md#ini.uopz.exit) | "0" | PHP_INI_SYSTEM | Доступно з uopz 6.0.1 |
| [uopz.overloads](uopz.configuration.md#ini.uopz.overloads) | "1" | PHP_INI_SYSTEM | Доступно з uopz 2.0.2. Видалено з uopz 5.0.0. |
| [variables_order](ini.core.md#ini.variables-order) | "EGPCS" | PHP_INI_PERDIR | |
| vld.active | "0" | PHP_INI_SYSTEM | |
| vld.execute | "1" | PHP_INI_SYSTEM | Доступно з vld 0.8.0. |
| vld.skip_append | "0" | PHP_INI_SYSTEM | Доступно з vld 0.8.0. |
| vld.skip_prepend | "0" | PHP_INI_SYSTEM | Доступно з vld 0.8.0. |
| [windows.show_crt_warning](ini.core.md#ini.windows-show-crt-warning) | "0" | PHP_INI_ALL | |
| [xbithack](apache.configuration.md#ini.xbithack) | "0" | PHP_INI_ALL | |
| [xmlrpc_errors](errorfunc.configuration.md#ini.xmlrpc-errors) | "0" | PHP_INI_SYSTEM | |
| [xmlrpc_error_number](errorfunc.configuration.md#ini.xmlrpc-error-number) | "0" | PHP_INI_ALL | |
| yaz.keepalive | "120" | PHP_INI_ALL | |
| yaz.log_mask | NULL | PHP_INI_ALL | Доступно з yaz 1.0.3. |
| [zend.assertions](ini.core.md#ini.zend.assertions) | "1" | PHP_INI_ALL | |
| [zend.detect_unicode](ini.core.md#ini.zend.detect-unicode) | "1" | PHP_INI_ALL | |
| [zend.enable_gc](info.configuration.md#ini.zend.enable-gc) | "1" | PHP_INI_ALL | |
| [zend.multibyte](ini.core.md#ini.zend.multibyte) | "0" | PHP_INI_PERDIR | |
| [zend.script_encoding](ini.core.md#ini.zend.script-encoding) | NULL | PHP_INI_ALL | |
| [zend.signal_check](ini.core.md#ini.zend.signal-check) | "0" | PHP_INI_SYSTEM | |
| [zend_extension](ini.core.md#ini.zend-extension) | NULL | Тільки `php.ini` |
| [zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression) | "0" | PHP_INI_ALL | |
| [zlib.output_compression_level](zlib.configuration.md#ini.zlib.output-compression-level) | "-1" | PHP_INI_ALL | |
| [zlib.output_handler](zlib.configuration.md#ini.zlib.output-handler) | "" | PHP_INI_ALL | |

**Параметри конфігурації**
