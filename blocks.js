Blockly.Blocks['public_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pk")
        .appendField(new Blockly.FieldTextInput("1"), "key");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Public key");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['public_key_threshold'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pk")
        .appendField(new Blockly.FieldTextInput("1"), "key");
    this.setPreviousStatement(true, "Key");
    this.setNextStatement(true, "Key");
    this.setColour(230);
    this.setTooltip("Public key for threshold");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("&&");
    this.appendValueInput("B")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip("AND operation");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("||");
    this.appendValueInput("B")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("OR operation");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['timelock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blockheight <=")
        .appendField(new Blockly.FieldNumber(0), "blockheight");
    this.appendValueInput("DO")
        .setCheck("Boolean")
        .appendField("do");
    this.appendValueInput("ELSE")
        .setCheck("Boolean")
        .appendField("else");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("Timelock conditional");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['threshold'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("min")
        .appendField(new Blockly.FieldNumber(1), "min")
        .appendField("max")
        .appendField(new Blockly.FieldNumber(1), "max");
    this.appendStatementInput("KEYS")
        .setCheck("Key")
        .appendField("keys");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip("Threshold signature scheme");
    this.setHelpUrl("");
  }
};
