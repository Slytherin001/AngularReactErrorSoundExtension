const vscode = require("vscode");
const { exec } = require("child_process");
const path = require("path");

function activate(context) {
  console.log("Error Sound Extension Activated");

  const saveListener = vscode.workspace.onDidSaveTextDocument((document) => {
    const diagnostics = vscode.languages.getDiagnostics(document.uri);

    const errorDiagnostics = diagnostics.filter(
      (d) => d.severity === vscode.DiagnosticSeverity.Error,
    );

    if (errorDiagnostics.length > 0) {
      playErrorSound(context);
    }
  });

  context.subscriptions.push(saveListener);
}

function playErrorSound(context) {
  const config = vscode.workspace.getConfiguration("errorSound");
  const selectedSound = config.get("selectedSound");

  const soundPath = path.join(context.extensionPath, "media", selectedSound);

  exec(
    `powershell -c (New-Object Media.SoundPlayer '${soundPath}').PlaySync();`,
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
