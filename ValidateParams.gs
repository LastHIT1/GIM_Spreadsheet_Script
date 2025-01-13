//Check which params are passed to avoid breaking the functions

function validateParams(params, expectedTypes) {
  // No need to check for length mismatches if some parameters are optional
  for (var i = 0; i < params.length; i++) {
    var param = params[i];
    var expectedType = expectedTypes[i];

    // Check if parameter matches the expected type
    if (typeof param !== expectedType) {
      Logger.log("Invalid parameter at position " + (i + 1) + ". Expected " + expectedType + " but got " + typeof param);
      return false;
    }
  }
  return true;
}
