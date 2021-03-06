'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and commanderence it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let touchbar = [
        {
            'command': 'extension.TouchBar.Term',
            'action': 'workbench.action.terminal.toggleTerminal'
        },
        {
            'command': 'extension.TouchBar.Comment',
            'action': 'editor.action.commentLine'
        },
        {
            'command': 'extension.TouchBar.Qopen',
            'action': 'workbench.action.quickOpen'
        },
        {
            'command': 'extension.TouchBar.Commands',
            'action': 'workbench.action.showCommands'
        },
        {
            'command': 'extension.TouchBar.ShowPreview',
            'action': 'markdown.showPreview'
        },
        {   
            'command': 'extension.TouchBar.ToggleSidebar',
            'action': 'workbench.action.toggleSidebarVisibility'
        }
    ]

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Commands: ' + touchbar.length);
    //commands.forEach((cmd) => console.log(cmd.name));

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    touchbar.forEach(
        (cmd) => {
            // console.log("skipun: " + cmd.command);
            let command = vscode.commands.registerCommand(cmd.command, 
                () => {
                vscode.commands.executeCommand(cmd.action)
            });
            context.subscriptions.push(command);
        });

    // let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    //     // The code you place here will be executed every time your command is executed

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Hello World!');
    // });

    // context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}