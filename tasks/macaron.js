/*
 * grunt-macaron
 * https://github.com/ahmet/grunt-macaron
 *
 * Copyright (c) 2014 Ahmet AYGÜN
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('macaron', 'Compile macros with Macaron.', function() {
    var Macaron = require('macaron');
    var macros = new Macaron();
    var compiledMacros = '';

    var options = this.options({
      bare: false,
      outputFile: 'dist/macaron_compiled.js'
    });

    this.files.forEach(function(f) {
      var macroFile = grunt.file.read(f.dest);
      var sourceFiles = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(''));

      compiledMacros += macros.compileSource(macroFile, sourceFiles, { bare: options.bare });
    });

    grunt.file.write(options.outputFile, compiledMacros);
    grunt.log.writeln('File "' + options.outputFile + '" created.');
  });
};
