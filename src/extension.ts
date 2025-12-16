import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    // Provider for TinyObj Keywords and Syntax
    const provider = vscode.languages.registerCompletionItemProvider('tinyobj', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            
            // 1. Keyword Suggestions (from your lexer.py)
            const keywords = ['true', 'false', 'nothing'];
            const keywordItems = keywords.map(k => {
                const item = new vscode.CompletionItem(k, vscode.CompletionItemKind.Keyword);
                item.detail = "TinyObj Keyword";
                return item;
            });

            // 2. Syntax Suggestions (Objects and Props)
            const objSnippet = new vscode.CompletionItem('New Object (*)', vscode.CompletionItemKind.Class);
            objSnippet.insertText = new vscode.SnippetString('*${1:Name}');
            objSnippet.documentation = "Create a new Object declaration";

            const propSnippet = new vscode.CompletionItem('New Property (>)', vscode.CompletionItemKind.Property);
            propSnippet.insertText = new vscode.SnippetString('>${1:key} ');
            propSnippet.documentation = "Create a new Property";

            return [
                ...keywordItems,
                objSnippet,
                propSnippet
            ];
        }
    });

    context.subscriptions.push(provider);
}

export function deactivate() {}