var onStartup = function (context) {
  var ST_FrameworkPath = ST_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();
  var ST_Log = console.log || ST_Log || log;
  (function () {
    var mocha = Mocha.sharedRuntime();
    var frameworkName = "SpellyTools";
    var directory = ST_FrameworkPath;
    if (mocha.valueForKey(frameworkName)) {
      return true;
    } else if (mocha.loadFrameworkWithName_inDirectory_(frameworkName, directory)) {
      mocha.setValue_forKey_(true, frameworkName);
      return true;
    } else {
      return false;
    }
  })();
};
