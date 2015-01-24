module.exports = (grunt) ->
  grunt.initConfig
    plg: grunt.file.readJSON("package.json")
    sass:
      build:
        src: "src/sass/*.sass"
        dest: "build/style/style.css"

    slim:
      option:
        pretty: true
      index_build:
        src: "src/slim/index.slim"
        dest: "index.html"
      prog_build:
        src: "src/slim/prog.slim"
        dest: "link/prog.html"
      game_build:
        src: "src/slim/game.slim"
        dest: "link/game.html"
      memo_build:
        src: "src/slim/memo.slim"
        dest: "link/memo.html"
      dpm_build:
        src: "src/slim/tool/dpm.slim"
        dest: "tool/dpm.html"
      camo_build:
        src: "src/slim/tool/camo.slim"
        dest: "tool/camo.html"
      panetrate_build:
        src: "src/slim/tool/penetrate.slim"
        dest: "tool/penetrate.html"

    coffee:
      app_build:
        src: "src/coffee/app.coffee"
        dest: "build/script/app.js"
      dpm_build:
        src: "src/coffee/tool/dpm.coffee"
        dest: "build/script/tool/app.js"

    csslint:
      check:
        src: "<%= sass.build.dest>"

    csscss:
      check:
        src: "<%= sass.build.dest>"

    watch:
      files: "src/**/*"
      tasks: [
        "sass"
        "slim"
        "coffee"
        "csslint"
        "csscss"
      ]

    connect:
      server:
        options:
          port: 8080

  # plugin
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-slim"
  grunt.loadNpmTasks "grunt-contrib-csslint"
  grunt.loadNpmTasks "grunt-csscss"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-connect"

  #tasks
  grunt.registerTask "default", [
    "sass"
    "slim"
    "coffee"
    "csslint"
    "csscss"
    "connect"
    "watch"
  ]
  return
