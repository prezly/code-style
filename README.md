Prezly code style configurations
================================


PHP Code Sniffer
----------------

Configuration file: *prezly.phpcs.xml*

### Usage

1. Link prezly/code-style repo as composer dependency

    `$ composer require prezly/code-style:~1.0`

2. Extend provided configuration to adapt it to your project.  
   Example ([phpcs.xml](https://github.com/prezly/draft-php/blob/master/phpcs.xml) config from prezly/draft-php repo):
   
   ``` xml
    <?xml version="1.0" encoding="UTF-8"?>
    <ruleset name="Draft-PHP project code style checker config">
        <rule ref="./vendor/prezly/code-style/prezly.phpcs.xml">
            <exclude name="PSR2.Classes.PropertyDeclaration.Underscore"/>
        </rule>
        <rule ref="PSR1.Classes.ClassDeclaration">
            <exclude-pattern>*/_stubs.php</exclude-pattern>
        </rule>
        <rule ref="Generic.CodeAnalysis.UnconditionalIfStatement.Found">
            <exclude-pattern>*/_stubs.php</exclude-pattern>
        </rule>
    </ruleset>
    ```
