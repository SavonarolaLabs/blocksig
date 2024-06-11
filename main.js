// Load custom blocks
document.write('<script src="blocks.js"></script>');

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

Blockly.JavaScript['public_key'] = function(block) {
  var key = block.getFieldValue('key');
  var code = 'pk' + key;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['public_key_threshold'] = function(block) {
  var key = block.getFieldValue('key');
  var code = 'pk' + key;
  return code + ', ';
};

Blockly.JavaScript['timelock'] = function(block) {
  var blockheight = block.getFieldValue('blockheight');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
  var code = '(blockheight <= ' + blockheight + ' ? ' + statements_do + ' : ' + statements_else + ')';
  return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
};

Blockly.JavaScript['and'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_a + ' && ' + value_b;
  return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript['or'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_a + ' || ' + value_b;
  return [code, Blockly.JavaScript.ORDER_LOGICAL_OR];
};

Blockly.JavaScript['threshold'] = function(block) {
  var min = block.getFieldValue('min');
  var max = block.getFieldValue('max');
  var statements_keys = Blockly.JavaScript.statementToCode(block, 'KEYS');
  var code = 'threshold(' + min + ', ' + max + ', [' + statements_keys + '])';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Function to generate and display code
function generateCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('generatedCode').value = code;
}

// Add event listener to the button to generate code
document.getElementById('generateButton').onclick = generateCode;
