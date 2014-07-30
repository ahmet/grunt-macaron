# grunt-macaron

> Grunt task for compiling macros for CoffeeScript.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-macaron --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-macaron');
```

## The "macaron" task

### Overview
In your project's Gruntfile, add a section named `macaron` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  macaron: {
    default: {
      files: {
        'macros_file.coffee': ['source.coffee', 'files.coffee']
      }
    },
    your_target: {
      options: {
        bare: false,
        outputFile: 'dist/output.js'
      },
      files: {
        'source/my_macros.coffee': ['source/some_dir/my_file.coffee']
      }
    }
  }
});
```

### Options

#### options.bare
Type: `Boolean`
Default value: `false`

This option passed to Macaron as it is.

#### options.outputFile
Type: `String`
Default value: `dist/macaron_compiled.js`

Path of output file for target.

### Usage Examples

#### Default Options
In this example, macaron will compile main.coffee and side.coffee files with macros defined in macros.coffee and write to default output file `dist/macaron_compiled.js`.

```js
grunt.initConfig({
  macaron: {
    default: {
      files: {
        'macros.coffee': ['main.coffee', 'side.coffee']
      }
    }
  }
});
```

#### Custom Options
In this example, macaron will compile hello.coffee file with macros defined in macros.coffee and write to output file with path given `dist/out.js`.

```js
grunt.initConfig({
  macaron: {
    custom: {
      options: {
        bare: false,
        outputFile: 'dist/out.js'
      },
      files: {
        'macros.coffee': ['hello.coffee']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2014-07-30   v0.0.1   Initial release.