- [« Приклади](luasandbox.examples.md)
- [LuaSandbox »](class.luasandbox.md)

- [PHP Manual](index.md)
- [Приклади](luasandbox.examples.md)
- Базове використання LuaSandbox

## Базове використання LuaSandbox

Після того, як ви скомпілювали PHP із підтримкою LuaSandbox, ви можете
почати використовувати LuaSandbox для безпечного виконання
наданого користувачем коду Lua.

**Приклад #1 Виконайте код Lua**

` <?php$sandbox u003d new LuaSandbox;$sandbox->setMemoryLimit( 50 * 1024 * 1024 );$sandbox->setCPULimit( 10 );// Зарегистрируйте некоторые функции в среде Luafunction frobnosticate( $v ) {    return [ $v + 42 ];}$sandbox->registerLibrary( 'php', [    'frobnosticate' u003d> 'frobnosticate',   'output' u003d> function ( $string ) |
";    },    'error' u003d> function () {        throw new LuaSandboxRuntimeError( "Что-то пошло не так" );    }] );// Выполните некоторый код Lua, включая callback-функции PHP и Lua.$luaCode u003d < <<EOFphp.output( "Привіт, світ" );return "Привіт", function ( v )   return php.frobnosticate( v + 200 )endEOF;list( $hi, $ )->call();assert( $frob->call( 4000 ) u003du003du003d [ 4242 ] );// Викликаються PHP виключення LuaSandboxRuntimeError можуть бути впіймані s$      'return pcall( php.error )' )->call();assert( !$ok );assert( $message u003du003du003d 'Щось пішло не так' );?> `
