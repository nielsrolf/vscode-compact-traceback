import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.hideLines', () => {
        const terminal = vscode.window.activeTerminal;
        if (!terminal) {
            return;
        }
        terminal.show();
        terminal.sendText(`clear;tail -f ${terminal.name} | grep --line-buffered -v '^((?!\\w*\\.py)[\\s\\S])*'`);
    }));
}