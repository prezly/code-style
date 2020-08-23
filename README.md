Prezly code style configurations
================================

PHP Code Style checker (and fixer) is built with 
[Easy-Coding-Standard](https://github.com/symplify/easy-coding-standard).

### Usage

1. Link prezly/code-style repo as composer dependency

    `$ composer require prezly/code-style:~3.0`

2. Include the provided configuration into your project.

   Simply create an *ecs.php* file in your project root 
   and include the *ecs.php* provided by this package into it.
   
   ```php
   <?php
    
   // Include the stock prezly/code-style config as is.
   return require __DIR__ . '/vendor/prezly/code-style/ecs.php';
   ```

3. If you need to extend or override the stock configuration, 
   you can of course do it by adding code on top of it:
   
   ```php
   <?php
   
   declare(strict_types=1);
   
   use PhpCsFixer\Fixer\Operator\BinaryOperatorSpacesFixer;
   use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
   
   return static function (ContainerConfigurator $config): void {
       // Include the stock prezly/code-style config.
       (require __DIR__ . '/vendor/prezly/code-style/ecs.php')($config);
   
       $services = $config->services();
   
       // Override stock preset configuration.
       $services->set(BinaryOperatorSpacesFixer::class)->call('configure', [
           [
               'operators' => [
                   '=>' => 'align',
               ],
           ],
       ]);
   };
   ```
