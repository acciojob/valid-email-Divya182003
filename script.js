function validEmail(str) {
  if (!str) {
    return false;
  }
  // Simplified regex for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(str);
}

