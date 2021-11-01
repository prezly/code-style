<?php

declare(strict_types=1);

use PhpCsFixer\Fixer\ArrayNotation\ArraySyntaxFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoMultilineWhitespaceAroundDoubleArrowFixer;
use PhpCsFixer\Fixer\ArrayNotation\NormalizeIndexBraceFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoTrailingCommaInSinglelineArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoWhitespaceBeforeCommaInArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\TrailingCommaInMultilineArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\WhitespaceAfterCommaInArrayFixer;
use PhpCsFixer\Fixer\Basic\BracesFixer;
use PhpCsFixer\Fixer\CastNotation\LowercaseCastFixer;
use PhpCsFixer\Fixer\CastNotation\ShortScalarCastFixer;
use PhpCsFixer\Fixer\ClassNotation\NoBlankLinesAfterClassOpeningFixer;
use PhpCsFixer\Fixer\ClassNotation\ProtectedToPrivateFixer;
use PhpCsFixer\Fixer\ClassNotation\VisibilityRequiredFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededControlParenthesesFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededCurlyBracesFixer;
use PhpCsFixer\Fixer\FunctionNotation\ReturnTypeDeclarationFixer;
use PhpCsFixer\Fixer\FunctionNotation\VoidReturnFixer;
use PhpCsFixer\Fixer\Import\NoLeadingImportSlashFixer;
use PhpCsFixer\Fixer\Import\NoUnusedImportsFixer;
use PhpCsFixer\Fixer\Import\OrderedImportsFixer;
use PhpCsFixer\Fixer\LanguageConstruct\DeclareEqualNormalizeFixer;
use PhpCsFixer\Fixer\ListNotation\ListSyntaxFixer;
use PhpCsFixer\Fixer\Operator\BinaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\Operator\ConcatSpaceFixer;
use PhpCsFixer\Fixer\Operator\NewWithBracesFixer;
use PhpCsFixer\Fixer\Operator\NotOperatorWithSuccessorSpaceFixer;
use PhpCsFixer\Fixer\Operator\TernaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\Operator\UnaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\PhpTag\BlankLineAfterOpeningTagFixer;
use PhpCsFixer\Fixer\ReturnNotation\ReturnAssignmentFixer;
use PhpCsFixer\Fixer\Semicolon\NoEmptyStatementFixer;
use PhpCsFixer\Fixer\Semicolon\NoSinglelineWhitespaceBeforeSemicolonsFixer;
use PhpCsFixer\Fixer\Whitespace\CompactNullableTypehintFixer;
use PhpCsFixer\Fixer\Whitespace\HeredocIndentationFixer;
use PhpCsFixer\Fixer\Whitespace\NoTrailingWhitespaceFixer;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symplify\CodingStandard\Fixer\Commenting\ParamReturnAndVarTagMalformsFixer;

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/psr12.php
 */
$psr12 = static function (ContainerConfigurator $config): void {
    $services = $config->services();

    $services->set(LowercaseCastFixer::class);
    $services->set(ShortScalarCastFixer::class);
    $services->set(BlankLineAfterOpeningTagFixer::class);
    $services->set(NoLeadingImportSlashFixer::class);
    $services->set(OrderedImportsFixer::class)
        ->call('configure', [
            [
                'importsOrder' => ['class', 'function', 'const'],
            ],
        ]);

    $services->set(DeclareEqualNormalizeFixer::class)->call('configure', [['space' => 'none']]);

    $services->set(NewWithBracesFixer::class);
    $services->set(BracesFixer::class)
        ->call('configure', [
            [
                'allow_single_line_closure'                   => false,
                'position_after_functions_and_oop_constructs' => 'next',
                'position_after_control_structures'           => 'same',
                'position_after_anonymous_constructs'         => 'same',
            ],
        ]);

    $services->set(NoBlankLinesAfterClassOpeningFixer::class);
    $services->set(VisibilityRequiredFixer::class)
        ->call('configure', [
            [
                'elements' => ['const', 'method', 'property'],
            ],
        ]);
    $services->set(BinaryOperatorSpacesFixer::class);
    $services->set(TernaryOperatorSpacesFixer::class);
    $services->set(UnaryOperatorSpacesFixer::class);
    $services->set(ReturnTypeDeclarationFixer::class);
    $services->set(NoTrailingWhitespaceFixer::class);
    $services->set(ConcatSpaceFixer::class)->call('configure', [['spacing' => 'one']]);
    $services->set(NoSinglelineWhitespaceBeforeSemicolonsFixer::class);
    $services->set(NoWhitespaceBeforeCommaInArrayFixer::class);
    $services->set(WhitespaceAfterCommaInArrayFixer::class);
};

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/php71.php
 */
$php71 = static function (ContainerConfigurator $config): void {
    $services = $config->services();

    $services->set(VisibilityRequiredFixer::class)
        ->call('configure', [
            [
                'elements' => ['const', 'property', 'method'],
            ],
        ]);

    $services->set(ListSyntaxFixer::class)->call('configure', [['syntax' => 'short']]);
    $services->set(CompactNullableTypehintFixer::class);
    $services->set(VoidReturnFixer::class);
};

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/clean-code.php
 */
$cleanCode = static function (ContainerConfigurator $config): void {
    $services = $config->services();

    $services->set(ParamReturnAndVarTagMalformsFixer::class);
    $services->set(ArraySyntaxFixer::class)->call('configure', [['syntax' => 'short']]);
    $services->set(NoUnusedImportsFixer::class);
    $services->set(OrderedImportsFixer::class)->call('configure',
        [['imports_order' => ['class', 'function', 'const']]]);
    $services->set(NoEmptyStatementFixer::class);
    $services->set(ProtectedToPrivateFixer::class);
    $services->set(NoUnneededControlParenthesesFixer::class);
    $services->set(NoUnneededCurlyBracesFixer::class);
    $services->set(ReturnAssignmentFixer::class);
};

return static function (ContainerConfigurator $config) use ($psr12, $cleanCode, $php71): void {
    $psr12($config);
    $php71($config);
    $cleanCode($config);

    $services = $config->services();

    $services->set(NotOperatorWithSuccessorSpaceFixer::class);
    $services->set(NoMultilineWhitespaceAroundDoubleArrowFixer::class);
    $services->set(NormalizeIndexBraceFixer::class);
    $services->set(NoTrailingCommaInSinglelineArrayFixer::class);
    $services->set(NoWhitespaceBeforeCommaInArrayFixer::class);
    $services->set(TrailingCommaInMultilineArrayFixer::class);
    $services->set(WhitespaceAfterCommaInArrayFixer::class);

    // Override PSR12 preset
    $services->set(BinaryOperatorSpacesFixer::class)->call('configure', [
        [
            'operators' => [
                '=>' => null, // disable aligning double arrow statementsx
            ],
        ],
    ]);

    $services->set(HeredocIndentationFixer::class)->call('configure', [['indentation' => 'same_as_start']]);
};
