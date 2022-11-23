<?php

declare(strict_types=1);

use PhpCsFixer\Fixer\ArrayNotation\ArraySyntaxFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoMultilineWhitespaceAroundDoubleArrowFixer;
use PhpCsFixer\Fixer\ArrayNotation\NormalizeIndexBraceFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoTrailingCommaInSinglelineArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoWhitespaceBeforeCommaInArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\WhitespaceAfterCommaInArrayFixer;
use PhpCsFixer\Fixer\Basic\BracesFixer;
use PhpCsFixer\Fixer\CastNotation\LowercaseCastFixer;
use PhpCsFixer\Fixer\CastNotation\ShortScalarCastFixer;
use PhpCsFixer\Fixer\ClassNotation\NoBlankLinesAfterClassOpeningFixer;
use PhpCsFixer\Fixer\ClassNotation\ProtectedToPrivateFixer;
use PhpCsFixer\Fixer\ClassNotation\VisibilityRequiredFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededControlParenthesesFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededCurlyBracesFixer;
use PhpCsFixer\Fixer\ControlStructure\TrailingCommaInMultilineFixer;
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
use Symplify\CodingStandard\Fixer\Commenting\ParamReturnAndVarTagMalformsFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/psr12.php
 */
$psr12 = static function (ECSConfig $config): void {
    $config->rule(LowercaseCastFixer::class);
    $config->rule(ShortScalarCastFixer::class);
    $config->rule(BlankLineAfterOpeningTagFixer::class);
    $config->rule(NoLeadingImportSlashFixer::class);
    $config->ruleWithConfiguration(OrderedImportsFixer::class, [
        'importsOrder' => ['class', 'function', 'const'],
    ]);

    $config->ruleWithConfiguration(DeclareEqualNormalizeFixer::class, [
        'space' => 'none',
    ]);

    $config->rule(NewWithBracesFixer::class);
    $config->ruleWithConfiguration(BracesFixer::class, [
        'allow_single_line_closure'                   => false,
        'position_after_functions_and_oop_constructs' => 'next',
        'position_after_control_structures'           => 'same',
        'position_after_anonymous_constructs'         => 'same',
    ]);

    $config->rule(NoBlankLinesAfterClassOpeningFixer::class);
    $config->ruleWithConfiguration(VisibilityRequiredFixer::class, [
        'elements' => ['const', 'method', 'property'],
    ]);
    $config->rule(BinaryOperatorSpacesFixer::class);
    $config->rule(TernaryOperatorSpacesFixer::class);
    $config->rule(UnaryOperatorSpacesFixer::class);
    $config->rule(ReturnTypeDeclarationFixer::class);
    $config->rule(NoTrailingWhitespaceFixer::class);
    $config->ruleWithConfiguration(ConcatSpaceFixer::class, [
        'spacing' => 'one',
    ]);
    $config->rule(NoSinglelineWhitespaceBeforeSemicolonsFixer::class);
    $config->rule(NoWhitespaceBeforeCommaInArrayFixer::class);
    $config->rule(WhitespaceAfterCommaInArrayFixer::class);
};

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/php71.php
 */
$php71 = static function (ECSConfig $config): void {
    $services = $config->services();

    $config->ruleWithConfiguration(VisibilityRequiredFixer::class, [
        'elements' => ['const', 'property', 'method'],
    ]);

    $config->ruleWithConfiguration(ListSyntaxFixer::class, [
        'syntax' => 'short',
    ]);
    $config->rule(CompactNullableTypehintFixer::class);
    $config->rule(VoidReturnFixer::class);
};

/*
 * @see https://github.com/symplify/easy-coding-standard/blob/master/config/set/clean-code.php
 */
$cleanCode = static function (ECSConfig $config): void {
    $services = $config->services();

    $config->rule(ParamReturnAndVarTagMalformsFixer::class);
    $config->ruleWithConfiguration(ArraySyntaxFixer::class, [
        'syntax' => 'short',
    ]);
    $config->rule(NoUnusedImportsFixer::class);
    $config->ruleWithConfiguration(OrderedImportsFixer::class, [
        'imports_order' => ['class', 'function', 'const'],
    ]);
    $config->rule(NoEmptyStatementFixer::class);
    $config->rule(ProtectedToPrivateFixer::class);
    $config->rule(NoUnneededControlParenthesesFixer::class);
    $config->rule(NoUnneededCurlyBracesFixer::class);
    $config->rule(ReturnAssignmentFixer::class);
};

return static function (ECSConfig $config) use ($psr12, $cleanCode, $php71): void {
    $psr12($config);
    $php71($config);
    $cleanCode($config);

    $config->rule(NotOperatorWithSuccessorSpaceFixer::class);
    $config->rule(NoMultilineWhitespaceAroundDoubleArrowFixer::class);
    $config->rule(NormalizeIndexBraceFixer::class);
    $config->rule(NoTrailingCommaInSinglelineArrayFixer::class);
    $config->rule(NoWhitespaceBeforeCommaInArrayFixer::class);
    $config->rule(TrailingCommaInMultilineFixer::class);
    $config->rule(WhitespaceAfterCommaInArrayFixer::class);

    // Override PSR12 preset
    $config->ruleWithConfiguration(BinaryOperatorSpacesFixer::class, [
        'operators' => [
            '=>' => null, // disable aligning double arrow statementsx
        ],
    ]);

    $config->ruleWithConfiguration(HeredocIndentationFixer::class, [
        'indentation' => 'start_plus_one',
    ]);
};
